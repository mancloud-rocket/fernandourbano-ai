from pathlib import Path
import shutil, zipfile
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
import fitz

ROOT = Path(__file__).resolve().parent
A = ROOT / 'assets'
OUT = ROOT / 'output'
PDF = OUT / 'pdf'
PNG = OUT / 'png'
for p in (PDF, PNG): p.mkdir(parents=True, exist_ok=True)
pdfmetrics.registerFont(TTFont('Display', str(A / 'Fraunces.ttf')))
pdfmetrics.registerFont(TTFont('Sans', str(ROOT.parent / 'node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf')))
INK='#0A0A0B'; GOLD='#C7A66D'; CREAM='#F4EDE2'; MUTED='#BBB5A9'; LINE='#38342D'
SITE='https://fernandourbano-ai.vercel.app'
SHORT='Fernando Urbano es Director de Innovación en Rocketbot, donde lidera la evolución de agentes de IA aplicados al negocio. Ha asesorado a más de 200 clientes en siete países y fue seleccionado entre los 40 Under 40 Innovators Global en 2024. Sus charlas conectan la estrategia empresarial con la experiencia de construir y llevar soluciones de IA a producción.'
MEDIUM='Fernando Urbano es Director de Innovación en Rocketbot, donde lidera la evolución del producto agéntico, la inteligencia artificial aplicada y la eficiencia empresarial. Su trayectoria combina dirección de ingeniería, automatización de procesos y desarrollo de soluciones para organizaciones de América Latina e Iberia. Antes de Rocketbot fue Head of Engineering en Practia, parte de Publicis Sapient, para Chile y Argentina. Ha asesorado a más de 200 clientes en siete países y lideró más de 80 automatizaciones en 12 países. Fue seleccionado entre los 40 Under 40 Innovators Global en 2024. Como speaker aborda las decisiones que permiten convertir una iniciativa de IA en una solución operativa: qué problema resolver, cómo construirla y cómo evaluar sus costos, riesgos y resultados.'
INTRO='Nos acompaña Fernando Urbano, Director de Innovación en Rocketbot. Su trabajo combina estrategia de negocio con la construcción de agentes de inteligencia artificial y soluciones de automatización. Ha asesorado a más de 200 clientes en siete países y fue seleccionado entre los 40 Under 40 Innovators Global en 2024. Hoy nos comparte esa experiencia para entender cómo aplicar la IA en las organizaciones.'

def text(c,s,x,y,size=11,font='Sans',color=CREAM):
    c.setFillColor(HexColor(color));c.setFont(font,size);c.drawString(x,y,s)

def para(c,s,x,top,w,size=11,leading=None,color=MUTED,font='Sans'):
    st=ParagraphStyle('p',fontName=font,fontSize=size,leading=leading or size*1.48,textColor=HexColor(color))
    p=Paragraph(escape(s),st);_,h=p.wrap(w,1000);p.drawOn(c,x,top-h);return top-h

def line(c,x,y,w):
    c.setStrokeColor(HexColor(LINE));c.setLineWidth(.6);c.line(x,y,x+w,y)

def image(c,path,x,y,w,h,anchor='c'):
    img=ImageReader(str(path));iw,ih=img.getSize();scale=max(w/iw,h/ih)
    c.saveState();p=c.beginPath();p.rect(x,y,w,h);c.clipPath(p,stroke=0)
    c.drawImage(img,x+(w-iw*scale)/2,y+(h-ih*scale)/2,iw*scale,ih*scale,mask='auto');c.restoreState()

def base(c,n,title):
    c.setFillColor(HexColor(INK));c.rect(0,0,595.28,841.89,fill=1,stroke=0)
    text(c,'Fernando Urbano',42,805,11,color=GOLD)
    text(c,title,392,805,9,color=MUTED)
    line(c,42,786,511)
    line(c,42,48,511)
    text(c,'fernandourbano-ai.vercel.app',42,30,8,color=MUTED)
    c.linkURL(SITE,(42,25,225,41),relative=0)
    text(c,f'Speaker kit  /  {n:02}',457,30,8,color=MUTED)

def newpdf(path,size):
    c=canvas.Canvas(str(path),pagesize=size,pageCompression=1)
    c.setTitle('Fernando Urbano | Speaker kit');c.setAuthor('Fernando Urbano');return c

