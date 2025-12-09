import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  imageUrl: string; // Added image for service cards
  linkText?: string;
}

export interface ProjectItem {
  id: string;
  title: string; // Used for alt text primarily in grid
  imageUrl: string;
  category?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum SectionId {
  HERO = 'hero',
  SERVICES = 'services',
  ABOUT = 'about',
  PROJECTS = 'projects',
  REVIEWS = 'reviews',
  CONTACT = 'contact',
  FAQ = 'faq'
}