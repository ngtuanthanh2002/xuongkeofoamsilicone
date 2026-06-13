"use client";

import { FormEvent } from "react";

import Reveal from "@/components/Reveal";
import { usePromo } from "@/components/PromoProvider";
import { contactPackages, siteConfig } from "@/lib/data";

export default function ContactSection() {
  const { selectedPackage, setSelectedPackage } = usePromo();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "Cảm ơn bạn! AOFENG sẽ liên hệ xác nhận đơn hàng sớm nhất.",
    );
  };

  return (
    <section id="contact" className="py-12 lg:py-20 bg-white pb-28 lg:pb-20">
      <div className="max-w-lg lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <Reveal className="reveal-left" as="div">
            <span className="text-aofeng-600 font-semibold text-sm uppercase tracking-wider">
              Đặt hàng
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 mb-4">
              Để lại thông tin mua hàng
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              1 chai AL2 chỉ từ{" "}
              <strong className="text-aofeng-600">79.000đ</strong> — Miễn phí
              vận chuyển toàn quốc.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-aofeng-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-aofeng-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Địa chỉ</p>
                  <p className="text-gray-600 text-sm mt-1">
                    {siteConfig.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-aofeng-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-aofeng-600"
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
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Hotline</p>
                  <p className="text-gray-600 text-sm mt-1">
                    <a
                      href={siteConfig.phoneHref}
                      className="hover:text-aofeng-600 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-aofeng-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-aofeng-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600 text-sm mt-1">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:text-aofeng-600 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="reveal-right" as="div">
            <form
              className="order-form bg-white p-5 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="form-input"
                  placeholder="Nhập họ tên"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  className="form-input"
                  placeholder="0901 234 567"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Địa chỉ nhận hàng
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="form-input"
                  placeholder="Số nhà, phường, quận, tỉnh/thành"
                />
              </div>
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700 mb-2">
                  Chọn gói sản phẩm
                </legend>
                <div className="space-y-2">
                  {contactPackages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`package-option${pkg.hot ? " package-option-hot" : ""}`}
                    >
                      <input
                        type="radio"
                        name="package"
                        value={pkg.id}
                        checked={selectedPackage === pkg.id}
                        onChange={() => setSelectedPackage(pkg.id)}
                      />
                      <span>{pkg.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <button
                type="submit"
                className="btn-shine w-full bg-aofeng-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-aofeng-700 transition-colors"
              >
                Gửi đơn đặt hàng
              </button>
              <p className="text-xs text-gray-400 text-center">
                Được kiểm tra hàng trước khi thanh toán
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
