export const CYBERSECURITY_ESSAY_SLUG = "tu-estrategia-de-ciberseguridad";

export type CyberSource = {
  label: string;
  title: string;
  href: string;
};

export type CyberBeat = {
  id: string;
  text: string;
  emphasis?: "pause" | "punch";
  source?: CyberSource;
};

export type CyberChapter = {
  id: string;
  visual:
    | "meeting"
    | "desk"
    | "server"
    | "scale"
    | "evidence"
    | "week"
    | "aftermath"
    | "workflow"
    | "finale";
  label: string;
  beats: CyberBeat[];
};

export const cyberSources: CyberSource[] = [
  {
    label: "AWS",
    title: "Security of the AWS Infrastructure",
    href: "https://docs.aws.amazon.com/whitepapers/latest/introduction-aws-security/security-of-the-aws-infrastructure.html",
  },
  {
    label: "NCSC",
    title: "Cloud security shared responsibility model",
    href: "https://www.ncsc.gov.uk/collection/cloud/understanding-cloud-services/cloud-security-shared-responsibility-model",
  },
  {
    label: "AWS",
    title: "Shared responsibility - Security Pillar",
    href: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/shared-responsibility.html",
  },
  {
    label: "NCSC",
    title: "The hidden risks of shadow AI",
    href: "https://www.ncsc.gov.uk/blogs/the-hidden-risks-of-shadow-ai",
  },
];

