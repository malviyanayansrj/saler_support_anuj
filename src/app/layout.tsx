import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#21F1A8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Saler Support | E-Commerce Marketplace Account Management & Growth Agency",
    template: "%s | Saler Support",
  },
  description:
    "Scale your online store on Amazon, Flipkart, Meesho, JioMart & Blinkit with dedicated seller account managers, catalog SEO, and sponsored ads management.",
  keywords: [
    "Saler Support",
    "Seller Account Management",
    "Amazon Account Management Agency",
    "Flipkart Account Management",
    "Meesho Seller Support",
    "JioMart Onboarding",
    "Product Listing Optimization",
    "E-commerce Sponsored Ads PPC",
  ],
  authors: [{ name: "Saler Support Team" }],
  creator: "Saler Support",
  metadataBase: new URL("https://salersupport.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://salersupport.com",
    title: "Saler Support | E-Commerce Marketplace Account Management Agency",
    description:
      "Launch, manage & grow your marketplace business with dedicated account managers, listing optimization, and PPC management.",
    siteName: "Saler Support",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saler Support | E-Commerce Growth Agency",
    description:
      "Dedicated seller support for Amazon, Flipkart, Meesho, JioMart & Blinkit.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-dark-gray font-sans selection:bg-tiffany selection:text-dark-gray">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}



