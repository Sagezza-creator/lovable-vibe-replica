
import { useEffect, useRef, useState } from 'react';
import { useReviews } from '@/hooks/useReviews';
import { ReviewCarousel } from './reviews/ReviewCarousel';

const ReviewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { reviews } = useReviews();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  if (reviews.length === 0) {
    return null; // Don't show the section if there are no reviews
  }

  return (
    <section ref={sectionRef} className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            Отзывы
          </h2>
          <p className="text-lg text-gray-700">
            Истории людей, которые изменили свою жизнь с помощью моего подхода
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <ReviewCarousel reviews={reviews} isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
