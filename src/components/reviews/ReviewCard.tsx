import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Review } from '@/models/Review';
import { ChevronRight } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card className="p-4 bg-blue-50 rounded-lg h-[300px] flex flex-col">
        <CardContent className="flex flex-col flex-grow gap-2 p-0">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.098 10.1c-.784-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-700 line-clamp-3 flex-grow">{review.description}</p>
          <div className="mt-auto flex justify-between items-end">
            <div className="flex items-center gap-2 bg-blue-200 rounded-full px-3 py-1 text-sm text-blue-800">
              {review.name}, {review.age} {review.age % 10 === 1 && review.age % 100 !== 11 ? 'год' : review.age % 10 >= 2 && review.age % 10 <= 4 && (review.age % 100 < 10 || review.age % 100 >= 20) ? 'года' : 'лет'}
            </div>
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-800 p-0 h-auto"
              onClick={() => setIsDialogOpen(true)}
            >
              Читать полностью <ChevronRight className="w-4 h-4 inline ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Отзыв от {review.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.098 10.1c-.784-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z" />
                </svg>
              ))}
            </div>
            <p><strong>Описание:</strong> {review.description}</p>
            {review.problem && <p><strong>Проблема:</strong> {review.problem}</p>}
            {review.victories && <p><strong>Достижения:</strong> {review.victories}</p>}
            <p><strong>Возраст:</strong> {review.age} {review.age % 10 === 1 && review.age % 100 !== 11 ? 'год' : review.age % 10 >= 2 && review.age % 10 <= 4 && (review.age % 100 < 10 || review.age % 100 >= 20) ? 'года' : 'лет'}</p>
            <p><strong>Дата:</strong> {new Date(review.date).toLocaleDateString()}</p>
          </div>
          <DialogClose asChild>
            <Button variant="outline" className="mt-4">Закрыть</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReviewCard;