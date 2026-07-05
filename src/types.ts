export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  category: 'Operations' | 'Launches' | 'Experiences' | 'Creative' | 'Growth';
  deliverables: string[];
}

export interface PartnerItem {
  id: string;
  name: string;
  role: string;
  location: string;
  logoText: string;
  accentColor: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  business: string;
  location: string;
  rating: number;
}
