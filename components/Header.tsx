"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    closeMenu();
    const headerHeight = document.getElementById("header")?.offsetHeight ?? 80;
    const top =
      target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <header
        id="header"
        className={`site-header fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300${scrolled ? " header-scrolled" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem] gap-3">
            <Link
              href="#hero"
              className="site-logo flex-shrink-0 min-w-0"
              onClick={(e) => handleAnchorClick(e, "#hero")}
            >
              <Image
                src="/images/Logo.png"
                alt="AOFENG"
                width={140}
                height={40}
                className="site-logo-img"
                priority
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-aofeng-600 font-medium transition-colors"
                  onClick={(e) => handleAnchorClick(e, link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <a
                href={siteConfig.phoneHref}
                className="text-aofeng-600 font-semibold hover:text-aofeng-700 transition-colors whitespace-nowrap"
              >
                {siteConfig.phone}
              </a>
              <Link
                href="#contact"
                className="btn-shine bg-aofeng-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-aofeng-700 transition-colors whitespace-nowrap"
                onClick={(e) => handleAnchorClick(e, "#contact")}
              >
                Báo giá ngay
              </Link>
            </div>
            <div className="flex lg:hidden items-center gap-1.5 flex-shrink-0">
              <a
                href={siteConfig.phoneHref}
                className="header-mobile-call"
                aria-label={`Gọi ${siteConfig.phone}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
              <Link
                href="#contact"
                className="header-mobile-cta"
                onClick={(e) => handleAnchorClick(e, "#contact")}
              >
                Đặt hàng
              </Link>
              <button
                type="button"
                className="header-menu-btn"
                aria-label="Mở menu"
                onClick={() => setMenuOpen(true)}
              >
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`mobile-overlay fixed inset-0 bg-black/50 z-50 lg:hidden${menuOpen ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 shadow-2xl lg:hidden${menuOpen ? " open" : ""}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-aofeng-100">
          <Image
            src="/images/Logo.png"
            alt="AOFENG"
            width={120}
            height={36}
            className="site-logo-img site-logo-img--menu"
          />
          <button
            type="button"
            className="p-2 text-gray-600 hover:text-aofeng-600"
            aria-label="Đóng menu"
            onClick={closeMenu}
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link text-lg font-medium text-gray-700 hover:text-aofeng-600 py-3 border-b border-gray-100 last:border-0"
              onClick={(e) => handleAnchorClick(e, link.href)}
            >
              {link.mobileLabel ?? link.label}
            </Link>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="mobile-nav-link mt-4 bg-aofeng-600 text-white text-center py-4 rounded-xl font-bold text-lg"
          >
            Gọi {siteConfig.phone}
          </a>
        </nav>
      </div>
    </>
  );
}
