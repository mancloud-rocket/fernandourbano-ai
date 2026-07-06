import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/Services";

export const metadata: Metadata = {
  title: "Qué hago",
  description:
    "Producto agéntico, automatización e IA aplicada al negocio. Las áreas en las que trabajo y sobre las que escribo.",
};

export default function Page() {
  return <ServicesPage locale="es" />;
}