export const cybersecurityEssay = {
  title: "No conozco tu estrategia de ciberseguridad, pero sé que es mala",
  dek: "Sobre servidores propios, presupuestos que no alcanzan y la fantasía de resolver el riesgo prohibiendo herramientas.",
  date: "20 de septiembre de 2026",
  readingTime: "12 min",
  chapters: [
    {
      id: "la-reunion",
      visual: "meeting",
      label: "La reunión",
      beats: [
        {
          id: "cansancio",
          text: "De todas las conversaciones que me cansaron en tecnología, las que más paciencia me piden son esas reuniones interminables para garantizar que toda la información \"quede adentro\". Podemos pasar meses discutiendo los peligros de llevar algo a la nube sin dedicarle demasiado tiempo a explicar por qué estaría mejor protegido en nuestras oficinas.",
        },
        {
          id: "on-premise",
          text: "\"Por seguridad, tiene que ser on-premise\", te dicen. Es decir, instalado en servidores propios.",
        },
        {
          id: "resuelto",
          text: "Y con eso pareciera que la explicación está completa.",
          emphasis: "pause",
        },
        {
          id: "presupuesto",
          text: "Me cuesta bastante esa confianza, especialmente cuando viene de una empresa donde conseguir presupuesto para actualizar un sistema requiere justificarlo como si estuvieras pidiendo un avión.",
        },
      ],
    },
    {
      id: "el-equipo",
      visual: "desk",
      label: "El equipo",
      beats: [
        {
          id: "tickets",
          text: "Si tu empresa fabrica muebles, distribuye alimentos o vende seguros, probablemente tenga un equipo de TI que hace lo que puede con lo que le dan. Mantiene sistemas, atiende usuarios y trata de avanzar con proyectos que todas las áreas consideran urgentes. Cada tanto también tiene que explicarle a alguien por qué sigue sin funcionar la impresora.",
        },
        {
          id: "responsabilidad",
          text: "A ese equipo le pedimos, además, que proteja toda la infraestructura. Y cuando aparece la posibilidad de contratar un servicio externo, alguien asegura que es más seguro hacerlo nosotros.",
        },
        {
          id: "veamos",
          text: "Bueno. Veamos qué implica hacerlo nosotros.",
          emphasis: "pause",
        },
      ],
    },
    {
      id: "hacerlo-nosotros",
      visual: "server",
      label: "Lo que cuesta protegerlo",
      beats: [
        {
          id: "guardia",
          text: "Para vigilar la infraestructura las veinticuatro horas necesitás personas que cubran turnos, vacaciones y licencias. Si aparece una alerta, alguien tiene que investigarla. Y mientras la investiga, el resto de la empresa sigue funcionando y necesitando atención.",
        },
        {
          id: "telefono",
          text: "Tener el teléfono de alguien a quien podemos despertar no resuelve exactamente lo mismo, aunque en el presupuesto quede precioso.",
        },
        {
          id: "inventario",
          text: "Después hay que saber qué equipos y programas tenés, cuáles presentan vulnerabilidades y qué actualizaciones necesitan. Hay que probar esas actualizaciones para no romper los sistemas y encontrar un momento para aplicarlas. También reemplazar lo que ya dejó de recibir soporte, incluso cuando todavía prende y alguien considera que se le puede sacar otro año.",
        },
        {
          id: "pruebas",
          text: "Necesitás comprobar que las defensas funcionen. Contratar pruebas, corregir lo que encuentren y revisar que las correcciones hayan servido. Prepararte para investigar un incidente, recuperar los sistemas y entender qué información quedó comprometida.",
        },
        {
          id: "backup",
          text: "Los backups también necesitan pruebas. Hasta que alguien intenta recuperar la operación con ellos, \"tenemos respaldo\" contiene una cuota de optimismo.",
        },
        {
          id: "costo",
          text: "Todo eso requiere presupuesto sostenido. La compra del servidor fue apenas el principio.",
          emphasis: "punch",
        },
      ],
    },
    {
      id: "la-escala",
      visual: "scale",
      label: "La diferencia de escala",
      beats: [
        {
          id: "proveedor",
          text: "Ahora compará esa capacidad con la de un proveedor que opera infraestructura tecnológica para muchísimos clientes y puede distribuir entre ellos el costo de protegerla. AWS, la plataforma de nube de Amazon, documenta monitoreo permanente de su infraestructura, controles en varias capas y validación continua. Mantener esa base es parte de lo que vende.",
          source: cyberSources[0],
        },
        {
          id: "prioridades",
          text: "En tu empresa, esos gastos compiten con la nueva sucursal, el cambio de maquinaria y una contratación que lleva seis meses esperando aprobación.",
        },
        {
          id: "capacidad",
          text: "Con un presupuesto acotado y un equipo repartido entre todas las necesidades del negocio, no vas a reproducir esa escala de operación. Podés tener excelentes profesionales. También ellos necesitan dormir, y probablemente trabajarían bastante mejor si les aprobaran los recursos que vienen pidiendo.",
        },
        {
          id: "asimetria",
          text: "Por eso me resulta tan curiosa la seguridad con la que a veces se descarta la nube. Para contratar un servicio externo exigimos explicaciones detalladas. Para asumir nosotros todas esas responsabilidades parece alcanzar con que las máquinas sean nuestras.",
        },
      ],
    },
    {
      id: "la-evidencia",
      visual: "evidence",
      label: "Lo que realmente protege",
      beats: [
        {
          id: "ncsc",
          text: "El NCSC, el organismo británico de ciberseguridad, recomienda delegar tanta responsabilidad de seguridad como sea posible a un proveedor de nube de hiperescala confiable. También aclara las obligaciones que conserva el cliente sobre la elección del servicio, su configuración y los datos que utiliza.",
          source: cyberSources[1],
        },
        {
          id: "permisos",
          text: "Claro que podés exponer información en la nube. Si configurás mal los accesos o le das permisos de más a una cuenta, el atacante puede aprovechar eso sin vulnerar la infraestructura de Amazon. El reparto de responsabilidades depende del servicio contratado; no desaparecen porque pagues una suscripción.",
          source: cyberSources[2],
        },
        {
          id: "poweredge",
          text: "Pero un PowerEdge, un servidor de Dell, abajo de la mesita de luz tampoco adquiere propiedades defensivas por cercanía.",
          emphasis: "punch",
        },
        {
          id: "caminos",
          text: "A quien quiera obtener tu información le interesan los caminos disponibles para llegar a ella. Puede encontrar una cuenta comprometida, una aplicación vulnerable o un acceso remoto mal protegido. Que el servidor esté en tu edificio cambia algunas condiciones del ataque. No demuestra que lo hayas vuelto más difícil.",
        },
        {
          id: "explicar",
          text: "Podés tener razones válidas para mantener infraestructura propia. Incluso podés operar un entorno muy bien protegido. Lo que hace falta es explicar qué riesgos resolvés, con qué controles y quién los va a sostener. \"Queremos que todo quede adentro\" deja bastante de esa conversación pendiente.",
        },
      ],
    },
    {
      id: "la-semana",
      visual: "week",
      label: "Una empresa imaginaria",
      beats: [
        {
          id: "entrada-ia",
          text: "Con la inteligencia artificial, esa misma confianza en la prohibición nos está dando material nuevo.",
        },
        {
          id: "ficcion",
          text: "Imaginemos una empresa que decide resolver el asunto de una vez.",
          emphasis: "pause",
        },
        {
          id: "lunes",
          text: "El lunes bloqueamos ChatGPT. Mandamos un correo explicando que está prohibido ingresar información de la empresa en herramientas de inteligencia artificial. Ahora los empleados trabajan sin ChatGPT y podemos informar que tomamos medidas.",
        },
        {
          id: "martes",
          text: "El martes alguien tiene que resumir un informe para una reunión. Le saca una foto con el celular y lo consulta desde su cuenta personal. Cuando nos enteramos, decidimos prohibir los dispositivos móviles.",
        },
        {
          id: "miercoles",
          text: "El informe sigue siendo para el miércoles.",
          emphasis: "punch",
        },
        {
          id: "internet",
          text: "Ese día, otro empleado copia un fragmento en Google para entender de qué habla. La búsqueda le devuelve una respuesta con inteligencia artificial. Descubrimos que el problema era más amplio de lo previsto y suspendemos el acceso a internet. El fragmento ya había salido cuando lo pegó en el buscador, pero a esta altura la conversación está bastante concentrada en la IA.",
        },
        {
          id: "usb",
          text: "El jueves alguien descarga un archivo de la intranet, la red interna de la empresa, y se lo lleva en un pendrive para terminarlo en su casa. Bloqueamos los puertos USB.",
        },
        {
          id: "sin-computadoras",
          text: "El viernes aparece una copia impresa. Retiramos las impresoras. Después alguien observa que todavía se puede leer la pantalla y transcribir la información. Nos parece un comentario atendible, así que retiramos también las computadoras.",
        },
        {
          id: "enhorabuena",
          text: "Enhorabuena. Tenemos la estrategia de ciberseguridad más eficiente del mundo: ya no hay computadoras y trabajamos con papel y lápiz.",
          emphasis: "punch",
        },
        {
          id: "mochila",
          text: "Queda pendiente revisar el papel, que entra bastante bien en una mochila.",
          emphasis: "pause",
        },
      ],
    },
    {
      id: "despues-del-chiste",
      visual: "aftermath",
      label: "Después del chiste",
      beats: [
        {
          id: "exagerada",
          text: "La historia es exagerada. El problema de responder a cada necesidad de trabajo con otra prohibición merece tomarse bastante en serio.",
        },
        {
          id: "alcance",
          text: "Un bloqueo puede ser necesario y reducir un riesgo concreto. Que existan otras formas de sacar información no lo vuelve inútil. Pero hay que evaluar qué cubre y qué pasa después, especialmente si la persona sigue teniendo que entregar el mismo trabajo con menos herramientas.",
        },
        {
          id: "shadow-ai",
          text: "De hecho, el NCSC advirtió recientemente que, cuando las políticas no acompañan las necesidades del trabajo, los empleados pueden recurrir a herramientas de IA no aprobadas. Eso puede reducir la visibilidad de la empresa sobre el uso de sus datos. Su recomendación incluye entender esas necesidades y ofrecer alternativas seguras.",
          source: cyberSources[3],
        },
      ],
    },
    {
      id: "el-ticket",
      visual: "workflow",
      label: "El ticket cerrado",
      beats: [
        {
          id: "autoridad",
          text: "Parte del problema es que resulta bastante cómodo tener autoridad para rechazar una herramienta cuando el trabajo de resolver la necesidad queda en otra área.",
        },
        {
          id: "cerrado",
          text: "Seguridad cierra la solicitud. Operaciones sigue esperando el informe. El empleado encuentra cómo terminarlo y, si usó algo que no debía, aprende que la próxima vez le conviene no contarlo.",
        },
        {
          id: "sorpresa",
          text: "Después nos sorprende descubrir herramientas que nadie había autorizado.",
          emphasis: "pause",
        },
        {
          id: "intenciones",
          text: "Tampoco ayuda tratar igual a quien pretende robar información y a quien intenta resumir un documento sin entender dónde lo está subiendo. Necesitás controles para ambos escenarios, pero una amenaza deliberada y un error por desconocimiento requieren respuestas diferentes.",
        },
      ],
    },
    {
      id: "reconstruir",
      visual: "workflow",
      label: "Una forma de trabajar",
      beats: [
        {
          id: "decidir",
          text: "La empresa tiene que decidir qué información puede usarse, para qué tareas y en qué servicios. Revisar qué guardan esos proveedores, cómo utilizan los datos y qué condiciones ofrecen. Dar accesos acordes al trabajo, registrar lo necesario para investigar problemas y explicar las restricciones de una forma que alguien pueda aplicar sin tener que interpretar una política de treinta páginas.",
        },
        {
          id: "camino",
          text: "Y tiene que ofrecer un camino que funcione. Si hay una herramienta aprobada, pero no sirve para resolver la tarea, la necesidad sigue ahí. Si pedir una excepción demora dos meses, también.",
        },
        {
          id: "decisiones",
          text: "Eso exige trabajo de seguridad y del resto del negocio. Habrá usos que se puedan habilitar, otros que necesiten adaptaciones y algunos que corresponda rechazar. En esos casos también hay que hacerse cargo de cómo se va a realizar el trabajo y de cuánto va a costar.",
        },
      ],
    },
    {
      id: "el-miercoles",
      visual: "finale",
      label: "El miércoles",
      beats: [
        {
          id: "cansancio-final",
          text: "Lo que me cansa es la facilidad con la que \"por seguridad\" puede terminar una conversación que todavía no empezó. Sobre todo cuando quien lo dice da por demostrada una capacidad que su propia empresa no está dispuesta a financiar.",
        },
        {
          id: "hacerse-cargo",
          text: "Si vamos a mantener todo adentro, presupuestemos lo que hace falta para protegerlo. Si vamos a restringir herramientas, resolvamos cómo va a trabajar la gente.",
        },
        {
          id: "informe-final",
          text: "El informe sigue siendo para el miércoles.",
          emphasis: "punch",
        },
      ],
    },
  ] satisfies CyberChapter[],
};
