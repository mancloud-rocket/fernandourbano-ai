import type { Metadata } from "next";
import { SpeakingPage } from "@/components/pages/Speaking";

export const metadata: Metadata = {
  title: "Charlas",
  description:
    "Keynotes, paneles, formación y entrevistas. IA aplicada al negocio: lo que sí funciona, lo que no, y por qué.",
};

export default function Page() {
  return <SpeakingPage locale="es" />;
}
