
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  contact: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Here would be the actual form submission logic
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success toast
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо! Я свяжусь с вами в ближайшее время.",
        variant: "default",
      });
      
      // Reset form
      reset();
    } catch (error) {
      // Show error toast
      toast({
        title: "Ошибка отправки",
        description: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже или свяжитесь напрямую.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            Свяжитесь со мной
          </h2>
          <p className="text-lg text-gray-700">
            Напишите мне, и мы начнем путь к вашей свободе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Контактная информация</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+79319967590" 
                    className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Телефон</p>
                      <p className="text-gray-800 font-medium">+7 931 996 7590</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://t.me/Nikor_ad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Telegram</p>
                      <p className="text-gray-800 font-medium">@Nikor_ad</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Что происходит после обращения?</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <p className="text-gray-600">Я свяжусь с вами в течение 24 часов</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <p className="text-gray-600">Проведем короткую бесплатную консультацию для определения проблемы</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <p className="text-gray-600">Согласуем время для первого полноценного сеанса</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-sm">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
