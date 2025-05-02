
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MatricesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-lavender-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-20 h-20 rounded-full bg-lavender-100 flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Layers size={40} className="text-lavender-400" />
            </motion.div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-2">
                Матрицы зачатия
              </h2>
              <p className="text-lg text-gray-700">
                Фундамент вашего подсознательного опыта
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card 
              className="border border-lavender-100 shadow-md transition-all duration-500 mb-8"
            >
              <CardContent className="p-6">
                <motion.div 
                  className="space-y-4 text-gray-700"
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.2
                      }
                    }
                  }}
                >
                  {[
                    "Матрицы зачатия — это клеточная память опыта, полученного во время зачатия, внутриутробного развития и рождения, которая хранится в каждой клетке вашего тела. Эта память формирует основу ваших подсознательных поведенческих паттернов, психологических проблем и жизненных вызовов.",
                    "Нарушения в матрицах зачатия могут проявляться как страхи, проблемы в отношениях, сложности с личными границами и даже физические заболевания. Работа с этими матрицами позволяет устранить до 80% базовых подсознательных программ, создающих препятствия в вашей жизни."
                  ].map((paragraph, index) => (
                    <motion.p 
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.5 }
                        }
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                  <motion.div 
                    className="bg-lavender-50 p-4 rounded-lg border border-lavender-100"
                    variants={{
                      hidden: { opacity: 0, scale: 0.95 },
                      visible: { 
                        opacity: 1, 
                        scale: 1,
                        transition: { duration: 0.5, type: "spring" }
                      }
                    }}
                  >
                    <p className="font-medium">
                      Проработав 10 основных матриц зачатия, вы создаете прочный фундамент для последующего решения более поздних программ и блоков, сформированных в детстве и взрослой жизни.
                    </p>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button asChild variant="outline" className="group border-lavender-300 text-lavender-700 hover:bg-lavender-50">
                <Link to="/conception-matrices">
                  Узнать больше о матрицах зачатия
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MatricesSection;
