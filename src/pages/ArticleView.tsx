
import { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import CallToAction from '@/components/CallToAction';
import { fetchArticle, formatDate } from '@/lib/api';
import DOMPurify from 'dompurify';

interface ArticleData {
  id: number;
  title: string;
  content: string;
  date: string;
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
  const [pageVisible, setPageVisible] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page visible with animation delay
    const timer = setTimeout(() => {
      setPageVisible(true);
    }, 100);
    
    const loadArticle = async () => {
      if (!slug) return;
      
      try {
        setIsLoading(true);
        const data = await fetchArticle(slug);
        
        if (data) {
          setArticle(data);
          
          // Set SEO meta tags if available
          if (data.meta.title) {
            document.title = data.meta.title;
          } else {
            document.title = data.title;
          }
          
          // Set meta description if available
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription && data.meta.description) {
            metaDescription.setAttribute('content', data.meta.description);
          }
        } else {
          toast({
            title: "Статья не найдена",
            description: "Запрашиваемая статья не найдена или была удалена.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error fetching article:', error);
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
    return () => clearTimeout(timer);
  }, [slug, toast]);

  // Effect to animate content paragraphs when visible
  useEffect(() => {
    if (!contentRef.current || isLoading) return;
    
    const paragraphs = contentRef.current.querySelectorAll('p, h2, h3, h4, ul, ol');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-revealed');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    paragraphs.forEach(paragraph => {
      paragraph.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
      observer.observe(paragraph);
    });

    return () => {
      paragraphs.forEach(paragraph => {
        observer.unobserve(paragraph);
      });
    };
  }, [isLoading, article]);

  return (
    <div ref={pageRef} className={`transition-opacity duration-500 ${pageVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button 
              asChild 
              variant="ghost" 
              className={`mb-6 -ml-2 text-brand-600 hover:text-brand-700 hover:bg-brand-50 ${pageVisible ? 'animate-gentle-fade-up' : 'opacity-0'}`}
            >
              <Link to="/articles">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="ml-1">Вернуться к статьям</span>
              </Link>
            </Button>
            
            {isLoading ? (
              <>
                <Skeleton className="h-10 w-3/4 mb-4 animate-pulse" />
                <Skeleton className="h-6 w-1/3 mb-4 animate-pulse" />
              </>
            ) : article ? (
              <div className={pageVisible ? 'animate-gentle-fade-up' : 'opacity-0'}>
                <h1 
                  className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
                  dangerouslySetInnerHTML={{ __html: article.title }} 
                />
                <div className="text-sm text-gray-500 mb-1">
                  {formatDate(article.date)}
                </div>
              </div>
            ) : (
              <h1 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 ${pageVisible ? 'animate-gentle-fade-up' : 'opacity-0'}`}>
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
                  <Skeleton key={i} className="h-24 w-full animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                ))}
              </div>
            ) : article ? (
              <Card className={`p-8 shadow-md hover-lift ${pageVisible ? 'animate-gentle-scale-in' : 'opacity-0'}`}>
                <div 
                  ref={contentRef}
                  className="prose prose-lg max-w-none" 
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }} 
                />
              </Card>
            ) : (
              <Card className={`p-8 text-center ${pageVisible ? 'animate-gentle-scale-in' : 'opacity-0'}`}>
                <p className="text-xl text-gray-600">
                  Запрашиваемая статья не найдена или была удалена.
                </p>
                <Button asChild className="mt-6 bg-brand-500 hover:bg-brand-600 hover:scale-105 transition-transform">
                  <Link to="/articles">Вернуться к списку статей</Link>
                </Button>
              </Card>
            )}
            
            <div className={`mt-10 flex justify-center ${pageVisible ? 'animate-gentle-fade-up' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
              <Button 
                asChild 
                variant="outline"
                className="text-brand-600 border-brand-200 hover:bg-brand-50 group"
              >
                <Link to="/articles">
                  <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Вернуться к списку статей
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default ArticleView;
