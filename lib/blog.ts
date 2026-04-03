import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  slug: string;
}

export interface Post extends PostMeta {
  content: string;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx$/, '');
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map(getSlugFromFilename);
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((filename) => {
    const filepath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filepath, 'utf-8');
    const { data } = matter(raw);
    return {
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      category: data.category || 'Uncategorized',
      slug: data.slug || getSlugFromFilename(filename),
    } as PostMeta;
  });

  // Sort by date descending (newest first)
  return posts.sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  });
}

export function getPostBySlug(slug: string): Post | null {
  const filepath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    category: data.category || 'Uncategorized',
    slug: data.slug || slug,
    content,
  };
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
