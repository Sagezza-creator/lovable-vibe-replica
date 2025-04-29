import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/CallToAction';
import { Layers } from 'lucide-react';

const ConceptionMatrices = () => {
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
              Матрицы зачатия
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Ключ к пониманию и решению глубинных подсознательных программ
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-lavender-50 flex items-center justify-center">
                  <img 
                    src="https://svobodarazuma.ru/Images/Matrix.jpg" 
                    alt="Матрицы зачатия" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  Что такое матрицы зачатия?
                </h2>
                <p className="text-gray-700 mb-4">
                  Матрицы зачатия — это накопленная клеточная память опыта, полученного во время зачатия, внутриутробного развития и рождения, которая бессознательно хранится в каждой клетке нашего тела. Эта память формирует фундаментальные паттерны нашего поведения и реакций, влияя на все аспекты нашей жизни.
                </p>
                <p className="text-gray-700">
                  Подобно тому, как операционная система определяет работу компьютера, матрицы зачатия создают основу для всех последующих программ и шаблонов, которые мы приобретаем в течение жизни.
                </p>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Как матрицы зачатия влияют на нашу жизнь?
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Нарушения в матрицах зачатия могут проявляться во многих сферах жизни, создавая устойчивые проблемы, которые сложно преодолеть традиционными методами:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Постоянные страхи и тревоги без очевидной причины</li>
                  <li>Хронические заболевания, не поддающиеся стандартному лечению</li>
                  <li>Повторяющиеся сценарии в отношениях</li>
                  <li>Проблемы с личными границами и самооценкой</li>
                  <li>Необъяснимое чувство отверженности или ненужности</li>
                  <li>Сложность в достижении целей из-за внутренних блоков</li>
                </ul>
                <p>
                  Эти паттерны настолько глубоко укоренены в нашем подсознании, что часто мы не осознаем их влияние на наши решения и поведение.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Работа с матрицами зачатия
              </h3>
              <p className="text-gray-700 mb-4">
                В процессе моей работы я помогаю выявить и проработать все 10 основных матриц зачатия. Этот процесс позволяет нейтрализовать до 80% базовых подсознательных шаблонов, создающих препятствия в вашей жизни.
              </p>
              <p className="text-gray-700 mb-4">
                Проработка матриц зачатия становится прочным фундаментом для последующего решения более поздних программ и блоков, сформированных в детстве и взрослой жизни. Многие клиенты отмечают, что после коррекции матриц зачатия они чувствуют глубокое облегчение и освобождение от давних ограничений.
              </p>
              <p className="text-gray-700">
                Каждая матрица отвечает за определенный аспект нашей жизни: от базового чувства безопасности до способности строить здоровые отношения и реализовывать свой потенциал. Работа с ними позволяет достичь глубинной трансформации и создать новую основу для гармоничной и сбалансированной жизни.
              </p>
            </div>

            <div className="bg-gradient-to-r from-lavender-50 to-lavender-100 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Преимущества работы с матрицами зачатия:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-medium text-gray-800">Устранение глубинных причин</p>
                  <p className="text-gray-600 text-sm">Работа с первопричиной проблем, а не с симптомами</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-medium text-gray-800">Долговременный эффект</p>
                  <p className="text-gray-600 text-sm">Изменения становятся частью новой "операционной системы"</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-medium text-gray-800">Системный подход</p>
                  <p className="text-gray-600 text-sm">Затрагивает все аспекты жизни: здоровье, отношения, самореализацию</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-medium text-gray-800">Ускорение результатов</p>
                  <p className="text-gray-600 text-sm">Делает более эффективной работу с последующими коррекциями</p>
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

export default ConceptionMatrices;