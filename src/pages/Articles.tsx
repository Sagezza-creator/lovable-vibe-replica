import { useEffect, useState } from 'react';
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
  focusKeyword: string;
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
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
  }, [toast]);

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
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden border border-gray-100 shadow-sm">
                    <CardContent className="p-0">
                      <div className="p-5 border-b border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                          <Skeleton className="h-6 w-24" />
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Card 
                    key={article.id} 
                    className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <CardContent className="p-0">
                      <div className="p-5 border-b border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                          {article.focusKeyword ? (
                            <span className="text-xs font-medium px-2 py-1 bg-brand-50 text-brand-600 rounded">
                              {article.focusKeyword}
                            </span>
                          ) : (
                            <span className="text-xs font-medium px-2 py-1 bg-brand-50 text-brand-600 rounded">
                              Психология
                            </span>
                          )}
                          <span className="text-xs text-gray-500">
                            {formatDate(article.date)}
                          </span>
                        </div>
                        <Link to={`/articles/${article.slug}`}>
                          <h3 
                            className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 hover:text-brand-600"
                            dangerouslySetInnerHTML={{ __html: article.title }}
                          />
                        </Link>
                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {article.excerpt}
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
            ) : (
              <div className="mt-16 p-8 bg-gradient-to-r from-brand-50 to-blue-50 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Статьи не найдены</h2>
                <p className="text-gray-700 mb-4">
                  К сожалению, на данный момент статьи не найдены. Пожалуйста, проверьте подключение к интернету или повторите попытку позже.
                </p>
              </div>
            )}

            {!isLoading && articles.length > 0 && (
              <div className="mt-16 p-8 bg-gradient-to-r from-brand-50 to-blue-50 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Больше статей скоро</h2>
                <p className="text-gray-700 mb-4">
                  В настоящее время мы работаем над наполнением раздела статей. Скоро здесь появится еще больше полезного контента о психологии, эпигенетике и работе с подсознанием.
                </p>
                <p className="text-gray-700">
                  Подпишитесь на обновления, чтобы первыми узнавать о новых материалах, или свяжитесь со мной, если хотите обсудить интересующую вас тему.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Articles;
