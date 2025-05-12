import { useEffect, useRef, useState } from 'react';
import { useReviews } from '@/hooks/useReviews';
import { ReviewCarousel } from './reviews/ReviewCarousel';

const ReviewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { reviews, isLoading } = useReviews();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('IntersectionObserver entry:', entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    } else {
      console.log('sectionRef.current is null');
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  if (isLoading) {
    return (
      <section ref={sectionRef} className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return null;
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