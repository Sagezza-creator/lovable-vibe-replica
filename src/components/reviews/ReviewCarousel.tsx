
import { useState, useEffect } from 'react';
import { Review } from '@/models/Review';
import { ReviewCard } from './ReviewCard';

interface ReviewCarouselProps {
  reviews: Review[];
  isVisible: boolean;
}

export const ReviewCarousel = ({ reviews, isVisible }: ReviewCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const totalReviews = reviews.length;

  useEffect(() => {
    if (reviews.length === 0) return;
    
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((current) => (current + 1) % totalReviews);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [totalReviews, isDragging, reviews]);

  const goToReview = (index: number) => {
    setActiveIndex(index);
  };

  // Touch handlers for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIndex < totalReviews - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              activeIndex === index ? "bg-brand-500 scale-125" : "bg-gray-300"
            }`}
            onClick={() => goToReview(index)}
            aria-label={`Показать отзыв ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
