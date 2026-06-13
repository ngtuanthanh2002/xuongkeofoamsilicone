import { trustStripItems } from "@/lib/data";

export default function TrustStrip() {
  return (
    <section className="trust-strip border-y border-aofeng-100 bg-aofeng-50/80">
      <div className="max-w-lg lg:max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs sm:text-sm">
        {trustStripItems.map((item) => (
          <div key={item} className="trust-strip-item">
            <span className="trust-strip-icon">✓</span> {item}
          </div>
        ))}
      </div>
    </section>
  );
}
