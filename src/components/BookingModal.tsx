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
  requestType: string;
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
        body: JSON.stringify(data),
      });

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
            <Label htmlFor="requestType">Тип заявки</Label>
            <select
              id="requestType"
              {...register("requestType", { required: "Выберите тип заявки" })}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Выберите тип обращения</option>
              <option value="Заявка на коррекцию">Заявка на коррекцию</option>
              <option value="Консультация">Консультация</option>
              <option value="Обучение">Обучение</option>
            </select>
            {errors.requestType && (
              <p className="text-sm text-red-500">{errors.requestType.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 
              "Отправка..." : 
              <>
                <span>Отправить заявку</span>
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