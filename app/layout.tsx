
import type { Metadata } from "next";
import {
  DM_Sans,
  Space_Grotesk,
  Press_Start_2P,
} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Jereeza | Creative Developer",
  description:
    "A cozy little corner of the internet where code and creativity bloom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} ${pixelFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
