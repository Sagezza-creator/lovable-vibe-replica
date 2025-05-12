
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Save, FileCheck, X } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
  const [editedArticle, setEditedArticle] = useState<Article>({ ...article });
  const [isSlugTouched, setIsSlugTouched] = useState(false);

  // Auto-generate slug from title if not manually edited
  useEffect(() => {
    if (!isSlugTouched && editedArticle.title) {
      const slug = editedArticle.title
        .toLowerCase()
        .replace(/[^\wа-яё\s]/gi, '')
        .replace(/\s+/g, '-');
      setEditedArticle(prev => ({ ...prev, slug }));
    }
  }, [editedArticle.title, isSlugTouched]);

  const handleInputChange = (field: keyof Article, value: string) => {
    setEditedArticle(prev => ({ ...prev, [field]: value }));

    // Track if slug has been manually edited
    if (field === 'slug') {
      setIsSlugTouched(true);
    }
  };

  const handleMetaChange = (field: keyof typeof article.meta, value: string) => {
    setEditedArticle(prev => ({
      ...prev,
      meta: {
        ...prev.meta,
        [field]: value
      }
    }));
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent',
    'align',
    'link', 'image'
  ];

  return (
    <div className="space-y-6 max-h-[calc(90vh-120px)] overflow-y-auto px-2">
      {/* Основная информация */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Заголовок</Label>
          <Input
            id="title"
            value={editedArticle.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="Введите заголовок статьи"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="slug">URL-адрес (slug)</Label>
          <Input
            id="slug"
            value={editedArticle.slug}
            onChange={(e) => handleInputChange('slug', e.target.value)}
            placeholder="url-adres-stati"
            className="mt-1"
          />
          <p className="text-sm text-gray-500 mt-1">
            Используется в URL-адресе статьи. Пример: /articles/{editedArticle.slug || 'url-adres-stati'}
          </p>
        </div>

        <div>
          <Label htmlFor="excerpt">Краткое описание</Label>
          <Textarea
            id="excerpt"
            value={editedArticle.excerpt}
            onChange={(e) => handleInputChange('excerpt', e.target.value)}
            placeholder="Краткое описание статьи, которое будет отображаться в списке статей"
            className="mt-1"
            rows={3}
          />
        </div>
      </div>

      {/* Редактор контента */}
      <div className="space-y-2">
        <Label htmlFor="content">Содержание статьи</Label>
        <Card className="p-0">
          <ReactQuill
            theme="snow"
            value={editedArticle.content}
            onChange={(content) => handleInputChange('content', content)}
            modules={modules}
            formats={formats}
            placeholder="Введите содержание статьи..."
            className="min-h-[300px]"
          />
        </Card>
      </div>

      {/* SEO метаданные */}
      <div className="space-y-4 pt-4">
        <h3 className="text-md font-medium">SEO метаданные</h3>
        
        <div>
          <Label htmlFor="meta_title">META заголовок</Label>
          <Input
            id="meta_title"
            value={editedArticle.meta.title}
            onChange={(e) => handleMetaChange('title', e.target.value)}
            placeholder="META заголовок (для поисковых систем)"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="meta_description">META описание</Label>
          <Textarea
            id="meta_description"
            value={editedArticle.meta.description}
            onChange={(e) => handleMetaChange('description', e.target.value)}
            placeholder="META описание (для поисковых систем)"
            className="mt-1"
            rows={3}
          />
        </div>
      </div>

      {/* Кнопки управления */}
      <div className="flex items-center justify-between pt-4">
        <Button 
          variant="outline" 
          onClick={onCancel}
          className="flex items-center gap-2"
        >
          <X size={16} />
          Отмена
        </Button>

        <div className="flex items-center gap-2">
          <Button 
            onClick={() => onSave(editedArticle)}
            variant="outline" 
            className="flex items-center gap-2"
          >
            <Save size={16} />
            Сохранить черновик
          </Button>
          <Button 
            onClick={() => onPublish(editedArticle)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
          >
            <FileCheck size={16} />
            Опубликовать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleEditor;
