
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Сколько сеансов обычно требуется?",
    answer: "В большинстве случаев видимые результаты достигаются за 2-4 сеанса. Некоторые проблемы, особенно давние или сложные, могут потребовать 5-6 встреч. Я всегда стремлюсь к максимально быстрому и эффективному решению вашей проблемы."
  },
  {
    id: 2,
    question: "Безопасен ли ваш метод?",
    answer: "Да, метод полностью безопасен. Мы работаем с естественными процессами вашего мозга и подсознания, не используя гипноз или другие методы изменения сознания. Вы всегда остаетесь в полном сознании и контролируете процесс."
  },
  {
    id: 3,
    question: "Чем ваш подход отличается от психотерапии?",
    answer: "Традиционная психотерапия часто фокусируется на длительном анализе проблем и работе с сознанием. Мой подход использует достижения эпигенетики для быстрого выявления и деактивации подсознательных программ, которые являются корнем проблемы, что дает более быстрые и стойкие результаты."
  },
  {
    id: 4,
    question: "Проводите ли вы онлайн-консультации?",
    answer: "Да, я провожу консультации как лично, так и онлайн через Zoom или Skype. Метод одинаково эффективен в обоих форматах, что позволяет работать с клиентами из любой точки мира."
  },
  {
    id: 5,
    question: "Как скоро я увижу результаты?",
    answer: "Многие клиенты отмечают первые изменения уже после первого сеанса. Полное решение проблемы обычно наступает после 2-4 встреч. Вы заметите, как меняется ваше восприятие ситуаций и реакции на привычные триггеры."
  },
];

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-gray-700">
            Ответы на самые распространенные вопросы о моем подходе
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="border-b border-gray-200 last:border-0"
            >
              <button
                className="py-5 w-full flex justify-between items-center text-left"
                onClick={() => toggleItem(faq.id)}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                {openItem === faq.id ? 
                  <ChevronUp size={20} className="text-brand-500" /> : 
                  <ChevronDown size={20} className="text-gray-400" />
                }
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === faq.id ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
