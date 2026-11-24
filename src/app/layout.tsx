import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const description =
  "Pablo da Matta — AI Product Owner em Recife. Discovery, MVP, PRD e entrega com qualidade, unindo negócio, QA e IA generativa. Product Owner voluntário do Discord do NASA Space Apps Recife 2026, ex-PO de 2 squads na Residência BFD25 (Aponti) e autor de artigo sobre o programa.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: "Pablo da Matta · AI Product Owner",
  description,
  keywords: [
    "Product Owner",
    "AI Product Owner",
    "Product Manager",
    "QA",
    "Recife",
    "Scrum",
    "BDD",
    "Pablo da Matta",
  ],
  authors: [{ name: profile.fullName, url: profile.site }],
  openGraph: {
    title: "Pablo da Matta · AI Product Owner",
    description,
    url: profile.site,
    siteName: "Pablo da Matta",
    locale: "pt_BR",
    type: "profile",
    images: [{ url: "/pablo.jpg", width: 800, height: 800, alt: "Pablo da Matta" }],
  },
  twitter: {
    card: "summary",
    title: "Pablo da Matta · AI Product Owner",
    description,
    images: ["/pablo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#05070f",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  jobTitle: profile.role,
  url: profile.site,
  image: `${profile.site}/pablo.jpg`,
  address: { "@type": "PostalAddress", addressLocality: "Recife", addressRegion: "PE", addressCountry: "BR" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["Product Management", "Product Discovery", "Scrum", "BDD", "Quality Assurance", "Generative AI"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} antialiased`}
    >
      <body className="noise min-h-dvh">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
