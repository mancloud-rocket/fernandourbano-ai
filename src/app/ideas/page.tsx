import type { Metadata } from "next";
import { IdeasPage } from "@/components/pages/Ideas";

export const metadata: Metadata = {
  title: "Ideas",
  description:
    "Ensayos y takes sobre IA, agentes y negocio. Sin filtros, con casos y con números.",
};

export default function Page() {
  return <IdeasPage locale="es" />;
}
