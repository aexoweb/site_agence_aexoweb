import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { ChatWidget } from "@/components/ui/chat-widget";
import { JsonLd } from "@/components/ui/json-ld";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const BASE_URL = "https://aexoweb.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Aexo — Agence Web & Intégration IA | Paris",
    template: "%s | Aexo",
  },
  description:
    "Aexo conçoit des sites web sur mesure, applications web et intégrations IA pour TPE, PME et startups. Design épuré, code propre, résultats mesurables. Réponse sous 24h.",
  keywords: [
    "agence web Paris",
    "création site web sur mesure",
    "design UI/UX",
    "intégration IA",
    "référencement SEO",
    "e-commerce",
    "Next.js",
    "développement web",
    "agence digitale",
    "site vitrine",
  ],
  authors: [{ name: "Aexo", url: BASE_URL }],
  creator: "Aexo",
  publisher: "Aexo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "Aexo",
    title: "Aexo — Agence Web & Intégration IA | Paris",
    description:
      "Sites web sur mesure, design UI/UX et intégration IA pour TPE, PME et startups. Résultats mesurables, réponse sous 24h.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aexo — Agence Web & Intégration IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aexo — Agence Web & Intégration IA | Paris",
    description:
      "Sites web sur mesure, design UI/UX et intégration IA. Réponse sous 24h.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        <JsonLd />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <CookieBanner />
        <ChatWidget />
      </body>
    </html>
  );
}
