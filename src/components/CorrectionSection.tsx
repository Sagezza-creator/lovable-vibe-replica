
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Wand } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CorrectionSection = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-lavender-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-6 mb-8"
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div 
              className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Wand size={40} className="text-yellow-500" />
              </motion.div>
            </motion.div>
            <div>
              <motion.h2 
                className="text-2xl md:text-3xl font-bold gradient-heading mb-2"
                variants={itemVariants}
              >
                Нейрокоррекция
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700"
                variants={itemVariants}
              >
                Трансформация подсознательных программ
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <Card 
              className="border border-yellow-100 shadow-md transition-all duration-500 mb-8"
            >
              <CardContent className="p-6">
                <motion.div 
                  className="space-y-4 text-gray-700"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                >
                  {[
                    "Нейрокоррекция — это целенаправленный процесс, использующий научные открытия в области эпигенетики, нейропластичности и нейрохимии для выявления и деактивации подсознательных программ, вызывающих стресс, страх или дисгармонию в вашей жизни.",
                    "В процессе коррекции мы находим нейронные связи, ассоциированные со стрессом и негативным опытом, нейтрализуем их влияние и создаем новые, здоровые модели поведения. Это позволяет разорвать повторяющиеся поведенческие шаблоны (измены, болезни, неудачи), обрести эмоциональную свободу и уверенно принимать решения."
                  ].map((paragraph, index) => (
                    <motion.p 
                      key={index}
                      variants={itemVariants}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                  <motion.div 
                    className="bg-yellow-50 p-4 rounded-lg border border-yellow-100"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-medium">
                      Одна нейрокоррекция длится 3–5 часов и проходит в комфортной обстановке через структурированный диалог. Без специальной подготовки Вы освободитесь от негативных подсознательных программ и избавитесь от стресса, копившегося всю жизнь.
                    </p>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="text-center"
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button asChild variant="outline" className="group border-yellow-300 text-yellow-700 hover:bg-yellow-50">
                <Link to="/correction">
                  Узнать больше о коррекции
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

export default CorrectionSection;
