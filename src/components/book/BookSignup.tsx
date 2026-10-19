"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { BOOK_CONSENT_VERSION, BOOK_READER_URL, BOOK_REGISTRATION_ORIGIN } from "@/content/book";

export function BookSignup() {
  const [state, setState] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const success = useRef<HTMLHeadingElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "saving") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("saving");
    setMessage("");
    const local = ["localhost", "127.0.0.1"].includes(window.location.hostname);
    const url = (local ? "" : BOOK_REGISTRATION_ORIGIN) + "/api/book/subscribe";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email"), consent: data.get("consent") === "on", website: data.get("website"), consentVersion: BOOK_CONSENT_VERSION, source: new URLSearchParams(location.search).get("utm_source") || "web", locale: "es" }),
        signal: AbortSignal.timeout(60000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error(result.message || "No pudimos guardar tu registro. Inténtalo de nuevo en unos minutos.");
      setState("done");
      requestAnimationFrame(() => success.current?.focus());
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error && error.name !== "TimeoutError" && error.name !== "TypeError" ? error.message : "No pudimos conectar. Tu registro aún no está confirmado; puedes volver a intentarlo.");
    }
  }

  if (state === "done") return <div className="book-signup-success" role="status">
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="none" stroke="currentColor"/><path d="m11 20 6 6 13-14" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
    <h2 ref={success} tabIndex={-1}>Ya estás en la lista</h2>
    <p>Tu registro quedó guardado. Mientras el libro sigue tomando forma, puedes empezar a leer el primer capítulo.</p>
    <a className="book-primary-action" href={BOOK_READER_URL}>Leer el primer capítulo <span aria-hidden="true">↗</span></a>
    <p className="book-form-small">La inscripción es gratuita y no implica una compra.</p>
  </div>;

  return <form id="registro" className="book-signup" onSubmit={submit} action="/api/book/subscribe" method="post" aria-busy={state === "saving"}>
    <h2>Empieza a leer antes del lanzamiento</h2>
    <p>Apúntate a la lista, lee el primer capítulo gratis y recibe el aviso cuando abra la preventa.</p>
    <label className="book-field-label" htmlFor="book-email">Tu correo electrónico</label>
    <div className="book-input-row">
      <input id="book-email" name="email" type="email" autoComplete="email" inputMode="email" enterKeyHint="send" spellCheck={false} required maxLength={254} placeholder="tu@correo.com" aria-describedby={state === "error" ? "book-form-error book-privacy-note" : "book-privacy-note"} disabled={state === "saving"}/>
      <button className="book-primary-action" type="submit" disabled={state === "saving"}>{state === "saving" ? "Guardando…" : "Quiero leer el capítulo"}<span aria-hidden="true">{state === "saving" ? "" : "↗"}</span></button>
    </div>
    <div className="book-honeypot" aria-hidden="true"><label htmlFor="book-website">Deja este campo vacío</label><input id="book-website" name="website" tabIndex={-1} autoComplete="off"/></div>
    <label className="book-consent"><input type="checkbox" name="consent" required disabled={state === "saving"}/><span>Quiero que Fernando Urbano me envíe por correo avances de <em>El que guía</em> y el aviso de lanzamiento. Puedo solicitar la baja cuando quiera.</span></label>
    <p id="book-privacy-note" className="book-form-small">Solo para este libro. <Link href="/el-que-guia/privacidad">Cómo se usa tu correo</Link>.</p>
    {state === "error" && <p id="book-form-error" className="book-form-error" role="alert">{message}</p>}
    <noscript><p className="book-form-small">Puedes registrarte con este formulario aunque JavaScript esté desactivado.</p></noscript>
  </form>;
}
