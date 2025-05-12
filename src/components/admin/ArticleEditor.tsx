
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Save, 
  Eye, 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Heading1,
  Heading2,
  Link as LinkIcon
} from 'lucide-react';

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
  const contentRef = useRef<HTMLTextAreaElement>(null);
  
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

  // Функции для форматирования текста
  const formatText = (tag: string) => {
    if (!contentRef.current) return;
    
    const textArea = contentRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = formData.content.substring(start, end);
    let formattedText = '';
    
    switch (tag) {
      case 'b':
        formattedText = `<strong>${selectedText}</strong>`;
        break;
      case 'i':
        formattedText = `<em>${selectedText}</em>`;
        break;
      case 'u':
        formattedText = `<u>${selectedText}</u>`;
        break;
      case 'ul':
        formattedText = `\n<ul>\n\t<li>${selectedText}</li>\n</ul>\n`;
        break;
      case 'ol':
        formattedText = `\n<ol>\n\t<li>${selectedText}</li>\n</ol>\n`;
        break;
      case 'h1':
        formattedText = `<h1>${selectedText}</h1>`;
        break;
      case 'h2':
        formattedText = `<h2>${selectedText}</h2>`;
        break;
      case 'center':
        formattedText = `<div style="text-align: center;">${selectedText}</div>`;
        break;
      case 'right':
        formattedText = `<div style="text-align: right;">${selectedText}</div>`;
        break;
      case 'link':
        const url = prompt('Введите URL ссылки:', 'https://');
        if (url) {
          formattedText = `<a href="${url}" target="_blank">${selectedText || url}</a>`;
        } else {
          return;
        }
        break;
      default:
        formattedText = selectedText;
    }
    
    const newContent = formData.content.substring(0, start) + formattedText + formData.content.substring(end);
    
    setFormData({
      ...formData,
      content: newContent
    });
    
    // Set focus back to the textarea after applying format
    setTimeout(() => {
      textArea.focus();
      textArea.setSelectionRange(start + formattedText.length, start + formattedText.length);
    }, 0);
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
          <div className="bg-gray-100 p-1 mb-2 rounded flex flex-wrap gap-1">
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => formatText('b')}
              className="h-8 px-2"
            >
              <Bold size={16} />
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => formatText('i')}
              className="h-8 px-2"
            >
              <Italic size={16} />
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => formatText('u')}
              className="h-8 px-2"
            >
              <Underline size={16} />
            </Button>
            <div className="h-8 border-l mx-1"></div>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => formatText('h1')}
              className="h-8 px-2"
            >
              <Heading1 size={16} />
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => formatText('h2')}
              className="h-8 px-2"
            >
              <Heading2 size={16} />
            </Button>
            <div className="h-8 border-l mx-1"></div>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => formatText('ul')}
              className="h-8 px-2"
            >
              <List size={16} />
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => formatText('ol')}
              className="h-8 px-2"
            >
              <ListOrdered size={16} />
            </Button>
            <div className="h-8 border-l mx-1"></div>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => formatText('center')}
              className="h-8 px-2"
            >
              <AlignCenter size={16} />
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => formatText('right')}
              className="h-8 px-2"
            >
              <AlignRight size={16} />
            </Button>
            <div className="h-8 border-l mx-1"></div>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => formatText('link')}
              className="h-8 px-2"
            >
              <LinkIcon size={16} />
            </Button>
          </div>
          <Textarea
            ref={contentRef}
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
