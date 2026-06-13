"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import { usePromo } from "@/components/PromoProvider";
import {
  promoLines,
  type PromoLine,
  type PromoOption,
  type PromoBadge,
} from "@/lib/data";

function PromoCansDisplay({ count, src }: { count: number; src: string }) {
  const capped = Math.min(count, 6);

  return (
    <div className={`promo-cans-grid promo-cans-${capped}`}>
      {Array.from({ length: capped }).map((_, i) => (
        <Image
          key={i}
          src={src}
          alt=""
          width={72}
          height={160}
          style={{ animationDelay: `${i * 0.05}s` }}
        />
      ))}
      {count > 6 && <span className="promo-cans-more">×{count}</span>}
    </div>
  );
}

function PromoBadgeTag({ type }: { type: PromoBadge }) {
  const labels: Record<PromoBadge, string> = {
    gift: "Tặng quà",
    sale: "-10%",
    hot: "HOT",
  };
  const classes: Record<PromoBadge, string> = {
    gift: "promo-option-badge promo-option-badge-gift",
    sale: "promo-option-badge promo-option-badge-sale",
    hot: "promo-option-badge promo-option-badge-hot",
  };
  return <span className={classes[type]}>{labels[type]}</span>;
}

function PromoColumn({ line }: { line: PromoLine }) {
  const { setSelectedPackage } = usePromo();
  const [activeOption, setActiveOption] = useState(line.options[0]);

  const selectOption = (option: PromoOption) => {
    setActiveOption(option);
    setSelectedPackage(option.packageId);
  };

  return (
    <article id={`promo-${line.id}`} className="promo-column">
      <div
        className={`promo-column-header promo-column-header--${line.id}`}
      >
        <span className="promo-column-dot" />
        {line.header}
      </div>
      <div className="promo-interactive">
        <div className="promo-split">
          <aside className={`promo-preview-panel ${line.previewClass}`}>
            <div className="promo-cans-display">
              <PromoCansDisplay
                count={activeOption.qty}
                src={line.canSrc}
              />
            </div>
            <p className="promo-preview-caption">{activeOption.caption}</p>
            <p className="promo-preview-price">{activeOption.price}</p>
          </aside>
          <div>
            <div className="promo-options-list">
              {line.options.map((option) => (
                <button
                  key={option.packageId}
                  type="button"
                  className={`promo-option-card${line.optionClass ? ` ${line.optionClass}` : ""}${activeOption.packageId === option.packageId ? " active" : ""}`}
                  onClick={() => selectOption(option)}
                >
                  <span className="promo-option-qty">{option.qty}</span>
                  <div className="promo-option-info">
                    <p className="promo-option-title">
                      {option.badges?.map((badge) => (
                        <PromoBadgeTag key={badge} type={badge} />
                      ))}
                      {option.title}
                    </p>
                    <p className="promo-option-meta">{option.meta}</p>
                  </div>
                  <div className="promo-option-price">
                    {option.oldPrice && (
                      <span className="promo-option-price-old">
                        {option.oldPrice}
                      </span>
                    )}
                    {option.price}
                  </div>
                </button>
              ))}
            </div>
            <div className="promo-panel-cta">
              <Link
                href="#contact"
                className={`promo-btn ${line.btnClass}`}
              >
                Đặt combo này — {activeOption.price}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PromotionSection() {
  return (
    <section
      id="promotion"
      className="py-12 lg:py-20 relative overflow-hidden bg-aofeng-50/50"
    >
      <div className="max-w-lg lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-10 reveal">
          <span className="inline-block text-aofeng-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Khuyến mãi
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Combo keo bọt nở AOFENG
          </h2>
          <p className="text-gray-600">
            Mua nhiều ưu đãi lớn — Tặng quà hấp dẫn. Miễn phí vận chuyển cho
            tất cả đơn hàng!
          </p>
        </Reveal>

        <Reveal className="promo-duo-grid reveal">
          {promoLines.map((line) => (
            <PromoColumn key={line.id} line={line} />
          ))}
        </Reveal>

        <Reveal className="reveal promo-shipping-banner">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0H3m10 0h2l3-3V9a1 1 0 00-1-1h-2m-4-0V6"
                />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-bold text-white">
                Miễn phí vận chuyển toàn quốc
              </p>
              <p className="text-white/85 text-sm font-medium">
                Giao nhanh 24–48h · Kiểm tra hàng trước thanh toán
              </p>
            </div>
            <Link
              href="#contact"
              className="btn-shine bg-white text-aofeng-700 px-6 py-3 rounded-xl font-bold hover:bg-aofeng-50 transition-colors whitespace-nowrap text-sm"
            >
              Đặt hàng ngay
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
