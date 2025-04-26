
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
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('contact', data.contact);
      formData.append('question', data.message);

      const response = await fetch('https://svobodarazuma.great-site.net/telegram.php', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      
      if (result.status === 'success') {
        toast({
          title: "Сообщение отправлено",
          description: "Ваше сообщение отправлено, с Вами свяжутся в течение 24 часов.",
          variant: "default",
        });
        reset();
        onOpenChange(false);
      } else {
        throw new Error('Server returned error status');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Ошибка отправки",
        description: "Пожалуйста, попробуйте позже или свяжитесь напрямую.",
        variant: "destructive",
      });
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
            <Label htmlFor="contact">Телефон или Email</Label>
            <Input
              id="contact"
              {...register("contact", { required: "Контактные данные обязательны" })}
              className={errors.contact ? "border-red-300" : ""}
              placeholder="Как с вами связаться?"
            />
            {errors.contact && (
              <p className="text-sm text-red-500">{errors.contact.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Сообщение</Label>
            <textarea
              id="message"
              {...register("message")}
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Опишите вашу ситуацию или задайте вопрос"
            />
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
