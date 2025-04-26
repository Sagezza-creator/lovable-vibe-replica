
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavLink } from './types';
import NavigationLink from './NavigationLink';

interface MobileMenuProps {
  navLinks: NavLink[];
  isActive: (path: string) => boolean;
  onClose: () => void;
  onBookingClick: () => void;
}

const MobileMenu = ({ navLinks, isActive, onClose, onBookingClick }: MobileMenuProps) => {
  return (
    <div className="md:hidden fixed inset-0 top-16 z-40 bg-white p-4 animate-fade-in">
      <nav className="flex flex-col gap-2">
        {navLinks.map((link) => (
          link.dropdown ? (
            <div key={link.path} className="flex flex-col">
              <Link
                to={link.path}
                onClick={onClose}
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
                  <NavigationLink
                    key={item.path}
                    to={item.path}
                    isActive={isActive(item.path)}
                    onClick={onClose}
                  >
                    {item.name}
                  </NavigationLink>
                ))}
              </div>
            </div>
          ) : (
            <NavigationLink
              key={link.path}
              to={link.path}
              isActive={isActive(link.path)}
              onClick={onClose}
            >
              {link.name}
            </NavigationLink>
          )
        ))}
        <Button 
          onClick={() => {
            onClose();
            onBookingClick();
          }} 
          className="mt-4 bg-brand-500 hover:bg-brand-600 text-white"
        >
          Записаться на коррекцию
        </Button>
      </nav>
    </div>
  );
};

export default MobileMenu;
