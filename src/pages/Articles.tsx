
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/CallToAction';

interface Article {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  slug: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Почему вы боитесь нового? Подсознательные причины страха перемен",
    summary: "Страх перемен – это не просто нежелание выходить из зоны комфорта. За ним часто скрываются глубинные подсознательные программы, которые блокируют ваше развитие.",
    category: "Психология страхов",
    date: "12 марта 2023",
    slug: "why-fear-changes"
  },
  {
    id: 2,
    title: "Как подсознание управляет вашей жизнью: механизмы и последствия",
    summary: "Большинство наших решений принимается не осознанно, а под влиянием подсознательных программ. Узнайте, как работают эти механизмы и как они влияют на вашу жизнь.",
    category: "Подсознание",
    date: "24 апреля 2023",
    slug: "how-subconscious-controls-life"
  },
  {
    id: 3,
    title: "Повторяющиеся сценарии в отношениях: почему вы привлекаете одинаковых партнеров",
    summary: "Если вы замечаете, что ваши отношения развиваются по одному и тому же сценарию, причина кроется в подсознательных установках, формирующих ваш выбор.",
    category: "Отношения",
    date: "5 июня 2023",
    slug: "repeating-relationship-patterns"
  },
  {
    id: 4,
    title: "Эпигенетика и психология: как наши эмоции влияют на экспрессию генов",
    summary: "Современные исследования показывают, что наши эмоции и мысли могут влиять на активность генов. Узнайте о научной основе связи между психологическим состоянием и физическим здоровьем.",
    category: "Научный подход",
    date: "17 июля 2023",
    slug: "epigenetics-and-psychology"
  },
  {
    id: 5,
    title: "Как освободиться от токсичных родительских установок",
    summary: "Многие деструктивные модели поведения мы наследуем от родителей. В этой статье мы рассмотрим, как распознать и преодолеть негативные родительские установки.",
    category: "Детские травмы",
    date: "29 августа 2023",
    slug: "toxic-parental-programming"
  },
  {
    id: 6,
    title: "Нейропластичность мозга: как формировать новые здоровые привычки",
    summary: "Благодаря нейропластичности наш мозг способен менять свою структуру на протяжении всей жизни. Узнайте, как использовать эту особенность для формирования полезных привычек.",
    category: "Научный подход",
    date: "10 октября 2023",
    slug: "neuroplasticity-and-habits"
  }
];

const Articles = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">
              Полезные статьи
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Познавательные материалы о подсознании, эпигенетике и психологическом здоровье
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Card 
                  key={article.id} 
                  className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <CardContent className="p-0">
                    <div className="p-5 border-b border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium px-2 py-1 bg-brand-50 text-brand-600 rounded">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3 mb-4">
                        {article.summary}
                      </p>
                      <Link 
                        to={`/articles/${article.slug}`} 
                        className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium text-sm"
                      >
                        Читать полностью
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-brand-50 to-blue-50 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Все статьи в разработке</h2>
              <p className="text-gray-700 mb-4">
                В настоящее время мы работаем над наполнением раздела статей. Скоро здесь появится много полезного контента о психологии, эпигенетике и работе с подсознанием.
              </p>
              <p className="text-gray-700">
                Подпишитесь на обновления, чтобы первыми узнавать о новых материалах, или свяжитесь со мной, если хотите обсудить интересующую вас тему.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Articles;
