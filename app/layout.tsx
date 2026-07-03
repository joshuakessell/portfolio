import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joshuakessell.com"),
  title: "Joshua Kessell — Full-Stack Developer, Beyond Vibe Coding",
  description:
    "Six years of enterprise Java/Spring and React/TypeScript, now shipping production software solo with AI-assisted workflows. Dallas, TX.",
  openGraph: {
    title: "Joshua Kessell — Beyond Vibe Coding",
    description:
      "Enterprise engineering experience, AI-accelerated velocity. Full-stack developer in Dallas, TX.",
    url: "https://joshuakessell.com",
    siteName: "Joshua Kessell",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Kessell — Beyond Vibe Coding",
    description:
      "Enterprise engineering experience, AI-accelerated velocity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoBlack.variable}`}>
      <body>{children}</body>
    </html>
  );
}
