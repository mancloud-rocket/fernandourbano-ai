import type { ArticleBlock } from "./types";
import type { Locale } from "@/lib/locale";

/**
 * Long-form article bodies, keyed by the same slug used in the `ideas.pillars`
 * teaser of each locale. Teaser metadata (title, lead, tags, reading time)
 * lives in es.ts / en.ts; only the body lives here.
 */

const es: Record<string, ArticleBlock[]> = {
  "ia-en-latam-y-lo-que-es-humo": [
    {
      type: "lead",
      text: "La pregunta que me hacen en casi todos los desayunos ejecutivos no es si la IA sirve. Es dónde poner la plata sin quedar como el que compró humo.",
    },
    {
      type: "p",
      text: "En los últimos dieciocho meses me tocó ver por dentro decenas de iniciativas de IA en banca, retail y telcos de la región. Algunas ya se pagaron solas. Otras se van a morir en un piloto eterno y nadie lo va a decir en voz alta. La diferencia casi nunca es el modelo. Es dónde se apuntó el capital.",
    },
    {
      type: "p",
      text: "Voy a ser concreto, porque para eso me sentás a la mesa. Cinco cosas en las que sí vale la pena invertir hoy en LATAM, y tres que te van a hacer perder plata aunque en LinkedIn se vean hermosas.",
    },
    { type: "h2", text: "Lo que la IA SÍ va a hacer" },
    {
      type: "num",
      items: [
        "Atención al cliente que resuelve, no que deriva. Los agentes de voz y texto bien armados ya cierran casos completos en cobranzas, postventa y soporte de primer nivel. El número que importa no es el de conversaciones atendidas, es el de casos resueltos sin humano. Cuando ese número sube, el ahorro es real y medible.",
        "Back office que deja de depender de horas extra. Conciliaciones, altas y bajas, cruces de planillas, validación de documentos. Es trabajo repetitivo, con reglas y con datos. Ahí la IA aplicada sobre automatización paga rápido, porque el costo base es alto y el error humano también.",
        "Análisis que antes no se hacía por falta de gente. No estoy hablando de reemplazar analistas, sino de que revisen el 100% en vez del 3% que alcanzaban a muestrear. Detección de fraude, control de calidad de llamadas, revisión de contratos. La IA no piensa mejor que tu mejor analista, pero no se cansa a las cuatro de la tarde.",
        "Ventas y cobranza con contexto. Un agente que sabe con quién habla, qué compró y qué debe, y que actúa en consecuencia, mueve la aguja. No por magia: porque hace el seguimiento que tu equipo nunca tiene tiempo de hacer.",
        "Conocimiento interno que deja de vivir en la cabeza de tres personas. Los sistemas de recuperación sobre documentación propia convierten años de manuales, políticas y casos en algo consultable en segundos. El valor no es el chatbot lindo, es que el que entra nuevo rinde en semanas en vez de meses.",
      ],
    },
    {
      type: "p",
      text: "El patrón de las cinco es el mismo: proceso repetitivo, datos que ya existen, y un número de negocio claro para medir si funcionó. Cuando esas tres cosas están, la IA aplicada casi siempre se paga.",
    },
    { type: "h2", text: "Lo que es humo" },
    {
      type: "num",
      items: [
        "La transformación cultural sin un caso que pague. Arrancar por talleres, comités y roadmaps de tres años, sin un solo proceso en producción, es la forma más cara de no cambiar nada. La cultura cambia cuando alguien ve un resultado, no antes.",
        "El modelo propio cuando todavía no probaste el ajeno. Entrenar o afinar un modelo desde cero, en una empresa que ni siquiera midió qué le da un modelo comercial bien usado, es quemar capital para tener una anécdota técnica. Primero el valor, después la sofisticación.",
        "La demo que nunca se conecta a nada. La prueba de concepto que impresiona en una sala y jamás toca un sistema real, un dato real o un usuario real. Se ve espectacular y no produce un peso. Si a las ocho semanas no está tocando producción, no es un piloto: es un entretenimiento.",
      ],
    },
    {
      type: "quote",
      text: "El 80% de los pilotos de IA que veo morir, mueren por mala estrategia, no por mala tecnología.",
      cite: "RPA Day, España",
    },
    { type: "h2", text: "Cómo decidir el lunes" },
    {
      type: "p",
      text: "Si tenés que elegir dónde poner el próximo peso, no empieces por la tecnología. Empezá por el proceso más caro, más repetitivo y con datos más limpios que tengas. Ese es tu primer caso. Ponele un dueño con nombre y apellido, un número que mida éxito, y una fecha corta. Ocho semanas para tocar producción, no para tener un lindo informe.",
    },
    {
      type: "p",
      text: "La IA en LATAM no se va a ganar por tener el modelo más grande. Se va a ganar por tener el criterio de saber qué automatizar primero, y la disciplina de llevarlo a producción antes de que la moda cambie. Lo demás, con todo respeto, es humo.",
    },
  ],
  "por-que-mueren-los-pilotos-de-ia": [
    {
      type: "lead",
      text: "Un piloto de IA que brilla en la demo y muere en producción no es un problema de tecnología. Es un problema de autopsia: nadie quiere abrir el cuerpo y mirar qué falló de verdad.",
    },
    {
      type: "p",
      text: "Vi caer muchos pilotos. Casi ninguno murió por el modelo. Murieron por cosas más aburridas y más humanas: un proceso que nadie mapeó bien, un dato sucio que nadie limpió, y una pregunta que nadie contestó, la de quién se hace cargo de esto cuando salga a producción.",
    },
    {
      type: "p",
      text: "Te dejo la autopsia de tres muertes típicas. Cambié los nombres, no los síntomas.",
    },
    { type: "h2", text: "Tres muertes típicas" },
    {
      type: "num",
      items: [
        "El piloto huérfano. Arrancó con un sponsor entusiasta que a los tres meses se fue de la empresa o cambió de prioridad. Sin dueño, nadie defendió el presupuesto, nadie midió el resultado, nadie peleó el siguiente paso. La IA no se rompió: se quedó sin quien la cuide. Si un piloto no tiene un dueño con nombre, apellido y algo en juego, ya está muerto aunque todavía respire.",
        "El piloto sobre datos sucios. El modelo era bueno; el dato que le dábamos, no: duplicados, campos vacíos, categorías inventadas por cada sucursal. En la demo usamos datos curados a mano. En producción entró la realidad y el resultado se derrumbó. La IA amplifica la calidad de tu dato: si el dato es un desastre, la IA es un desastre más rápido.",
        "El piloto que nunca tocó el proceso real. Vivía en un ambiente paralelo, con un usuario de mentira y un caso de mentira. Impresionaba en la sala. El día que había que conectarlo al sistema que la gente usa de verdad aparecieron las integraciones, los permisos y las excepciones, y no aguantó. Un piloto que no toca el proceso real no es un piloto, es una maqueta.",
      ],
    },
    { type: "h2", text: "El patrón" },
    {
      type: "p",
      text: "Los tres tienen la misma raíz: se trató la IA como un problema de tecnología cuando era un problema de operación. El modelo es el 20% del trabajo. El otro 80% es proceso, dato y gobierno, y es justo lo que nadie quiere mirar porque no sale en la foto.",
    },
    {
      type: "quote",
      text: "El problema casi nunca es el modelo. Es el proceso sucio, el dato sucio y la falta de dueño.",
    },
    { type: "h2", text: "Cómo no morir" },
    {
      type: "num",
      items: [
        "Dueño antes que modelo. Nadie arranca un piloto sin una persona responsable del resultado en producción, no de la demo.",
        "Dato antes que demo. Medí la calidad de tu dato real antes de prometer nada. Si está sucio, ese es el primer proyecto; la IA viene después.",
        "Producción antes que perfección. Salí feo pero real en ocho semanas. Un agente en producción resolviendo el 60% enseña más que una demo perfecta que no resuelve nada.",
        "Un número, no un aplauso. Definí desde el día uno qué número tiene que moverse: horas, costo, NPS, churn. Sin número, el piloto se evalúa por entusiasmo, y el entusiasmo se agota.",
      ],
    },
    {
      type: "p",
      text: "La IA en producción no se gana con el modelo más nuevo. Se gana con la disciplina aburrida de tener un dueño, un dato limpio y un número que mirar. Lo demás es una demo linda esperando su autopsia.",
    },
  ],
  "agentes-que-si-venden-arquitectura-minima-viable": [
    {
      type: "lead",
      text: "Un agente de negocio no se paga con inteligencia. Se paga con alcance: cuántas veces por día hace un trabajo que antes hacía una persona, y cuánto cuesta cada vez.",
    },
    {
      type: "p",
      text: "La pregunta que importa no es qué tan inteligente es el agente. Es si entra a producción en ocho semanas y se paga solo. Todo lo demás es curiosidad técnica. Te cuento la arquitectura mínima viable que uso para que eso pase, con las decisiones y los trade-offs honestos.",
    },
    { type: "h2", text: "Las cinco piezas" },
    {
      type: "num",
      items: [
        "Un disparador claro. El agente arranca por algo concreto: un correo que llega, una fila que crece, un horario. Nada de que decida solo cuándo actuar en la primera versión. Un disparador que puedas explicar en una frase.",
        "Un modelo que puedas pagar. No el más grande: el más chico que resuelve la tarea con calidad aceptable. Empezá por uno comercial bueno, medí, y recién si el costo o la latencia duelen, optimizás. Elegir el modelo top por las dudas es quemar plata.",
        "Herramientas, no adivinanza. El agente no inventa: llama a herramientas reales, una consulta a la base, una API, una acción en un sistema, cada una con permisos acotados. El valor está en las acciones, no en la conversación.",
        "Un humano en el lazo, al principio. La primera versión propone y un humano aprueba. Eso te da producción segura desde el día uno y datos reales para saber cuándo sacar el humano. La automatización total es la meta, no el punto de partida.",
        "Registro de todo. Cada decisión del agente queda logueada: qué recibió, qué hizo, qué costó. Sin eso no podés mejorar, no podés auditar y no podés defender el proyecto cuando alguien pregunta.",
      ],
    },
    { type: "h2", text: "Los trade-offs que nadie te cuenta" },
    {
      type: "list",
      items: [
        "Costo contra calidad: el modelo grande resuelve más casos pero te puede volver inviable a escala. Medí costo por caso resuelto, no por token.",
        "Latencia contra autonomía: más pasos de razonamiento son más segundos. En voz o chat en vivo, la latencia te arruina la experiencia; a veces menos autonomía y más velocidad venden más.",
        "Autonomía contra confianza: cuanto más lo dejás decidir solo, más rápido escala y más caro sale un error. Subí la autonomía a medida que los datos te den confianza, no antes.",
      ],
    },
    {
      type: "quote",
      text: "Un agente que entra a producción en ocho semanas y se paga solo vale más que uno brillante que nunca sale de la demo.",
    },
    { type: "h2", text: "Ocho semanas, no ocho meses" },
    {
      type: "p",
      text: "La trampa es querer la versión final desde el principio: full autónoma, multiagente, sobre datos perfectos. Eso no sale en ocho semanas, y para el mes seis la prioridad de la empresa ya cambió. La versión mínima viable (un disparador, un modelo pagable, herramientas acotadas, humano en el lazo y todo logueado) sale, se paga y te compra el permiso para la siguiente.",
    },
    {
      type: "p",
      text: "La arquitectura elegante no vende. Vende el agente que hoy está haciendo trabajo real, con un costo que cierra y un dueño que lo defiende. Empezá por ahí. Lo sofisticado viene después, pagado por lo simple.",
    },
  ],
};

