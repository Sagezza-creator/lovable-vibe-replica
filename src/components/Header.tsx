
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Обо мне', path: '/about' },
    { name: 'Как я работаю', path: '/approach' },
    { name: 'Какие проблемы решаю', path: '/problems' },
    { name: 'Отзывы', path: '/reviews' },
    { name: 'Контакты', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Logo size={40} />
          <span className="text-xl font-medium">Свобода разума</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-primary bg-primary/10'
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="ml-2">
            <Link to="/contact">Записаться на консультацию</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button className="md:hidden p-2" onClick={handleMenuToggle} aria-label="Меню">
          {isMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-40 bg-white p-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`p-3 rounded-md text-center text-base font-medium ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button onClick={closeMenu} className="mt-4" asChild>
                <Link to="/contact">Записаться на консультацию</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
