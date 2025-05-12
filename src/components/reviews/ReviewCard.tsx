import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Review } from '@/models/Review';

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card className="p-4 bg-blue-50 rounded-lg">
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.098 10.1c-.784-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-700">{review.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center gap-2 bg-blue-200 rounded-full px-3 py-1 text-sm text-blue-800">
            {review.name}, {review.age} год
          </div>
          <Button variant="outline" className="mt-2">Подробнее</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;