import type { Metadata } from "next";
import { StoryPage } from "@/components/pages/Story";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "De Uruguay al continente. El recorrido real: roles, escenarios, premios y kilómetros que sostienen lo que digo.",
};

export default function Page() {
  return <StoryPage locale="es" />;
}
