import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DesktopNavigation from './DesktopNavigation';
import MobileMenu from './MobileMenu';
import BookingModal from '../BookingModal';
import { NavLink } from './types';

const navLinks: NavLink[] = [
  { name: 'Главная', path: '/' },
  { name: 'Обо мне', path: '/about' },
  { 
    name: 'Мой подход', 
    path: '/approach',
    dropdown: [
      { name: 'Как это работает?', path: '/approach' },
      { name: 'Нейрокоррекция', path: '/correction' },
      { name: 'Матрицы зачатия', path: '/conception-matrices' }
    ]
  },
  { name: 'Какие проблемы решаю', path: '/problems' },
  { name: 'Отзывы', path: '/reviews' },
  { name: 'Контакты', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img 
            src="https://svobodarazuma.ru/Images/Logo.png" 
            alt="Логотип Свобода разума" 
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-medium">Свобода разума</span>
        </Link>

        <DesktopNavigation 
          navLinks={navLinks} 
          isActive={isActive} 
          onBookingClick={() => setIsBookingModalOpen(true)} 
        />

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Меню">
          {isMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>

        {isMenuOpen && (
          <MobileMenu 
            navLinks={navLinks}
            isActive={isActive}
            onClose={closeMenu}
            onBookingClick={() => setIsBookingModalOpen(true)}
          />
        )}

        <BookingModal 
          open={isBookingModalOpen} 
          onOpenChange={setIsBookingModalOpen}
        />
      </div>
    </header>
  );
};

export default Header;