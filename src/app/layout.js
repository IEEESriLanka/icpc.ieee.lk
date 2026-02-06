import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import WinnerPopup from "@/components/WinnerPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "ICPC Sri Lanka 2025/2026 - Code Beyond Borders",
    template: "%s | ICPC Sri Lanka 2025/2026",
  },
  description: "For the first time ever, Sri Lanka enters the world's biggest stage of competitive programming. Join ICPC Sri Lanka 2025/2026 and compete on the world's most prestigious programming contest.",
  keywords: ["ICPC", "Sri Lanka", "programming contest", "competitive programming", "coding competition", "ICPC 2026", "IEEE CodeX", "algorithm competition"],
  authors: [{ name: "IEEE CodeX Sri Lanka" }],
  creator: "IEEE CodeX Sri Lanka",
  publisher: "IEEE CodeX Sri Lanka",
  metadataBase: new URL('https://icpc.ieee.lk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ICPC Sri Lanka 2025/2026 - Code Beyond Borders",
    description: "Sri Lanka's first ICPC contest. Join the world's biggest stage of competitive programming.",
    url: 'https://icpc.ieee.lk',
    siteName: 'ICPC Sri Lanka 2025/2026',
    images: [
      {
        url: '/gallery/54766698584_76f21665d5_k.jpg',
        width: 1920,
        height: 1080,
        alt: 'ICPC Sri Lanka 2025/2026',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICPC Sri Lanka 2025/2026 - Code Beyond Borders',
    description: 'Sri Lanka\'s first ICPC contest. Join the world\'s biggest stage of competitive programming.',
    images: ['/gallery/54766698584_76f21665d5_k.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Analytics />
        <WinnerPopup />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
