
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import CallToAction from '@/components/CallToAction';

const Approach = () => {
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
              Как я работаю
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Научные основы моего подхода и методология работы
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Научная основа метода</h2>
            
            <div className="prose max-w-none mb-12">
              <p className="mb-4 text-gray-600">
                Работа нашего мозга и поведение в значительной степени определяются нейронными связями и биохимическими процессами. Когда мы переживаем стресс или травму, наш мозг формирует своеобразные "защитные" программы, которые в дальнейшем могут серьезно ограничивать нашу жизнь и создавать проблемы.
              </p>
              
              <h3 className="text-xl font-semibold my-4 text-gray-800">Эпигенетика и нейропластичность</h3>
              
              <p className="mb-4 text-gray-600">
                Современная наука доказала, что наши гены работают не по предопределенной программе, а гибко реагируют на условия среды. Этот принцип называется эпигенетикой. Также мозг обладает нейропластичностью — способностью формировать новые связи и изменять существующие.
              </p>
              
              <p className="mb-4 text-gray-600">
                Мой метод основан именно на этих научных открытиях. Я работаю с подсознательными программами, используя специальные техники для:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>Выявления негативных подсознательных программ, влияющих на ваше поведение</li>
                <li>Деактивации этих программ через работу с нейрохимическими реакциями мозга</li>
                <li>Формирования новых, поддерживающих нейронных связей</li>
              </ul>
              
              <p className="text-gray-600">
                Благодаря этому подходу достигается не просто временное облегчение симптомов, а устойчивое решение проблемы на глубинном уровне.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <Card className="bg-gradient-to-br from-blue-50 to-white border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Работа с кортизолом и дофамином</h3>
                  <p className="text-gray-600">
                    Стрессовые реакции связаны с выбросом гормона кортизола. Когда мозг ассоциирует определенные ситуации со стрессом, он блокирует действия через избыток кортизола. Мой метод помогает "перепрограммировать" эти ассоциации и нормализовать баланс нейромедиаторов, включая дофамин — гормон мотивации и удовольствия.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-cyan-50 to-white border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Подсознательные ассоциации</h3>
                  <p className="text-gray-600">
                    Наше подсознание формирует ассоциации между ситуациями, эмоциями и реакциями. Негативный опыт создает деструктивные ассоциации, которые затем влияют на наши решения и поведение. Я помогаю выявить эти ассоциации и заменить их на конструктивные, поддерживающие ваши цели и желания.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Процесс работы</h2>
            
            <div className="space-y-8 mb-16">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-semibold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Диагностика</h3>
                  <p className="text-gray-600">
                    На первом этапе мы определяем ключевые проблемы, их проявления в вашей жизни и выявляем возможные подсознательные блоки, которые могут быть их причиной. Я использую специальные диагностические техники, которые помогают быстро и точно определить корень проблемы.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-semibold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Работа с подсознательными программами</h3>
                  <p className="text-gray-600">
                    Используя специальные техники, основанные на эпигенетике, мы работаем с выявленными подсознательными блоками. Этот процесс абсолютно безопасен и не требует погружения в гипнотические состояния. Вы всегда остаетесь в полном сознании и контроле над процессом.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-semibold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Формирование новых нейронных связей</h3>
                  <p className="text-gray-600">
                    После деактивации негативных подсознательных программ мы работаем над формированием новых, поддерживающих нейронных связей. Это помогает не только решить текущую проблему, но и создать основу для дальнейшего развития и реализации вашего потенциала.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-semibold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Закрепление результатов</h3>
                  <p className="text-gray-600">
                    На завершающем этапе мы закрепляем достигнутые результаты и обсуждаем стратегии для поддержания и развития позитивных изменений в вашей жизни. Я также даю рекомендации и упражнения, которые помогут вам самостоятельно работать над собой в дальнейшем.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-brand-50 to-cyan-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Результаты работы</h3>
              <p className="text-gray-600 mb-4">
                После прохождения полного курса работы вы заметите:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Исчезновение старых деструктивных паттернов поведения</li>
                <li>Повышение энергии и мотивации</li>
                <li>Улучшение отношений с окружающими</li>
                <li>Снижение уровня стресса и тревожности</li>
                <li>Появление новых возможностей для самореализации</li>
                <li>Повышение качества жизни в целом</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Approach;
