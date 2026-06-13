import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keo Bọt Nở PU Foam AOFENG | Cách Âm · Cách Nhiệt · Chống Thấm — Từ 79.000đ",
  description:
    "Keo bọt nở PU Foam AOFENG AL2 & AM2 chính hãng. Cách âm, cách nhiệt, chống thấm, lấp khe. Miễn phí vận chuyển, kiểm tra hàng trước thanh toán.",
  icons: {
    icon: [{ url: "/images/icona.png", type: "image/png" }],
    shortcut: "/images/icona.png",
    apple: "/images/icona.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#003676",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}
