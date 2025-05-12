// Simple cache implementation for API requests
const cache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Updated API endpoint for articles
const API_BASE_URL = 'https://svobodarazuma.ru/blog/wp-json/wp/v2/articles';

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
      'title',
      'content',
      'excerpt',
      'date',
      'slug',
      'featured_media',
      'datePublished',
      'yoast_head_json'
    ].join(',');

    const url = `${API_BASE_URL}?_fields=${fields}&per_page=100&_embed`;
    const articles = await fetchWithCache<any[]>(url);

    return articles.map(article => ({
      id: article.id,
      title: getArticleTitle(article) || 'Без названия',
      content: article.content?.rendered || '',
      excerpt: article.excerpt?.rendered || getExcerpt(article.content?.rendered || ''),
      date: article.datePublished || article.date || '',
      slug: article.slug,
      image: getFeaturedImage(article),
      focusKeyword: extractFocusKeyword(article),
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
      'title',
      'content',
      'excerpt',
      'date',
      'slug',
      'meta_title',
      'meta_description',
      'featured_media',
      'datePublished'
    ].join(',');

    const url = `${API_BASE_URL}?slug=${slug}&_fields=${fields}&_embed`;
    const [article] = await fetchWithCache<any[]>(url);

    if (!article) throw new Error('Article not found');

    return {
      id: article.id,
      title: getArticleTitle(article) || 'Без названия',
      content: article.content?.rendered || '',
      date: article.datePublished || article.date || '',
      slug: article.slug || slug, // Ensure slug is always available
      image: getFeaturedImage(article),
      meta: {
        title: article.meta_title || getArticleTitle(article) || '',
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
 * Extract article title from content or title field
 */
function getArticleTitle(article: any): string {
  if (!article) return '';
  
  // Try to get title from the h1.wp-block-post-title as requested
  if (article.content?.rendered) {
    const titleMatch = /<h1\s+class="wp-block-post-title"[^>]*>(.*?)<\/h1>/i.exec(article.content.rendered);
    if (titleMatch && titleMatch[1]) {
      return stripHtmlTags(titleMatch[1]);
    }
  }
  
  // Fallback to title.rendered or title
  return article.title?.rendered || article.title || '';
}

/**
 * Extracts focus keyword from Yoast metadata
 */
function extractFocusKeyword(article: any): string {
  // Try to get focus keyword from Yoast metadata
  if (article.yoast_head_json?.focus_keyphrase) {
    return article.yoast_head_json.focus_keyphrase;
  }

  // Fallback: Try to extract from HTML content
  if (article.content?.rendered) {
    const focusKeywordMatch = /<span\s+class="wpseo-focus-keyword"[^>]*>(.*?)<\/span>/i.exec(article.content.rendered);
    if (focusKeywordMatch && focusKeywordMatch[1]) {
      return stripHtmlTags(focusKeywordMatch[1]);
    }
  }

  return '';
}

/**
 * Formats date to Russian locale with error handling
 */
export function formatDate(dateString: string): string {
  if (!dateString) return 'Дата не указана';
  
  try {
    // First check if it's a valid date
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'Дата не указана';
    }
    
    // Format the date as DD.MM.YYYY
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}.${month}.${year}`;
  } catch (error) {
    console.error('Date formatting error:', error);
    return 'Дата не указана';
  }
}

/**
 * Creates excerpt from content
 */
export function getExcerpt(content: string, length: number = 120): string {
  if (!content) return '';
  const text = stripHtmlTags(content);
  return text.length <= length ? text : `${text.substring(0, length)}...`;
}

/**
 * Removes HTML tags
 */
function stripHtmlTags(html: string): string {
  if (!html) return '';
  try {
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent?.trim() || '';
  } catch (error) {
    console.error('HTML strip error:', error);
    // Fallback for server-side or in case of errors
    return html.replace(/<[^>]*>?/gm, '').trim();
  }
}
