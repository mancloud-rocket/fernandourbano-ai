import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { BOOK_READER_URL, bookTopics } from "@/content/book";
import { BookSignup } from "./BookSignup";

export function BookPage() {
  return <div className="book-launch">
    <a href="#contenido-libro" className="book-skip">Saltar al contenido</a>
    <header className="book-header"><Link href="/" aria-label="Fernando Urbano, inicio"><Logo variant="lockup" height={38} priority/></Link><Link href="/">Volver a mi web <span aria-hidden="true">↗</span></Link></header>
    <main id="contenido-libro">
      <section className="book-hero" aria-labelledby="book-title">
        <div className="book-hero-copy">
          <h1 id="book-title">El que<br/><span>guía</span><svg viewBox="0 0 180 100" aria-hidden="true"><path d="M3 84C67 91 59 6 118 19s26 64 57 11"/></svg></h1>
          <p className="book-subtitle">Guía a la inteligencia artificial en tu trabajo, antes de que ella te guíe a ti.</p>
          <p className="book-intro">El mundo laboral está cambiando mientras seguimos confiando en las reglas que aprendimos para ganarnos un lugar. Este libro las cuestiona y te ayuda a entender qué puedes hacer tú.</p>
          <BookSignup/>
        </div>
        <div className="book-object-column">
          <div className="book-object"><Image className="book-cover" src="/book/tapa-el-que-guia.jpg" alt="Tapa de El que guía, de Fernando Urbano: un laberinto oscuro atravesado por un hilo rojo." width={1600} height={2560} sizes="(max-width: 760px) 64vw, (max-width: 1100px) 38vw, 440px" priority/></div>
          <p className="book-object-caption"><span>Fernando Urbano</span><span>Un libro en desarrollo</span></p>
          <div className="book-release-note"><span className="book-status-dot" aria-hidden="true"/><p>La lista está abierta.<br/>La fecha de publicación todavía no está anunciada.</p></div>
        </div>
      </section>
      <section className="book-opening" aria-labelledby="book-opening-title">
        <div className="book-opening-rule" aria-hidden="true"><span/></div>
        <div className="book-opening-grid"><h2 id="book-opening-title">Puedes ser el mejor en tu trabajo y quedarte sin él porque ese puesto ya no es necesario.</h2><div><p>Es una de las ideas con las que empieza el libro. Si la inteligencia artificial permite hacer parte del trabajo con menos personas, habrá que revisar qué se espera de cada una.</p><a href={BOOK_READER_URL}>Leer el comienzo <span aria-hidden="true">↗</span></a><small>Fragmento de la introducción</small></div></div>
      </section>
      <section className="book-discussions" aria-labelledby="book-discussions-title"><div className="book-discussions-heading"><h2 id="book-discussions-title">Lo que vamos<br/>a cuestionar</h2><p>Para personas que conocen su trabajo y quieren entender qué está cambiando, aunque nunca hayan usado inteligencia artificial.</p></div><div className="book-topics">{bookTopics.map(topic=><article key={topic.title}><h3>{topic.title}</h3><p>{topic.text}</p></article>)}</div></section>
      <section className="book-author" aria-labelledby="book-author-title"><div className="book-author-portrait"><Image src="/portraits/01.jpeg" alt="Fernando Urbano en un evento de Rocketbot en Nasdaq, Nueva York." width={600} height={800} sizes="(max-width: 760px) 72vw, 260px"/></div><div><h2 id="book-author-title">Soy Fernando Urbano</h2><p>Trabajo diseñando y poniendo en marcha formas de usar la tecnología en el trabajo. He liderado equipos en multinacionales, empresas medianas y emprendimientos, y doy charlas en Latinoamérica.</p><p>Escribo este libro para acompañar a quien ve el cambio, pero todavía no sabe dónde empezar ni qué puede significar para su propia vida.</p><Link href="/historia">Conoce mi historia <span aria-hidden="true">↗</span></Link></div></section>
      <section className="book-last-invitation"><h2>Empieza por el primer capítulo</h2><p>Conoce el libro y apúntate para enterarte cuando abra la preventa.</p><a className="book-primary-action" href="#registro">Quiero empezar a leer <span aria-hidden="true">↑</span></a><p className="book-form-small">Registro gratuito. Sin pagos ni reserva de ejemplares.</p></section>
    </main>
    <footer className="book-footer"><Link href="/">Fernando Urbano</Link><p>© 2026 · El que guía</p><Link href="/el-que-guia/privacidad">Privacidad del registro</Link></footer>
  </div>;
}
