
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { NavLink } from './types';

interface DesktopNavigationProps {
  navLinks: NavLink[];
  isActive: (path: string) => boolean;
  onBookingClick: () => void;
}

const DesktopNavigation = ({ navLinks, isActive, onBookingClick }: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex items-center gap-1 lg:gap-2">
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link) => (
            link.dropdown ? (
              <NavigationMenuItem key={link.path} className="relative">
                <NavigationMenuTrigger 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path) ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-2 p-2 bg-white border rounded-md shadow-md">
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
                >
                  {link.name}
                </Link>
              </NavigationMenuItem>
            )
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button 
        onClick={onBookingClick} 
        className="ml-2 bg-brand-500 hover:bg-brand-600 text-white"
      >
        Записаться на коррекцию
      </Button>
    </nav>
  );
};

export default DesktopNavigation;
