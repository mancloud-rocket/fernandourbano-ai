import type { Metadata } from "next";
import { PostsPage } from "@/components/pages/Posts";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Posts cortos y animados sobre IA aplicada al negocio. Para leer en un minuto y compartir.",
};

export default function Page() {
  return <PostsPage locale="es" />;
}
