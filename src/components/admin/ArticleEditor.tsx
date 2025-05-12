
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Save, Eye } from 'lucide-react';

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

interface ArticleEditorProps {
  article: Article;
  onSave: (article: Article) => void;
  onPublish: (article: Article) => void;
  onCancel: () => void;
}

const ArticleEditor = ({ article, onSave, onPublish, onCancel }: ArticleEditorProps) => {
  const [formData, setFormData] = useState<Article>(article);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('meta.')) {
      const metaField = name.split('.')[1];
      setFormData({
        ...formData,
        meta: {
          ...formData.meta,
          [metaField]: value
        }
      });
    } else if (name === 'title') {
      const slug = value
        .toLowerCase()
        .replace(/[^\w\sа-яё]/gi, '')
        .replace(/\s+/g, '-');
      
      setFormData({
        ...formData,
        [name]: value,
        slug: slug
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent, publish: boolean = false) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert('Пожалуйста, введите заголовок статьи');
      return;
    }
    
    if (!formData.content.trim()) {
      alert('Пожалуйста, введите содержание статьи');
      return;
    }
    
    if (publish) {
      onPublish(formData);
    } else {
      onSave(formData);
    }
  };
  
  return (
    <form className="h-full flex flex-col" onSubmit={(e) => handleSubmit(e, false)}>
      <div className="grid gap-4 mb-4 flex-grow overflow-y-auto">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Заголовок
          </label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Введите заголовок статьи"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium mb-1">
            Краткое описание (отображается в списке статей)
          </label>
          <Textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Введите краткое описание статьи"
            className="w-full"
            rows={3}
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Содержание статьи
          </label>
          <Textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Введите содержание статьи"
            className="w-full"
            rows={15}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="meta.title" className="block text-sm font-medium mb-1">
              SEO Заголовок
            </label>
            <Input
              id="meta.title"
              name="meta.title"
              value={formData.meta.title}
              onChange={handleChange}
              placeholder="SEO заголовок для поисковых систем"
            />
          </div>
          <div>
            <label htmlFor="meta.description" className="block text-sm font-medium mb-1">
              SEO Описание
            </label>
            <Input
              id="meta.description"
              name="meta.description"
              value={formData.meta.description}
              onChange={handleChange}
              placeholder="SEO описание для поисковых систем"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-between pt-4 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          Отмена
        </Button>
        <div className="space-x-2">
          <Button
            type="button"
            variant="outline"
            onClick={(e) => handleSubmit(e, false)}
            className="flex items-center gap-2"
          >
            <Save size={16} />
            Сохранить черновик
          </Button>
          <Button
            type="button"
            onClick={(e) => handleSubmit(e, true)}
            className="flex items-center gap-2"
          >
            <Eye size={16} />
            Опубликовать
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ArticleEditor;