c=newpdf(PDF/'Fernando-Urbano-Speaker-Kit.pdf',(595.28,841.89))
base(c,1,'Conferencias y medios')
image(c,A/'fernando-urbano-retrato-ia.png',227,244,368,526)
# Clear text field overlaps the image only in its black shoulder area.
text(c,'Fernando',40,688,57,'Display')
text(c,'Urbano',40,627,68,'Display',GOLD)
text(c,'Director de Innovación',43,577,12)
text(c,'Rocketbot',43,556,12,color=GOLD)
para(c,'Inteligencia artificial aplicada al negocio',43,490,177,21,26,CREAM,'Display')
para(c,'Estrategia, agentes de IA y automatización desde la experiencia de construirlos.',43,379,164,10,15)
text(c,'Speaker kit',43,268,12,color=GOLD)
text(c,'Perfil',43,220,21,'Display')
para(c,SHORT,43,188,508,10.5,15)
line(c,43,108,508)
text(c,'200+',43,77,23,'Display',GOLD);text(c,'clientes asesorados',112,80,9)
text(c,'7',282,77,23,'Display',GOLD);text(c,'países con ponencias',306,80,9)
c.showPage()

base(c,2,'Trayectoria y temas')
text(c,'La experiencia que lleva',42,741,32,'Display')
text(c,'al escenario',42,701,37,'Display',GOLD)
image(c,A/'fernando-urbano-escenario-original.jpeg',42,416,246,253)
text(c,'En escena',311,650,19,'Display')
para(c,'Su enfoque conecta las decisiones de negocio con lo que exige construir y operar soluciones de IA.',311,618,239,11,16)
line(c,311,542,239)
text(c,'40 Under 40',311,514,25,'Display',GOLD)
para(c,'Innovators Global · Selección 2024',311,494,235,10,15)
para(c,'Ha sido speaker en conferencias, paneles, encuentros ejecutivos y capacitaciones de LATAM e Iberia.',311,453,237,10,15)
text(c,'Fotografía original en conferencia · Rocketbot, 2025',42,401,7.5,color=MUTED)
topics=[('IA aplicada al negocio','Cómo elegir problemas, priorizar iniciativas y evaluar resultados.'),('Agentes de IA en producción','Las decisiones de arquitectura, operación y riesgo que permiten pasar del piloto al uso real.'),('Automatización y eficiencia','Cómo conectar procesos, personas y agentes para mejorar la operación.'),('Estrategia y adopción de IA','Qué cambia en los equipos y cómo orientar una transformación tecnológica.')]
y=361
for i,(title,body) in enumerate(topics,1):
    text(c,f'0{i}',42,y,10,color=GOLD);text(c,title,75,y,17,'Display')
    bottom=para(c,body,75,y-12,464,10,14)
    line(c,75,bottom-12,477);y=bottom-39
c.showPage()

base(c,3,'Para organizadores')
text(c,'Listo para presentar',42,739,36,'Display')
text(c,'a Fernando',42,696,38,'Display',GOLD)
text(c,'Bio para el programa',42,646,18,'Display')
para(c,SHORT,42,621,511,11,16)
line(c,42,501,511)
text(c,'Presentación del moderador',42,470,18,'Display')
para(c,INTRO,42,444,511,11,16)
line(c,42,326,511)
text(c,'Formatos',42,294,18,'Display')
para(c,'Keynotes de 30 a 45 minutos, paneles, webinars, workshops y encuentros ejecutivos. El enfoque se adapta a la audiencia y al objetivo del evento.',42,269,511,10.5,15)
text(c,'Contacto directo',42,194,18,'Display')
text(c,'fernando.urbano@rocketbot.com',42,166,13,color=GOLD)
c.linkURL('mailto:fernando.urbano@rocketbot.com',(42,162,365,180),relative=0)
text(c,'LinkedIn: /in/f-urcastro',42,143,10)
c.linkURL('https://www.linkedin.com/in/f-urcastro/',(42,139,265,155),relative=0)
para(c,'El paquete incluye retrato editorial creado con IA a partir de una foto real, foto original en escenario y piezas de difusión. Bio y credenciales basadas en el sitio personal de Fernando Urbano.',42,106,511,8,11)
c.save()

