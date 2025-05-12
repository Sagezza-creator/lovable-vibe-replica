
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const adminAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true';
    setIsAuth(adminAuthenticated);
  }, []);

  // Show nothing while checking authentication
  if (isAuth === null) {
    return null;
  }

  // If not authenticated, redirect to login page
  if (!isAuth) {
    return <Navigate to="/admin-login" state={{ from: location }} replace />;
  }

  // If authenticated, show the protected component
  return children;
};

export default RequireAuth;
