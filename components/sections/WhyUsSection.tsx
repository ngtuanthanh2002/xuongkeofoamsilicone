"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import { stats, whyUsItems } from "@/lib/data";
import { siteConfig } from "@/lib/data";

function WhyUsIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    quality:
      "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    eco: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    performance: "M13 10V3L4 14h7v7l9-11h-7z",
    price:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    delivery:
      "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    support:
      "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  };

  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={paths[type]}
      />
    </svg>
  );
}

function StatCounter({
  count,
  suffix,
  delay,
  label,
}: {
  count: number;
  suffix: string;
  delay: string;
  label: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const duration = 2000;
          const start = performance.now();
          const update = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent =
              Math.floor(eased * count).toLocaleString("vi-VN") + suffix;
            if (progress < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, suffix]);

  return (
    <Reveal className={`reveal ${delay}`}>
      <p ref={ref} className="text-4xl lg:text-5xl font-bold stat-number">
        0
      </p>
      <p className="text-aofeng-100 mt-2 text-sm">{label}</p>
    </Reveal>
  );
}

export default function WhyUsSection() {
  return (
    <>
      <section
        id="why-us"
        className="py-20 lg:py-28 bg-aofeng-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-aofeng-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-aofeng-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-aofeng-300 font-semibold text-sm uppercase tracking-wider">
              Ưu điểm
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Tại sao chọn AOFENG?
            </h2>
            <p className="text-aofeng-100">
              Những lý do khiến hàng trăm đối tác tin tưởng lựa chọn chúng tôi
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsItems.map((item) => (
              <Reveal
                key={item.title}
                className={`reveal ${item.delay} p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors`}
              >
                <div className="w-12 h-12 bg-aofeng-500 rounded-xl flex items-center justify-center mb-5">
                  <WhyUsIcon type={item.icon} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-aofeng-100 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-aofeng-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-aofeng-600 relative overflow-hidden">
        <Image
          src="/images/Keo_Alone.png"
          alt=""
          width={120}
          height={200}
          className="decor-can decor-cta-1 animate-float-slow"
          aria-hidden
        />
        <Image
          src="/images/Keo_Alone2.png"
          alt=""
          width={120}
          height={200}
          className="decor-can decor-cta-2 animate-float-reverse"
          aria-hidden
        />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-aofeng-300 rounded-full blur-3xl" />
        </div>
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 reveal-scale">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sẵn sàng hợp tác cùng AOFENG?
          </h2>
          <p className="text-aofeng-100 text-lg mb-8">
            Liên hệ ngay để nhận báo giá ưu đãi và tư vấn miễn phí về sản phẩm
            PU Foam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.phoneHref}
              className="btn-shine bg-white text-aofeng-700 px-8 py-4 rounded-full font-bold hover:bg-aofeng-50 transition-colors"
            >
              Gọi {siteConfig.phone}
            </a>
            <Link
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              Gửi yêu cầu báo giá
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
