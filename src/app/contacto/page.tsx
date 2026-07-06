import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribime por correo o LinkedIn. Leo todo: ideas, comentarios y saludos.",
};

export default function Page() {
  return <ContactPage locale="es" />;
}
