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
    return 0.3 + index * 0.1;
  };

  const comparisonRows = [
    {
      title: 'Глубина воздействия',
      myApproach: 'Работа с корневыми причинами в подсознании',
      traditional: 'Работа в основном с симптомами на уровне сознания',
    },
    {
      title: 'Стойкость результата',
      myApproach: 'Постоянное устранение проблем без возврата',
      traditional: 'Проблемы могут возвращаться при стрессе',
    },
    {
      title: 'Скорость достижения результата',
      myApproach: 'Видимые изменения за 1–3 коррекции',
      traditional: 'Может потребоваться месяцы или годы',
    },
    {
      title: 'Основа метода',
      myApproach: 'Современные исследования в науке',
      traditional: 'Классические психологические теории',
    },
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
            animationDelay: 'var(--delay)',
          } as React.CSSProperties}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Сравнение подходов
          </h2>
          <p className="text-gray-600 text-lg">
            Узнайте, чем отличается мой подход от традиционной психологии
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Заголовки таблицы */}
          <div
            ref={(el) => (elementsRef.current[1] = el)}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 animate-on-scroll"
            style={{
              '--delay': '0.2s',
              opacity: 0,
              animationDelay: 'var(--delay)',
            } as React.CSSProperties}
          >
            <div className="col-span-1"></div>
            <div className="hidden lg:block text-center">
              <div className="bg-brand-50 rounded-t-lg py-4 px-6">
                <h3 className="font-bold text-xl text-brand-600">
                  Мой подход
                </h3>
              </div>
            </div>
            <div className="hidden lg:block text-center">
              <div className="bg-gray-100 rounded-t-lg py-4 px-6">
                <h3 className="font-bold text-xl text-gray-600">
                  Традиционная психология
                </h3>
              </div>
            </div>
          </div>

          {/* Строки сравнения */}
          {comparisonRows.map((row, index) => (
            <div
              key={index}
              ref={(el) => (elementsRef.current[2 + index] = el)}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-6 animate-on-scroll"
              style={{
                '--delay': `${getDelay(index)}s`,
                opacity: 0,
                animationDelay: 'var(--delay)',
              } as React.CSSProperties}
            >
              <div>
                <h4 className="font-semibold text-lg">{row.title}</h4>
              </div>
              <div className="bg-brand-50 rounded-lg py-4 px-6">
                <p className="text-brand-700">{row.myApproach}</p>
              </div>
              <div className="bg-gray-100 rounded-lg py-4 px-6">
                <p className="text-gray-700">{row.traditional}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
