
// Simple cache implementation for API requests
const cache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const API_BASE_URL = 'https://svobodarazuma.ru/blog/wp-json/wp/v2';

/**
 * Fetches data from the API with caching
 */
async function fetchWithCache<T>(url: string): Promise<T> {
  // Check if we have a valid cached response
  const cachedData = cache[url];
  const now = Date.now();
  
  if (cachedData && now - cachedData.timestamp < CACHE_DURATION) {
    return cachedData.data;
  }
  
  // Fetch fresh data
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  
  const data = await response.json();
  
  // Cache the response
  cache[url] = {
    data,
    timestamp: now
  };
  
  return data;
}

/**
 * Fetches all articles from the WordPress API
 */
export async function fetchArticles() {
  const fields = 'id,title,content,excerpt,date,slug';
  const url = `${API_BASE_URL}/posts?_fields=${fields}&per_page=100`;
  return fetchWithCache<any[]>(url);
}

/**
 * Fetches a single article by slug
 */
export async function fetchArticle(slug: string) {
  const fields = 'id,title,content,excerpt,date,slug,meta_title,meta_description';
  const url = `${API_BASE_URL}/posts?slug=${slug}&_fields=${fields}`;
  const articles = await fetchWithCache<any[]>(url);
  
  if (!articles || articles.length === 0) {
    throw new Error('Article not found');
  }
  
  return articles[0];
}

/**
 * Format WordPress HTML content
 */
export function stripHtmlTags(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

/**
 * Get excerpt from content
 */
export function getExcerpt(content: string, maxLength: number = 120): string {
  const plainText = stripHtmlTags(content);
  if (plainText.length <= maxLength) return plainText;
  
  return plainText.substring(0, maxLength) + '...';
}

/**
 * Format date to readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}
