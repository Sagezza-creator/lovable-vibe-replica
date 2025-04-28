
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/CallToAction';
import { Wand } from 'lucide-react';

const Correction = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-32 pb-2 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">
              Коррекция
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
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-yellow-50 flex items-center justify-center">
                  <Wand size={80} className="text-yellow-500" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  Что такое коррекция?
                </h2>
                <p className="text-gray-700 mb-4">
                  Коррекция — это целенаправленный процесс, использующий знания эпигенетики для выявления и деактивации подсознательных программ, вызывающих стресс, страх или дисгармонию в вашей жизни.
                </p>
                <p className="text-gray-700">
                  В отличие от традиционной психологии, которая часто работает только с симптомами, коррекция направлена на устранение первопричины проблемы — деструктивных нейронных связей в мозге, сформированных в результате стрессового опыта.
                </p>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Как работает коррекция?
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Механизм работы коррекции основан на современных научных знаниях о работе мозга:
                </p>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>
                    <span className="font-medium">Выявление блоков:</span> Ваше подсознание блокирует действия, связанные с прошлым стрессом, работая как своеобразный "предохранитель". Это создает негативные эмоции или избегание определенных ситуаций.
                  </li>
                  <li>
                    <span className="font-medium">Анализ нейронных связей:</span> В процессе коррекции мы выявляем конкретные нейронные связи, ассоциированные со стрессом и негативным опытом.
                  </li>
                  <li>
                    <span className="font-medium">Нейтрализация влияния:</span> Используя специальные техники, основанные на принципах эпигенетики, мы "переписываем" эти связи, нейтрализуя их негативное влияние.
                  </li>
                  <li>
                    <span className="font-medium">Создание новых шаблонов:</span> Вместо деструктивных паттернов формируются новые, конструктивные модели поведения и реакций.
                  </li>
                </ol>
                <p>
                  В результате восстанавливается гармония между сознанием и подсознанием, что позволяет вам действовать свободно, без внутренних ограничений и сопротивления.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Процесс коррекции
              </h3>
              <p className="text-gray-700 mb-4">
                Одна коррекция длится в среднем 3-5 часов и проходит в формате структурированного диалога. В процессе мы:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>Определяем конкретную проблему или паттерн, который вы хотите изменить</li>
                <li>Выявляем первоначальный стрессовый опыт, создавший эту программу</li>
                <li>Идентифицируем связанные нейронные цепи и их влияние на ваше текущее поведение</li>
                <li>Применяем специальные техники для нейтрализации негативного влияния этих программ</li>
                <li>Закрепляем новые, здоровые нейронные связи и модели поведения</li>
              </ul>
              <p className="text-gray-700">
                Важно отметить, что процесс не требует погружения в тяжелые эмоциональные состояния или повторного переживания травм. Коррекция работает мягко, но эффективно, позволяя достичь глубинных изменений без дополнительного стресса.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-b from-yellow-50 to-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Преимущества коррекции</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">✓</span>
                    <span>Устранение глубинных причин проблем, а не симптомов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">✓</span>
                    <span>Стойкие результаты, не требующие постоянной "поддержки"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">✓</span>
                    <span>Быстрые изменения (часто после 1-2 коррекций)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">✓</span>
                    <span>Мягкий процесс без погружения в травмирующие переживания</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-b from-accent-50 to-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Результаты коррекции</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 font-bold">✓</span>
                    <span>Освобождение от повторяющихся негативных сценариев</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 font-bold">✓</span>
                    <span>Уверенность в принятии решений и свобода выбора</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 font-bold">✓</span>
                    <span>Улучшение отношений с собой и окружающими</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 font-bold">✓</span>
                    <span>Повышение жизненной энергии и мотивации</span>
                  </li>
                </ul>
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
