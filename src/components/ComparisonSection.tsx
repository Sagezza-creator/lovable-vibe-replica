import { useState, useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            if (!element.dataset.animated) {
              element.style.animationPlayState = 'running';
              element.dataset.animated = 'true';
            }
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    const currentElements = elementsRef.current;
    currentElements.forEach((el) => el && observer.observe(el));

    return () => {
      currentElements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const getDelay = (index: number) => {
    return 0.1 + (index * 0.1); // Базовая задержка + увеличение для каждого элемента
  };

  const comparisonRows = [
    {
      title: "Глубина воздействия",
      myApproach: "Работа с корневыми причинами в подсознании",
      traditional: "Работа в основном с симптомами на уровне сознания"
    },
    {
      title: "Стойкость результата",
      myApproach: "Постоянное устранение проблем без возврата",
      traditional: "Проблемы могут возвращаться при стрессе"
    },
    {
      title: "Скорость достижения результата",
      myApproach: "Видимые изменения за 1-3 коррекции",
      traditional: "Может потребоваться месяцы или годы"
    },
    {
      title: "Основа метода",
      myApproach: "Современные исследования в науке",
      traditional: "Классические психологические теории"
    }
  ];

  return (
    <section className="py-20">
      <style jsx>{`
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
      `}</style>

      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div
          ref={(el) => (elementsRef.current[0] = el)}
          className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll"
          style={{
            '--delay': '0.1s',
            opacity: 0,
            animationDelay: 'var(--delay)'
          } as React.CSSProperties}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            Почему выбирают мой подход
          </h2>
          <p className="text-lg text-gray-700">
            В чем отличие моего метода от традиционной психологической помощи
          </p>
        </div>

        <div 
          ref={(el) => (elementsRef.current[1] = el)}
          className="max-w-4xl mx-auto animate-on-scroll"
          style={{
            '--delay': '0.2s',
            opacity: 0,
            animationDelay: 'var(--delay)'
          } as React.CSSProperties}
        >
          {/* Заголовки таблицы */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="col-span-1">
              {/* Пустая колонка для десктопа */}
            </div>
            <div className="hidden lg:block text-center">
              <div className="bg-brand-50 rounded-t-lg py-4 px-6 animate-on-scroll">
                <h3 className="font-bold text-xl text-brand-600">Мой подход</h3>
              </div>
            </div>
            <div className="hidden lg:block text-center">
              <div className="bg-gray-100 rounded-t-lg py-4 px-6 animate-on-scroll">
                <h3 className="font-bold text-xl text-gray-600">Традиционная психология</h3>
              </div>
            </div>
          </div>
          
          {/* Заголовки для мобильных */}
          <div className="lg:hidden grid grid-cols-3 gap-4 mb-6 animate-on-scroll">
            <div className="col-span-3">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Сравнение подходов</h3>
            </div>
          </div>

          {/* Строки сравнения */}
          <div className="space-y-6">
            {comparisonRows.map((row, index) => (
              <div 
                key={index}
                ref={(el) => (elementsRef.current[index + 2] = el)}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 rounded-lg animate-on-scroll ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white border'
                }`}
                style={{
                  '--delay': `${getDelay(index)}s`,
                  opacity: 0,
                  animationDelay: 'var(--delay)'
                } as React.CSSProperties}
              >
                <div className="font-medium text-gray-800">
                  <h4 className="lg:hidden font-bold text-lg mb-4">{row.title}</h4>
                  <p>{row.title}</p>
                </div>
                <div className="lg:text-center">
                  <h4 className="lg:hidden font-semibold text-brand-600 mb-2">Мой подход</h4>
                  <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                    <Check size={20} className="text-green-500 min-w-[20px]" />
                    <span>{row.myApproach}</span>
                  </p>
                </div>
                <div className="lg:text-center">
                  <h4 className="lg:hidden font-semibold text-gray-600 mb-2">Традиционная психология</h4>
                  <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                    <X size={20} className="text-red-400 min-w-[20px]" />
                    <span>{row.traditional}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;