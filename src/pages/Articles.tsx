
import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';
import CallToAction from '@/components/CallToAction';
import { fetchArticles, formatDate } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string | null;
  meta: {
    title: string;
    description: string;
  };
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const [pageVisible, setPageVisible] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page visible with animation delay
    const timer = setTimeout(() => {
      setPageVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Активация анимации при прокрутке для секций
    const sections = document.querySelectorAll('.section-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(section => {
      observer.observe(section);
    });

    const loadArticles = async () => {
      try {
        setIsLoading(true);
        const data = await fetchArticles();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
        toast({
          title: "Ошибка загрузки",
          description: "Не удалось загрузить статьи. Пожалуйста, попробуйте позже.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadArticles();

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [toast]);

  return (
    <div ref={pageRef} className={`transition-opacity duration-700 ${pageVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center ${pageVisible ? 'animate-gentle-fade-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">
              Полезные статьи
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Познавательные материалы о подсознании, эпигенетике и психологическом здоровье
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 section-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden border border-gray-100 shadow-sm animate-pulse">
                    <CardContent className="p-0">
                      <div className="p-5 border-b border-gray-100">
                        <div className="flex items-center justify-end mb-3">
                          <Skeleton className="h-5 w-20" />
                        </div>
                        <Skeleton className="h-7 w-full mb-2" />
                        <Skeleton className="h-7 w-3/4 mb-2" />
                        <Skeleton className="h-5 w-full mb-1" />
                        <Skeleton className="h-5 w-full mb-1" />
                        <Skeleton className="h-5 w-2/3 mb-4" />
                        <Skeleton className="h-6 w-40" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
                {articles.map((article, index) => (
                  <Card 
                    key={article.id} 
                    className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all hover-lift"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="p-5 border-b border-gray-100">
                        <div className="flex items-center justify-end mb-3">
                          <span className="text-xs text-gray-500">
                            {formatDate(article.date)}
                          </span>
                        </div>
                        <Link to={`/articles/${article.slug}`}>
                          <h3 
                            className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 hover:text-brand-600 transition-colors"
                            dangerouslySetInnerHTML={{ __html: article.title }}
                          />
                        </Link>
                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {article.excerpt}
                        </p>
                        <Link 
                          to={`/articles/${article.slug}`} 
                          className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium text-sm group"
                        >
                          Читать полностью
                          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="mt-16 p-8 bg-gradient-to-r from-brand-50 to-blue-50 rounded-xl shadow-md hover-lift">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Статьи не найдены</h2>
                <p className="text-gray-700 mb-4">
                  К сожалению, на данный момент статьи не найдены. Пожалуйста, проверьте подключение к интернету или повторите попытку позже.
                </p>
              </div>
            )}

            {!isLoading && articles.length > 0 && (
              <div className="mt-16 p-8 bg-gradient-to-r from-brand-50 to-blue-50 rounded-xl shadow-md hover-lift">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Больше статей скоро</h2>
                <p className="text-gray-700 mb-4">
                  В настоящее время мы работаем над наполнением раздела статей. Скоро здесь появится еще больше полезного контента.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Articles;
