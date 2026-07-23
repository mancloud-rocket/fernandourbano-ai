import type { Metadata } from "next";
import { headers } from "next/headers";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BackdropAura } from "@/components/BackdropAura";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fernando Urbano - IA sin bluff",
    template: "%s · Fernando Urbano",
  },
  description:
    "Director de Innovación en Rocketbot. Hablo de IA porque la construyo. 200+ clientes asesorados, 7 países, premio 40 Under 40 Innovators 2024.",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Fernando Urbano",
    title: "Fernando Urbano - IA sin bluff",
    description:
      "Constructor de producto agéntico y voz LATAM-Iberia en IA aplicada al negocio.",
    url: SITE_URL,
    images: [
      {
        url: "/logo/logo-grande.png",
        width: 2400,
        height: 600,
        alt: "Fernando Urbano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Urbano - IA sin bluff",
    description:
      "Constructor de producto agéntico y voz LATAM-Iberia en IA aplicada al negocio.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const pathname = h.get("x-pathname") ?? "/";
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";

  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-cream">
        <BackdropAura />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
