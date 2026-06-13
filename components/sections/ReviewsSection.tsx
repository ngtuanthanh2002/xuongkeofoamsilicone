import Reveal from "@/components/Reveal";
import { reviews } from "@/lib/data";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-12 lg:py-20 bg-aofeng-50">
      <div className="max-w-lg lg:max-w-2xl mx-auto px-4 sm:px-6">
        <Reveal className="reveal mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Khách hàng nói gì về sản phẩm?
          </h2>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1.5">
            <span className="text-yellow-500">★★★★★</span> 500+ đánh giá thực
            tế
          </p>
        </Reveal>
        <Reveal className="reveal space-y-0 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {reviews.map((review) => (
            <article
              key={review.name}
              className={`review-item${review.borderless ? " border-0" : ""}`}
            >
              <div className={`review-avatar ${review.avatarClass}`}>
                {review.initials}
              </div>
              <div className="review-body">
                <p className="review-meta">
                  <strong>{review.name}</strong> · {review.daysAgo}
                </p>
                <p className="review-stars">★★★★★</p>
                <p className="review-text">{review.text}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
