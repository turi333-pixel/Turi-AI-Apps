
export type Category = 'Productivity' | 'Lifestyle' | 'Health & Wellness' | 'Utilities' | 'Creative' | 'All';

export type Language = 'en' | 'es' | 'de';

export interface LocalizedContent {
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
}

export interface AppEntry {
  id: string;
  category: Category;
  tags: string[];
  imageUrl: string;
  launchUrl: string;
  featured?: boolean;
  translations: Record<Language, LocalizedContent>;
}

export type View = 'home' | 'apps' | 'categories' | 'about' | 'detail';
