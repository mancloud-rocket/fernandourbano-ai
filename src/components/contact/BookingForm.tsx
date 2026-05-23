"use client";

import { useState } from "react";
import type { SiteContent } from "@/content/types";
import { buildBookingMailto } from "@/lib/mailto";
import { IntentSelector } from "./IntentSelector";

type Props = {
  contact: SiteContent["contact"];
  ui: SiteContent["ui"];
};

export function BookingForm({ contact, ui }: Props) {
  const [intentId, setIntentId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [context, setContext] = useState("");
  const [email, setEmail] = useState("");
  const [deadline, setDeadline] = useState("");
  const [fallback, setFallback] = useState("");

  const intent = contact.intents.find((i) => i.id === intentId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!intent) return;
    const mailto = buildBookingMailto({
      intent: intent.id,
      intentLabel: intent.emailSubject,
      name,
      organization,
      context,
      email,
      deadline,
    });
    setFallback(mailto);
    window.location.assign(mailto);
  };

  const inputClass =
    "w-full border border-stroke bg-ink-deep px-4 py-3 font-mono text-[13px] text-cream placeholder:text-cream-mute focus:border-teal focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <IntentSelector
        intents={contact.intents}
        selected={intentId}
        onSelect={setIntentId}
      />

      {!intent ? (
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-cream-mute">
          {ui.chooseIntent}
        </p>
      ) : (
        <div className="mt-10 space-y-6 border-t border-stroke pt-10">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute">
                {contact.form.nameLabel}
              </span>
              <input
                required
                autoComplete="name"
                maxLength={120}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${inputClass} mt-2`}
              />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute">
                {contact.form.orgLabel}
              </span>
              <input
                autoComplete="organization"
                maxLength={160}
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className={`${inputClass} mt-2`}
              />
            </label>
          </div>
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute">
              {contact.form.contextLabel}
            </span>
            <textarea
              required
              minLength={20}
              maxLength={4000}
              rows={5}
              placeholder={intent.placeholder}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className={`${inputClass} mt-2 resize-y`}
            />
          </label>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute">
                {contact.form.emailLabel}
              </span>
              <input
                required
                type="email"
                autoComplete="email"
                maxLength={254}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${inputClass} mt-2`}
              />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute">
                {contact.form.deadlineLabel}
              </span>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className={`${inputClass} mt-2`}
              />
            </label>
          </div>
          <button
            type="submit"
            className="border border-teal bg-teal-soft px-8 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-teal/20"
          >
            {contact.form.submit}
          </button>
        </div>
      )}

      {fallback ? (
        <p className="mt-8 text-small text-cream-mute">
          {ui.mailFallback}{" "}
          <a href={fallback} className="text-teal underline">
            Abrir enlace de correo
          </a>
        </p>
      ) : null}
    </form>
  );
}
