import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nystudio.dev"),
  title: "NY Studio — Independent App Studio",
  description:
    "Indie app studio in Aktobe, Kazakhstan. We build delightful mobile apps: Yetter, a free calorie and step counter, and NomNomBear, an AI recipe and nutrition app.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "NY Studio",
    url: "https://nystudio.dev",
    title: "NY Studio — Independent App Studio",
    description:
      "Indie app studio building delightful mobile apps: Yetter and NomNomBear.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