def card(name,w,h,square=False):
    c=newpdf(PDF/(name+'.pdf'),(w,h));c.setFillColor(HexColor(INK));c.rect(0,0,w,h,fill=1,stroke=0)
    if square:
        image(c,A/'fernando-urbano-retrato-ia.png',w*.35,h*.23,w*.65,h*.77)
        text(c,'Fernando',w*.065,h*.80,w*.087,'Display')
        text(c,'Urbano',w*.065,h*.69,w*.108,'Display',GOLD)
        text(c,'Director de Innovación · Rocketbot',w*.07,h*.595,w*.022)
        para(c,'Inteligencia artificial aplicada al negocio',w*.07,h*.25,w*.84,w*.048,w*.055,CREAM,'Display')
        text(c,'fernandourbano-ai.vercel.app',w*.07,h*.065,w*.019,color=GOLD)
    else:
        image(c,A/'fernando-urbano-retrato-ia.png',w*.57,0,w*.43,h)
        text(c,'Fernando',w*.055,h*.72,w*.062,'Display')
        text(c,'Urbano',w*.055,h*.56,w*.079,'Display',GOLD)
        text(c,'Director de Innovación · Rocketbot',w*.06,h*.45,w*.014)
        para(c,'Inteligencia artificial aplicada al negocio',w*.06,h*.32,w*.43,w*.023,w*.029,CREAM,'Display')
        text(c,'fernandourbano-ai.vercel.app',w*.06,h*.08,w*.012,color=GOLD)
    c.save()

card('Fernando-Urbano-Speaker-1080x1080',1080,1080,True)
card('Fernando-Urbano-Speaker-1920x1080',1920,1080)
for p in PDF.glob('*.pdf'):
    d=fitz.open(p)
    for i,page in enumerate(d):
        scale=1 if '1080' in p.name else 1.5
        suffix=f'-{i+1:02}' if len(d)>1 else ''
        page.get_pixmap(matrix=fitz.Matrix(scale,scale),alpha=False).save(PNG/(p.stem+suffix+'.png'))
bio='FERNANDO URBANO | SPEAKER\nDirector de Innovación · Rocketbot\n\nBIO CORTA\n'+SHORT+'\n\nBIO AMPLIADA\n'+MEDIUM+'\n\nPRESENTACIÓN DEL MODERADOR\n'+INTRO+'\n\nWEB\n'+SITE+'\n\nCONTACTO\nfernando.urbano@rocketbot.com\nhttps://www.linkedin.com/in/f-urcastro/\n'
(OUT/'Bio-y-presentacion-Fernando-Urbano.txt').write_text(bio,encoding='utf-8-sig')
(OUT/'LEEME.txt').write_text('Speaker kit de Fernando Urbano · 16 de noviembre de 2026\n\nEl dossier PDF contiene perfil, trayectoria, temas, formatos y contacto. Las piezas 1080x1080 y 1920x1080 son presentaciones generales del speaker, sin datos de un evento específico.\n\nEl retrato editorial fue creado con IA a partir de una fotografía real. No es una sesión fotográfica de estudio. Se incluye una foto original en escenario como alternativa documental. No usar la referencia institucional como retrato público.\n\nBio y trayectoria tomadas del sitio personal y su press kit. El reconocimiento 40 Under 40 se reproduce como figura en esas fuentes; no implica una verificación independiente de la entidad otorgante. No se añadieron fechas, títulos ni logos de eventos aún no informados.\n\nPaleta: negro #0A0A0B, marfil #F4EDE2, dorado #C7A66D. El sitio original utiliza acento teal; el dorado responde al pedido de esta versión speaker.\n',encoding='utf-8-sig')
with zipfile.ZipFile(OUT/'Fernando-Urbano-Speaker-Kit.zip','w',zipfile.ZIP_DEFLATED) as z:
    z.write(PDF/'Fernando-Urbano-Speaker-Kit.pdf','Fernando-Urbano-Speaker-Kit.pdf')
    for p in PNG.glob('*1080*.png'):z.write(p,'difusion/'+p.name)
    for p in (A/'fernando-urbano-retrato-ia.png', A/'fernando-urbano-escenario-original.jpeg'):z.write(p,'fotos/'+p.name)
    for name in ('Bio-y-presentacion-Fernando-Urbano.txt','LEEME.txt'):z.write(OUT/name,name)
print('Created 3-page dossier, 2 promotional cards, bios and ZIP.')
