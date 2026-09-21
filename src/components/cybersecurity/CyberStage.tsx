"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { CyberChapter } from "@/content/cybersecurityEssay";
import styles from "./CybersecurityScrollytelling.module.css";

type Props = {
  visual: CyberChapter["visual"];
  activeBeat: string;
  calm: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

function Present({
  show,
  children,
  x = 0,
  y = 18,
  delay = 0,
}: {
  show: boolean;
  children: React.ReactNode;
  x?: number;
  y?: number;
  delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: show ? 1 : 0, x: show ? 0 : x, y: show ? 0 : y }}
      animate={{ opacity: show ? 1 : 0, x: show ? 0 : x, y: show ? 0 : y }}
      transition={{ duration: 0.48, ease, delay: show ? delay : 0 }}
      style={{ pointerEvents: show ? "auto" : "none" }}
    >
      {children}
    </motion.g>
  );
}

function SvgFrame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <svg
      className={styles.stageSvg}
      viewBox="0 0 760 600"
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="dotGrid" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.14" />
        </pattern>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="760" height="600" rx="2" className={styles.svgBackdrop} />
      <rect x="20" y="20" width="720" height="560" rx="2" fill="url(#dotGrid)" className={styles.svgGrid} />
      {children}
    </svg>
  );
}

