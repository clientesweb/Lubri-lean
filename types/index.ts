export interface Service {
  title: string;
  description: string;
  image: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  whatsapp: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  maps: string;
}

export interface BrandColors {
  primary: string;
  secondary: string;
  dark: string;
  light: string;
}

export interface Brand {
  colors: BrandColors;
  social: SocialLinks;
  contact: ContactInfo;
}

