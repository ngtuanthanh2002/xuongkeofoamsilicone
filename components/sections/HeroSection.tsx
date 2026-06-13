import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";

function HeroVisual() {
  return (
    <div className="hero-visual-wrap max-w-md mx-auto lg:ml-auto">
      <div className="hero-product-card img-product-frame">
        <Image
          src="/images/A1.jpg"
          alt="Keo bọt nở PU Foam AOFENG AL2"
          width={400}
          height={400}
          priority
        />
      </div>
      <Image
        src="/images/Keo_Alone.png"
        alt=""
        width={80}
        height={160}
        className="hero-float-can hero-float-can-1"
        aria-hidden
      />
      <Image
        src="/images/Keo_Alone2.png"
        alt=""
        width={80}
        height={160}
        className="hero-float-can hero-float-can-2"
        aria-hidden
      />
      <div className="hero-price-tag">
        <strong>79.000đ</strong>
        <span>1 chai AL2 · Miễn ship</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="py-10 lg:pb-16">
      <div className="max-w-lg lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="mb-8 lg:hidden reveal">
          <HeroVisual />
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal className="reveal order-2 lg:order-1" as="div">
            <span className="section-label mb-4">
            Cách âm · Cách nhiệt · Chống thấm
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Keo Bọt Nở <span className="text-aofeng-600">PU Foam AOFENG</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-5">
              Xử lý nhanh khe hở — cách âm, cách nhiệt, chống thấm. Hai dòng{" "}
              <strong>AL2</strong> đa năng và <strong>AM2</strong> kết dính
              chuyên dụng.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-aofeng-200 text-aofeng-800 shadow-sm">
                750ml / chai
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-aofeng-200 text-aofeng-800 shadow-sm">
                Nở 2.5×
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-aofeng-200 text-aofeng-800 shadow-sm">
                Lỗi 1 đổi 1
              </span>
            </div>
            <ul className="space-y-2.5 mb-7 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                Nở lấp kín khe hở — bám cực chắc
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                Cách âm · Cách nhiệt · Chống thấm tối đa
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                Thi công dễ dùng — ai cũng có thể tự làm
              </li>
            </ul>
            <div className="flex flex-col gap-3">
              <Link
                href="#contact"
                className="btn-shine w-full sm:w-auto text-center bg-aofeng-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-aofeng-700 transition-colors shadow-lg shadow-aofeng-600/20"
              >
                Đặt hàng ngay — Từ 79.000đ
              </Link>
              <Link
                href="#promotion"
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl font-semibold text-aofeng-700 bg-white border border-aofeng-200 hover:bg-aofeng-50 transition-colors shadow-sm"
              >
                Xem combo khuyến mãi →
              </Link>
            </div>
          </Reveal>
          <Reveal
            className="hidden lg:block reveal-right order-1 lg:order-2"
            as="div"
          >
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-aofeng-500 flex-shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
