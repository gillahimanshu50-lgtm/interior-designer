import { 
  Palette, 
  Blinds, 
  Columns, 
  Hammer, 
  Sofa, 
  ChefHat, 
  Trees, 
  Maximize 
} from 'lucide-react';
import { ServiceItem, Testimonial, WorkingHours } from './types';

export const BUSINESS_INFO = {
  name: "Classic Inter Decor",
  tagline: "Royal Luxury Interior Designer",
  phone: "096491 24995",
  address: "C-59, Ram Gali Number 6, near AVM School, Raja Park, Jaipur, Rajasthan 302004",
  googleMapLink: "https://maps.google.com/?q=Classic+Inter+Decor+Jaipur",
  email: "contact@classicinterdecor.com" // Placeholder
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'kitchen',
    title: 'Modular Kitchens',
    description: 'Bespoke culinary spaces blending ergonomics with royal aesthetics.',
    icon: ChefHat,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2668&auto=format&fit=crop',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2'
  },
  {
    id: 'furniture',
    title: 'Luxury Furniture',
    description: 'Custom-manufactured pieces that define comfort and status.',
    icon: Sofa,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2'
  },
  {
    id: 'wallpaper',
    title: 'Premium Wallpaper',
    description: 'Imported textures and patterns to breathe life into walls.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop',
    colSpan: 'md:col-span-1'
  },
  {
    id: 'pvc',
    title: 'PVC Panels',
    description: 'Modern, durable wall solutions for contemporary homes.',
    icon: Columns,
    image: 'https://images.unsplash.com/photo-1620626012761-d9574ca70d20?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'md:col-span-1'
  },
  {
    id: 'flooring',
    title: 'Flooring & Carpets',
    description: 'Grounding your space with elegance, from wood to plush rugs.',
    icon: Maximize,
    image: 'https://images.unsplash.com/photo-1581858726768-758a033ed95c?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'md:col-span-1'
  },
  {
    id: 'outdoors',
    title: 'Awnings & Grass',
    description: 'Artificial grass and exterior shading for patios and balconies.',
    icon: Trees,
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2069&auto=format&fit=crop',
    colSpan: 'md:col-span-2'
  },
  {
    id: 'blinds',
    title: 'Curtains & Blinds',
    description: 'The finishing touch of privacy and style for every window.',
    icon: Blinds,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
    colSpan: 'md:col-span-1'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh K.",
    role: "Hotel Owner",
    content: "Classic Inter Decor transformed our lobby into a palace. The gold accents and modular work are flawless.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200"
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Homeowner",
    content: "I was worried about the kitchen renovation, but their team handled procurement and installation perfectly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200"
  },
  {
    id: 3,
    name: "Amit Sharma",
    role: "Architect",
    content: "As an architect, I value precision. Their PVC and flooring work meets the highest industry standards.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200"
  }
];

export const WORKING_HOURS: WorkingHours[] = [
  { day: "Monday - Saturday", hours: "10:00 AM – 8:30 PM" },
  { day: "Sunday", hours: "10:00 AM – 4:00 PM" },
];