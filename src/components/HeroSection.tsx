
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Анимационные варианты
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + (i * 0.2),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center pt-16">
      {/* Белый фон как подложка */}
      <div className="absolute inset-0 bg-white z-0"></div>
      
      {/* Фоновое изображение с анимацией */}
      <motion.div 
        className="absolute inset-0 z-1"
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="https://svobodarazuma.ru/Images/main-banner.png"
          alt="Фоновое изображение"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-2xl"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Заголовок с тем же градиентом, что и "Какие проблемы я решаю" */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <motion.span 
              className="gradient-heading drop-shadow-lg"
              initial={{ backgroundPosition: "200% 0" }}
              animate={{ backgroundPosition: "0% 0" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              Свобода разума: Решите свои проблемы навсегда
            </motion.span>
          </motion.h1>
          
          {/* Подзаголовок */}
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-8"
            variants={itemVariants}
          >
            Устраните подсознательные барьеры и живите в гармонии с современными методами трансформации сознания
          </motion.p>
          
          {/* Кнопки */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-600 group shadow-lg">
                <Link to="/contact">
                  Связаться со мной
                  <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <Button asChild size="lg" variant="outline" className="text-gray-700 border-gray-700 hover:bg-gray-100 shadow-lg">
                <Link to="/approach">Узнать больше о методе</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Статистика */}
          <motion.div 
            className="mt-16 flex flex-col md:flex-row justify-start gap-6 md:gap-12"
            variants={containerVariants}
          >
            {[
              { value: "1000+", label: "часов коррекций" },
              { value: "2+", label: "года опыта" },
              { value: "95%", label: "успешных результатов" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg"
                variants={statVariants}
                custom={i}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p 
                  className="text-brand-500 font-semibold text-3xl mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (i * 0.2), duration: 0.4 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
