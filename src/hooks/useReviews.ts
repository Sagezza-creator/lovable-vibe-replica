
import { useState, useEffect } from 'react';
import { Review } from '@/models/Review';

export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load reviews from localStorage
    const loadReviews = () => {
      try {
        const savedReviews = localStorage.getItem('reviews');
        if (savedReviews) {
          const parsedReviews = JSON.parse(savedReviews);
          // Sort by date, newest first
          const sortedReviews = parsedReviews.sort((a: Review, b: Review) => {
            if (!a.date || !b.date) return 0;
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

  return { reviews, isLoading };
};
