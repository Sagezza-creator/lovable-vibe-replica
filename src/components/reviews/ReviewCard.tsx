import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
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
        <Card className="border-0 bg-gradient-to-r from-brand-50 to-cyan-50 relative z-10 h-[250px] flex flex-col">
          <CardContent className="p-8 flex flex-col flex-grow gap-2">
            <div className="flex items-center gap-1 mb-4">
              {renderStars(review.rating)}
            </div>

            <blockquote className="mb-6 flex-grow">
              <p className="text-xl italic text-gray-700 line-clamp-3">
                "{review.description}"
              </p>
            </blockquote>

            <div className="mt-auto">
              <p className="font-medium text-gray-800">
                {review.name}, {review.age} {review.age % 10 === 1 && review.age !== 11 ? "год" : (review.age % 10 >= 2 && review.age % 10 <= 4 && (review.age < 10 || review.age > 20) ? "года" : "лет")}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};