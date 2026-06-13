"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pagination } from "swiper/modules";

import SwiperWrapper, { SwiperSlide } from "@/components/ui/SwiperWrapper";
import Reveal from "@/components/Reveal";
import { usageSteps } from "@/lib/data";

const GRID_BP = 640;

function UsageStepIcon({ type }: { type: (typeof usageSteps)[0]["icon"] }) {
  const paths: Record<(typeof usageSteps)[0]["icon"], string> = {
    clean:
      "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    shake:
      "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    nozzle:
      "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    fill: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    cut: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm0 0L9.121 14.121",
    protect:
      "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  };

  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
        d={paths[type]}
      />
    </svg>
  );
}

function UsageStepCard({ step }: { step: (typeof usageSteps)[0] }) {
  return (
    <article
      className={`usage-step-card${step.key ? " usage-step-card--key" : ""}`}
    >
      <span className="usage-step-card-num" aria-hidden="true">
        {step.num}
      </span>
      <div className="usage-step-card-icon" aria-hidden="true">
        <UsageStepIcon type={step.icon} />
      </div>
      <div className="usage-step-card-body">
        <strong>{step.title}</strong>
        <p>{step.description}</p>
      </div>
    </article>
  );
}

export default function UsageSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${GRID_BP - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleVideoLink = (e: React.MouseEvent) => {
    e.preventDefault();
    const videoSection = document.getElementById("video");
    if (videoSection) {
      const headerHeight =
        document.getElementById("header")?.offsetHeight ?? 64;
      const top =
        videoSection.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
    window.dispatchEvent(
      new CustomEvent("aofeng-play-video", {
        detail: { src: "/vid/AL2_Cach_Su_Dung.mp4" },
      }),
    );
  };

  return (
    <section id="usage" className="usage-section py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="usage-header reveal text-center max-w-2xl mx-auto mb-10">
          <span className="section-label justify-center mb-2">
            Lưu ý & mẹo
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Hướng dẫn sử dụng đúng cách
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            6 bước đơn giản — bọt nở đều, bám chắc, thi công chuẩn như thợ
            chuyên nghiệp.
          </p>
        </Reveal>

        {isMobile ? (
          <>
            <SwiperWrapper
              className="usage-swiper"
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={12}
              autoHeight
              observer
              observeParents
              watchOverflow
              pagination={{ clickable: true }}
            >
              {usageSteps.map((step) => (
                <SwiperSlide key={step.num}>
                  <UsageStepCard step={step} />
                </SwiperSlide>
              ))}
            </SwiperWrapper>
          </>
        ) : (
          <div className="usage-steps-grid">
            {usageSteps.map((step) => (
              <UsageStepCard key={step.num} step={step} />
            ))}
          </div>
        )}

        <Reveal className="usage-bottom reveal">
          <div className="usage-alert">
            <svg
              className="usage-alert-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              />
            </svg>
            <p>
              <strong>Lưu ý quan trọng:</strong> Luôn{" "}
              <strong>cầm chai ngược</strong> khi xịt và chỉ bơm{" "}
              <strong>60–70%</strong> khe hở — tránh bọt tràn, giảm độ bám.
            </p>
          </div>
          <Link
            href="#video"
            className="usage-video-card"
            onClick={handleVideoLink}
          >
            <span className="usage-video-card-play" aria-hidden="true">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="usage-video-card-text">
              <strong>Xem video cách dùng AL2</strong>
              <span>Thao tác thực tế từng bước</span>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
