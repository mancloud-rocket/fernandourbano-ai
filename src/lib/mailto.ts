import { sanitizePlainText } from "./sanitize";

export type BookingPayload = {
  intent: string;
  intentLabel: string;
  name: string;
  organization: string;
  context: string;
  email: string;
  deadline?: string;
};

const LIMITS = {
  name: 120,
  organization: 160,
  context: 4000,
  email: 254,
  intentLabel: 200,
} as const;

export function buildBookingMailto(
  payload: BookingPayload,
  to = "hola@fernandourbano.ai",
): string {
  const intentLabel = sanitizePlainText(payload.intentLabel, LIMITS.intentLabel);
  const name = sanitizePlainText(payload.name, LIMITS.name);
  const organization = sanitizePlainText(payload.organization, LIMITS.organization);
  const email = sanitizePlainText(payload.email, LIMITS.email);
  const context = sanitizePlainText(payload.context, LIMITS.context);
  const deadline = payload.deadline
    ? sanitizePlainText(payload.deadline, 32)
    : "";

  const subject = encodeURIComponent(intentLabel);
  const body = encodeURIComponent(
    [
      `Tipo: ${intentLabel}`,
      `Nombre: ${name}`,
      `Organizacion: ${organization}`,
      `Email: ${email}`,
      deadline ? `Responder antes de: ${deadline}` : "",
      "",
      "Contexto:",
      context,
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}
