
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

// Hardcoded credentials (in a real app, this would be stored securely)
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple authentication check
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Set session storage to maintain login state
      sessionStorage.setItem('adminAuthenticated', 'true');
      
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Вход выполнен успешно",
          description: "Добро пожаловать в панель администратора",
        });
        navigate('/admin');
      }, 500);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Ошибка входа",
          description: "Неверное имя пользователя или пароль",
          variant: "destructive",
        });
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-bold text-center mb-6">Вход в панель администратора</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Имя пользователя
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Пароль
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-brand-600 hover:bg-brand-700"
              disabled={isLoading}
            >
              {isLoading ? 'Вход...' : 'Войти'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
