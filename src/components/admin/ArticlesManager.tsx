
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Plus, Edit, Trash2, Eye, Save, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ArticleEditor from './ArticleEditor';
import { formatDate } from '@/lib/api';

interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  slug: string;
  status: 'published' | 'draft';
  meta: {
    title: string;
    description: string;
  };
}

const ArticlesManager = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Load articles from localStorage
    const loadArticles = () => {
      try {
        const savedArticles = localStorage.getItem('articles');
        if (savedArticles) {
          setArticles(JSON.parse(savedArticles));
        }
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadArticles();
  }, []);

  const saveArticlesToStorage = (updatedArticles: Article[]) => {
    localStorage.setItem('articles', JSON.stringify(updatedArticles));
    setArticles(updatedArticles);
  };

  const handleCreateArticle = () => {
    const newArticle = {
      id: Date.now(),
      title: '',
      content: '',
      excerpt: '',
      date: new Date().toISOString(),
      slug: '',
      status: 'draft' as const,
      meta: {
        title: '',
        description: '',
      }
    };
    
    setCurrentArticle(newArticle);
    setIsEditorOpen(true);
  };

  const handleEditArticle = (article: Article) => {
    setCurrentArticle(article);
    setIsEditorOpen(true);
  };

  const handleSaveArticle = (article: Article, publish: boolean = false) => {
    const updatedArticles = articles.filter(a => a.id !== article.id);
    const updatedArticle = {
      ...article,
      status: publish ? 'published' as const : 'draft' as const,
      date: publish ? new Date().toISOString() : article.date
    };
    
    saveArticlesToStorage([...updatedArticles, updatedArticle]);
    setIsEditorOpen(false);
    
    toast({
      title: publish ? "Статья опубликована" : "Статья сохранена в черновики",
      description: publish ? "Статья успешно опубликована на сайте" : "Статья сохранена как черновик",
    });
  };

  const handleDeleteArticle = (articleId: number) => {
    if (confirm('Вы уверены, что хотите удалить эту статью?')) {
      const updatedArticles = articles.filter(article => article.id !== articleId);
      saveArticlesToStorage(updatedArticles);
      
      toast({
        title: "Статья удалена",
        description: "Статья была успешно удалена",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    return status === 'published' ? (
      <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Опубликовано</span>
    ) : (
      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">Черновик</span>
    );
  };

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Управление статьями</h2>
            <Button onClick={handleCreateArticle} className="flex items-center gap-2">
              <Plus size={16} />
              Создать статью
            </Button>
          </div>
          
          {isLoading ? (
            <div className="text-center py-8">Загрузка...</div>
          ) : articles.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Заголовок</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell className="font-medium max-w-[300px] truncate">
                      {article.title || 'Без заголовка'}
                    </TableCell>
                    <TableCell>{getStatusBadge(article.status)}</TableCell>
                    <TableCell>{formatDate(article.date)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditArticle(article)}
                          title="Редактировать"
                        >
                          <Edit size={16} />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteArticle(article.id)}
                          className="text-red-500 hover:text-red-700"
                          title="Удалить"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-2" />
              <p>Статьи не найдены</p>
              <p className="text-sm mt-2">Создайте новую статью, нажав на кнопку выше</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Dialog open={isEditorOpen} onOpenChange={setIsEditorOpen}>
        <DialogContent className="max-w-4xl h-[90vh]">
          <DialogHeader>
            <DialogTitle>
              {currentArticle?.id ? 'Редактирование статьи' : 'Создание новой статьи'}
            </DialogTitle>
          </DialogHeader>
          {currentArticle && (
            <ArticleEditor
              article={currentArticle}
              onSave={(article) => handleSaveArticle(article, false)}
              onPublish={(article) => handleSaveArticle(article, true)}
              onCancel={() => setIsEditorOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ArticlesManager;
