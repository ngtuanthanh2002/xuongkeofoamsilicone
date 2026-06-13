"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pagination } from "swiper/modules";

import SwiperWrapper, { SwiperSlide } from "@/components/ui/SwiperWrapper";
import Reveal from "@/components/Reveal";
import { videos } from "@/lib/data";

const DESKTOP_BP = 1024;

export default function VideoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeVideo = videos[activeIndex];

  const loadVideo = useCallback(
    (index: number, autoplay = false) => {
      setActiveIndex(index);
      const video = videos[index];
      const player = videoRef.current;
      if (!player) return;

      player.pause();
      player.poster = video.poster;
      const source = player.querySelector("source");
      if (source) {
        source.src = video.src;
      }
      player.load();
      if (autoplay) {
        player.play().catch(() => {});
      }
    },
    [],
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${DESKTOP_BP - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const onPlayVideo = (e: Event) => {
      const detail = (e as CustomEvent<{ src: string }>).detail;
      const index = videos.findIndex((v) => v.src === detail.src);
      if (index !== -1) loadVideo(index, true);
    };
    window.addEventListener("aofeng-play-video", onPlayVideo);
    return () => window.removeEventListener("aofeng-play-video", onPlayVideo);
  }, [loadVideo]);

  const playlist = (
    <div
      className="video-hub-playlist"
      role="listbox"
      aria-label="Danh sách video"
    >
      {videos.map((video, index) => (
        <button
          key={video.id}
          type="button"
          className={`video-hub-item${activeIndex === index ? " active" : ""}`}
          onClick={() => loadVideo(index, true)}
          role="option"
          aria-selected={activeIndex === index}
        >
          <span className="video-hub-item-thumb">
            <img src={video.poster} alt="" />
          </span>
          <span className="video-hub-item-info">
            <strong>{video.label}</strong>
            <span>{video.subtitle}</span>
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <section id="video" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="reveal text-center max-w-3xl mx-auto mb-8">
          <span className="text-aofeng-600 font-semibold text-sm uppercase tracking-wider">
            Video thực tế
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
            Xưởng sản xuất & hướng dẫn sử dụng
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Quay thực tế tại xưởng — cách xịt, độ nở và thi công trên công
            trình
          </p>
        </Reveal>

        <Reveal className="video-hub reveal">
          <div className="video-hub-player-wrap">
            <video
              ref={videoRef}
              className="video-hub-player"
              controls
              playsInline
              preload="metadata"
              poster={activeVideo.poster}
            >
              <source src={activeVideo.src} type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
            <p className="video-hub-now-playing">{activeVideo.title}</p>
          </div>

          {isMobile ? (
            <>
              <SwiperWrapper
                className="video-playlist-swiper"
                modules={[Pagination]}
                slidesPerView="auto"
                spaceBetween={10}
                observer
                observeParents
                watchOverflow
                pagination={{ clickable: true }}
              >
                {videos.map((video, index) => (
                  <SwiperSlide key={video.id}>
                    <button
                      type="button"
                      className={`video-hub-item${activeIndex === index ? " active" : ""}`}
                      onClick={() => loadVideo(index, true)}
                    >
                      <span className="video-hub-item-thumb">
                        <img src={video.poster} alt="" />
                      </span>
                      <span className="video-hub-item-info">
                        <strong>{video.label}</strong>
                        <span>{video.subtitle}</span>
                      </span>
                    </button>
                  </SwiperSlide>
                ))}
              </SwiperWrapper>
            </>
          ) : (
            <div className="video-playlist-swiper">{playlist}</div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
