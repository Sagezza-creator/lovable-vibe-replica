
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';

const Correction = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">
              Нейрокоррекция
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Глубинная трансформация подсознательных программ
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Что такое нейрокоррекция */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 relative">
                  <div className="sticky top-24 bg-brand-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-brand-500 mb-3">
                      Что такое нейрокоррекция?
                    </h2>
                    <div className="h-1 w-16 bg-brand-300 mb-6 rounded-full"></div>
                    <div className="bg-white rounded-lg p-4 shadow-inner">
                      <img 
                        src="https://svobodarazuma.ru/Images/correction.jpg" 
                        alt="Нейрокоррекция" 
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="prose max-w-none">
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                      Нейрокоррекция — это эффективный метод освобождения от ограничивающих подсознательных программ, которые управляют нашими реакциями, эмоциями и поведением без нашего ведома.
                    </p>
                    <p className="text-lg leading-relaxed mb-5 text-gray-700">
                      Представьте, что в вашем подсознании хранится огромная библиотека «инструкций по выживанию», созданных на основе вашего прошлого опыта. Некоторые из этих инструкций помогают вам, а другие, наоборот, мешают и ограничивают. Нейрокоррекция помогает «переписать» устаревшие инструкции и создать новые, более полезные.
                    </p>
                    <div className="bg-gradient-to-r from-accent-50 to-white p-6 rounded-lg border-l-4 border-accent-300 my-8">
                      <p className="italic text-gray-700">
                        "Наше подсознание определяет до 95% наших действий, реакций и решений. Нейрокоррекция позволяет получить доступ к этим механизмам и изменить их."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Как проходит сессия */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-10 text-center gradient-heading">
                Как проходит сессия нейрокоррекции?
              </h2>
              
              <div className="bg-secondary/50 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-medium mb-6 text-brand-600">
                  Комфортный формат работы
                </h3>
                <p className="text-gray-700 mb-4">
                  Нейрокоррекция проходит в формате структурированной беседы. Вам не нужно погружаться в гипноз, транс или заново переживать неприятные события прошлого. Вы остаётесь в комфортном состоянии и полном сознании на протяжении всей сессии.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-medium mb-6 text-brand-600">
                  Продолжительность и формат
                </h3>
                <p className="text-gray-700 mb-6">
                  Одна сессия нейрокоррекции длится 3-5 часов. Это интенсивная, но спокойная работа, во время которой мы поэтапно:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-yellow-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center font-bold text-lg">1</div>
                      <h4 className="font-medium text-gray-800">Определяем проблему</h4>
                    </div>
                    <p className="text-gray-600 pl-14">
                      Точно определяем проблему, над которой будем работать
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-yellow-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center font-bold text-lg">2</div>
                      <h4 className="font-medium text-gray-800">Находим первоисточник</h4>
                    </div>
                    <p className="text-gray-600 pl-14">
                      Находим момент, когда сформировалась ограничивающая программа
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-yellow-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center font-bold text-lg">3</div>
                      <h4 className="font-medium text-gray-800">Деактивируем связи</h4>
                    </div>
                    <p className="text-gray-600 pl-14">
                      Деактивируем деструктивные связи в мозге, используя специальные техники
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-yellow-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center font-bold text-lg">4</div>
                      <h4 className="font-medium text-gray-800">Формируем новое</h4>
                    </div>
                    <p className="text-gray-600 pl-14">
                      Формируем новые, позитивные нейронные связи
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-yellow-300 hover:shadow-md transition-all duration-300 md:col-span-2">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center font-bold text-lg">5</div>
                      <h4 className="font-medium text-gray-800">Проверяем результат</h4>
                    </div>
                    <p className="text-gray-600 pl-14">
                      Проверяем результат и закрепляем изменения
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 bg-brand-50 border-l-4 border-brand-300 p-5 rounded-lg">
                  <p className="text-gray-700">
                    За время одной сессии мы прорабатываем одну конкретную проблему до полного её разрешения. Для некоторых запросов может потребоваться несколько сессий, если проблема имеет несколько источников или «слоёв».
                  </p>
                </div>
              </div>

              {/* Физиологический уровень */}
              <div className="mb-16 bg-gradient-to-r from-lavender-50 to-white p-8 rounded-2xl">
                <h3 className="text-2xl font-medium mb-6 text-lavender-700">
                  Что происходит на физиологическом уровне?
                </h3>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3 order-2 md:order-1">
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        {/* Здесь можно будет вставить изображение мозга/нейронов */}
                        <div className="text-gray-400 text-sm">Изображение нейронных связей</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 order-1 md:order-2">
                    <p className="text-gray-700 mb-4">
                      Когда мы переживаем стресс, в мозге формируется нейронная связь на основе гормона стресса — кортизола. В момент нейрокоррекции мы создаём новую нейронную связь, но уже на основе гормона удовольствия — дофамина. Это позволяет мозгу «переключиться» с режима защиты на режим удовольствия и роста.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Эффективность нейрокоррекции */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-10 text-center gradient-heading">
                Что делает нейрокоррекцию настолько эффективной?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-brand-300 to-brand-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Работа с первопричиной, а не симптомами
                    </h3>
                    <p className="text-gray-600">
                      В отличие от многих терапевтических подходов, нейрокоррекция направлена на работу с корнем проблемы — теми самыми нейронными связями в мозге, которые запускают нежелательное поведение или реакцию.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-accent-300 to-accent-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Отсутствие необходимости «бороться с собой»
                    </h3>
                    <p className="text-gray-600">
                      После нейрокоррекции вам не нужно прикладывать постоянные усилия, чтобы подавлять старые реакции или заставлять себя действовать по-новому. Изменения происходят естественно, потому что меняется сама основа реакции на нейронном уровне.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-yellow-300 to-yellow-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Быстрый и стойкий результат
                    </h3>
                    <p className="text-gray-600">
                      Многие клиенты отмечают изменения уже во время первой сессии. А поскольку мы работаем на уровне нейронных связей, а не убеждений или эмоций, результат сохраняется надолго без необходимости постоянной «поддержки».
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Дополнительный блок с призывом */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 text-center">
                <h3 className="text-2xl font-medium mb-6 text-gray-800">
                  Готовы к переменам?
                </h3>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                  Запишитесь на консультацию, и я помогу вам определить оптимальный формат работы с вашим запросом. Первая консультация бесплатна.
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-600 hover:to-brand-500 transition-all duration-300">
                  <a href="/contact">
                    Записаться на консультацию
                  </a>
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

export default Correction;
