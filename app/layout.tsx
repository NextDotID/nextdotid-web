import type { Metadata } from "next";
import { Roboto_Flex, Archivo } from "next/font/google";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import "../styles/global.scss";
import "swiper/scss";

export const text_font = Roboto_Flex({
  subsets: ["latin", "latin-ext"],
  variable: "--font-text",
  axes: ["slnt", "wdth"],
});
export const title_font = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-title",
  display: "swap",
  axes: ["wdth"],
});

// todo: maintain seo issues
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://next.id"),
  robots: "index, follow",

  title: "Next.ID",
  description: "An Open, Connected, Self-governed Socioverse",
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    title: "Next.ID",
    description: "An Open, Connected, Self-governed Socioverse",
    type: "website",
    url: `/`,
    siteName: "Next.ID Interface",
  },
  twitter: {
    title: "Next.ID",
    description: "An Open, Connected, Self-governed Socioverse",
    site: "@NextDotID",
    creator: "@NextDotID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${title_font.variable} ${text_font.variable} `}>
        <div className="app-container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
