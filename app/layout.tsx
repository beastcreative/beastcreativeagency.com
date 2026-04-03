import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import HomeFooter from "@/components/HomeFooter";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Beast Creative Agency | San Antonio's AI-Native Creative Agency",
  description: "Beast is San Antonio's only AI-native creative agency. Branding, web design, SEO, CPG marketing, and AI-powered strategy that makes your brand the one the algorithm trusts.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <NavBar />
        <main>{children}</main>
        <HomeFooter />
      </body>
    </html>
  );
}