function Meeting({ beat }: { beat: string }) {
  const onPrem = ["on-premise", "resuelto", "presupuesto"].includes(beat);
  const stamped = ["resuelto", "presupuesto"].includes(beat);
  const budget = beat === "presupuesto";
  return (
    <SvgFrame title="Una reunión donde la frase por seguridad cierra la discusión">
      <path d="M80 490H680" className={styles.line} />
      <path d="M170 358H590L650 490H110Z" className={styles.surface} />
      {[210, 350, 490].map((x, i) => (
        <g key={x} transform={`translate(${x} 0)`}>
          <circle cx="0" cy="292" r="27" className={i === 1 ? styles.personAccent : styles.person} />
          <path d="M-42 358c6-40 25-60 42-60s36 20 42 60" className={styles.personBody} />
        </g>
      ))}
      <motion.g animate={{ y: beat === "cansancio" ? 0 : -8 }} transition={{ duration: 0.5, ease }}>
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(${250 + i * 42} ${405 - i * 7}) rotate(${i * 2 - 3})`}>
            <rect width="185" height="112" className={styles.paper} />
            <path d="M18 28H152M18 48H138M18 68H160" className={styles.paperLine} />
          </g>
        ))}
      </motion.g>
      <Present show={onPrem} y={26}>
        <g transform="translate(255 372)">
          <rect width="250" height="132" className={styles.paperStrong} />
          <text x="20" y="34" className={styles.svgLabel}>DECISIÓN</text>
          <text x="20" y="72" className={styles.svgHeadline}>Todo queda adentro.</text>
          <text x="20" y="101" className={styles.svgSmall}>Motivo: seguridad</text>
        </g>
      </Present>
      <Present show={stamped} y={-30}>
        <motion.g
          transform="translate(420 438) rotate(-8)"
          initial={{ scale: stamped ? 1 : 1.6 }}
          animate={{ scale: stamped ? 1 : 1.6 }}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
        >
          <rect x="-58" y="-20" width="116" height="40" rx="2" className={styles.stamp} />
          <text textAnchor="middle" y="6" className={styles.stampText}>RESUELTO</text>
        </motion.g>
      </Present>
      <Present show={budget} x={-30} delay={0.14}>
        <g transform="translate(72 76) rotate(-3)">
          <rect width="250" height="154" className={styles.darkPaper} />
          <text x="20" y="35" className={styles.svgLabel}>SOLICITUD #1842</text>
          <text x="20" y="72" className={styles.svgHeadlineLight}>Actualizar sistema</text>
          <path d="M20 97H220" className={styles.lineDim} />
          <text x="20" y="126" className={styles.warningText}>PENDIENTE DE APROBACIÓN</text>
        </g>
      </Present>
    </SvgFrame>
  );
}

function Desk({ beat }: { beat: string }) {
  const burden = ["responsabilidad", "veamos"].includes(beat);
  const focus = beat === "veamos";
  const tickets = [
    [70, 76, "ERP · CAÍDO", -5],
    [470, 82, "USUARIO · ACCESO", 4],
    [518, 360, "IMPRESORA · OTRA VEZ", -4],
    [56, 386, "PROYECTO · URGENTE", 3],
  ] as const;
  return (
    <SvgFrame title="Un escritorio de tecnología rodeado por solicitudes urgentes">
      <path d="M90 470H670" className={styles.line} />
      <rect x="190" y="330" width="380" height="140" className={styles.desk} />
      <rect x="276" y="170" width="210" height="142" rx="5" className={styles.monitor} />
      <rect x="296" y="190" width="170" height="102" className={styles.monitorScreen} />
      <path d="M356 312V337M321 337H391" className={styles.lineStrong} />
      <circle cx="224" cy="296" r="28" className={styles.personAccent} />
      <path d="M180 367c7-47 27-69 44-69 20 0 39 26 47 69" className={styles.personBody} />
      {tickets.map(([x, y, label, rotate], i) => (
        <motion.g
          key={label}
          transform={`translate(${x} ${y}) rotate(${rotate})`}
          initial={{ opacity: focus ? 0.26 : 1, x: focus ? (x < 300 ? -18 : 18) : 0 }}
          animate={{ opacity: focus ? 0.26 : 1, x: focus ? (x < 300 ? -18 : 18) : 0 }}
          transition={{ duration: 0.45, ease, delay: i * 0.04 }}
        >
          <rect width="182" height="92" className={styles.ticket} />
          <text x="14" y="25" className={styles.svgLabel}>{label}</text>
          <path d="M14 44H152M14 61H129" className={styles.paperLine} />
        </motion.g>
      ))}
      <g transform="translate(385 350) rotate(2)">
        <rect width="150" height="96" className={styles.report} />
        <text x="14" y="25" className={styles.svgLabelDark}>INFORME</text>
        <text x="14" y="48" className={styles.svgSmallDark}>Entrega</text>
        <text x="14" y="76" className={styles.svgHeadlineDark}>MIÉRCOLES</text>
      </g>
      <Present show={burden} y={-30}>
        <g transform="translate(222 72)">
          <rect width="316" height="104" className={styles.burden} />
          <text x="18" y="31" className={styles.svgLabel}>NUEVA RESPONSABILIDAD</text>
          <text x="18" y="72" className={styles.svgHeadlineLight}>Proteger toda la infraestructura</text>
        </g>
        <path d="M380 176V205" className={styles.tealLine} />
      </Present>
      <Present show={focus} y={18}>
        <text x="380" y="545" textAnchor="middle" className={styles.svgHeadlineLight}>Veamos qué implica.</text>
      </Present>
    </SvgFrame>
  );
}

function Server({ beat }: { beat: string }) {
  const index = ["guardia", "telefono", "inventario", "pruebas", "backup", "costo"].indexOf(beat);
  const show = (n: number) => index >= n;
  return (
    <SvgFrame title="Las tareas permanentes necesarias para proteger un servidor propio">
      <g transform="translate(285 86)">
        <rect width="190" height="406" rx="5" className={styles.rack} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i} transform={`translate(18 ${25 + i * 58})`}>
            <rect width="154" height="42" rx="2" className={styles.rackUnit} />
            <circle cx="124" cy="21" r="4" className={i < 5 ? styles.lightOn : styles.lightOff} />
            <circle cx="140" cy="21" r="4" className={styles.lightDim} />
            <path d="M14 14H92M14 24H72" className={styles.lineDim} />
          </g>
        ))}
      </g>
      <Present show={show(0)} x={-24}>
        <g transform="translate(53 96)">
          <circle cx="70" cy="70" r="65" className={styles.clock} />
          <path d="M70 70V30M70 70l34 20" className={styles.tealLine} />
          <text x="70" y="93" textAnchor="middle" className={styles.svgHeadlineLight}>24/7</text>
          <text x="70" y="160" textAnchor="middle" className={styles.svgSmall}>COBERTURA REAL</text>
        </g>
      </Present>
      <Present show={show(1)} x={24}>
        <g transform="translate(560 92)">
          <rect width="105" height="168" rx="14" className={styles.phone} />
          <rect x="10" y="22" width="85" height="120" rx="4" className={styles.monitorScreen} />
          <path d="M34 13H70" className={styles.lineStrong} />
          <motion.path
            d="M-12 42c-15 15-15 45 0 60M117 42c15 15 15 45 0 60"
            className={styles.warningLine}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
          <text x="52" y="72" textAnchor="middle" className={styles.warningText}>03:17</text>
          <text x="52" y="100" textAnchor="middle" className={styles.svgSmall}>ALERTA</text>
        </g>
      </Present>
      <Present show={show(2)} x={-24}>
        <g transform="translate(45 330)">
          {[
            ["INVENTARIO", "ACTUALIZAR"],
            ["VERSIONES", "PROBAR"],
            ["SOPORTE", "REEMPLAZAR"],
          ].map(([a, b], i) => (
            <g key={a} transform={`translate(0 ${i * 55})`}>
              <rect width="205" height="44" className={styles.darkPaper} />
              <text x="12" y="18" className={styles.svgLabel}>{a}</text>
              <text x="193" y="30" textAnchor="end" className={styles.warningText}>{b}</text>
            </g>
          ))}
        </g>
      </Present>
      <Present show={show(3)} x={24}>
        <g transform="translate(520 315)">
          <path d="M22 22H150V120H22Z" className={styles.auditBox} />
          <path d="M44 52l13 13 25-28M44 88l13 13 25-28" className={styles.tealLine} />
          <text x="95" y="143" textAnchor="middle" className={styles.svgSmall}>PROBAR · CORREGIR · REPETIR</text>
        </g>
      </Present>
      <Present show={show(4)} y={-18}>
        <g transform="translate(278 510)">
          <path d="M0 0H204" className={styles.tealLineDashed} />
          <path d="M18-9l-18 9 18 9M186-9l18 9-18 9" className={styles.tealLine} />
          <text x="102" y="31" textAnchor="middle" className={styles.svgSmall}>RECUPERAR, NO SOLO COPIAR</text>
        </g>
      </Present>
      <Present show={show(5)} y={32}>
        <rect x="35" y="34" width="690" height="512" className={styles.costFrame} />
        <text x="380" y="66" textAnchor="middle" className={styles.warningText}>COSTO PERMANENTE</text>
      </Present>
    </SvgFrame>
  );
}

function Scale({ beat }: { beat: string }) {
  const index = ["proveedor", "prioridades", "capacidad", "asimetria"].indexOf(beat);
  return (
    <SvgFrame title="Comparación entre un equipo local y una infraestructura distribuida">
      <path d="M380 60V540" className={styles.lineDim} />
      <text x="200" y="70" textAnchor="middle" className={styles.svgLabel}>UNA EMPRESA</text>
      <text x="560" y="70" textAnchor="middle" className={styles.svgLabel}>INFRAESTRUCTURA COMPARTIDA</text>
      <g transform="translate(95 150)">
        <rect x="0" y="170" width="210" height="150" className={styles.office} />
        <path d="M-18 170L105 82l123 88" className={styles.lineStrong} />
        <rect x="74" y="230" width="62" height="90" className={styles.monitorScreen} />
        <circle cx="105" cy="208" r="22" className={styles.personAccent} />
        <text x="105" y="352" textAnchor="middle" className={styles.svgSmall}>EL MISMO EQUIPO PARA TODO</text>
      </g>
      <g transform="translate(440 115)">
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <motion.g
              key={`${row}-${col}`}
              transform={`translate(${col * 82} ${row * 96})`}
              initial={{ opacity: index >= 0 ? 1 : 0.3, y: index >= 0 ? 0 : 8 }}
              animate={{ opacity: index >= 0 ? 1 : 0.3, y: index >= 0 ? 0 : 8 }}
              transition={{ duration: 0.4, delay: (row + col) * 0.05 }}
            >
              <rect width="62" height="76" rx="2" className={styles.miniRack} />
              <path d="M10 18H52M10 33H45M10 48H52" className={styles.lineDim} />
              <circle cx="49" cy="61" r="3" className={styles.lightOn} />
            </motion.g>
          )),
        )}
        <text x="112" y="320" textAnchor="middle" className={styles.svgSmall}>CAPACIDAD DISTRIBUIDA</text>
      </g>
      <Present show={index >= 1} y={18}>
        {[
          [62, 90, "SUCURSAL"],
          [85, 475, "MAQUINARIA"],
          [250, 102, "CONTRATACIÓN"],
        ].map(([x, y, label]) => (
          <g key={label} transform={`translate(${x} ${y})`}>
            <rect width="130" height="45" className={styles.ticket} />
            <text x="65" y="27" textAnchor="middle" className={styles.svgLabel}>{label}</text>
          </g>
        ))}
      </Present>
      <Present show={index >= 2} y={-12}>
        <path d="M320 285H353" className={styles.warningLine} />
        <text x="337" y="270" textAnchor="middle" className={styles.warningText}>≠</text>
      </Present>
      <Present show={index >= 3} y={18}>
        <g transform="translate(150 488)">
          <rect width="460" height="58" className={styles.paperStrong} />
          <text x="20" y="23" className={styles.svgLabelDark}>EVALUACIÓN INTERNA</text>
          <text x="20" y="44" className={styles.svgSmallDark}>Capacidad · cobertura · presupuesto · respuesta</text>
          <text x="435" y="38" textAnchor="end" className={styles.warningText}>PENDIENTE</text>
        </g>
      </Present>
    </SvgFrame>
  );
}

function Evidence({ beat }: { beat: string }) {
  const index = ["ncsc", "permisos", "poweredge", "caminos", "explicar"].indexOf(beat);
  return (
    <SvgFrame title="La ubicación del servidor frente a los controles que realmente lo protegen">
      <Present show={index === 0} y={24}>
        <g transform="translate(100 92)">
          <rect width="560" height="390" className={styles.sourceSheet} />
          <text x="34" y="52" className={styles.svgLabelDark}>NATIONAL CYBER SECURITY CENTRE</text>
          <text x="34" y="104" className={styles.sourceHeadline}>Delegar responsabilidad</text>
          <text x="34" y="142" className={styles.sourceHeadline}>a un proveedor confiable.</text>
          <path d="M34 174H526" className={styles.paperLine} />
          <text x="34" y="214" className={styles.svgSmallDark}>Elegir el servicio</text>
          <text x="34" y="251" className={styles.svgSmallDark}>Configurar los accesos</text>
          <text x="34" y="288" className={styles.svgSmallDark}>Decidir qué datos se utilizan</text>
          <path d="M34 322H526" className={styles.paperLine} />
          <text x="34" y="358" className={styles.svgLabelDark}>RESPONSABILIDAD COMPARTIDA</text>
        </g>
      </Present>
      <Present show={index === 1} y={24}>
        <g transform="translate(92 110)">
          <rect width="576" height="335" rx="4" className={styles.cloudBox} />
          <path d="M92 160c0-45 37-82 82-82 32 0 59 18 72 44 14-11 32-18 52-18 45 0 82 37 82 82H92Z" className={styles.cloud} />
          <text x="234" y="151" textAnchor="middle" className={styles.svgLabelDark}>INFRAESTRUCTURA</text>
          <rect x="78" y="220" width="420" height="76" className={styles.darkPaper} />
          <text x="98" y="249" className={styles.svgLabel}>APLICACIÓN Y DATOS</text>
          <text x="475" y="266" textAnchor="end" className={styles.warningText}>PERMISOS DE MÁS</text>
          <path d="M430 25C525 56 547 140 503 218" className={styles.warningLineDashed} />
          <circle cx="440" cy="25" r="22" className={styles.warningFill} />
          <text x="440" y="31" textAnchor="middle" className={styles.svgHeadlineLight}>!</text>
        </g>
      </Present>
      <Present show={index === 2} y={24}>
        <g transform="translate(128 78)">
          <rect x="120" y="334" width="270" height="30" className={styles.wood} />
          <rect x="175" y="82" width="160" height="250" rx="4" className={styles.rack} />
          {[0, 1, 2, 3].map((i) => <rect key={i} x="192" y={110 + i * 50} width="126" height="34" className={styles.rackUnit} />)}
          <path d="M415 334V128M365 128H465M395 128c0-42 40-72 80-48" className={styles.lineStrong} />
          <path d="M442 95h66l-12 42h-42Z" className={styles.lampShade} />
          <circle cx="475" cy="145" r="35" className={styles.lampGlow} filter="url(#softGlow)" />
          <text x="255" y="410" textAnchor="middle" className={styles.svgHeadlineLight}>CERCA ≠ PROTEGIDO</text>
          <text x="255" y="444" textAnchor="middle" className={styles.svgSmall}>EL POWEREDGE BAJO LA MESITA</text>
        </g>
      </Present>
      <Present show={index >= 3} y={24}>
        <g transform="translate(82 88)">
          <rect x="250" y="140" width="180" height="260" className={styles.office} />
          <rect x="292" y="205" width="96" height="158" className={styles.rack} />
          {[
            [30, 110, "CUENTA", "M48 128H250"],
            [22, 245, "APLICACIÓN", "M60 263H250"],
            [470, 332, "ACCESO REMOTO", "M470 350H430"],
          ].map(([x, y, label, path], i) => (
            <g key={String(label)}>
              <rect x={Number(x)} y={Number(y)} width="165" height="58" className={styles.darkPaper} />
              <text x={Number(x) + 82} y={Number(y) + 34} textAnchor="middle" className={styles.svgLabel}>{label}</text>
              <motion.path d={String(path)} className={styles.warningLineDashed} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: i * 0.12 }} />
            </g>
          ))}
          {index >= 4 ? (
            <g transform="translate(90 458)">
              <text x="0" y="0" className={styles.svgSmall}>RIESGO</text>
              <text x="145" y="0" className={styles.svgSmall}>CONTROL</text>
              <text x="300" y="0" className={styles.svgSmall}>RESPONSABLE</text>
              <text x="475" y="0" className={styles.svgSmall}>RECURSOS</text>
              <path d="M0 18H520" className={styles.tealLine} />
            </g>
          ) : null}
        </g>
      </Present>
    </SvgFrame>
  );
}

function Week({ beat }: { beat: string }) {
  const ids = ["entrada-ia", "ficcion", "lunes", "martes", "miercoles", "internet", "usb", "sin-computadoras", "enhorabuena", "mochila"];
  const index = ids.indexOf(beat);
  const computerGone = index >= 7;
  const dayNumber = index <= 2 ? "01" : index === 3 ? "02" : index <= 5 ? "03" : index === 6 ? "04" : "05";
  return (
    <SvgFrame title="Una oficina pierde herramientas a medida que avanza la semana">
      <g transform="translate(64 50)">
        <rect width="632" height="466" className={styles.officeRoom} />
        <path d="M0 405H632" className={styles.lineStrong} />
        <rect x="110" y="326" width="412" height="80" className={styles.desk} />
        <Present show={!computerGone} y={-60}>
          <rect x="220" y="165" width="220" height="145" rx="5" className={styles.monitor} />
          <rect x="239" y="184" width="182" height="106" className={styles.monitorScreen} />
          <path d="M330 310V339M286 339H374" className={styles.lineStrong} />
        </Present>
        <g transform="translate(370 337) rotate(2)">
          <rect width="132" height="74" className={styles.report} />
          <text x="12" y="22" className={styles.svgLabelDark}>INFORME</text>
          <text x="12" y="52" className={styles.svgHeadlineDark}>MIÉRCOLES</text>
        </g>
        <g transform="translate(22 20)">
          <rect width="150" height="98" className={styles.calendar} />
          <text x="18" y="30" className={styles.svgLabelDark}>{index < 3 ? "LUNES" : index < 5 ? "MARTES" : index < 6 ? "MIÉRCOLES" : index < 7 ? "JUEVES" : "VIERNES"}</text>
          <text x="18" y="76" className={styles.calendarNumber}>{dayNumber}</text>
        </g>
        <Present show={index >= 2 && index < 7} y={24}>
          <g transform="translate(253 202)">
            <rect width="154" height="58" rx="4" className={styles.appWindow} />
            <text x="77" y="35" textAnchor="middle" className={styles.svgHeadlineLight}>{index === 5 ? "Google" : "ChatGPT"}</text>
          </g>
        </Present>
        <Present show={index === 2} y={-24}>
          <rect x="238" y="184" width="184" height="106" className={styles.blockCurtain} />
          <text x="330" y="242" textAnchor="middle" className={styles.svgLabel}>ACCESO BLOQUEADO</text>
        </Present>
        <Present show={index === 3} x={38}>
          <g transform="translate(500 183) rotate(8)">
            <rect width="78" height="130" rx="12" className={styles.phone} />
            <rect x="9" y="18" width="60" height="91" className={styles.monitorScreen} />
            <path d="M20 40H58V84H20Z" className={styles.reportOutline} />
          </g>
          <rect x="488" y="332" width="106" height="74" className={styles.confiscated} />
          <text x="541" y="375" textAnchor="middle" className={styles.svgLabel}>MÓVILES</text>
        </Present>
        <Present show={index === 4} y={18}>
          <text x="316" y="465" textAnchor="middle" className={styles.bigWednesday}>MIÉRCOLES</text>
        </Present>
        <Present show={index === 5} x={-18}>
          <path d="M253 228H172C125 228 125 146 82 146" className={styles.warningLineDashed} />
          <path d="M82 128V164M68 146H96" className={styles.warningLine} />
          <text x="84" y="194" textAnchor="middle" className={styles.warningText}>INTERNET</text>
        </Present>
        <Present show={index === 6} y={20}>
          <g transform="translate(190 346)">
            <rect width="74" height="32" rx="3" className={styles.usb} />
            <rect x="74" y="7" width="26" height="18" className={styles.usbMetal} />
          </g>
          <path d="M290 354v40M278 354v40M302 354v40" className={styles.warningLine} />
          <text x="290" y="423" textAnchor="middle" className={styles.svgLabel}>USB BLOQUEADO</text>
        </Present>
        <Present show={index === 7} x={46}>
          <g transform="translate(508 220)">
            <rect width="90" height="82" className={styles.printer} />
            <rect x="15" y="-48" width="60" height="70" className={styles.paper} />
            <path d="M25-28H65M25-12H59" className={styles.paperLine} />
          </g>
          <motion.path d="M520 170L620 90" className={styles.warningLine} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
          <motion.path d="M330 235L650 80" className={styles.warningLine} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.14 }} />
        </Present>
        <Present show={index >= 8} y={20}>
          <g transform="translate(215 230)">
            <rect width="205" height="142" className={styles.paperStrong} />
            <path d="M28 35H170M28 60H156M28 85H176M28 110H130" className={styles.paperLine} />
            <path d="M175 130l62-104 13 8-62 104Z" className={styles.pencil} />
          </g>
        </Present>
        <Present show={index === 9} x={44}>
          <g transform="translate(468 212)">
            <path d="M18 50c0-34 22-50 52-50s52 16 52 50v168H18Z" className={styles.backpack} />
            <path d="M45 0c0-38 50-38 50 0" className={styles.lineStrong} />
            <path d="M36 90H104V158H36Z" className={styles.lineDim} />
          </g>
          <motion.g initial={{ x: -80, rotate: -8 }} animate={{ x: 0, rotate: 4 }} transition={{ duration: 0.72, ease }}>
            <rect x="484" y="285" width="92" height="116" className={styles.paperStrong} />
          </motion.g>
        </Present>
      </g>
      <text x="380" y="555" textAnchor="middle" className={styles.svgSmall}>{index < 2 ? "SITUACIÓN FICTICIA" : "MISMA TAREA · MENOS HERRAMIENTAS"}</text>
    </SvgFrame>
  );
}

function Aftermath({ beat }: { beat: string }) {
  const index = ["exagerada", "alcance", "shadow-ai"].indexOf(beat);
  return (
    <SvgFrame title="Un control cierra un camino mientras otros permanecen abiertos">
      <g transform="translate(74 96)">
        <rect x="244" y="155" width="124" height="124" rx="62" className={styles.dataCore} />
        <text x="306" y="211" textAnchor="middle" className={styles.svgLabelDark}>DATOS</text>
        <text x="306" y="236" textAnchor="middle" className={styles.svgSmallDark}>DE LA EMPRESA</text>
        {[
          ["IA APROBADA", 22, 30, false],
          ["CUENTA PERSONAL", 430, 20, true],
          ["CORREO", 12, 345, true],
          ["DISPOSITIVO", 430, 352, true],
        ].map(([label, x, y, danger], i) => (
          <g key={String(label)}>
            <rect x={Number(x)} y={Number(y)} width="180" height="58" className={danger ? styles.darkPaper : styles.approvedBox} />
            <text x={Number(x) + 90} y={Number(y) + 35} textAnchor="middle" className={styles.svgLabel}>{label}</text>
            <motion.path
              d={`M${Number(x) + 90} ${Number(y) + (Number(y) < 200 ? 58 : 0)} Q306 217 306 ${Number(y) < 200 ? 155 : 279}`}
              className={danger ? styles.warningLineDashed : styles.tealLine}
              initial={{ pathLength: 0, opacity: index >= (i === 0 ? 0 : 1) ? 1 : 0.2 }}
              animate={{ pathLength: 1, opacity: index >= (i === 0 ? 0 : 1) ? 1 : 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            />
          </g>
        ))}
        <Present show={index >= 1} y={18}>
          <path d="M216 140l180 154" className={styles.blockBar} />
          <text x="228" y="316" className={styles.warningText}>UN CAMINO CERRADO</text>
        </Present>
        <Present show={index >= 2} y={18}>
          <g transform="translate(186 438)">
            <text x="120" y="0" textAnchor="middle" className={styles.svgHeadlineLight}>MENOS VISIBILIDAD</text>
            <path d="M20 20H220" className={styles.warningLineDashed} />
          </g>
        </Present>
      </g>
    </SvgFrame>
  );
}

function Workflow({ beat }: { beat: string }) {
  const rebuild = ["decidir", "camino", "decisiones"].includes(beat);
  const ids = rebuild ? ["decidir", "camino", "decisiones"] : ["autoridad", "cerrado", "sorpresa", "intenciones"];
  const index = ids.indexOf(beat);
  if (rebuild) {
    return (
      <SvgFrame title="Un camino de trabajo con controles y decisiones visibles">
        <g transform="translate(48 120)">
          {[
            [0, "INFORMACIÓN", "Clasificar"],
            [156, "ACCESO", "Limitar"],
            [312, "HERRAMIENTA", "Aprobar"],
            [468, "ACTIVIDAD", "Registrar"],
          ].map(([x, a, b], i) => (
            <g key={String(a)} transform={`translate(${x} 0)`}>
              <motion.rect
                width="136"
                height="118"
                className={i <= index ? styles.approvedBox : styles.darkPaper}
                initial={{ opacity: i <= index ? 1 : 0.34 }}
                animate={{ opacity: i <= index ? 1 : 0.34 }}
              />
              <text x="68" y="42" textAnchor="middle" className={styles.svgLabel}>{a}</text>
              <text x="68" y="78" textAnchor="middle" className={styles.svgHeadlineLight}>{b}</text>
              {i < 3 ? <path d="M136 59H156" className={styles.tealLine} /> : null}
            </g>
          ))}
          <g transform="translate(0 205)">
            <rect width="604" height="164" className={styles.workflowPanel} />
            <text x="24" y="37" className={styles.svgLabel}>SOLICITUD · RESUMIR INFORME</text>
            <path d="M24 62H580" className={styles.lineDim} />
            {index === 0 ? (
              <text x="24" y="110" className={styles.svgHeadlineLight}>El camino existe y se puede entender.</text>
            ) : index === 1 ? (
              <g>
                <text x="24" y="101" className={styles.svgSmall}>EXCEPCIÓN EN REVISIÓN</text>
                <rect x="24" y="119" width="556" height="14" className={styles.progressTrack} />
                <motion.rect x="24" y="119" width="402" height="14" className={styles.progressFill} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ transformOrigin: "left" }} />
              </g>
            ) : (
              <g transform="translate(24 88)">
                <rect width="150" height="48" className={styles.approvedBox} />
                <text x="75" y="30" textAnchor="middle" className={styles.svgLabel}>HABILITAR</text>
                <rect x="202" width="150" height="48" className={styles.ticket} />
                <text x="277" y="30" textAnchor="middle" className={styles.svgLabel}>ADAPTAR</text>
                <rect x="404" width="150" height="48" className={styles.confiscated} />
                <text x="479" y="30" textAnchor="middle" className={styles.svgLabel}>RECHAZAR</text>
              </g>
            )}
          </g>
        </g>
      </SvgFrame>
    );
  }
  return (
    <SvgFrame title="Una solicitud se cierra mientras el trabajo continúa pendiente">
      <g transform="translate(55 104)">
        <rect x="0" y="0" width="270" height="330" className={styles.workflowPanel} />
        <rect x="380" y="0" width="270" height="330" className={styles.workflowPanel} />
        <text x="24" y="38" className={styles.svgLabel}>SEGURIDAD</text>
        <text x="404" y="38" className={styles.svgLabel}>OPERACIONES</text>
        <path d="M24 60H246M404 60H626" className={styles.lineDim} />
        <g transform="translate(48 104)">
          <rect width="180" height="116" className={styles.ticket} />
          <text x="15" y="27" className={styles.svgLabel}>SOLICITUD #291</text>
          <text x="15" y="58" className={styles.svgSmall}>Uso de IA</text>
          <text x="15" y="88" className={styles.warningText}>{index >= 1 ? "CERRADA" : "EN REVISIÓN"}</text>
        </g>
        <g transform="translate(428 104)">
          <rect width="180" height="116" className={styles.report} />
          <text x="15" y="27" className={styles.svgLabelDark}>INFORME</text>
          <text x="15" y="58" className={styles.svgSmallDark}>Entrega</text>
          <text x="15" y="88" className={styles.warningText}>PENDIENTE</text>
        </g>
        <Present show={index >= 1} x={-24}>
          <path d="M228 162H428" className={styles.warningLineDashed} />
          <text x="328" y="147" textAnchor="middle" className={styles.svgSmall}>EL TRABAJO CONTINÚA</text>
        </Present>
        <Present show={index >= 2} y={18}>
          <g transform="translate(200 382)">
            <rect width="310" height="64" className={styles.darkPaper} />
            <text x="155" y="38" textAnchor="middle" className={styles.svgLabel}>HERRAMIENTA NO AUTORIZADA</text>
          </g>
        </Present>
        <Present show={index >= 3} y={18}>
          <text x="135" y="292" textAnchor="middle" className={styles.svgSmall}>AMENAZA DELIBERADA</text>
          <text x="515" y="292" textAnchor="middle" className={styles.svgSmall}>ERROR POR DESCONOCIMIENTO</text>
        </Present>
      </g>
    </SvgFrame>
  );
}

function Finale({ beat }: { beat: string }) {
  const index = ["cansancio-final", "hacerse-cargo", "informe-final"].indexOf(beat);
  return (
    <SvgFrame title="El informe pendiente vuelve al centro de la historia">
      <g transform="translate(90 78)">
        <rect x="0" y="0" width="580" height="420" className={styles.officeRoom} />
        <rect x="70" y="282" width="440" height="80" className={styles.desk} />
        <rect x="200" y="122" width="180" height="132" rx="5" className={styles.monitor} />
        <rect x="218" y="140" width="144" height="92" className={styles.monitorScreen} />
        <path d="M290 254V288" className={styles.lineStrong} />
        <motion.g
          transform="translate(222 288)"
          animate={{ scale: index === 2 ? 1.24 : 1 }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          transition={{ duration: 0.75, ease }}
        >
          <rect width="180" height="116" className={styles.report} />
          <text x="18" y="31" className={styles.svgLabelDark}>INFORME</text>
          <text x="18" y="64" className={styles.svgSmallDark}>Entrega</text>
          <text x="18" y="94" className={styles.svgHeadlineDark}>MIÉRCOLES</text>
        </motion.g>
        <Present show={index >= 1} y={18}>
          <g transform="translate(22 36)">
            <rect width="166" height="70" className={styles.darkPaper} />
            <text x="83" y="27" textAnchor="middle" className={styles.svgLabel}>PROTEGER</text>
            <text x="83" y="50" textAnchor="middle" className={styles.svgSmall}>Recursos reales</text>
          </g>
          <g transform="translate(392 36)">
            <rect width="166" height="70" className={styles.approvedBox} />
            <text x="83" y="27" textAnchor="middle" className={styles.svgLabel}>TRABAJAR</text>
            <text x="83" y="50" textAnchor="middle" className={styles.svgSmall}>Un camino posible</text>
          </g>
        </Present>
      </g>
    </SvgFrame>
  );
}

export function CyberStage({ visual, activeBeat, calm }: Props) {
  const key = `${visual}-${calm ? "calm" : "motion"}`;
  return (
    <div className={styles.stage} data-calm={calm ? "true" : "false"}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }}>
          {visual === "meeting" ? <Meeting beat={activeBeat} /> : null}
          {visual === "desk" ? <Desk beat={activeBeat} /> : null}
          {visual === "server" ? <Server beat={activeBeat} /> : null}
          {visual === "scale" ? <Scale beat={activeBeat} /> : null}
          {visual === "evidence" ? <Evidence beat={activeBeat} /> : null}
          {visual === "week" ? <Week beat={activeBeat} /> : null}
          {visual === "aftermath" ? <Aftermath beat={activeBeat} /> : null}
          {visual === "workflow" ? <Workflow beat={activeBeat} /> : null}
          {visual === "finale" ? <Finale beat={activeBeat} /> : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
