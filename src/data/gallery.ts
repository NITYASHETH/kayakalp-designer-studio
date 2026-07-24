export interface GalleryItem {
  id: string;
  title: string;
  category: 'Runway Couture' | 'Real Brides' | 'Artisan Atelier' | 'Bespoke Details';
  image: string;
  aspectRatio: 'portrait' | 'tall' | 'square' | 'wide';
  location?: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'The Crimson Bridal Heritage',
    category: 'Real Brides',
    image: '/images/hero-bridal.png',
    aspectRatio: 'tall',
    location: 'Udaipur City Palace',
    caption: 'Kayakalp bride Ananya in custom zardozi embroidered velvet lehenga.'
  },
  {
    id: 'gal-02',
    title: 'Zardozi Embroidery Details',
    category: 'Bespoke Details',
    image: '/images/artisan-zardozi.png',
    aspectRatio: 'portrait',
    caption: 'Close-up of hand-sewn real pearls and dabka work created by our master artisans.'
  },
  {
    id: 'gal-03',
    title: 'Autumn Runway Showcase',
    category: 'Runway Couture',
    image: '/images/lehenga-crimson-1.png',
    aspectRatio: 'tall',
    caption: 'Kayakalp Couture Collection presented at India Couture Week.'
  },
  {
    id: 'gal-04',
    title: 'Atelier Artisan at Work',
    category: 'Artisan Atelier',
    image: '/images/saree-champagne-1.png',
    aspectRatio: 'square',
    caption: 'Over 400 hours of delicate gold needlework in progress at our Surat studio.'
  },
  {
    id: 'gal-05',
    title: 'Royal Groom in Ivory Achkan',
    category: 'Real Brides',
    image: '/images/sherwani-ivory-1.png',
    aspectRatio: 'portrait',
    location: 'Jaipur Rambagh Palace',
    caption: 'Groom Devansh tailored in raw silk with antique gold accents.'
  },
  {
    id: 'gal-06',
    title: 'Emerald Velvet Silhouette',
    category: 'Runway Couture',
    image: '/images/gown-emerald-1.png',
    aspectRatio: 'tall',
    caption: 'Sculpted reception gown with floating tulle drape.'
  }
];
