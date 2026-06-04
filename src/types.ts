export type SectionType = 'home' | 'about' | 'services' | 'projects' | 'clients' | 'achievements' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  specs: { label: string; value: string }[];
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client?: string;
  location?: string;
  scope?: string;
  category:
    | 'Restaurants & Banquets'
    | 'Hotels, Resorts & Hospitality'
    | 'Corporate Offices / Industries'
    | 'Educational Institutions'
    | 'Showrooms & Retail'
    | 'Residence / Luxury Villas'
    | 'Hospitals / Health Care';
  year?: number;
  featured?: boolean;
  metrics: string;
  description?: string;
  image?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface AchievementTimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface BrandPartner {
  name: string;
  tier: string;
  description: string;
  acronym: string;
}

export interface CertificationItem {
  code: string;
  title: string;
  authority: string;
}
