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
              Связаться со мной
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Напишите в Telegram или оставьте заявку
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section: Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Как связаться</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href="https://t.me/Intelligence_client_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Чат-бот Telegram
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  <a
                    href="https://t.me/SVOBODA_RAZUMA_BLOG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Канал Telegram: Свобода разума
                  </a>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 mb-2">Отсканируйте QR-код для перехода в чат-бот</p>
                  <img
                    src="/path/to/qr-code.png"
                    alt="QR Code for Telegram Chat Bot"
                    className="w-32 h-32"
                  />
                </div>
              </div>
            </div>

            {/* Right Section: Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Оставить заявку</h2>
              <ContactSection />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Часто задаваемые вопросы о коррекциях</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Как проходят коррекции?</h3>
                  <p className="text-gray-600">
                    Коррекции проводятся как очно, так и онлайн через Telegram. Коррекция длится в среднем 3-5 часов и направлена на выявление и деактивацию подсознательных программ, вызывающих вашу проблему.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Сколько стоит коррекция?</h3>
                  <p className="text-gray-600">
                    Стоимость одной коррекции зависит от продолжительности сессии. Точную стоимость мы обсудим при первом контакте. Также доступны пакетные предложения с существенной экономией при оплате нескольких коррекций сразу.
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