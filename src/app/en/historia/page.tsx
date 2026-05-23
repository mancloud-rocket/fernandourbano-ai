import type { Metadata } from "next";
import { StoryPage } from "@/components/pages/Story";

export const metadata: Metadata = {
  title: "Story",
  description:
    "From Uruguay across the continent. The real road: roles, stages, awards and the miles that back what I say.",
  alternates: { canonical: "/en/historia", languages: { es: "/historia", en: "/en/historia" } },
};

export default function Page() {
  return <StoryPage locale="en" />;
}
