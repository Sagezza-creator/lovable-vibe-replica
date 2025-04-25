
import { useEffect } from 'react';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white">
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

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Часто задаваемые вопросы о коррекциях</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Как проходят коррекции?</h3>
                  <p className="text-gray-600">
                    Коррекции проводятся как очно, так и онлайн через Zoom или Skype. Коррекция длится в среднем 3-5 часов и направлена на выявление и деактивацию подсознательных программ, вызывающих вашу проблему.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Сколько стоит коррекция?</h3>
                  <p className="text-gray-600">
                    Стоимость одной коррекции зависит от сложности проблемы и формата встречи (очно или онлайн). Точную стоимость мы обсудим при первом контакте. Также доступны пакетные предложения с существенной экономией при оплате нескольких коррекций сразу.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Как быстро вы отвечаете на запросы?</h3>
                  <p className="text-gray-600">
                    Я стараюсь отвечать на все сообщения в течение 24 часов. Если вы оставили заявку через форму на сайте или написали в мессенджер, я свяжусь с вами, как только увижу ваше сообщение.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Что нужно подготовить к коррекции?</h3>
                  <p className="text-gray-600">
                    Для онлайн-коррекций важно выбрать комфортное, тихое место, где вы можете лечь, и где я могу видеть вас через камеру. Желательно заранее проверить работу камеры и микрофона, а также обеспечить себе пространство без отвлекающих факторов на время коррекции.
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
