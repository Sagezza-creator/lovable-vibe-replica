import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Problem {
  id: number;
  title: string;
  description: string;
}

const problems: Problem[] = [
  {
    id: 1,
    title: "Повторяющиеся жизненные сценарии",
    description: "Постоянные измены партнеров, финансовые трудности, неудачи в карьере? Эти паттерны не случайны – они управляются подсознанием."
  },
  {
    id: 2,
    title: "Страхи и тревожность",
    description: "Если вас преследует беспричинная тревога, страхи или панические атаки – это сигналы подсознательных блоков."
  },
  {
    id: 3,
    title: "Отсутствие мотивации и энергии",
    description: "Сложно начать новое дело? Постоянная усталость и апатия? Ваш мозг блокирует вас из-за прошлого негативного опыта."
  },
  {
    id: 4,
    title: "Сложности в отношениях",
    description: "Проблемы с доверием, конфликты, неспособность построить здоровые отношения – всё это следствия подсознательных программ."
  },
  {
    id: 5,
    title: "Психосоматические расстройства",
    description: "Хронические боли, проблемы с пищеварением, кожные заболевания и другие физические проявления стресса часто имеют эмоциональные корни."
  },
  {
    id: 6,
    title: "Самосаботаж",
    description: "Вы почти достигаете цели, но в последний момент всё срывается? Подсознание может саботировать ваш успех из страха перемен."
  }
];

const ProblemsSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Функция для расчета задержки в зависимости от позиции карточки
  const getDelay = (index: number) => {
    // Для первой строки: 0.4, 0.5, 0.6
    // Для второй строки: 0.7, 0.8, 0.9
    return 0.4 + (Math.floor(index / 3) * 0.3) + (index % 3) * 0.1;
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            Какие проблемы я решаю
          </h2>
          <p className="text-lg text-gray-700">
            Чувствуете, что застряли в одной и той же ситуации? Я помогу найти и устранить причину на уровне подсознания.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card 
              key={problem.id} 
              className={`border-0 shadow-md opacity-0 animate-fade-up overflow-hidden transition-all duration-300 hover:shadow-lg ${
                activeCard === problem.id ? 'ring-2 ring-primary' : 'hover:scale-[1.02]'
              }`}
              style={{ 
                animationDelay: `${getDelay(index)}s`,
                animationFillMode: 'forwards'
              }}
              onMouseEnter={() => setActiveCard(problem.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;