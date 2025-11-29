import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Cutive, Martel, Work_Sans } from "next/font/google";
import Footer from "./components/footer";
import { Navbar } from "./components/nav";
import "./global.css";
import { baseUrl } from "./sitemap";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["100"],
});

const cutive = Cutive({
  subsets: ["latin"],
  variable: "--font-cutive",
  weight: ["400"],
});

const martel = Martel({
  subsets: ["latin"],
  variable: "--font-martel",
  weight: ["300"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Next.js Portfolio Starter",
    template: "%s | Next.js Portfolio Starter",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
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
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(workSans.variable, cutive.variable, martel.variable)}
      style={{ backgroundColor: "#0a0a0a", color: "#FFFFFF" }}
    >
      <body className="antialiased max-w-xl mx-4 mt-2 lg:mx-auto flex flex-col min-h-screen">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
