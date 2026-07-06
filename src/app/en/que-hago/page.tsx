import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/Services";

export const metadata: Metadata = {
  title: "What I do",
  description:
    "Agentic product, automation and applied AI for business. The areas I work in and write about.",
  alternates: { canonical: "/en/que-hago", languages: { es: "/que-hago", en: "/en/que-hago" } },
};

export default function Page() {
  return <ServicesPage locale="en" />;
}
