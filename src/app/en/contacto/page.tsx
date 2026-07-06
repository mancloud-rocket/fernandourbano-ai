import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write me by email or LinkedIn. I read everything: ideas, comments and hellos.",
  alternates: { canonical: "/en/contacto", languages: { es: "/contacto", en: "/en/contacto" } },
};

export default function Page() {
  return <ContactPage locale="en" />;
}
