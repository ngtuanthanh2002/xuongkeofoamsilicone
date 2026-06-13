"use client";

import { type ReactNode } from "react";
import { Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import type { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

export { Swiper, SwiperSlide } from "swiper/react";
export type { SwiperType, SwiperOptions };

type SwiperWrapperProps = SwiperOptions & {
  children: ReactNode;
  className?: string;
  onSwiper?: (swiper: SwiperType) => void;
};

export default function SwiperWrapper({
  children,
  className,
  onSwiper,
  ...options
}: SwiperWrapperProps) {
  return (
    <Swiper className={className} onSwiper={onSwiper} {...options}>
      {children}
    </Swiper>
  );
}
