
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';

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

interface ReviewEditorProps {
  review: Review;
  onSave: (review: Review) => void;
  onCancel: () => void;
}

const ReviewEditor = ({ review, onSave, onCancel }: ReviewEditorProps) => {
  const [formData, setFormData] = useState<Review>(review);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'age') {
      setFormData({
        ...formData,
        [name]: parseInt(value) || 0
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleRatingChange = (rating: number) => {
    setFormData({
      ...formData,
      rating
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert('Пожалуйста, введите имя');
      return;
    }
    
    if (!formData.problem.trim()) {
      alert('Пожалуйста, опишите проблему');
      return;
    }
    
    if (!formData.victories.trim()) {
      alert('Пожалуйста, опишите достижения');
      return;
    }
    
    onSave({
      ...formData,
      date: new Date().toISOString()
    });
  };
  
  const renderRatingStars = () => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingChange(star)}
            className="focus:outline-none p-1"
          >
            <Star
              size={24}
              className={
                star <= formData.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          </button>
        ))}
      </div>
    );
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Имя
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Введите имя"
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="age" className="block text-sm font-medium mb-1">
          Возраст
        </label>
        <Input
          id="age"
          name="age"
          type="number"
          min="1"
          max="120"
          value={formData.age}
          onChange={handleChange}
          placeholder="Введите возраст"
          className="w-full"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Оценка</label>
        {renderRatingStars()}
      </div>
      
      <div>
        <label htmlFor="problem" className="block text-sm font-medium mb-1">
          Проблема
        </label>
        <Textarea
          id="problem"
          name="problem"
          value={formData.problem}
          onChange={handleChange}
          placeholder="Опишите проблему"
          className="w-full"
          rows={3}
        />
      </div>
      
      <div>
        <label htmlFor="victories" className="block text-sm font-medium mb-1">
          Достижения
        </label>
        <Textarea
          id="victories"
          name="victories"
          value={formData.victories}
          onChange={handleChange}
          placeholder="Опишите достижения"
          className="w-full"
          rows={3}
        />
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Краткое описание
        </label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Краткое описание отзыва"
          className="w-full"
          rows={3}
        />
      </div>
      
      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Отмена
        </Button>
        <Button type="submit">Сохранить</Button>
      </div>
    </form>
  );
};

export default ReviewEditor;
