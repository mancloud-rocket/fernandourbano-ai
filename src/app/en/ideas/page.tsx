import type { Metadata } from "next";
import { IdeasPage } from "@/components/pages/Ideas";

export const metadata: Metadata = {
  title: "Ideas",
  description:
    "Essays and takes on AI, agents and business. No filter, with cases and numbers.",
  alternates: { canonical: "/en/ideas", languages: { es: "/ideas", en: "/en/ideas" } },
};

export default function Page() {
  return <IdeasPage locale="en" />;
}
