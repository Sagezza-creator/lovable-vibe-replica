import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary pt-12 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://svobodarazuma.ru/Images/Logo.png" 
                alt="Логотип Свобода разума" 
                className="h-12 w-12 object-contain"  // размер соответствует оригинальному Logo size={32}
              />
              <span className="text-lg font-medium">Свобода разума</span>
            </div>
            <p className="text-gray-600 mb-4">
              Инновационный подход к психологической помощи, основанный на работе с подсознанием.
            </p>
            <div className="flex flex-col gap-2">
              <a href="https://t.me/Intelligence_client_bot" className="text-gray-600 hover:text-brand-500 flex items-center gap-2 transition-colors">
                <MessageSquare size={18} />
                Telegram-бот для записи
              </a>
              <a href="https://t.me/SVOBODA_RAZUMA_BLOG" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-500 flex items-center gap-2 transition-colors">
                <MessageSquare size={18} />
                Telegram канал "Свобода разума"
              </a>
              <a href="hhttps://www.youtube.com/@Свобода_разума" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-500 flex items-center gap-2 transition-colors">
                <MessageSquare size={18} />
                YouTube
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 text-brand-500">Навигация</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-gray-600 hover:text-brand-500 transition-colors">Главная</Link>
              <Link to="/about" className="text-gray-600 hover:text-brand-500 transition-colors">Обо мне</Link>
              <Link to="/approach" className="text-gray-600 hover:text-brand-500 transition-colors">Как это работает?</Link>
              <Link to="/correction" className="text-gray-600 hover:text-brand-500 transition-colors">Нейрокоррекция</Link>
              <Link to="/conception-matrices" className="text-gray-600 hover:text-brand-500 transition-colors">Матрицы зачатия</Link>
              <Link to="/problems" className="text-gray-600 hover:text-brand-500 transition-colors">Какие проблемы решаю</Link>
              <Link to="/reviews" className="text-gray-600 hover:text-brand-500 transition-colors">Отзывы</Link>
              <Link to="/contact" className="text-gray-600 hover:text-brand-500 transition-colors">Контакты</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 text-brand-500">Дополнительно</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/faq" className="text-gray-600 hover:text-brand-500 transition-colors">Часто задаваемые вопросы</Link>
              <Link to="/articles" className="text-gray-600 hover:text-brand-500 transition-colors">Полезные статьи</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-brand-500 transition-colors">Политика конфиденциальности</Link>
            </nav>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-gray-500 text-sm">
          <p>© {currentYear} Александр Никифоров - Свобода разума. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;