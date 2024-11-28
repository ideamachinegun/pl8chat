import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import NavbarFinal from "../../components/navbarFinal";
import FooterFinal from "../../components/footerFinal";
import "../globals.css";

const poppins = localFont({
  src: "../fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 200 300 400 500 600 700 800 900",
})

export const metadata: Metadata = {
  title: "PL8CHAT - Smart & Social Parking",
  description: "We unite parking communities through license plate chat and connectivity",
  openGraph: {
    title: "PL8CHAT",
    description: "Smart & Social Parking",
    images: "./assets/images/logoGreen.jpg",
    url: "PL8CHAT",
    type: "website",
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header>
          <NavbarFinal />
        </header>
        <div className="pt-[58px] bg-[#034b48]">
          {children}
          <Analytics />
        </div>
        <div>
          <FooterFinal />
        </div>
      </body>
    </html>
  );
}
