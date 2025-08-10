import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Borong Perabot | Perabot Bergaya Pada Harga Mampu Milik",
  description: "Koleksi perabot moden dan berkualiti untuk rumah idaman anda.",
  keywords: [
    "perabot",
    "perabot rumah",
    "sofa",
    "meja makan",
    "kabinet",
    "almari",
    "perabot moden",
    "borong perabot",
  ],
  metadataBase: new URL("https://www.borongperabot.com"),
  openGraph: {
    title: "Borong Perabot",
    description:
      "Koleksi perabot moden dan berkualiti untuk rumah idaman anda.",
    url: "https://www.borongperabot.com",
    siteName: "Borong Perabot",
    locale: "ms_MY",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
