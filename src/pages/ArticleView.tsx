
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import CallToAction from '@/components/CallToAction';
import { formatDate } from '@/lib/api';
import DOMPurify from 'dompurify';

interface ArticleData {
  id: number;
  title: string;
  content: string;
  date: string;
  slug: string;
  status?: 'published' | 'draft';
  image?: string | null;
  meta: {
    title: string;
    description: string;
  };
}

const sanitizeHtml = (html: string) => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span',
      'ul', 'ol', 'li', 'a', 'strong', 'em', 'br', 'hr', 'img'
    ],
    ALLOWED_ATTR: ['class', 'href', 'target', 'src', 'alt', 'title']
  });
};

const ArticleView = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const loadArticle = async () => {
      if (!slug) return;
      
      try {
        setIsLoading(true);
        
        // Check for admin-created articles in localStorage first
        const savedArticles = localStorage.getItem('articles');
        if (savedArticles) {
          const parsedArticles = JSON.parse(savedArticles);
          const adminArticle = parsedArticles.find(
            (a: ArticleData) => a.slug === slug && a.status === 'published'
          );
          
          if (adminArticle) {
            setArticle(adminArticle);
            
            // Set SEO meta tags if available
            if (adminArticle.meta.title) {
              document.title = adminArticle.meta.title;
            } else {
              document.title = adminArticle.title;
            }
            
            // Set meta description if available
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription && adminArticle.meta.description) {
              metaDescription.setAttribute('content', adminArticle.meta.description);
            }
            
            setIsLoading(false);
            return;
          }
        }
        
        // If not found in localStorage, try fetching from API
        try {
          const { fetchArticle } = await import('@/lib/api');
          const apiArticle = await fetchArticle(slug);
          
          if (apiArticle) {
            setArticle(apiArticle);
            
            // Set SEO meta tags if available
            if (apiArticle.meta.title) {
              document.title = apiArticle.meta.title;
            } else {
              document.title = apiArticle.title;
            }
            
            // Set meta description if available
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription && apiArticle.meta.description) {
              metaDescription.setAttribute('content', apiArticle.meta.description);
            }
          } else {
            toast({
              title: "Статья не найдена",
              description: "Запрашиваемая статья не найдена или была удалена.",
              variant: "destructive",
            });
          }
        } catch (error) {
          console.error('Error fetching article from API:', error);
          toast({
            title: "Ошибка загрузки",
            description: "Не удалось загрузить статью. Пожалуйста, попробуйте позже.",
            variant: "destructive",
          });
        }
        
      } catch (error) {
        console.error('Error loading article:', error);
        toast({
          title: "Ошибка загрузки",
          description: "Не удалось загрузить статью. Пожалуйста, попробуйте позже.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadArticle();
  }, [slug, toast]);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button 
              asChild 
              variant="ghost" 
              className="mb-6 -ml-2 text-brand-600 hover:text-brand-700 hover:bg-brand-50"
            >
              <Link to="/articles">
                <ArrowLeft size={20} />
                <span className="ml-1">Вернуться к статьям</span>
              </Link>
            </Button>
            
            {isLoading ? (
              <>
                <Skeleton className="h-10 w-3/4 mb-4" />
                <Skeleton className="h-6 w-1/3 mb-4" />
              </>
            ) : article ? (
              <>
                <h1 
                  className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
                  dangerouslySetInnerHTML={{ __html: article.title }} 
                />
                <div className="text-sm text-gray-500 mb-1">
                  {formatDate(article.date)}
                </div>
              </>
            ) : (
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Статья не найдена
              </h1>
            )}
          </div>
        </div>
      </div>

      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))}
              </div>
            ) : article ? (
              <Card className="p-8 shadow-md">
                <div 
                  className="prose prose-lg max-w-none" 
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }} 
                />
              </Card>
            ) : (
              <Card className="p-8 text-center">
                <p className="text-xl text-gray-600">
                  Запрашиваемая статья не найдена или была удалена.
                </p>
                <Button asChild className="mt-6 bg-brand-500 hover:bg-brand-600">
                  <Link to="/articles">Вернуться к списку статей</Link>
                </Button>
              </Card>
            )}
            
            <div className="mt-10 flex justify-center">
              <Button 
                asChild 
                variant="outline"
                className="text-brand-600 border-brand-200 hover:bg-brand-50"
              >
                <Link to="/articles">
                  <ArrowLeft size={18} className="mr-2" />
                  Вернуться к списку статей
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ArticleView;
