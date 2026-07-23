import type { Metadata } from "next";
import { HomePage } from "@/components/pages/Home";
import { getContent } from "@/content";

const content = getContent("en");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fernando Urbano",
    title: content.meta.title,
    description: content.meta.description,
    url: "/en",
  },
};

export default function Page() {
  return <HomePage locale="en" />;
}
