export interface Testimonial {
  id: string;
  brideName: string;
  groomName?: string;
  weddingLocation: string;
  weddingDate: string;
  outfitTitle: string;
  quote: string;
  image: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-01',
    brideName: 'Radhika Singhania',
    groomName: 'Rohan Shroff',
    weddingLocation: 'Lake Palace, Udaipur',
    weddingDate: 'December 2025',
    outfitTitle: 'Noor-e-Zarin Crimson Velvet Lehenga',
    quote: 'Wearing Kayakalp for my wedding felt like stepping into royal history. The weight of the silk, the intricate gold zardozi, and the personalized consultations with their master designers made me feel extraordinarily special.',
    image: '/images/hero-bridal.png',
    rating: 5
  },
  {
    id: 't-02',
    brideName: 'Meera Kapoor',
    groomName: 'Vikram Mehta',
    weddingLocation: 'The Oberoi Udaivilas',
    weddingDate: 'November 2025',
    outfitTitle: 'Mehrunissa Ivory Gold Heritage Lehenga',
    quote: 'I wanted an understated ivory bridal lehenga with subtle antique gold detailing. Kayakalp delivered perfection. Every stitch and pearl placement was done with utmost precision.',
    image: '/images/lehenga-ivory-1.png',
    rating: 5
  },
  {
    id: 't-03',
    brideName: 'Natasha Roy',
    groomName: 'Kabir Oberoi',
    weddingLocation: 'Villa d’Este, Lake Como',
    weddingDate: 'February 2026',
    outfitTitle: 'Chandni Tissue Silk Concept Saree',
    quote: 'For my Lake Como reception, I selected the tissue silk saree with bullion lace. It flowed like moonlight. Kayakalp’s international fitting service was seamless from start to finish.',
    image: '/images/saree-champagne-1.png',
    rating: 5
  }
];
