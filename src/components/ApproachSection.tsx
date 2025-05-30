
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Подсознательные блоки",
    description: "Ваше подсознание блокирует действия, связанные с прошлым стрессом, чтобы «защитить» вас от повторения негативного опыта."
  },
  {
    id: 2,
    title: "Деструктивные паттерны",
    description: "Эти блоки создают разрушительные модели поведения: избегание новых возможностей, повторение нездоровых отношений, самосаботаж."
  },
  {
    id: 3,
    title: "Научный подход",
    description: "Используя современные научные открытия в области эпигенетики, нейропластичности и нейрохимии, я выявляю подсознательные программы и безопасно устраняю их влияние."
  },
  {
    id: 4,
    title: "Устранение корня проблемы",
    description: "В отличие от традиционной психологии, которая часто работает только с симптомами, мой метод устраняет первопричину в подсознании."
  }
];

const ApproachSection = () => {
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
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const currentElements = elementsRef.current;
    currentElements.forEach((el) => el && observer.observe(el));

    return () => {
      currentElements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const getDelay = (index: number) => {
    return index * 0.1; // Постепенное увеличение задержки для каждого элемента
  };

  return (
    <section className="py-20 relative overflow-hidden">
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

      <div className="container mx-auto px-4">
        {/* Заголовок */}
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
            Как я решаю проблемы
          </h2>
          <p className="text-lg text-gray-700">
            Мой метод направлен на устранение корневой причины ваших проблем, а не просто на временное облегчение симптомов.
          </p>
        </div>

        {/* Карточки с шагами */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={step.id}
              ref={(el) => (elementsRef.current[index + 1] = el)}
              className={`border border-gray-100 shadow-md animate-on-scroll ${
                index % 2 === 0 ? 'md:translate-y-10' : 'md:-translate-y-10'
              }`}
              style={{
                '--delay': `${getDelay(index)}s`,
                opacity: 0,
                animationDelay: 'var(--delay)'
              } as React.CSSProperties}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-semibold text-lg">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Нижний блок с кнопкой */}
        <div
          ref={(el) => (elementsRef.current[steps.length + 1] = el)}
          className="bg-gradient-to-r from-brand-50 to-cyan-50 rounded-xl p-8 md:p-10 shadow-md animate-on-scroll"
          style={{
            '--delay': '0.5s',
            opacity: 0,
            animationDelay: 'var(--delay)'
          } as React.CSSProperties}
        >
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
            <div className="flex-1 max-w-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Хотите узнать больше о научной основе метода?</h3>
              <p className="text-gray-700">
                Узнайте подробнее о том, как нейрокоррекции помогает перепрограммировать нейронные связи и устранять негативные подсознательные программы.
              </p>
            </div>
            
            <div className="mx-4 flex items-center justify-center self-stretch">
              <img 
                src="https://svobodarazuma.ru/Images/Aboutmethod.png" 
                alt="Научная основа метода"
                className="h-full max-h-[120px] md:max-h-[150px] object-contain"
              />
            </div>
            
            <Button asChild size="lg" className="whitespace-nowrap flex-shrink-0 self-center bg-brand-500 hover:bg-brand-600 text-white">
              <Link to="/approach" onClick={() => window.scrollTo(0, 0)}>
                Подробнее о методе
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
