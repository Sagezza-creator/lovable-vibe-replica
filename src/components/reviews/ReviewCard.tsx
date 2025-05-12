
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Review } from '@/models/Review';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ));
  };

  return (
    <div className="w-full flex-shrink-0 px-2">
      <div className="relative">
        {/* Shadow effect under the container */}
        <div className="absolute inset-0 rounded-xl shadow-2xl opacity-20 pointer-events-none"></div>
        <Card className="border-0 shadow-lg bg-gradient-to-r from-brand-50 to-cyan-50 relative z-10 hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-1 mb-4">
              {renderStars(review.rating)}
            </div>

            <blockquote className="mb-6">
              <p className="text-xl italic text-gray-700 mb-4">
                "{review.description}"
              </p>
            </blockquote>

            <div>
              <p className="font-medium text-gray-800">
                {review.name}, {review.age} {review.age % 10 === 1 && review.age !== 11 ? "год" : (review.age % 10 >= 2 && review.age % 10 <= 4 && (review.age < 10 || review.age > 20) ? "года" : "лет")}
              </p>
            </div>
            
            <div className="mt-4">
              <Link to={`/reviews#review-${review.id}`}>
                <Button variant="outline" className="border-brand-500 text-brand-500 hover:text-brand-700">
                  Прочитать отзыв полностью
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
