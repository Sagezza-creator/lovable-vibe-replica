
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Plus, Edit, Trash2, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ReviewEditor from './ReviewEditor';

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

const ReviewsManager = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState<Review | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Load reviews from localStorage
    const loadReviews = () => {
      try {
        const savedReviews = localStorage.getItem('reviews');
        if (savedReviews) {
          // Parse and sort reviews by date (newest first)
          const parsedReviews = JSON.parse(savedReviews);
          const sortedReviews = parsedReviews.sort((a: Review, b: Review) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
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

  const saveReviewsToStorage = (updatedReviews: Review[]) => {
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    // Sort reviews by date (newest first) before setting state
    const sortedReviews = updatedReviews.sort((a: Review, b: Review) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setReviews(sortedReviews);
  };

  const handleCreateReview = () => {
    const newReview = {
      id: Date.now(),
      name: '',
      age: 30,
      rating: 5,
      problem: '',
      victories: '',
      description: '',
      date: new Date().toISOString(),
    };
    
    setCurrentReview(newReview);
    setIsEditorOpen(true);
  };

  const handleEditReview = (review: Review) => {
    setCurrentReview(review);
    setIsEditorOpen(true);
  };

  const handleSaveReview = (review: Review) => {
    const updatedReviews = reviews.filter(r => r.id !== review.id);
    saveReviewsToStorage([...updatedReviews, review]);
    setIsEditorOpen(false);
    
    toast({
      title: "Отзыв сохранен",
      description: "Отзыв успешно сохранен и опубликован на сайте",
    });
  };

  const handleDeleteReview = (reviewId: number) => {
    if (confirm('Вы уверены, что хотите удалить этот отзыв?')) {
      const updatedReviews = reviews.filter(review => review.id !== reviewId);
      saveReviewsToStorage(updatedReviews);
      
      toast({
        title: "Отзыв удален",
        description: "Отзыв был успешно удален",
      });
    }
  };

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {Array(5).fill(0).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Управление отзывами</h2>
            <Button onClick={handleCreateReview} className="flex items-center gap-2">
              <Plus size={16} />
              Создать отзыв
            </Button>
          </div>
          
          {isLoading ? (
            <div className="text-center py-8">Загрузка...</div>
          ) : reviews.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Имя</TableHead>
                  <TableHead>Возраст</TableHead>
                  <TableHead>Оценка</TableHead>
                  <TableHead>Проблема</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reviews.map((review) => (
                  <TableRow key={review.id}>
                    <TableCell className="font-medium">{review.name}</TableCell>
                    <TableCell>{review.age}</TableCell>
                    <TableCell>{renderRating(review.rating)}</TableCell>
                    <TableCell className="max-w-[300px] truncate">{review.problem}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditReview(review)}
                          title="Редактировать"
                        >
                          <Edit size={16} />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteReview(review.id)}
                          className="text-red-500 hover:text-red-700"
                          title="Удалить"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Star className="mx-auto h-12 w-12 text-gray-400 mb-2" />
              <p>Отзывы не найдены</p>
              <p className="text-sm mt-2">Создайте новый отзыв, нажав на кнопку выше</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Dialog open={isEditorOpen} onOpenChange={setIsEditorOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {currentReview?.id ? 'Редактирование отзыва' : 'Создание нового отзыва'}
            </DialogTitle>
          </DialogHeader>
          {currentReview && (
            <ReviewEditor
              review={currentReview}
              onSave={handleSaveReview}
              onCancel={() => setIsEditorOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReviewsManager;
