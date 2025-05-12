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
} from '@/components/ui/pagination';
import { Review } from '@/models/Review';

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Load reviews from localStorage
    const loadReviews = () => {
      try {
        const savedReviews = localStorage.getItem('reviews');
        if (savedReviews) {
          const parsedReviews = JSON.parse(savedReviews);
          // Sort by date, newest first
          const sortedReviews = parsedReviews.sort((a: Review, b: Review) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          });
          setReviews(sortedReviews);
        }
      } catch (error) {
        console.error('Error loading reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadReviews();
  }, []);

  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ));
  };

  // Get current reviews for pagination
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

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
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
              </div>
            ) : reviews.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-8">
                  {currentReviews.map((review) => (
                    <Card 
                      key={review.id} 
                      className="border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
                      id={`review-${review.id}`}
                    >
                      <CardContent className="p-0">
                        <div className="p-6 border-b bg-white">
                          <div className="mb-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium text-gray-800">
                                  {review.name}, {review.age} {review.age % 10 === 1 && review.age !== 11 ? "год" : (review.age % 10 >= 2 && review.age % 10 <= 4 && (review.age < 10 || review.age > 20) ? "года" : "лет")}
                                </h3>
                              </div>
                              <div className="flex items-center mt-1">
                                {renderStars(review.rating)}
                              </div>
                            </div>
                          </div>

                          <blockquote>
                            <p className="text-gray-700 mb-4">
                              <strong>{review.problem}</strong>
                            </p>
                            <p className="text-gray-600">
                              {review.victories}
                            </p>
                          </blockquote>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {reviews.length > reviewsPerPage && (
                  <Pagination className="mt-8">
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious onClick={() => paginate(currentPage - 1)} />
                        </PaginationItem>
                      )}
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <PaginationItem key={page}>
                          <PaginationLink 
                            onClick={() => paginate(page)}
                            isActive={page === currentPage}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext onClick={() => paginate(currentPage + 1)} />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            ) : (
              <div className="mt-16 p-8 bg-gradient-to-r from-brand-50 to-cyan-50 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Отзывы не найдены</h2>
                <p className="text-gray-700">
                  К сожалению, на данный момент отзывы не найдены. Пожалуйста, вернитесь позже.
                </p>
              </div>
            )}

            {!isLoading && reviews.length > 0 && (
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
