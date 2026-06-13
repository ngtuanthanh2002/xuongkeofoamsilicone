"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FreeMode, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import SwiperWrapper, { SwiperSlide } from "@/components/ui/SwiperWrapper";
import Reveal from "@/components/Reveal";
import { solutions, type Solution } from "@/lib/data";

function SolutionGallery({ solution }: { solution: Solution }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    mainSwiper?.slideTo(0, 0);
    thumbsSwiper?.slideTo(0, 0);
  }, [solution.id, mainSwiper, thumbsSwiper]);

  return (
    <div className="solution-viewer">
      <SwiperWrapper
        className="solution-gallery-swiper"
        modules={[Thumbs]}
        onSwiper={setMainSwiper}
        slidesPerView={1}
        spaceBetween={0}
        nested
        speed={300}
        observer
        observeParents
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      >
        {solution.images.map((img) => (
          <SwiperSlide key={img.src}>
            <figure className="solution-main">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          </SwiperSlide>
        ))}
      </SwiperWrapper>

      <SwiperWrapper
        className="solution-thumbs-swiper solution-thumbs-swiper--all-visible"
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView="auto"
        spaceBetween={8}
        freeMode
        watchSlidesProgress
        slideToClickedSlide
        nested
        observer
        observeParents
      >
        {solution.images.map((img) => (
          <SwiperSlide key={`thumb-${img.src}`}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </div>
  );
}

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSolution = solutions[activeTab];

  return (
    <section id="solutions" className="solutions-section py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="reveal text-center max-w-2xl mx-auto mb-8">
          <span className="section-label justify-center mb-2">
            Giải pháp thực tế
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Bạn đang gặp vấn đề nào?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Chọn tình huống — xem ảnh minh họa thi công thực tế.
          </p>
        </Reveal>

        <div className="solutions-tabs grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              type="button"
              className={`solutions-tab-bullet rounded-xl border px-3 py-3 text-center text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === index
                  ? "border-aofeng-600 bg-aofeng-600 text-white shadow-md shadow-aofeng-600/20"
                  : "border-gray-200 bg-white text-gray-600 hover:border-aofeng-200 hover:text-aofeng-600"
              }`}
              onClick={() => setActiveTab(index)}
              aria-selected={activeTab === index}
              role="tab"
            >
              {solution.tabLabel}
            </button>
          ))}
        </div>

        <article className="solutions-stage" role="tabpanel">
          <div className="solution-panel-grid">
            <div className="solution-copy">
              <h3>{activeSolution.title}</h3>
              <p>{activeSolution.description}</p>
              {activeSolution.note && (
                <p className="solution-note">
                  Khuyến nghị dòng <strong>AM2</strong> — bám dính cực mạnh,
                  tuổi thọ 10–30 năm.
                </p>
              )}
            </div>
            <SolutionGallery key={activeSolution.id} solution={activeSolution} />
          </div>
        </article>

        <Reveal className="solutions-foot reveal">
          Đừng lo — <strong>keo bọt nở AOFENG</strong> giúp bạn giải quyết.{" "}
          <Link href="#promotion">Xem combo khuyến mãi →</Link>
        </Reveal>
      </div>
    </section>
  );
}
