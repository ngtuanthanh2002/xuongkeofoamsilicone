import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import { products } from "@/lib/data";

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <article className={`product-showcase ${product.showcaseClass}`}>
      <div className="product-showcase-visual">
        <div className="product-showcase-visual-bg" aria-hidden="true" />
        <Image
          src={product.image}
          alt={product.photoAlt}
          width={400}
          height={400}
          className="product-showcase-photo"
        />
        <span className="product-showcase-grade">{product.grade}</span>
      </div>
      <div className="product-showcase-body">
        <div className="product-showcase-head">
          <span className="product-showcase-badge">{product.badge}</span>
          <h3 className="product-showcase-name">{product.name}</h3>
          <p className="product-showcase-desc">{product.description}</p>
        </div>
        <div className="product-showcase-stats" aria-label="Thông số nổi bật">
          {product.stats.map((stat) => (
            <div key={stat.label} className="product-showcase-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <ul className="product-showcase-points">
          {product.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="product-showcase-footer">
          <div className="product-showcase-price">
            <span>Giá từ</span>
            <strong>{product.priceFrom}</strong>
            <em>/ chai</em>
          </div>
          <Link
            href={`#promo-${product.id}`}
            className={`product-showcase-cta ${product.ctaClass}`}
          >
            Xem khuyến mãi {product.id.toUpperCase()}
          </Link>
        </div>
      </div>
    </article>
  );
}

function SpecPanel({ product }: { product: (typeof products)[0] }) {
  return (
    <article className={`spec-panel ${product.specPanelClass}`}>
      <header className="spec-panel-hero">
        <div className="spec-panel-hero-body">
          <span className="spec-panel-line">{product.specLine}</span>
          <Image
            src={product.canImage}
            alt={product.name}
            width={80}
            height={160}
            className="spec-panel-can"
          />
          <h4 className="spec-panel-name">
            Keo Bọt Nở <span>{product.id.toUpperCase()}</span>
          </h4>
          <p className="spec-panel-grade">{product.grade} · 750ml</p>
        </div>
      </header>
      <div className="spec-panel-highlight">
        {product.specHighlights.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <dl className="spec-panel-list">
        {product.specRows.map((row) => (
          <div
            key={row.term}
            className={`spec-panel-row${row.accent ? " spec-panel-row--accent" : ""}`}
          >
            <dt>{row.term}</dt>
            <dd>{row.detail}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-28 relative overflow-hidden">
      <Image
        src="/images/Keo_Alone.png"
        alt=""
        width={120}
        height={200}
        className="decor-can decor-products-1 animate-float-drift hidden lg:block"
        aria-hidden
      />
      <Image
        src="/images/Keo_Alone2.png"
        alt=""
        width={120}
        height={200}
        className="decor-can decor-products-2 animate-float-slow hidden lg:block"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="text-aofeng-600 font-semibold text-sm uppercase tracking-wider">
            Sản phẩm
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Dòng sản phẩm PU Foam
          </h2>
          <p className="text-gray-600">
            Đa dạng chủng loại đáp ứng mọi nhu cầu từ xây dựng dân dụng đến
            công nghiệp nặng
          </p>
        </Reveal>

        <div className="product-lineup">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="spec-dual">
          <Reveal className="spec-dual-intro reveal">
            <span className="spec-dual-label">Thông số chi tiết</span>
            <h3 className="spec-dual-title">Thông tin kỹ thuật</h3>
            <p className="spec-dual-sub">
              Mỗi dòng một bảng riêng — đọc rõ, so sánh dễ.
            </p>
          </Reveal>

          <div className="spec-dual-grid">
            {products.map((product) => (
              <SpecPanel key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
