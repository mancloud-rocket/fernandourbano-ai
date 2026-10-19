// Narrow operations for the existing personal-site service and new book schema.
// Credentials are read in memory from the local ignored registry, never logged.
import {readFile} from 'node:fs/promises';
import {createHash,randomBytes} from 'node:crypto';
import {spawn,execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const registry=await readFile('C:/Users/f_urb/Desktop/repos/rb-claude/CLAVES-LOCALES.md','utf8');
const section=registry.match(/^## Administración cloud autorizada[^\n]*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m)?.[1]||'';
const credential=name=>{const value=section.match(new RegExp('^\\s*[-*]?\\s*`?'+name+'`?\\s*[:=]\\s*`?([^`\\r\\n]+)','m'))?.[1]?.trim();if(!value)throw Error('Missing credential field: '+name);return value;};
const supabaseToken=credential('SUPABASE_ACCESS_TOKEN');
const renderToken=credential('RENDER_API_KEY');
const project='ixydxliuncnbikesfldx';
const service='srv-d88h9n6q1p3s73et9su0';
async function api(url,token,method='GET',body){const response=await fetch(url,{method,headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:body===undefined?undefined:JSON.stringify(body)});if(!response.ok){const detail=new URL(url).pathname.endsWith('/database/query')?String((await response.json()).message||'').replaceAll(token,'[redacted]').slice(0,350):'';throw Error('Cloud request failed: '+response.status+' '+new URL(url).pathname+' '+detail);}if(response.status===204)return null;return response.json();}
const query=sql=>api(`https://api.supabase.com/v1/projects/${project}/database/query`,supabaseToken,'POST',{query:sql});
async function environment(){const rows=await api(`https://api.render.com/v1/services/${service}/env-vars?limit=100`,renderToken);return Object.fromEntries(rows.map(row=>[row.envVar.key,row.envVar.value]));}
const command=process.argv[2];
if(command==='configure'){
  const target=await api(`https://api.render.com/v1/services/${service}`,renderToken);
  if(target.repo!=='https://github.com/mancloud-rocket/fernandourbano-ai'||target.name!=='fernando-urbano')throw Error('Unexpected deployment target');
  const exists=await query("select to_regnamespace('fu_book')::text as schema, to_regprocedure('public.fu_book_register(text,text,text,text,text)')::text as function");
  if(exists[0].schema || exists[0].function)throw Error('Book namespace already exists; inspect before applying again');
  const existing=await environment();
  if(Object.keys(existing).some(key=>key.startsWith('BOOK_')))throw Error('Book environment already exists; preserve and inspect');
  const secret=randomBytes(32).toString('hex');
  const hash=createHash('sha256').update(secret).digest('hex');
  const keys=await api(`https://api.supabase.com/v1/projects/${project}/api-keys`,supabaseToken);
  const anon=keys.find(key=>key.name==='anon')?.api_key;
  if(!anon)throw Error('No restricted public API key available');
  await query(await readFile(path.join(root,'database/book-launch.sql'),'utf8'));
  await query(`insert into fu_book.settings(key,value) values('registration_secret_sha256','${hash}')`);
  for(const [key,value] of Object.entries({BOOK_DATABASE_URL:`https://${project}.supabase.co`,BOOK_DATABASE_PUBLIC_KEY:anon,BOOK_REGISTRATION_SECRET:secret}))await api(`https://api.render.com/v1/services/${service}/env-vars/${key}`,renderToken,'PUT',{value});
  console.log(JSON.stringify({configured:true,service,project,schema:'fu_book',keysStoredServerSide:3}));
}else if(command==='dev'){
  const env=await environment();
  const child=spawn(process.execPath,[path.join(root,'node_modules/next/dist/bin/next'),'dev','--port','3007'],{cwd:root,stdio:'inherit',env:{...process.env,...Object.fromEntries(Object.entries(env).filter(([key])=>key.startsWith('BOOK_')))}});
  child.on('exit',code=>process.exit(code??1));
}else if(command==='verify'){
  const rows=await query("select table_name, bool_and(not has_table_privilege('anon',quote_ident(table_schema)||'.'||quote_ident(table_name),'SELECT')) as anonymous_read_denied from information_schema.tables where table_schema='fu_book' group by table_name order by table_name");
  const count=await query("select count(*)::int as registrations from fu_book.subscribers");
  console.log(JSON.stringify({tables:rows,...count[0]}));
}else if(command==='deployment'){
  const rows=await api(`https://api.render.com/v1/services/${service}/deploys?limit=1`,renderToken);
  console.log(JSON.stringify(rows.map(({deploy:d})=>({id:d.id,status:d.status,commit:d.commit?.id}))));
}else if(command==='verify-test'){
  const rows=await query("select id,source,status,consent_version from fu_book.subscribers where email in ('qa.book.20261019.local@example.com','qa.book.20261019.prod@example.com') and source='qa-book-20261019'");
  const env=await environment();
  const denial=await fetch(env.BOOK_DATABASE_URL+'/rest/v1/rpc/fu_book_register',{method:'POST',headers:{apikey:env.BOOK_DATABASE_PUBLIC_KEY,Authorization:'Bearer '+env.BOOK_DATABASE_PUBLIC_KEY,'Content-Type':'application/json'},body:JSON.stringify({p_email:'blocked@example.com',p_source:'qa',p_locale:'es',p_connection_hash:'0'.repeat(64),p_secret:'invalid-test-value'})});
  if(![401,403].includes(denial.status))throw Error('Private-secret rejection check failed, HTTP '+denial.status);
  console.log(JSON.stringify({ownTestRows:rows,missingPrivateSecretDenied:denial.status}));
}else if(command==='clean-tests'){
  const before=await query("select id from fu_book.subscribers where email in ('qa.book.20261019.local@example.com','qa.book.20261019.prod@example.com') and source='qa-book-20261019'");
  if(before.length>2)throw Error('Unexpected test row count');
  const removed=await query("delete from fu_book.subscribers where email in ('qa.book.20261019.local@example.com','qa.book.20261019.prod@example.com') and source='qa-book-20261019' returning id");
  console.log(JSON.stringify({removedOwnTestRows:removed.length}));
}else if(command==='scan-runtime-secrets'){
  const env=await environment();
  const secrets=[env.BOOK_DATABASE_PUBLIC_KEY,env.BOOK_REGISTRATION_SECRET].filter(Boolean).map(value=>Buffer.from(value));
  const blobs=execFileSync('git',['cat-file','--batch-all-objects','--batch'],{cwd:root,maxBuffer:250*1024*1024});
  const hits=secrets.filter(secret=>blobs.includes(secret)).length;
  if(hits)throw Error('Runtime credentials found in Git objects; do not push');
  console.log(JSON.stringify({runtimeSecretsChecked:secrets.length,matches:0}));
}else throw Error('Unknown book-cloud operation');
