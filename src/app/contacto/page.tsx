import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Para conferencias, paneles, asesoría, formación o medios. Respondo en 48 horas si tiene sentido.",
};

export default function Page() {
  return <ContactPage locale="es" />;
}
