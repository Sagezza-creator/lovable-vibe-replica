
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Сколько коррекций обычно требуется?",
    answer: "В большинстве случаев видимые результаты достигаются за 2-4 коррекции. Некоторые проблемы, особенно давние или сложные, могут потребовать 5-6 встреч. Я всегда стремлюсь к максимально быстрому и эффективному решению вашей проблемы."
  },
  {
    id: 2,
    question: "Безопасен ли ваш метод?",
    answer: "Да, метод полностью безопасен. Мы работаем с естественными процессами вашего мозга и подсознания, не используя гипноз или другие методы изменения сознания. Вы всегда остаетесь в полном сознании и контролируете процесс."
  },
  {
    id: 3,
    question: "Чем ваш подход отличается от психотерапии?",
    answer: "Традиционная психотерапия часто фокусируется на длительном анализе проблем и работе с сознанием. Мой подход использует достижения эпигенетики для быстрого выявления и деактивации подсознательных программ, которые являются корнем проблемы, что дает более быстрые и стойкие результаты."
  },
  {
    id: 4,
    question: "Проводите ли вы онлайн-консультации?",
    answer: "Да, я провожу консультации как лично, так и онлайн через Telegram. Метод одинаково эффективен в обоих форматах, что позволяет работать с клиентами из любой точки мира."
  },
  {
    id: 5,
    question: "Как скоро я увижу результаты?",
    answer: "Многие клиенты отмечают первые изменения уже после первой коррекции. Полное решение проблемы обычно наступает в среднем после 1-4 встреч. Вы заметите, как меняется ваше восприятие ситуаций и реакции на привычные триггеры."
  },
];

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Фоновое изображение с анимацией */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0.5 }}
        animate={inView ? { opacity: 1 } : { opacity: 0.5 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: "url('https://svobodarazuma.ru/Images/FAQmain.png')",
          backgroundSize: '100% auto', // Растягиваем только по ширине
          backgroundPosition: 'top center', // Прикрепляем к верхнему краю и центрируем по горизонтали
          backgroundRepeat: 'no-repeat',
          transform: 'translateZ(0)'
        }}
      ></motion.div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-gray-700">
            Ответы на самые распространенные вопросы о моем подходе
          </p>
        </motion.div>

        {/* Блок с вопросами */}
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={faq.id} 
              className="border-b border-gray-200 last:border-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <motion.button
                className="py-5 w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleItem(faq.id)}
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3 
                  className="text-lg font-medium text-gray-800"
                  initial={false}
                  animate={{ 
                    color: openItem === faq.id ? "#2E86C1" : "#4A4A4A" 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {faq.question}
                </motion.h3>
                {openItem === faq.id ? 
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronUp size={20} className="text-brand-500" />
                  </motion.div> : 
                  <motion.div
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-gray-400" />
                  </motion.div>
                }
              </motion.button>
              
              <AnimatePresence initial={false}>
                {openItem === faq.id && (
                  <motion.div
                    key={`answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.p 
                      className="text-gray-600 pb-5"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
