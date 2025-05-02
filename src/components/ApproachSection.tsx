
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Подсознательные блоки",
    description: "Ваше подсознание блокирует действия, связанные с прошлым стрессом, чтобы «защитить» вас от повторения негативного опыта."
  },
  {
    id: 2,
    title: "Деструктивные паттерны",
    description: "Эти блоки создают разрушительные модели поведения: избегание новых возможностей, повторение нездоровых отношений, самосаботаж."
  },
  {
    id: 3,
    title: "Научный подход",
    description: "Используя современные научные открытия в области эпигенетики, нейропластичности и нейрохимии, я выявляю подсознательные программы и безопасно устраняю их влияние."
  },
  {
    id: 4,
    title: "Устранение корня проблемы",
    description: "В отличие от традиционной психологии, которая часто работает только с симптомами, мой метод устраняет первопричину в подсознании."
  }
];

const ApproachSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Анимационные варианты
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            Как я решаю проблемы
          </h2>
          <p className="text-lg text-gray-700">
            Мой метод направлен на устранение корневой причины ваших проблем, а не просто на временное облегчение симптомов.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.2 }}
            >
              <Card 
                className="border border-gray-100 shadow-md h-full"
              >
                <CardContent className="p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="h-10 w-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-semibold text-lg"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.id}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-brand-50 to-cyan-50 rounded-xl p-8 md:p-10 shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ 
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        >
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
            <motion.div 
              className="flex-1 max-w-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Хотите узнать больше о научной основе метода?</h3>
              <p className="text-gray-700">
                Узнайте подробнее о том, как нейрокоррекции помогает перепрограммировать нейронные связи и устранять негативные подсознательные программы.
              </p>
            </motion.div>
            
            <motion.div 
              className="mx-4 flex items-center justify-center self-stretch"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img 
                src="https://svobodarazuma.ru/Images/Aboutmethod.png" 
                alt="Научная основа метода"
                className="h-full max-h-[120px] md:max-h-[150px] object-contain"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="whitespace-nowrap flex-shrink-0 self-center">
                <Link to="/approach">Подробнее о методе</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
