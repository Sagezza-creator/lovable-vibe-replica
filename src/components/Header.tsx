import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import BookingModal from './BookingModal';

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
    { 
      name: 'Как я работаю', 
      path: '/approach',
      dropdown: [
        { name: 'Метод', path: '/approach' },
        { name: 'Матрицы зачатия', path: '/conception-matrices' },
        { name: 'Коррекция', path: '/correction' }
      ]
    },
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

        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                link.dropdown ? (
                  <NavigationMenuItem key={link.path}>
                    <NavigationMenuTrigger 
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(link.path) ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2 bg-white">
                        {link.dropdown.map((item) => (
                          <li key={item.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.path}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  isActive(item.path) ? 'bg-accent/50 text-primary' : 'text-gray-700'
                                )}
                              >
                                <div className="text-sm font-medium">{item.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.path}>
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(link.path)
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                      }`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button 
            onClick={() => setIsBookingModalOpen(true)} 
            className="ml-2 bg-brand-500 hover:bg-brand-600 text-white"
          >
            Записаться на коррекцию
          </Button>
        </nav>

        <button className="md:hidden p-2" onClick={handleMenuToggle} aria-label="Меню">
          {isMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-40 bg-white p-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.path} className="flex flex-col">
                    <Link
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
                    <div className="ml-4 flex flex-col mt-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={closeMenu}
                          className={`p-2 rounded-md text-center text-sm font-medium ${
                            isActive(item.path)
                              ? 'text-primary bg-primary/10'
                              : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
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
                )
              ))}
              <Button onClick={closeMenu} className="mt-4 bg-brand-500 hover:bg-brand-600 text-white" asChild>
                Записаться на коррекцию
              </Button>
            </nav>
          </div>
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
