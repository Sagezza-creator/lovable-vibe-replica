
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import CallToAction from '@/components/CallToAction';
import { Brain, CheckCircle, Users, Layers } from 'lucide-react';

const Approach = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-on-scroll {
            animation: fadeUp 0.6s both;
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">
              Как это работает?
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Научный подход к решению психологических проблем
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose max-w-none mb-12">
              <p className="text-lg text-gray-600 mb-8">
                Каждый из нас хотя бы раз задавался вопросом: "Почему я продолжаю наступать на одни и те же грабли?" или "Почему я не могу изменить свою жизнь, хотя понимаю, что делаю не так?" Ответ лежит в особенностях работы нашего мозга и в том, как формируются наши реакции и поведение.
              </p>
              
              <div className="bg-gradient-to-r from-brand-50 to-cyan-50 rounded-xl p-8 md:p-10 shadow-md mb-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Почему возникают проблемы?</h2>
                
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                      <Brain className="mr-2 text-brand-500" size={24} />
                      Разум как компьютер с двумя операционными системами
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Представьте, что ваш разум — это компьютер с двумя операционными системами:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                      <li>Сознание — то, что вы осознаете, ваши мысли, желания и намерения</li>
                      <li>Подсознание — автоматические программы, которые работают в фоновом режиме</li>
                    </ul>
                    <p className="text-gray-600">
                      Когда эти системы работают согласованно, вы легко достигаете целей. Но часто возникает конфликт: сознание хочет одного, а подсознание блокирует эти желания, запуская свои защитные программы.
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:w-1/3">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      {/* Placeholder for image */}
                      <div className="h-64 w-full bg-gray-100 rounded flex items-center justify-center">
                        <span className="text-gray-400">Изображение</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Как формируются подсознательные блоки</h3>
                <p className="text-gray-600 mb-4">
                  Каждый раз, когда мы переживаем стрессовую ситуацию, наш мозг создает особую нейронную связь. Эта связь работает как защитный механизм — "если снова возникнет подобная ситуация, нужно ее избежать". В результате формируются автоматические реакции:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  {[
                    "Страх перед публичными выступлениями",
                    "Сложности в отношениях с противоположным полом",
                    "Неспособность отстаивать свои границы",
                    "Прокрастинация и откладывание важных дел",
                    "Самосаботаж при приближении к успеху",
                    "Хронические проблемы со здоровьем"
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-brand-100">
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600">
                  Эти реакции становятся настолько автоматическими, что мы не осознаем их влияние на нашу жизнь.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold mb-8 text-gray-800">Мой метод работы с подсознанием</h2>
              
              <div className="flex flex-col lg:flex-row gap-8 mb-12">
                <div className="lg:w-2/3">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Биохимия мозга и эмоции</h3>
                  <p className="text-gray-600 mb-4">
                    В основе моего подхода лежит понимание биохимических процессов в мозге. Когда мы испытываем стресс, в организме вырабатывается кортизол — гормон стресса. Когда мы чувствуем удовольствие — выделяется дофамин, гормон удовольствия.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Любая нейронная связь в нашем мозге закрепляется либо на кортизоле (и тогда мы стремимся избегать связанных с ней ситуаций), либо на дофамине (и тогда нам хочется повторять эти действия).
                  </p>
                </div>
                <div className="lg:w-1/3 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    {/* Placeholder for image */}
                    <div className="h-48 w-full bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-400">Изображение</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Принцип моей работы с клиентами</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <Card className="bg-gradient-to-br from-white to-blue-50 shadow-md border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-semibold text-lg mr-3">1</div>
                      <h4 className="text-lg font-semibold text-gray-800">Диагностика</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Определяем конкретные проблемные ситуации в вашей жизни</li>
                      <li>Выявляем эмоциональные и физические реакции, сопровождающие эти ситуации</li>
                      <li>Анализируем, как эти реакции влияют на вашу жизнь и мешают достигать целей</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-white to-brand-50 shadow-md border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-semibold text-lg mr-3">2</div>
                      <h4 className="text-lg font-semibold text-gray-800">Индивидуальная стратегия работы</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Разрабатываем план, учитывающий особенности вашей ситуации</li>
                      <li>Определяем количество и интенсивность необходимых нейрокоррекций</li>
                      <li>Устанавливаем реалистичные цели и временные рамки</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-white to-cyan-50 shadow-md border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-semibold text-lg mr-3">3</div>
                      <h4 className="text-lg font-semibold text-gray-800">Проведение нейрокоррекций</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Работаем с подсознательными программами, используя специальные техники</li>
                      <li>Отслеживаем изменения в реакциях и эмоциональном состоянии</li>
                      <li>При необходимости корректируем план работы</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-white to-accent-50 shadow-md border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-semibold text-lg mr-3">4</div>
                      <h4 className="text-lg font-semibold text-gray-800">Закрепление результатов</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Даю рекомендации для поддержания достигнутых изменений</li>
                      <li>Обучаю простым техникам самостоятельной работы с подсознанием</li>
                      <li>Отслеживаем устойчивость результатов в реальных жизненных ситуациях</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Чем мой подход отличается от традиционной психологии</h2>
                
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Традиционная психология:</h3>
                    <ul className="list-disc pl-6 space-y-3 text-gray-600">
                      <li>Фокусируется преимущественно на сознании</li>
                      <li>Часто требует многих месяцев или лет регулярных встреч</li>
                      <li>Помогает понять причины проблем, но не всегда их устраняет</li>
                      <li>Может вызывать повторную травматизацию при проработке болезненного опыта</li>
                    </ul>
                  </div>
                  
                  <div className="lg:w-1/2 bg-brand-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-brand-600">Мой метод нейрокоррекции:</h3>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Работает напрямую с подсознанием и нейронными связями</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Дает заметные результаты за 1-5 сессий</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Устраняет первопричину проблемы, а не только ее симптомы</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Не требует погружения в негативные переживания прошлого</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Для каких проблем подходит мой метод?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    { text: "Страхи и фобии различного происхождения", icon: <Brain className="h-8 w-8 text-brand-400" /> },
                    { text: "Хроническая тревога и панические атаки", icon: <Brain className="h-8 w-8 text-brand-400" /> },
                    { text: "Неуверенность в себе и низкая самооценка", icon: <Users className="h-8 w-8 text-brand-400" /> },
                    { text: "Сложности в построении отношений", icon: <Users className="h-8 w-8 text-brand-400" /> },
                    { text: "Карьерные блоки и финансовые ограничения", icon: <Layers className="h-8 w-8 text-brand-400" /> },
                    { text: "Психосоматические заболевания", icon: <Brain className="h-8 w-8 text-brand-400" /> },
                    { text: "Зависимости и навязчивые состояния", icon: <Layers className="h-8 w-8 text-brand-400" /> },
                    { text: "Последствия психологических травм", icon: <Brain className="h-8 w-8 text-brand-400" /> }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-brand-200">
                      <div className="mb-3">
                        {item.icon}
                      </div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-brand-50 to-cyan-50 rounded-xl p-8 md:p-10 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Первые шаги к изменениям</h2>
                <p className="text-gray-700 mb-6">
                  Если вы готовы начать работу над собой и своими подсознательными программами, вот что вас ждет:
                </p>
                
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-semibold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Первичная консультация</h3>
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 md:w-2/3">
                          <li>Обсуждаем вашу ситуацию и запрос</li>
                          <li>Отвечаю на все вопросы о методе</li>
                          <li>Определяем, подходит ли вам моя методика</li>
                        </ul>
                        <div className="hidden md:block md:w-1/3">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            {/* Placeholder for image */}
                            <div className="h-32 w-full bg-gray-100 rounded flex items-center justify-center">
                              <span className="text-gray-400">Изображение</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-semibold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Составление плана работы</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Разрабатываем индивидуальную стратегию нейрокоррекций</li>
                        <li>Определяем количество необходимых сессий</li>
                        <li>Планируем график работы</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-semibold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Начало трансформации</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Проводим первую нейрокоррекцию</li>
                        <li>Отслеживаем первые изменения в вашем состоянии</li>
                        <li>Корректируем план при необходимости</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Approach;
