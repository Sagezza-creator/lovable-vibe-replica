
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="py-10 pb-1 bg-gradient-to-br from-secondary to-white relative">
      {/* Добавленное изображение */}
      <img 
        src="https://svobodarazuma.ru/Images/Chains.png" 
        alt="Освобождение от ограничений"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          className="max-w-3xl mx-auto text-center flex flex-col h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-brand-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Готовы освободиться от подсознательных ограничений?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Сделайте первый шаг к свободе разума и новой жизни без старых проблем и ограничений.
            </motion.p>
          </div>
          
          <div className="flex-1 flex flex-col justify-end items-center">
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/contact">
                <button 
                  className="h-12 px-8 text-white font-medium rounded-full
                           bg-gradient-to-r from-blue-500 to-cyan-400
                           hover:scale-105 hover:shadow-lg active:scale-95
                           transition-all duration-200 ease-in-out"
                >
                  Записаться на нейрокоррекцию
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
