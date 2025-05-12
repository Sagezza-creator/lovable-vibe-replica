
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'react-router-dom';

interface Review {
  id: number;
  name: string;
  age: number;
  rating: number;
  problem: string;
  victories: string;
  description: string;
  date: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const reviewsPerPage = 10;
  const location = useLocation();
  const { toast } = useToast();
  
  // Get reviews from localStorage
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const loadReviews = () => {
      try {
        const savedReviews = localStorage.getItem('reviews');
        if (savedReviews) {
          // Sort reviews by date descending (newest first)
          const parsedReviews = JSON.parse(savedReviews);
          const sortedReviews = parsedReviews.sort((a: Review, b: Review) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setReviews(sortedReviews);
        } else {
          setReviews([]);
        }
      } catch (error) {
        console.error('Error loading reviews:', error);
        toast({
          title: "Ошибка загрузки",
          description: "Не удалось загрузить отзывы. Пожалуйста, попробуйте позже.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadReviews();

    // Check if we have a hash in the URL to scroll to a specific review
    if (location.hash) {
      const reviewId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(reviewId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location.hash, toast]);

  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className={i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
        />
      ));
  };

  // Calculate paged reviews
  const pageCount = Math.ceil(reviews.length / reviewsPerPage);
  const displayedReviews = reviews.slice(
    (page - 1) * reviewsPerPage,
    page * reviewsPerPage
  );

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">
              Отзывы
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Истории реальных людей, которые изменили свою жизнь с помощью моего подхода
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              <div className="text-center py-8">Загрузка...</div>
            ) : displayedReviews.length > 0 ? (
              <div className="grid grid-cols-1 gap-8">
                {displayedReviews.map((review) => (
                  <Card 
                    key={review.id} 
                    id={`review-${review.id}`}
                    className="border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
                  >
                    <CardContent className="p-6 border-b bg-white">
                      <div className="mb-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium text-gray-800">
                              {review.name}, {review.age} {review.age % 10 === 1 && review.age !== 11 ? "год" : (review.age % 10 >= 2 && review.age % 10 <= 4 && (review.age < 10 || review.age > 20) ? "года" : "лет")}
                            </h3>
                            <div className="flex items-center">
                              {renderStars(review.rating)}
                            </div>
                          </div>
                        </div>
                      </div>

                      <blockquote>
                        <p className="text-lg italic text-gray-700 mb-4">
                          "Моя проблема: <strong>{review.problem}</strong>. Мои достижения: {review.victories}"
                        </p>
                        <p className="text-gray-600">
                          {review.description}
                        </p>
                      </blockquote>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-xl text-gray-600">Отзывы еще не добавлены</p>
              </div>
            )}

            {pageCount > 1 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  {page > 1 && (
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setPage(page - 1)} 
                        className="cursor-pointer"
                      />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: pageCount }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        isActive={page === i + 1}
                        onClick={() => setPage(i + 1)}
                        className="cursor-pointer"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {page < pageCount && (
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setPage(page + 1)} 
                        className="cursor-pointer"
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}

            {reviews.length > 0 && (
              <div className="mt-16 p-8 bg-gradient-to-r from-brand-50 to-cyan-50 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Ваша история успеха может быть следующей</h2>
                <p className="text-gray-700 mb-4">
                  Эти отзывы отражают реальные результаты, которых достигли мои клиенты. Независимо от того, с какой проблемой вы столкнулись, эпигенетический подход может помочь вам найти ее корень и освободиться от ограничивающих подсознательных программ.
                </p>
                <p className="text-gray-700">
                  Свяжитесь со мной для консультации, и мы обсудим, как я могу помочь именно вам.
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

export default Reviews;
