import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "For keynotes, panels, advisory, training or media. I reply within 48 hours if it makes sense.",
  alternates: { canonical: "/en/contacto", languages: { es: "/contacto", en: "/en/contacto" } },
};

export default function Page() {
  return <ContactPage locale="en" />;
}
