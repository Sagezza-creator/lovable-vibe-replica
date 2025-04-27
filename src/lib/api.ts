// Simple cache implementation for API requests
const cache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const API_BASE_URL = 'https://svobodarazuma.ru/blog/wp-json/wp/v2';

/**
 * Fetches data with caching
 */
async function fetchWithCache<T>(url: string): Promise<T> {
  const cached = cache[url];
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  
  const data = await response.json();
  cache[url] = { data, timestamp: Date.now() };
  return data;
}

/**
 * Fetches all articles with required fields
 */
export async function fetchArticles() {
  try {
    const fields = [
      'id',
      'title.rendered',
      'content.rendered',
      'excerpt.rendered',
      'date',
      'slug',
      'featured_media'
    ].join(',');

    const url = `${API_BASE_URL}/posts?_fields=${fields}&per_page=100&_embed`;
    const articles = await fetchWithCache<any[]>(url);

    return articles.map(article => ({
      id: article.id,
      title: article.title?.rendered || 'Без названия',
      content: article.content?.rendered || '',
      excerpt: article.excerpt?.rendered || getExcerpt(article.content?.rendered),
      date: formatDate(article.date),
      slug: article.slug,
      image: getFeaturedImage(article),
      meta: {
        title: article.meta_title || '',
        description: article.meta_description || ''
      }
    }));
  } catch (error) {
    console.error('Fetch articles error:', error);
    return [];
  }
}

/**
 * Fetches single article by slug
 */
export async function fetchArticle(slug: string) {
  try {
    const fields = [
      'id',
      'title.rendered',
      'content.rendered',
      'excerpt.rendered',
      'date',
      'slug',
      'meta_title',
      'meta_description',
      'featured_media'
    ].join(',');

    const url = `${API_BASE_URL}/posts?slug=${slug}&_fields=${fields}&_embed`;
    const [article] = await fetchWithCache<any[]>(url);

    if (!article) throw new Error('Article not found');

    return {
      id: article.id,
      title: article.title?.rendered || 'Без названия',
      content: article.content?.rendered || '',
      date: formatDate(article.date),
      image: getFeaturedImage(article),
      meta: {
        title: article.meta_title || article.title?.rendered || '',
        description: article.meta_description || article.excerpt?.rendered || ''
      }
    };
  } catch (error) {
    console.error('Fetch article error:', error);
    return null;
  }
}

/**
 * Extracts featured image from _embedded data
 */
function getFeaturedImage(article: any): string | null {
  return article._embedded?.['wp:featured_media']?.[0]?.source_url || null;
}

/**
 * Formats date to Russian locale
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/**
 * Creates excerpt from content
 */
export function getExcerpt(content: string, length: number = 120): string {
  const text = stripHtmlTags(content);
  return text.length <= length ? text : `${text.substring(0, length)}...`;
}

/**
 * Removes HTML tags
 */
function stripHtmlTags(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent?.trim() || '';
}