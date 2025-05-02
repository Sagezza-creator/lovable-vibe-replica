
import { useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Анимационные варианты
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white"
        variants={itemVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold gradient-heading mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Обо мне
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Мой путь к исцелению через работу с подсознанием
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.section 
        className="py-16"
        variants={itemVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
              <motion.div 
                className="md:w-1/3"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-64 h-64 mx-auto">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden">
                      <img 
                        src="https://svobodarazuma.ru/Images/Avatar-photo.png" 
                        alt="Александр Никифоров"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="md:w-2/3"
                variants={containerVariants}
              >
                <motion.h2 
                  className="text-3xl font-bold text-gray-800 mb-4"
                  variants={itemVariants}
                >
                  Александр Никифоров
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 mb-4"
                  variants={itemVariants}
                >
                  Специалист по нейрокоррекции деструктивных программ подсознания
                </motion.p>
                <motion.div 
                  className="flex gap-4"
                  variants={containerVariants}
                >
                  {[
                    { value: '2+', label: 'Лет опыта' },
                    { value: '1000+', label: 'Часов коррекций' },
                    { value: '95%', label: 'Успешных результатов' }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="text-3xl font-bold text-brand-600">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <Separator className="my-12" />

            <motion.div 
              className="prose max-w-none"
              variants={containerVariants}
            >
              {[
                {
                  title: "Мой путь",
                  content: [
                    "Я долго искал ответ, почему реакции людей на одинаковые события так различны, пока не углубился в работу с подсознанием, опираясь на открытия эпигенетики, нейропластичности и нейрохимии. Я увидел, как традиционные методы психологической помощи часто работают только с симптомами, а не с корнем проблемы, что приводит к временному облегчению, но не к полному исцелению.",
                    "Такой нетипичный подход к работе с психологическими травмами был сначала отработан на себе, затем на ближайшем окружении, а затем и на клиентах. Его результаты вдохновили меня сделать этот метод основой моей практики."
                  ]
                },
                {
                  title: "Моя миссия",
                  content: [
                    "Я глубоко убежден, что каждый человек имеет право на счастливую, полноценную жизнь без ограничений, которые накладывают подсознательные блоки. Моя миссия — помочь как можно большему количеству людей освободиться от этих невидимых оков и раскрыть свой истинный потенциал.",
                    "Я не просто помогаю решить конкретную проблему — я даю вам инструмент для постоянной свободы. После работы со мной вы не только избавляетесь от текущей проблемы, но и обретаете новое понимание себя, которое позволяет вам самостоятельно распознавать и преодолевать препятствия в будущем."
                  ]
                },
                {
                  title: "Мои ценности",
                  content: [],
                  list: [
                    "<strong>Эффективность</strong> — я ценю ваше время и стремлюсь к максимально быстрым и стойким результатам",
                    "<strong>Индивидуальный подход</strong> — каждый человек уникален, и я адаптирую свой метод под ваши конкретные потребности",
                    "<strong>Безопасность</strong> — все техники, которые я использую, абсолютно безопасны и научно обоснованы",
                    "<strong>Поддержка</strong> — я сопровождаю вас на каждом этапе изменений и всегда доступен для консультаций",
                    "<strong>Конфиденциальность</strong> — всё, что вы рассказываете мне, остается строго между нами"
                  ],
                  footer: "Я верю, что жизнь может быть намного лучше, чем вы себе представляете. И я готов помочь вам осуществить эти позитивные изменения."
                }
              ].map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <motion.h3 
                    className="text-2xl font-semibold my-6 text-gray-800"
                    variants={itemVariants}
                  >
                    {section.title}
                  </motion.h3>
                  
                  {section.content && section.content.map((paragraph, pIndex) => (
                    <motion.p 
                      key={pIndex} 
                      className="mb-4 text-gray-600"
                      variants={itemVariants}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                  
                  {section.list && (
                    <motion.ul 
                      className="list-disc pl-6 space-y-2 mb-6 text-gray-600"
                      variants={containerVariants}
                    >
                      {section.list.map((item, lIndex) => (
                        <motion.li 
                          key={lIndex}
                          variants={itemVariants}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </motion.ul>
                  )}
                  
                  {section.footer && (
                    <motion.p 
                      className="text-gray-600"
                      variants={itemVariants}
                    >
                      {section.footer}
                    </motion.p>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <CallToAction />
    </motion.div>
  );
};

export default About;
