
import { useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import { User } from 'lucide-react';
import CallToAction from '@/components/CallToAction';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">
              Обо мне
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Мой путь к помощи людям через эпигенетический подход
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
              <div className="md:w-1/3">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <User size={100} className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Александр Никифоров
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Специалист в области психологической помощи с использованием эпигенетического подхода
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-600">2+</p>
                    <p className="text-sm text-gray-600">Лет опыта</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-600">500+</p>
                    <p className="text-sm text-gray-600">Клиентов</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-600">95%</p>
                    <p className="text-sm text-gray-600">Успешных результатов</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="prose max-w-none">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Мой путь</h3>
              <p className="mb-4 text-gray-600">
              Я долго искал ответ, почему реакции людей на одинаковые события так различны, пока не углубился в работу с подсознанием, опираясь на открытия эпигенетики, нейропластичности и нейрохимии. Я увидел, как традиционные методы психологической помощи часто работают только с симптомами, а не с корнем проблемы, что приводит к временному облегчению, но не к полному исцелению.
              </p>
              
              <p className="mb-4 text-gray-600">
                Такой нетипичный подход к работе с психологическими травмами был сначала отработан на себе, затем на ближайшем окружении, а затем и на клиентах. Его результаты вдохновили меня сделать этот метод основой моей практики.
              </p>

              <h3 className="text-2xl font-semibold my-6 text-gray-800">Моя миссия</h3>
              <p className="mb-4 text-gray-600">
                Я глубоко убежден, что каждый человек имеет право на счастливую, полноценную жизнь без ограничений, которые накладывают подсознательные блоки. Моя миссия — помочь как можно большему количеству людей освободиться от этих невидимых оков и раскрыть свой истинный потенциал.
              </p>

              <p className="mb-4 text-gray-600">
                Я не просто помогаю решить конкретную проблему — я даю вам инструмент для постоянной свободы. После работы со мной вы не только избавляетесь от текущей проблемы, но и обретаете новое понимание себя, которое позволяет вам самостоятельно распознавать и преодолевать препятствия в будущем.
              </p>

              <h3 className="text-2xl font-semibold my-6 text-gray-800">Мои ценности</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li><strong>Эффективность</strong> — я ценю ваше время и стремлюсь к максимально быстрым и стойким результатам</li>
                <li><strong>Индивидуальный подход</strong> — каждый человек уникален, и я адаптирую свой метод под ваши конкретные потребности</li>
                <li><strong>Безопасность</strong> — все техники, которые я использую, абсолютно безопасны и научно обоснованы</li>
                <li><strong>Поддержка</strong> — я сопровождаю вас на каждом этапе изменений и всегда доступен для консультаций</li>
                <li><strong>Конфиденциальность</strong> — всё, что вы рассказываете мне, остается строго между нами</li>
              </ul>

              <p className="text-gray-600">
                Я верю, что жизнь может быть намного лучше, чем вы себе представляете. И я готов помочь вам осуществить эти позитивные изменения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default About;
