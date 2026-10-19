import { createHmac } from "node:crypto";
import { BOOK_CONSENT_VERSION, BOOK_READER_URL, BOOK_REGISTRATION_ORIGIN } from "@/content/book";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const productionOrigins = new Set(["https://fernandourbano-ai.vercel.app",BOOK_REGISTRATION_ORIGIN]);
function cors(request:Request):Headers {
  const headers=new Headers({"Cache-Control":"no-store","Vary":"Origin"});
  const origin=request.headers.get("origin");
  if(origin && (productionOrigins.has(origin) || (process.env.NODE_ENV==="development" && /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin)))) {
    headers.set("Access-Control-Allow-Origin",origin);
    headers.set("Access-Control-Allow-Methods","POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers","Content-Type");
    headers.set("Access-Control-Max-Age","3600");
  }
  return headers;
}
export async function OPTIONS(request:Request){const headers=cors(request);return new Response(null,{status:headers.has("Access-Control-Allow-Origin")?204:403,headers});}

export async function POST(request:Request){
  const headers=cors(request);
  const json=(message:string,status:number,ok=false)=>Response.json({ok,message},{status,headers});
  if(!headers.has("Access-Control-Allow-Origin"))return json("Este registro debe enviarse desde la página del libro.",403);
  const type=request.headers.get("content-type")||"";
  const isForm=type.includes("application/x-www-form-urlencoded");
  if(!isForm && !type.includes("application/json"))return json("Formato de registro no admitido.",415);
  let body:Record<string,unknown>;
  try {
    const reader=request.body?.getReader();
    if(!reader)return json("Completa tu correo para registrarte.",400);
    let size=0;const chunks:Uint8Array[]=[];
    while(true){const part=await reader.read();if(part.done)break;size+=part.value.byteLength;if(size>4096){await reader.cancel();return json("El registro es demasiado largo.",413);}chunks.push(part.value);}
    const bytes=Buffer.concat(chunks);const text=bytes.toString("utf8");
    const parsed=isForm?Object.fromEntries(new URLSearchParams(text)):JSON.parse(text);
    if(!parsed || typeof parsed!=="object" || Array.isArray(parsed))return json("Revisa los datos del registro.",400);
    body=parsed;
  }catch{return json("No pudimos leer los datos. Inténtalo de nuevo.",400);}
  const email=typeof body.email==="string"?body.email.trim().toLowerCase():"";
  if(!email || email.length>254 || /[\u0000-\u0020\u007f]/.test(email) || !/^[^@<>]+@[^@<>]+\.[^@<>]+$/.test(email))return json("Escribe un correo electrónico válido.",422);
  if(!(body.consent===true || body.consent==="on"))return json("Necesitamos tu consentimiento para guardar el correo y enviarte noticias del libro.",422);
  if(body.consentVersion && body.consentVersion!==BOOK_CONSENT_VERSION)return json("La página cambió. Recárgala antes de registrarte.",409);
  if(body.website)return json("No pudimos validar el registro.",422);

  const dbUrl=process.env.BOOK_DATABASE_URL;
  const publicKey=process.env.BOOK_DATABASE_PUBLIC_KEY;
  const secret=process.env.BOOK_REGISTRATION_SECRET;
  if(!dbUrl || !publicKey || !secret){
    // Vercel is also connected to the same Git repo. Its no-JS form can use the
    // configured Render deployment without distributing any database credential.
    if(new URL(request.url).origin!==BOOK_REGISTRATION_ORIGIN && process.env.NODE_ENV==="production"){
      try {const upstream=await fetch(BOOK_REGISTRATION_ORIGIN+"/api/book/subscribe",{method:"POST",headers:{"Content-Type":"application/json","Origin":request.headers.get("origin")!},body:JSON.stringify(body),signal:AbortSignal.timeout(25000)});const result=await upstream.json();if(upstream.ok && isForm)return successHtml(headers);return Response.json(result,{status:upstream.status,headers});}catch{return json("El registro no está disponible por el momento. Puedes leer el avance y volver a intentarlo más tarde.",503);}
    }
    return json("El registro no está disponible por el momento. Inténtalo de nuevo más tarde.",503);
  }
  const ip=request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unavailable";
  const connectionHash=createHmac("sha256",secret).update("book-rate:"+new Date().toISOString().slice(0,10)+":"+ip).digest("hex");
  const source=typeof body.source==="string" && /^[a-zA-Z0-9_.-]{1,64}$/.test(body.source)?body.source:"web";
  try{
    const response=await fetch(dbUrl+"/rest/v1/rpc/fu_book_register",{method:"POST",headers:{"Content-Type":"application/json","apikey":publicKey,"Authorization":"Bearer "+publicKey},body:JSON.stringify({p_email:email,p_source:source,p_locale:body.locale==="en"?"en":"es",p_connection_hash:connectionHash,p_secret:secret}),signal:AbortSignal.timeout(15000),cache:"no-store"});
    if(!response.ok)return json("No pudimos guardar tu registro. Inténtalo de nuevo más tarde.",503);
    const result=await response.json();
    if(result.limited)return json("Se recibieron varios intentos desde tu conexión. Vuelve a intentarlo en unos minutos.",429);
    if(result.accepted!==true)return json("No pudimos confirmar el registro. Inténtalo de nuevo.",503);
    if(isForm)return successHtml(headers);
    return json("Tu registro quedó guardado.",200,true);
  }catch{return json("No pudimos conectar para guardar tu registro. Vuelve a intentarlo.",503);}
}

function successHtml(headers:Headers){
  headers.set("Content-Type","text/html; charset=utf-8");
  return new Response(`<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ya estás en la lista · El que guía</title><style>body{margin:0;background:#e4e1dc;color:#222321;font:18px/1.7 Georgia,serif}main{max-width:600px;margin:10vh auto;padding:32px}h1{font-size:46px;line-height:1.1}a{color:#9d2822}a:first-of-type{display:inline-block;padding:14px 24px;background:#b72b24;color:white;text-decoration:none;margin:16px 0}</style><main><h1>Ya estás en la lista</h1><p>Tu registro quedó guardado. Mientras el libro sigue tomando forma, puedes empezar a leer el primer capítulo.</p><a href="${BOOK_READER_URL}">Leer el primer capítulo ↗</a><p><a href="/el-que-guia">Volver al libro</a></p><small>Registro gratuito. No se realizó ningún cobro.</small></main></html>`,{status:200,headers});
}
