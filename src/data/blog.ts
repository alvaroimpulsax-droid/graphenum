const blogModules = import.meta.glob('../content/blog/*.json', { eager: true });

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
  tags?: string[];
}

export const posts: BlogPost[] = Object.values(blogModules)
  .map((mod: any) => mod.default || mod)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return posts.slice(0, count);
}
