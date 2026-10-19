import type { Metadata } from "next";
import { BookPage } from "@/components/book/BookPage";
import "./book.css";

export const metadata: Metadata = {
  title: "El que guía · Lee el primer capítulo",
  description: "Un libro de Fernando Urbano sobre inteligencia artificial y trabajo. Lee el primer capítulo gratis y apúntate al aviso de lanzamiento.",
  alternates: {canonical:"/el-que-guia",languages:{es:"/el-que-guia"}},
  openGraph: {title:"El que guía · Fernando Urbano",description:"Entiende qué está cambiando en tu trabajo y qué lugar puedes ocupar. Lee el primer capítulo y recibe el aviso de lanzamiento.",url:"/el-que-guia",images:[{url:"/book/compartir-el-que-guia.jpg",width:1200,height:630,alt:"El que guía, de Fernando Urbano"}]},
  twitter: {card:"summary_large_image",title:"El que guía · Fernando Urbano",images:["/book/compartir-el-que-guia.jpg"]},
};
export default function Page(){return <BookPage/>;}
