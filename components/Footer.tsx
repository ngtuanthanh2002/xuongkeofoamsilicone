import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-aofeng-900 text-white pt-16 pb-[calc(7rem+env(safe-area-inset-bottom,0px))] lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="#hero" className="inline-block mb-4">
              <Image
                src="/images/Logo.png"
                alt="AOFENG"
                width={130}
                height={38}
                className="site-logo-img site-logo-img--footer brightness-0 invert"
              />
            </Link>
            <p className="text-aofeng-200 text-sm leading-relaxed">
              Thương hiệu keo bọt nở PU Foam hàng đầu Việt Nam. Chất lượng -
              Uy tín - Bền vững.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm text-aofeng-200">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-white transition-colors"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  href="#promotion"
                  className="hover:text-white transition-colors"
                >
                  Khuyến mãi
                </Link>
              </li>
              <li>
                <Link
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  Giải pháp
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-sm text-aofeng-200">
              <li>
                <Link
                  href="#promotion"
                  className="hover:text-white transition-colors"
                >
                  Keo Bọt Nở AL2
                </Link>
              </li>
              <li>
                <Link
                  href="#promotion"
                  className="hover:text-white transition-colors"
                >
                  Keo Bọt Nở AM2
                </Link>
              </li>
              <li>
                <Link
                  href="#promotion"
                  className="hover:text-white transition-colors"
                >
                  Combo khuyến mãi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-aofeng-200">
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
              <li>KCN Tân Bình, TP.HCM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-aofeng-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-aofeng-300">
          <p>&copy; 2026 AOFENG. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Zalo"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
