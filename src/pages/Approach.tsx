import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Shield, AlertCircle, XCircle, Users, ArrowRight } from 'lucide-react';

const Approach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Варианты анимации для эффекта появления
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Секция Hero */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">
        <img
          src="/images/neural-network.jpg"
          alt="Нейронная сеть"
          className="absolute inset-0 object-cover opacity-40"
          loading="lazy"
        />
        <div className="text-center z-10 px-4">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
          >
            Разблокируйте свой разум!
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
          >
            Измените свою жизнь с помощью нейрокоррекции за несколько сеансов
          </motion.p>
          <Button asChild size="lg" className="hover:scale-105 transition-transform bg-blue-600 hover:bg-blue-700">
            <Link to="/consultation">Записаться на сеанс</Link>
          </Button>
        </div>
      </div>

      {/* Секция: Как формируются проблемы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Почему ваш мозг создает проблемы
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Brain, title: 'Стрессовое событие', desc: 'Прошлое событие вызывает стресс.' },
              { icon: Shield, title: 'Защитная программа', desc: 'Мозг создает защиту.' },
              { icon: AlertCircle, title: 'Автоматический блок', desc: 'Подсознание останавливает действие.' },
              { icon: XCircle, title: 'Негативные эмоции', desc: 'Страх или избегание включаются.' },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md text-center border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <step.icon className="mx-auto mb-4 text-blue-500" size={40} />
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-blue-50 p-6 rounded-lg shadow-sm text-center"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">История Анны</h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Анна боялась публичных выступлений из-за унижения в детстве. После двух сеансов нейрокоррекции она уверенно выступила на работе.
            </p>
            <Button asChild variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
              <Link to="/correction">Узнать больше о нейрокоррекции</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Секция: Почему проблемы сохраняются */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Конфликт сознания и подсознания
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Brain className="mb-4 text-blue-500" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Сознание</h3>
              <p className="text-gray-600">
                Ваше сознание ставит цели и желания, например, выступать уверенно или строить отношения.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Shield className="mb-4 text-blue-500" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Подсознание</h3>
              <p className="text-gray-600">
                Подсознание блокирует действия, связанные с прошлым стрессом, вызывая страх или избегание.
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gray-100 p-6 rounded-lg inline-block">
              <p className="text-gray-600 italic">Диаграмма: Конфликт сознания и подсознания (Добавить в Loveable)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Секция: Мой метод нейрокоррекции */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Как нейрокоррекция освобождает вас
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:w-2/3"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Перепрограммирование мозга</h3>
              <p className="text-gray-600 mb-4">
                Нейрокоррекция устраняет деструктивные программы подсознания, заменяя реакции на стресс (кортизол) на позитивные (дофамин).
              </p>
              <p className="text-gray-600">
                В отличие от традиционной терапии, мой метод работает напрямую с биохимией мозга, давая результаты за несколько сеансов.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:w-1/3 flex items-center justify-center"
            >
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-600 italic">График: Кортизол vs Дофамин (Добавить в Loveable)</p>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { name: 'Мария', quote: 'Я перестала откладывать дела после одного сеанса!' },
              { name: 'Алексей', quote: 'Мой страх быть отвергнутым исчез — спасибо!' },
              { name: 'Ольга', quote: 'Впервые я чувствую себя свободной быть собой.' },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-blue-50 border-0">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">“{testimonial.quote}”</p>
                  <p className="text-blue-600 font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
              <Link to="/diary" className="flex items-center">
                Посмотреть результаты в моем дневнике
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Финальная секция CTA */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-gray-800"
          >
            Готовы жить свободно?
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-xl mx-auto"
          >
            Запишитесь на сеанс нейрокоррекции сегодня и начните освобождаться от подсознательных блоков.
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Ваш email"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Записаться
              </Button>
            </div>
          </motion.div>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-gray-600"
          >
            <Users className="inline mr-2 text-blue-500" size={20} />
            Помогла более 1000 клиентам жить счастливее
          </motion.p>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-4 text-blue-600 underline"
          >
            <Link to="/diary">Исследуйте "Тайны разума. Дневник"</Link>
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Approach;