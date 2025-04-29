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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            Как я решаю проблемы
          </h2>
          <p className="text-lg text-gray-700">
            Мой метод направлен на устранение корневой причины ваших проблем, а не просто на временное облегчение симптомов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={step.id} 
              className={`border border-gray-100 shadow-md transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
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

        <div className="bg-gradient-to-r from-brand-50 to-cyan-50 rounded-xl p-8 md:p-10 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between h-full">
            <div className="flex-1 max-w-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Хотите узнать больше о научной основе метода?</h3>
              <p className="text-gray-700">
                Узнайте подробнее о том, как нейрокоррекции помогает перепрограммировать нейронные связи и устранять негативные подсознательные программы.
              </p>
            </div>
            
            <div className="mx-4 h-full flex items-center">
              <img 
                src="https://svobodarazuma.ru/Images/Aboutmethod.png" 
                alt="Научная основа метода"
                className="h-full max-h-[180px] object-contain"
              />
            </div>
            
            <Button asChild size="lg" className="whitespace-nowrap">
              <Link to="/approach">Подробнее о методе</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;