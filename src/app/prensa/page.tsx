import type { Metadata } from "next";
import { PressPage } from "@/components/pages/Press";

export const metadata: Metadata = {
  title: "Prensa",
  description:
    "Premios, menciones y apariciones. Press kit descargable para productores y editores.",
};

export default function Page() {
  return <PressPage locale="es" />;
}
