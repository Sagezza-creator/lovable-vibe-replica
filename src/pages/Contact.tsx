import { useEffect, useState } from 'react';
import ContactSection from '@/components/ContactSection';
import { FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Как проходят коррекции?',
      answer: 'Коррекции проводятся очно или онлайн через Telegram. Сессия длится 3-5 часов и направлена на выявление и деактивацию подсознательных программ, вызывающих вашу проблему.',
    },
    {
      question: 'Сколько стоит коррекция?',
      answer: 'Стоимость зависит от продолжительности сессии. Точную цену обсудим при первом контакте. Также есть пакетные предложения с экономией при оплате нескольких коррекций.',
    },
    {
      question: 'Как быстро вы отвечаете на запросы?',
      answer: 'Я отвечаю на сообщения в течение 24 часов. Если вы оставили заявку через форму или написали в мессенджер, я свяжусь с вами, как только увижу ваше сообщение.',
    },
    {
      question: 'Что нужно подготовить к коррекции?',
      answer: 'Для онлайн-коррекций выберите тихое место, где вы можете лечь. Проверьте камеру и микрофон, обеспечьте пространство без отвлекающих факторов.',
    },
  ];

  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-6">
              Связаться со мной
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Оставьте заявку или напишите в Telegram, чтобы начать путь к свободе разума
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Контакты</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaTelegramPlane className="text-blue-500 text-2xl mr-3" />
                  <a
                    href="https://t.me/Intelligence_client_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Чат-бот в Telegram: @Intelligence_client_bot
                  </a>
                </div>
                <div className="flex items-center">
                  <FaTelegramPlane className="text-blue-500 text-2xl mr-3" />
                  <a
                    href="https://t.me/SVOBODA_RAZUMA_BLOG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Канал Telegram: Свобода Разума
                  </a>
                </div>
                <div className="mt-6">
                  <p className="text-gray-600 mb-2">Отсканируйте QR-код для перехода в чат-бот:</p>
                  <img
                    src="/path/to/qr-code.png"
                    alt="QR-код для чат-бота"
                    className="w-32 h-32"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Оставить заявку</h2>
              <ContactSection />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md">
                  <button
                    className="w-full text-left p-4 flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                    <span className="text-gray-600">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && (
                    <div className="p-4 bg-gray-50">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;