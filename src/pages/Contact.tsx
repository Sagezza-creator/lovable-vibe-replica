
import { useEffect } from 'react';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">
              Контакты
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Свяжитесь со мной, чтобы начать путь к свободе разума
            </p>
          </div>
        </div>
      </div>

      <ContactSection />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Часто задаваемые вопросы о консультациях</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Как проходят консультации?</h3>
                  <p className="text-gray-600">
                    Консультации проводятся как очно, так и онлайн через Zoom или Skype. Первая встреча обычно длится около 30 минут и бесплатна — на ней мы обсуждаем вашу ситуацию и определяем, подходит ли вам мой метод. Последующие сеансы длятся 60-90 минут.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Сколько стоит консультация?</h3>
                  <p className="text-gray-600">
                    Стоимость одного сеанса зависит от сложности проблемы и формата встречи (очно или онлайн). Точную стоимость мы обсудим после первичной бесплатной консультации. Также доступны пакетные предложения с существенной экономией при оплате нескольких сеансов сразу.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Как быстро вы отвечаете на запросы?</h3>
                  <p className="text-gray-600">
                    Я стараюсь отвечать на все сообщения в течение 24 часов. Если вы оставили заявку через форму на сайте или написали в мессенджер, я свяжусь с вами, как только увижу ваше сообщение.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Что нужно подготовить к первой консультации?</h3>
                  <p className="text-gray-600">
                    Для первой консультации не нужна специальная подготовка. Просто будьте готовы кратко рассказать о проблеме, с которой вы столкнулись, и о том, каких результатов хотели бы достичь. Всё остальное мы обсудим в процессе беседы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
