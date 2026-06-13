import Image from "next/image";
import type { ReactNode } from "react";

import Reveal from "@/components/Reveal";
import { featureTrustItems, features } from "@/lib/data";

function FeatureIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    water:
      "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    bolt: "M13 10V3L4 14h7v7l9-11h-7z",
    shield:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  };

  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={paths[type]}
      />
    </svg>
  );
}

function TrustIcon({ type }: { type: string }) {
  const icons: Record<string, ReactNode> = {
    warranty: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    ),
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
    truck: (
      <>
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0H3m10 0h2l3-3V9a1 1 0 00-1-1h-2m-4-0V6"
        />
      </>
    ),
    check: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  };

  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {icons[type]}
    </svg>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-12 lg:py-20 bg-aofeng-50">
      <div className="max-w-lg lg:max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal className="reveal text-center mb-8">
          <span className="section-label justify-center mb-3">
            Ưu điểm nổi bật
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Tại sao chọn AOFENG?
          </h2>
        </Reveal>
        <div className="space-y-4">
          {features.map((feature) => (
            <Reveal key={feature.title} className="reveal feature-block">
              <div className="feature-icon-wrap">
                <FeatureIcon type={feature.icon} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="feature-block-img">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={200}
                  height={120}
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="reveal trust-grid mt-10">
          {featureTrustItems.map((item) => (
            <div key={item.title} className="trust-grid-item">
              <div className="trust-grid-icon">
                <TrustIcon type={item.icon} />
              </div>
              <strong>{item.title}</strong>
              <span>{item.subtitle}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