const en: Record<string, ArticleBlock[]> = {
  "ia-en-latam-y-lo-que-es-humo": [
    {
      type: "lead",
      text: "The question I get at almost every executive breakfast is not whether AI works. It is where to put the money without looking like the person who bought fog.",
    },
    {
      type: "p",
      text: "Over the last eighteen months I have seen dozens of AI initiatives from the inside across banking, retail and telcos in the region. Some already paid for themselves. Others will die in an eternal pilot and nobody will say it out loud. The difference is almost never the model. It is where the capital was aimed.",
    },
    {
      type: "p",
      text: "Let me be concrete, because that is what you sit me at the table for. Five things worth investing in today in LATAM, and three that will make you lose money even if they look beautiful on LinkedIn.",
    },
    { type: "h2", text: "What AI will actually do" },
    {
      type: "num",
      items: [
        "Customer service that resolves, not that forwards. Well-built voice and text agents already close full cases in collections, after-sales and first-tier support. The number that matters is not conversations handled, it is cases resolved without a human. When that number goes up, the savings are real and measurable.",
        "Back office that stops depending on overtime. Reconciliations, onboarding and offboarding, spreadsheet cross-checks, document validation. Repetitive work, with rules and with data. That is where applied AI on top of automation pays fast, because the base cost is high and so is human error.",
        "Analysis that was not being done for lack of people. Not about replacing analysts, but about reviewing 100% instead of the 3% they could sample. Fraud detection, call quality control, contract review. AI does not think better than your best analyst, but it does not get tired at four in the afternoon.",
        "Sales and collections with context. An agent that knows who it is talking to, what they bought and what they owe, and acts accordingly, moves the needle. Not by magic: because it does the follow-up your team never has time for.",
        "Internal knowledge that stops living in three people's heads. Retrieval systems over your own documentation turn years of manuals, policies and cases into something searchable in seconds. The value is not the pretty chatbot, it is that a new hire is productive in weeks instead of months.",
      ],
    },
    {
      type: "p",
      text: "The pattern across all five is the same: repetitive process, data that already exists, and a clear business number to measure whether it worked. When those three are present, applied AI almost always pays.",
    },
    { type: "h2", text: "What is fog" },
    {
      type: "num",
      items: [
        "Cultural transformation with no case that pays. Starting with workshops, committees and three-year roadmaps, without a single process in production, is the most expensive way to change nothing. Culture changes when someone sees a result, not before.",
        "Your own model before you have tried someone else's. Training or fine-tuning a model from scratch, in a company that has not even measured what a well-used commercial model gives it, is burning capital for a technical anecdote. Value first, sophistication later.",
        "The demo that never connects to anything. The proof of concept that dazzles in a room and never touches a real system, real data or a real user. It looks spectacular and produces nothing. If it is not touching production in eight weeks, it is not a pilot: it is entertainment.",
      ],
    },
    {
      type: "quote",
      text: "Eighty percent of the AI pilots I see die, die from bad strategy, not bad technology.",
      cite: "RPA Day, Spain",
    },
    { type: "h2", text: "How to decide on Monday" },
    {
      type: "p",
      text: "If you have to choose where to put the next dollar, do not start with the technology. Start with the most expensive, most repetitive process with the cleanest data you have. That is your first case. Give it an owner with a first and last name, a number that measures success, and a short deadline. Eight weeks to touch production, not to have a nice report.",
    },
    {
      type: "p",
      text: "AI in LATAM will not be won by having the biggest model. It will be won by having the judgment to know what to automate first, and the discipline to ship it to production before the fashion changes. The rest, with all due respect, is fog.",
    },
  ],
  "por-que-mueren-los-pilotos-de-ia": [
    {
      type: "lead",
      text: "An AI pilot that shines in the demo and dies in production is not a technology problem. It is an autopsy problem: nobody wants to open the body and look at what actually failed.",
    },
    {
      type: "p",
      text: "I have watched many pilots die. Almost none died from the model. They died from more boring, more human things: a process nobody mapped properly, dirty data nobody cleaned, and a question nobody answered, the one about who owns this when it reaches production.",
    },
    {
      type: "p",
      text: "Here is the autopsy of three typical deaths. I changed the names, not the symptoms.",
    },
    { type: "h2", text: "Three typical deaths" },
    {
      type: "num",
      items: [
        "The orphan pilot. It started with an enthusiastic sponsor who left the company or changed priorities three months in. With no owner, nobody defended the budget, nobody measured the result, nobody fought for the next step. The AI did not break: it lost the person who cared for it. If a pilot has no owner with a first name, a last name and skin in the game, it is already dead even if it still breathes.",
        "The pilot on dirty data. The model was good; the data we fed it was not: duplicates, empty fields, categories invented by each branch. In the demo we used data curated by hand. In production reality came in and the result collapsed. AI amplifies the quality of your data: if the data is a mess, AI is a faster mess.",
        "The pilot that never touched the real process. It lived in a parallel environment, with a fake user and a fake case. It dazzled in the room. The day it had to connect to the system people actually use, the integrations, permissions and exceptions showed up, and it did not hold. A pilot that never touches the real process is not a pilot, it is a mockup.",
      ],
    },
    { type: "h2", text: "The pattern" },
    {
      type: "p",
      text: "All three share the same root: AI was treated as a technology problem when it was an operations problem. The model is 20% of the work. The other 80% is process, data and governance, and it is exactly what nobody wants to look at because it does not show up in the photo.",
    },
    {
      type: "quote",
      text: "The problem is almost never the model. It is the dirty process, the dirty data and the missing owner.",
    },
    { type: "h2", text: "How not to die" },
    {
      type: "num",
      items: [
        "Owner before model. Nobody starts a pilot without a person responsible for the result in production, not for the demo.",
        "Data before demo. Measure the quality of your real data before promising anything. If it is dirty, that is the first project; AI comes after.",
        "Production before perfection. Ship ugly but real in eight weeks. An agent in production solving 60% teaches more than a perfect demo that solves nothing.",
        "A number, not applause. Decide from day one which number has to move: hours, cost, NPS, churn. Without a number, the pilot is judged by enthusiasm, and enthusiasm runs out.",
      ],
    },
    {
      type: "p",
      text: "AI in production is not won with the newest model. It is won with the boring discipline of having an owner, clean data and a number to watch. Everything else is a pretty demo waiting for its autopsy.",
    },
  ],
  "agentes-que-si-venden-arquitectura-minima-viable": [
    {
      type: "lead",
      text: "A business agent is not paid for with intelligence. It is paid for with reach: how many times a day it does work a person used to do, and how much each time costs.",
    },
    {
      type: "p",
      text: "The question that matters is not how smart the agent is. It is whether it reaches production in eight weeks and pays for itself. Everything else is technical curiosity. Here is the minimum viable architecture I use to make that happen, with the honest decisions and trade-offs.",
    },
    { type: "h2", text: "The five pieces" },
    {
      type: "num",
      items: [
        "A clear trigger. The agent starts from something concrete: an email that arrives, a queue that grows, a schedule. Nothing about deciding on its own when to act in the first version. A trigger you can explain in one sentence.",
        "A model you can afford. Not the biggest: the smallest one that solves the task with acceptable quality. Start with a good commercial model, measure, and only optimize if cost or latency hurt. Picking the top model just in case is burning money.",
        "Tools, not guessing. The agent does not invent: it calls real tools, a database query, an API, an action in a system, each with scoped permissions. The value is in the actions, not the conversation.",
        "A human in the loop, at first. The first version proposes and a human approves. That gives you safe production from day one and real data to know when to remove the human. Full automation is the goal, not the starting point.",
        "Log everything. Every decision the agent makes is logged: what it received, what it did, what it cost. Without that you cannot improve, you cannot audit, and you cannot defend the project when someone asks.",
      ],
    },
    { type: "h2", text: "The trade-offs nobody tells you about" },
    {
      type: "list",
      items: [
        "Cost versus quality: the big model solves more cases but can make you unviable at scale. Measure cost per case solved, not per token.",
        "Latency versus autonomy: more reasoning steps mean more seconds. In live voice or chat, latency ruins the experience; sometimes less autonomy and more speed sell more.",
        "Autonomy versus trust: the more you let it decide alone, the faster it scales and the more expensive a mistake becomes. Raise autonomy as the data earns your trust, not before.",
      ],
    },
    {
      type: "quote",
      text: "An agent that reaches production in eight weeks and pays for itself is worth more than a brilliant one that never leaves the demo.",
    },
    { type: "h2", text: "Eight weeks, not eight months" },
    {
      type: "p",
      text: "The trap is wanting the final version from the start: fully autonomous, multi-agent, on perfect data. That does not ship in eight weeks, and by month six the company's priority has already changed. The minimum viable version (one trigger, an affordable model, scoped tools, a human in the loop and everything logged) ships, pays for itself, and buys you the permission for the next one.",
    },
    {
      type: "p",
      text: "Elegant architecture does not sell. What sells is the agent doing real work today, at a cost that closes, with an owner who defends it. Start there. The sophisticated part comes later, paid for by the simple part.",
    },
  ],
};

const bodies: Record<Locale, Record<string, ArticleBlock[]>> = { es, en };

export function getArticleBody(locale: Locale, slug: string): ArticleBlock[] | null {
  return bodies[locale]?.[slug] ?? null;
}

export function hasArticleBody(slug: string): boolean {
  return Boolean(es[slug] || en[slug]);
}
