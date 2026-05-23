import type { Metadata } from "next";
import { PressPage } from "@/components/pages/Press";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Awards, features and appearances. Downloadable press kit for producers and editors.",
  alternates: { canonical: "/en/prensa", languages: { es: "/prensa", en: "/en/prensa" } },
};

export default function Page() {
  return <PressPage locale="en" />;
}
