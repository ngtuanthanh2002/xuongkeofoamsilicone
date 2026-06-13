import Image from "next/image";

import Reveal from "@/components/Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="reveal-left relative" as="div">
            <div className="absolute -inset-3 rounded-3xl border-2 border-aofeng-200/60 pointer-events-none hidden sm:block" />
            <div className="img-product-frame rounded-3xl shadow-xl ring-4 ring-white">
              <Image
                src="/images/B2.jpg"
                alt="Sản phẩm keo bọt nở AOFENG AL2"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-aofeng-600 text-white rounded-2xl p-6 shadow-xl hidden sm:block">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-aofeng-100 text-sm">Năm phát triển</p>
            </div>
          </Reveal>
          <Reveal className="reveal-right" as="div">
            <span className="text-aofeng-600 font-semibold text-sm uppercase tracking-wider">
              Về chúng tôi
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              AOFENG - Đối tác tin cậy trong ngành keo bọt nở
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              AOFENG là thương hiệu chuyên sản xuất và phân phối keo bọt nở PU
              Foam chất lượng cao tại Việt Nam. Với công nghệ tiên tiến và đội
              ngũ kỹ thuật giàu kinh nghiệm, chúng tôi cam kết mang đến giải
              pháp tối ưu cho mọi công trình.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Sản phẩm của chúng tôi đạt tiêu chuẩn quốc tế, thân thiện với môi
              trường và được tin dùng bởi hàng trăm đối tác trên toàn quốc.
            </p>
            <ul className="space-y-4">
              {[
                "Công nghệ sản xuất hiện đại, kiểm soát chất lượng nghiêm ngặt",
                "Đội ngũ tư vấn kỹ thuật chuyên nghiệp, hỗ trợ 24/7",
                "Giá cả cạnh tranh, giao hàng toàn quốc",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-aofeng-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-aofeng-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
