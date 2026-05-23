import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/Services";

export const metadata: Metadata = {
  title: "Qué hago",
  description:
    "Producto agéntico, asesoría a C-level y formación in-company. Tres formas concretas de trabajar conmigo.",
};

export default function Page() {
  return <ServicesPage locale="es" />;
}
