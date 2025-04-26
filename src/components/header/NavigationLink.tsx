
import { Link } from 'react-router-dom';

interface NavigationLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavigationLink = ({ to, isActive, children, onClick }: NavigationLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'text-primary bg-primary/10'
        : 'text-gray-700 hover:text-primary hover:bg-primary/5'
    }`}
  >
    {children}
  </Link>
);

export default NavigationLink;
