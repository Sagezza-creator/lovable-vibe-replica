
import { useEffect, useState, useRef } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Review {
  id: number;
  name: string;
  age: number;
  rating: number;
  problem: string;
  victories: string;
  description: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Загрузка отзывов из localStorage
  useEffect(() => {
    try {
      const savedReviews = localStorage.getItem('reviews');
      if (savedReviews) {
        const parsedReviews = JSON.parse(savedReviews);
        // Сортировка по дате (новые сначала)
        const sortedReviews = parsedReviews.sort((a: Review, b: Review) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setReviews(sortedReviews);
      }
    } catch (error) {
      console.error('Error loading reviews:', error);
    }
  }, []);

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

  useEffect(() => {
    if (reviews.length === 0) return;
    
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((current) => (current + 1) % reviews.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length, isDragging]);

  const goToReview = (index: number) => {
    setActiveIndex(index);
  };

  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className={i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
        />
      ));
  };

  // Обработчики для свайпа
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || reviews.length === 0) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIndex < reviews.length - 1) {
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

  if (reviews.length === 0) {
    return null; // Не показываем секцию, если нет отзывов
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
                  <div key={review.id} className="w-full flex-shrink-0 px-2">
                    <div className="relative">
                      {/* Эффект тени под контейнером */}
                      <div className="absolute inset-0 rounded-xl shadow-2xl opacity-20 pointer-events-none"></div>
                      <Card className="border-0 shadow-lg bg-gradient-to-r from-brand-50 to-cyan-50 relative z-10 hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-8">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <p className="font-medium text-gray-800">
                                {review.name}, {review.age} {review.age % 10 === 1 && review.age !== 11 ? "год" : (review.age % 10 >= 2 && review.age % 10 <= 4 && (review.age < 10 || review.age > 20) ? "года" : "лет")}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              {renderStars(review.rating)}
                            </div>
                          </div>

                          <blockquote className="mb-6">
                            <p className="text-xl italic text-gray-700 mb-4">
                              "{review.description}"
                            </p>
                          </blockquote>

                          <div className="text-right">
                            <Button asChild className="text-brand-600 hover:text-brand-700 px-0 flex items-center group">
                              <Link to={`/reviews#review-${review.id}`}>
                                Прочитать отзыв полностью 
                                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
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
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
