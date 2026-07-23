import type { Metadata } from "next";
import { PostsPage } from "@/components/pages/Posts";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Short animated posts on applied AI for business. Made to read in a minute and share.",
  alternates: { canonical: "/en/posts", languages: { es: "/posts", en: "/en/posts" } },
};

export default function Page() {
  return <PostsPage locale="en" />;
}
