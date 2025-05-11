
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ProblemPoint {
  title: string;
  description: string;
}

const problems: ProblemPoint[] = [
  {
    title: "Постоянная тревога",
    description: "Вы испытываете необъяснимое чувство беспокойства, которое мешает нормально жить и работать"
  },
  {
    title: "Страхи и фобии",
    description: "У вас есть иррациональные страхи, которые ограничивают вашу свободу и возможности"
  },
  {
    title: "Проблемы в отношениях",
    description: "Вы повторяете одни и те же сценарии, выбирая не тех партнеров или конфликтуя по одним и тем же поводам"
  },
  {
    title: "Низкая самооценка",
    description: "Вы постоянно сомневаетесь в себе, своих способностях и заслуживаете ли вы успеха"
  },
  {
    title: "Самосаботаж",
    description: "Когда вы близки к успеху, вы неосознанно делаете что-то, что всё разрушает"
  },
  {
    title: "Психосоматические проблемы",
    description: "У вас есть хронические физические симптомы, которые не имеют медицинского объяснения"
  }
];

const ProblemsSection = () => {
  const [activeProblemIndex, setActiveProblemIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    
    const currentCardsRef = cardsRef.current;
    currentCardsRef.forEach(card => card && observer.observe(card));
    
    return () => {
      currentCardsRef.forEach(card => card && observer.unobserve(card));
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative"
    >
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .card-hover-effect {
            transition: all 0.3s ease;
          }
          
          .card-hover-effect:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
          
          .gradient-overlay {
            position: absolute;
            background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
            bottom: 0;
            left: 0;
            right: 0;
            height: 100px;
          }
        `}
      </style>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            С какими проблемами я работаю?
          </h2>
          <p className="text-lg text-gray-700">
            Многие психологические проблемы имеют одну общую черту: они управляются подсознательными программами, которые когда-то были созданы для вашей защиты
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`opacity-0 card-hover-effect`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onMouseEnter={() => setActiveProblemIndex(index)}
              onMouseLeave={() => setActiveProblemIndex(null)}
            >
              <Card className={`h-full border-l-4 ${activeProblemIndex === index ? 'border-l-brand-500' : 'border-l-transparent'} transition-all duration-300`}>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${activeProblemIndex === index ? 'text-brand-600' : 'text-gray-800'}`}>
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">{problem.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 shadow-md hover:shadow-lg transition-all">
            <Link to="/approach">Узнать, как я решаю эти проблемы</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
