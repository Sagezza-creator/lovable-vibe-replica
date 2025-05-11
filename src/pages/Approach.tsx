
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/CallToAction';
import { Brain, CheckCircle, Users, ArrowRight } from 'lucide-react';

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
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Как формируются блоки в нашем мозге</h2>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-600 mb-6">
                      Представьте: в детстве вы выступали перед публикой и забыли слова. Все смеялись, и вы испытали сильный стресс. В этот момент ваш мозг делает пометку: "Выступления перед людьми — опасно!" И в будущем, когда вам нужно будет выступать, подсознание будет всячески этому сопротивляться — появится страх, тревога, желание избежать ситуации.
                    </p>
                    
                    <div className="bg-brand-50 rounded-lg p-6 shadow-sm mb-6">
                      <h3 className="text-xl font-semibold mb-4 text-brand-600">Так работают все наши проблемы:</h3>
                      <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                        <li>Происходит стрессовое событие</li>
                        <li>Мозг создает защитную программу</li>
                        <li>Эта программа автоматически запускается в похожих ситуациях</li>
                        <li>Мы испытываем негативные эмоции и блокируем собственные действия</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      {/* Placeholder for image */}
                      <div className="h-64 w-full bg-gray-100 rounded flex items-center justify-center">
                        <span className="text-gray-400">Изображение</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Почему возникают проблемы?</h2>
                
                <Card className="bg-gradient-to-r from-brand-50 to-cyan-50 rounded-xl p-6 border-0 shadow-md mb-10">
                  <CardContent className="p-2">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                      <Brain className="mr-2 text-brand-500" size={24} />
                      Разум как компьютер с двумя операционными системами
                    </h3>
                    
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-2/3">
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
                      <div className="lg:w-1/3 flex items-center justify-center">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          {/* Placeholder for image */}
                          <div className="h-48 w-full bg-gray-100 rounded flex items-center justify-center">
                            <span className="text-gray-400">Изображение</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Как формируются подсознательные блоки</h3>
                <p className="text-gray-600 mb-6">
                  Каждый раз, когда мы переживаем стрессовую ситуацию, наш мозг создает особую нейронную связь. Эта связь работает как защитный механизм — "если снова возникнет подобная ситуация, нужно ее избежать". В результате формируются автоматические реакции:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {[
                    "Страх перед публичными выступлениями",
                    "Сложности в отношениях с противоположным полом",
                    "Неспособность отстаивать свои границы",
                    "Прокрастинация и откладывание важных дел",
                    "Самосаботаж при приближении к успеху",
                    "Хронические проблемы со здоровьем"
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-brand-100 hover:shadow-md transition-shadow">
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600 italic">
                  Эти реакции становятся настолько автоматическими, что мы не осознаем их влияние на нашу жизнь.
                </p>
              </div>
              
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Мой метод работы с подсознанием</h2>
                
                <div className="flex flex-col md:flex-row gap-8 mb-10">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Биохимия мозга и эмоции</h3>
                    <p className="text-gray-600 mb-4">
                      В основе моего подхода лежит понимание биохимических процессов в мозге. Когда мы испытываем стресс, в организме вырабатывается кортизол — гормон стресса. Когда мы чувствуем удовольствие — выделяется дофамин, гормон удовольствия.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Любая нейронная связь в нашем мозге закрепляется либо на кортизоле (и тогда мы стремимся избегать связанных с ней ситуаций), либо на дофамине (и тогда нам хочется повторять эти действия).
                    </p>
                  </div>
                  <div className="md:w-1/3 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      {/* Placeholder for image */}
                      <div className="h-48 w-full bg-gray-100 rounded flex items-center justify-center">
                        <span className="text-gray-400">Изображение</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-12 mb-10">
                <Button asChild size="lg" className="group">
                  <Link to="/correction" className="flex items-center">
                    Узнать больше о нейрокоррекции
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
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
