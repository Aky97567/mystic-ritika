export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  sessions: string;
  currency: string;
  format: string;
  curriculum: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  service: string;
}
