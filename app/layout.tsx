import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keo Bọt Nở PU Foam AOFENG | Chống Thấm, Cách Âm — Từ 79.000đ",
  description:
    "Keo bọt nở PU Foam AOFENG AL2 & AM2 chính hãng. Chống thấm, lấp khe, cách âm cách nhiệt. Miễn phí vận chuyển, kiểm tra hàng trước thanh toán.",
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
