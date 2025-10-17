import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alalmania Zentrum",
  description: "Bienvenue sur Alalmania Zentrum",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/allmania.png",
    apple: "/allmania.png",
  },
  openGraph: {
    title: "Alalmania Zentrum",
    description: "Bienvenue sur Alalmania Zentrum",
    url: "https://alalmaniazentrum.com",
    siteName: "Alalmania Zentrum",
    images: [
      {
        url: "https://alalmaniazentrum.com/allmania.png",
        width: 512,
        height: 512,
        alt: "Alalmania Zentrum Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Alalmania Zentrum",
              "url": "https://alalmaniazentrum.com",
              "logo": "https://alalmaniazentrum.com/allmania.png",
            }),
          }}
        />
      </body>
    </html>
  );
}
