import type { Metadata } from "next";
import { SpeakingPage } from "@/components/pages/Speaking";

export const metadata: Metadata = {
  title: "Talks",
  description:
    "Keynotes, panels, training and interviews. Applied AI for business: what works, what doesn't, and why.",
  alternates: { canonical: "/en/charlas", languages: { es: "/charlas", en: "/en/charlas" } },
};

export default function Page() {
  return <SpeakingPage locale="en" />;
}
