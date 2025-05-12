
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ArticlesManager from '@/components/admin/ArticlesManager';
import ReviewsManager from '@/components/admin/ReviewsManager';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const adminAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true';
    
    if (!adminAuthenticated) {
      navigate('/admin-login');
      return;
    }
    
    setIsAuthenticated(true);
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    navigate('/admin-login');
  };

  if (!isAuthenticated) {
    return null; // Don't render anything while checking authentication
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Панель администратора</h1>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut size={16} />
            Выйти
          </Button>
        </div>
        
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="articles">Статьи</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles">
            <ArticlesManager />
          </TabsContent>
          
          <TabsContent value="reviews">
            <ReviewsManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
