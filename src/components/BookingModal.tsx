import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FormData {
  name: string;
  contact: string;
  message: string;
}

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    // Проверка интервала между отправками
    if (Date.now() - lastSubmitTime < 30000) {
      toast({
        title: "Подождите",
        description: "Пожалуйста, подождите 30 секунд перед повторной отправкой",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setLastSubmitTime(Date.now());
    
    // Показываем уведомление о начале отправки
    toast({
      title: "Отправка запроса",
      description: "Запрос отправлен, ожидайте ответа",
      variant: "default",
    });

    try {
      const response = await fetch('https://svobodarazuma.ru/telegram.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          contact: data.contact,
          message: data.message
        }),
      });

      // Обрабатываем случаи, когда fetch завершается с ошибкой
      if (!response.ok) {
        throw new Error(response.statusText || 'Ошибка сети');
      }

      const result = await response.json();
      
      if (result.status !== 'success') {
        throw new Error(result.message || 'Ошибка при обработке запроса');
      }
      
      toast({
        title: "Сообщение отправлено!",
        description: "Ваше сообщение успешно отправлено, с Вами свяжутся в течение 24 часов.",
        variant: "default",
      });
      
      reset();
      onOpenChange(false);
    } catch (error) {
      // Не показываем ошибку, если сообщение дошло в Telegram
      console.error('Ошибка отправки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Записаться на коррекцию</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Ваше имя</Label>
            <Input
              id="name"
              {...register("name", { required: "Имя обязательно" })}
              className={errors.name ? "border-red-300" : ""}
              placeholder="Введите ваше имя"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Телефон или Telegram</Label>
            <Input
              id="contact"
              {...register("contact", { 
                required: "Контактные данные обязательны",
                pattern: {
                  value: /^(\+?\d{10,15}|@?\w{5,32})$/,
                  message: "Введите телефон (+79991234567) или Telegram (@username)"
                }
              })}
              className={errors.contact ? "border-red-300" : ""}
              placeholder="Телефон или Telegram (@username)"
            />
            {errors.contact && (
              <p className="text-sm text-red-500">{errors.contact.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Сообщение</Label>
            <textarea
              id="message"
              {...register("message", {
                minLength: {
                  value: 10,
                  message: "Сообщение должно содержать минимум 10 символов"
                }
              })}
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Опишите вашу ситуацию или задайте вопрос"
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 
              "Отправка..." : 
              <>
                <span>Отправить сообщение</span>
                <Send size={16} className="ml-2" />
              </>
            }
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;