import type { Metadata } from "next";
import { Poppins, Rajdhani, Roboto_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  fallback: ["system-ui", "arial"],
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rajdhani",
  fallback: ["system-ui", "arial"],
});

const robotoMono = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Ghiffar's Portofolio",
  description:
    "Hello, My name is Ghiffar, and welcome to my Portofolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${rajdhani.variable} ${robotoMono.variable} bg-light scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
