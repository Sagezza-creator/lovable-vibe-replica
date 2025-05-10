import { useEffect, useState, useRef } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Review {
  id: number;
  name: string;
  age: number;
  problem: string;
  solution: string;
  sessions: number;
  stars: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Анна",
    age: 34,
    problem: "страх начинать новые проекты",
    solution: "Я научилась доверять себе и запустила свой бизнес!",
    sessions: 2,
    stars: 5
  },
  {
    id: 2,
    name: "Игорь",
    age: 45,
    problem: "хроническая усталость от стресса",
    solution: "Я вернул энергию и радость жизни",
    sessions: 4,
    stars: 5
  },
  {
    id: 3,
    name: "Мария",
    age: 27,
    problem: "разрушенные отношения из-за старых обид",
    solution: "Я отпустила прошлое и теперь счастлива в новых отношениях",
    sessions: 3,
    stars: 5
  },
  {
    id: 4,
    name: "Дмитрий",
    age: 39,
    problem: "социальная тревожность",
    solution: "Я больше не боюсь общаться с новыми людьми и публичных выступлений",
    sessions: 3,
    stars: 5
  },
  {
    id: 5,
    name: "Екатерина",
    age: 31,
    problem: "постоянное откладывание важных дел",
    solution: "Я победила прокрастинацию и теперь достигаю поставленных целей",
    sessions: 2,
    stars: 5
  }
];

const ReviewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const totalReviews = reviews.length;

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
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((current) => (current + 1) % totalReviews);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [totalReviews, isDragging]);

  const goToReview = (index: number) => {
    setActiveIndex(index);
  };

  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ));
  };

  // Обработчики для свайпа
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
                      {/* Эффект тени */}
                      <div className="absolute inset-0 rounded-xl shadow-2xl opacity-20 pointer-events-none"></div>
                      <Card className="border-0 shadow-lg bg-white relative z-10 hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-8">
                          <div className="flex items-center gap-1 mb-4">
                            {renderStars(review.stars)}
                          </div>

                          <blockquote className="mb-6">
                            <p className="text-xl italic text-gray-700 mb-4">
                              "Я {review.sessions > 1 ? `всего за ${review.sessions} сеанса` : `всего за ${review.sessions} сеанс`} избавилась от {review.problem}. {review.solution}"
                            </p>
                          </blockquote>

                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 flex items-center justify-center text-white font-bold">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">
                                {review.name}, {review.age} {review.age % 10 === 1 && review.age !== 11 ? "год" : (review.age % 10 >= 2 && review.age % 10 <= 4 && (review.age < 10 || review.age > 20) ? "года" : "лет")}
                              </p>
                            </div>
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