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
  title: {
    default: "Beast Creative Agency | Marketing Agency in San Antonio, TX",
    template: "%s | Beast Creative Agency",
  },
  description:
    "Beast Creative Agency is San Antonio's full-service marketing agency. Branding, web design, SEO, CPG marketing, and AI-powered strategy that drives real results.",
  metadataBase: new URL("https://www.beastcreativeagency.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Beast Creative Agency",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: "Beast Creative Agency",
              url: "https://www.beastcreativeagency.com",
              logo: "https://beastcreativeagency.com/wp-content/uploads/2025/02/beast-short-logo-green.svg",
              description:
                "Beast Creative Agency is San Antonio's full-service marketing agency specializing in branding, web design, SEO, CPG marketing, and AI-powered strategy.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.4241,
                longitude: -98.4936,
              },
              areaServed: [
                "San Antonio",
                "Austin",
                "Houston",
                "Texas",
                "United States",
              ],
              serviceType: [
                "Branding",
                "Web Design",
                "SEO",
                "CPG Marketing",
                "Social Media Marketing",
                "AI Strategy",
                "Paid Advertising",
              ],
              sameAs: [
                "https://www.instagram.com/beastcreativeagency",
                "https://www.linkedin.com/company/beast-creative-agency",
                "https://www.facebook.com/beastcreativeagency",
              ],
            }),
          }}
        />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <HomeFooter />
      </body>
    </html>
  );
}
