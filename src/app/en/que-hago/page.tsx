import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/Services";

export const metadata: Metadata = {
  title: "What I do",
  description:
    "Agentic product, C-level advisory and in-company training. Three concrete ways to work with me.",
  alternates: { canonical: "/en/que-hago", languages: { es: "/que-hago", en: "/en/que-hago" } },
};

export default function Page() {
  return <ServicesPage locale="en" />;
}
