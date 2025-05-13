import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { formatDate } from '@/lib/api';

interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  slug: string;
  status: 'published' | 'draft';
  image?: string | null;
  meta: {
    title: string;
    description: string;
  };
}

const ArticlesPreviewSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  
  useEffect(() => {
    const loadArticles = () => {
      try {
        const savedArticles = localStorage.getItem('articles');
        if (savedArticles) {
          const parsedArticles = JSON.parse(savedArticles);
          
          // Filter only published articles and get the 3 most recent ones
          const publishedArticles = parsedArticles
            .filter((article: Article) => article.status === 'published')
            .sort((a: Article, b: Article) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 3);
          
          setArticles(publishedArticles);
        }
      } catch (error) {
        console.error('Error loading articles:', error);
      }
    };
    
    loadArticles();
  }, []);

  if (articles.length === 0) return null;
  
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-4">Полезные статьи</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              to={`/articles/${article.slug}`} 
              key={article.id}
              className="group block transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                className="h-64 rounded-lg overflow-hidden relative shadow-md"
              >
                {article.image ? (
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-100 to-blue-100" />
                )}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded text-xs text-gray-700">
                  {formatDate(article.date)}
                </div>
              </div>
              <h3 
                className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-brand-600 transition-colors"
                dangerouslySetInnerHTML={{ __html: article.title }}
              />
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            to="/articles" 
            className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-medium text-lg"
          >
            Смотреть все статьи
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesPreviewSection;
