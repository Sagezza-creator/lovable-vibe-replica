
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const totalReviews = reviews.length;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalReviews);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalReviews, inView]);

  const goToReview = (index: number) => {
    setActiveIndex(index);
  };

  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * i, duration: 0.3 }}
        >
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
        </motion.div>
      ));
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            Отзывы
          </h2>
          <p className="text-lg text-gray-700">
            Истории людей, которые изменили свою жизнь с помощью моего подхода
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-hidden relative"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(reviews[activeIndex].stars)}
                    </div>

                    <motion.blockquote 
                      className="mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <p className="text-xl italic text-gray-700 mb-4">
                        "Я {reviews[activeIndex].sessions > 1 ? `всего за ${reviews[activeIndex].sessions} сеанса` : `всего за ${reviews[activeIndex].sessions} сеанс`} избавилась от {reviews[activeIndex].problem}. {reviews[activeIndex].solution}"
                      </p>
                    </motion.blockquote>

                    <motion.div 
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <motion.div 
                        className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 flex items-center justify-center text-white font-bold"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {reviews[activeIndex].name.charAt(0)}
                      </motion.div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {reviews[activeIndex].name}, {reviews[activeIndex].age} {reviews[activeIndex].age % 10 === 1 && reviews[activeIndex].age !== 11 ? "год" : (reviews[activeIndex].age % 10 >= 2 && reviews[activeIndex].age % 10 <= 4 && (reviews[activeIndex].age < 10 || reviews[activeIndex].age > 20) ? "года" : "лет")}
                        </p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <motion.div 
              className="flex justify-center mt-6 gap-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-brand-500" : "w-2 bg-gray-300"
                  }`}
                  onClick={() => goToReview(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Показать отзыв ${index + 1}`}
                ></motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
