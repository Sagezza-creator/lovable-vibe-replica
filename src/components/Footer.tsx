
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-12 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size={32} />
              <span className="text-lg font-medium">Свобода разума</span>
            </div>
            <p className="text-gray-600 mb-4">
              Инновационный подход к психологической помощи, основанный на эпигенетике и работе с подсознанием.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+79319967590" className="text-gray-600 hover:text-primary flex items-center gap-2 transition-colors">
                <Phone size={18} />
                +7 931 996 7590
              </a>
              <a href="https://t.me/Nikor_ad" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary flex items-center gap-2 transition-colors">
                <MessageSquare size={18} />
                @Nikor_ad
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Навигация</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Главная</Link>
              <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">Обо мне</Link>
              <Link to="/approach" className="text-gray-600 hover:text-primary transition-colors">Как я работаю</Link>
              <Link to="/problems" className="text-gray-600 hover:text-primary transition-colors">Какие проблемы решаю</Link>
              <Link to="/reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</Link>
              <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Дополнительно</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">Часто задаваемые вопросы</Link>
              <Link to="/articles" className="text-gray-600 hover:text-primary transition-colors">Полезные статьи</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">Политика конфиденциальности</Link>
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
