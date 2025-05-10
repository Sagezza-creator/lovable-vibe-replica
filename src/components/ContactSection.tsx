import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  contact: string;
  requestType: string;
}

const ContactSection = () => {
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
    } catch (error) {
      console.error('Ошибка отправки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-lg md:text-xl text-gray-700 font-semibold mb-6">
                Как связаться
              </h2>
              <div className="space-y-4">
                <a 
                  href="https://t.me/Intelligence_client_bot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Чат-бот Telegram</p>
                    <p className="text-sm text-gray-500">@Intelligence_client_bot</p>
                  </div>
                </a>
                
                <a 
                  href="https://t.me/SVOBODA_RAZUMA_BLOG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Канал Telegram: Свобода разума</p>
                    <p className="text-sm text-gray-500">@SVOBODA_RAZUMA_BLOG</p>
                  </div>
                </a>
              </div>
              <p className="mt-6 text-gray-600">Отсканируйте QR-код для перехода в чат-бот:</p>
              <img 
                src="https://svobodarazuma.ru/Images/QRbot.jpg" 
                alt="QR-код для Telegram чат-бота" 
                className="mt-4 w-40 h-40"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Оставить заявку</h2>
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
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  }
                </Button>
              </form>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Что происходит после обращения?</h3>
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
                  <p className="text-gray-600">Проведем короткую бесплатную консультацию</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <p className="text-gray-600">Согласуем время для первого сеанса</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;