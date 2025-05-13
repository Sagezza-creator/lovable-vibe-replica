
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Save, 
  Eye,
  Image
} from 'lucide-react';
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
  image?: string | null;
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
  const [imagePreview, setImagePreview] = useState<string | null>(article.image || null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ align: [] }],
      ['link', 'image'],
      ['clean'],
    ],
  };
  
  const quillFormats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'list', 'bullet',
    'indent',
    'align',
    'link', 'image',
  ];

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

  const handleContentChange = (content: string) => {
    setFormData({
      ...formData,
      content
    });
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setImagePreview(base64String);
      setFormData({
        ...formData,
        image: base64String
      });
    };
    reader.readAsDataURL(file);
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
          <label htmlFor="image" className="block text-sm font-medium mb-1">
            Изображение для статьи
          </label>
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <Input
                ref={imageInputRef}
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full"
              />
            </div>
            {imagePreview && (
              <div className="w-32 h-24 relative">
                <img 
                  src={imagePreview} 
                  alt="Предпросмотр" 
                  className="w-32 h-24 object-cover rounded" 
                />
              </div>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Содержание статьи
          </label>
          <div className="min-h-[400px]">
            <ReactQuill 
              theme="snow"
              value={formData.content}
              onChange={handleContentChange}
              modules={quillModules}
              formats={quillFormats}
              className="h-[350px] mb-12"
            />
          </div>
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
