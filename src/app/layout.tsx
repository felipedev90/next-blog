import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Bruno_Ace_SC, Alumni_Sans_Pinstripe } from "next/font/google";

const brunoAce = Bruno_Ace_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title",
});

const aluminiSans = Alumni_Sans_Pinstripe({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-text",
});

export const metadata: Metadata = {
  title: "Next-Blog",
  description: "A sua Next fonte de informações!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${brunoAce.variable} ${aluminiSans.variable} min-h-screen flex flex-col text-white`}
      >
        <Header />
        <Hero />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
