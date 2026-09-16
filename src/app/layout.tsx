import type { Metadata, Viewport } from "next";
import { Poppins, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { clinic } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chiropracticclinicofiowa.com"),
  title: {
    default: `${clinic.name} | Chiropractor in Cedar Rapids, IA`,
    template: `%s | ${clinic.name}`,
  },
  description:
    "Five Palmer-trained doctors in Cedar Rapids offering chiropractic care, StemWave® therapy, spinal decompression, rehab and DOT physicals. Helping you move better, feel better, and live life with less pain.",
  keywords: [
    "chiropractor Cedar Rapids",
    "spinal decompression Cedar Rapids",
    "StemWave therapy Iowa",
    "DOT physicals Cedar Rapids",
    "auto accident chiropractor Cedar Rapids",
  ],
  openGraph: {
    title: `${clinic.name} | Chiropractor in Cedar Rapids, IA`,
    description: clinic.promise,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#1344fe",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${instrument.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
