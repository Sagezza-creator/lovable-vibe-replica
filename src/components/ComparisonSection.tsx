
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ComparisonSection = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            Почему выбирают мой подход
          </h2>
          <p className="text-lg text-gray-700">
            В чем отличие моего метода от традиционной психологической помощи
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10"
            variants={itemVariants}
          >
            <div className="col-span-1">
              {/* Empty first column on desktop */}
            </div>
            <motion.div 
              className="hidden lg:block text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-brand-50 rounded-t-lg py-4 px-6">
                <h3 className="font-bold text-xl text-brand-600">Мой подход</h3>
              </div>
            </motion.div>
            <motion.div 
              className="hidden lg:block text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-100 rounded-t-lg py-4 px-6">
                <h3 className="font-bold text-xl text-gray-600">Традиционная психология</h3>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Mobile headers */}
          <motion.div 
            className="lg:hidden grid grid-cols-3 gap-4 mb-6"
            variants={itemVariants}
          >
            <div className="col-span-3">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Сравнение подходов</h3>
            </div>
          </motion.div>

          {/* Comparison rows */}
          <div className="space-y-6">
            {/* Row 1 */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg"
              variants={itemVariants}
              whileHover={{ 
                backgroundColor: "#f0f8ff",
                transition: { duration: 0.3 }
              }}
            >
              <div className="font-medium text-gray-800">
                <h4 className="lg:hidden font-bold text-lg mb-4">Глубина воздействия</h4>
                <p>Глубина воздействия</p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-brand-600 mb-2">Мой подход</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check size={20} className="text-green-500 min-w-[20px]" />
                  </motion.div>
                  <span>Работа с корневыми причинами в подсознании</span>
                </p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-gray-600 mb-2">Традиционная психология</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-red-400 min-w-[20px]" />
                  </motion.div>
                  <span>Работа в основном с симптомами на уровне сознания</span>
                </p>
              </div>
            </motion.div>
            
            {/* Row 2 */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-white rounded-lg border"
              variants={itemVariants}
              whileHover={{ 
                backgroundColor: "#f8f9ff",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="font-medium text-gray-800">
                <h4 className="lg:hidden font-bold text-lg mb-4">Стойкость результата</h4>
                <p>Стойкость результата</p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-brand-600 mb-2">Мой подход</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check size={20} className="text-green-500 min-w-[20px]" />
                  </motion.div>
                  <span>Постоянное устранение проблем без возврата</span>
                </p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-gray-600 mb-2">Традиционная психология</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-red-400 min-w-[20px]" />
                  </motion.div>
                  <span>Проблемы могут возвращаться при стрессе</span>
                </p>
              </div>
            </motion.div>
            
            {/* Row 3 */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg"
              variants={itemVariants}
              whileHover={{ 
                backgroundColor: "#f0f8ff",
                transition: { duration: 0.3 }
              }}
            >
              <div className="font-medium text-gray-800">
                <h4 className="lg:hidden font-bold text-lg mb-4">Скорость достижения результата</h4>
                <p>Скорость достижения результата</p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-brand-600 mb-2">Мой подход</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check size={20} className="text-green-500 min-w-[20px]" />
                  </motion.div>
                  <span>Видимые изменения за 1-3 коррекции</span>
                </p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-gray-600 mb-2">Традиционная психология</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-red-400 min-w-[20px]" />
                  </motion.div>
                  <span>Может потребоваться месяцы или годы</span>
                </p>
              </div>
            </motion.div>
            
            {/* Row 4 */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-white rounded-lg border"
              variants={itemVariants}
              whileHover={{ 
                backgroundColor: "#f8f9ff",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="font-medium text-gray-800">
                <h4 className="lg:hidden font-bold text-lg mb-4">Основа метода</h4>
                <p>Основа метода</p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-brand-600 mb-2">Мой подход</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check size={20} className="text-green-500 min-w-[20px]" />
                  </motion.div>
                  <span>Современные исследования в науке</span>
                </p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-gray-600 mb-2">Традиционная психология</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-red-400 min-w-[20px]" />
                  </motion.div>
                  <span>Классические психологические теории</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
