export interface ColorOption {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Bridal Lehengas' | 'Indo Western' | 'Bridal Sarees' | 'Reception Collection' | 'Groom Collection';
  price: string;
  numericPrice: number;
  originalPrice?: string;
  numericOriginalPrice?: number;
  savingsAmount?: string;
  discountPercent?: number;
  tag: string;
  description: string;
  fabric: string;
  embellishment: string;
  artisanHours: number;
  color: string;
  colorOptions: ColorOption[];
  sizes: ('S' | 'M' | 'L' | 'XL' | 'Custom Made-to-Measure')[];
  occasion: 'Main Wedding' | 'Sangeet & Mehendi' | 'Reception & Gala' | 'Royal Groom';
  image: string;
  hoverImage: string;
  gallery: string[];
  rating: number;
  reviewsCount: number;
  availability: 'In Stock' | 'Limited Stock' | 'Made To Order (4-6 Weeks)';
  isNewArrival?: boolean;
  isBestseller?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'kayakalp-01',
    name: 'The Royal Noor-e-Zarin Velvet Lehenga',
    category: 'Bridal Lehengas',
    price: '₹2,85,000',
    numericPrice: 285000,
    originalPrice: '₹3,20,000',
    numericOriginalPrice: 320000,
    savingsAmount: '₹35,000',
    discountPercent: 11,
    tag: 'Bridal Couture 2026',
    description: 'Hand-embroidered crimson silk velvet bridal lehenga crafted with gold zardozi, dabka, and freshwater pearl encrustations.',
    fabric: 'Pure Mulberry Silk Velvet & Handspun Tissue Organza',
    embellishment: 'Gold Zardozi, Dabka, Resham & Pearls',
    artisanHours: 420,
    color: 'Deep Crimson Red',
    colorOptions: [
      { name: 'Deep Crimson', hex: '#8B0000' },
      { name: 'Imperial Maroon', hex: '#58111A' },
      { name: 'Royal Emerald', hex: '#043927' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'Custom Made-to-Measure'],
    occasion: 'Main Wedding',
    image: '/images/lehenga-crimson-1.png',
    hoverImage: '/images/hero-bridal.png',
    gallery: ['/images/lehenga-crimson-1.png', '/images/hero-bridal.png', '/images/artisan-zardozi.png'],
    rating: 5.0,
    reviewsCount: 38,
    availability: 'Made To Order (4-6 Weeks)',
    isNewArrival: true,
    isBestseller: true,
  },
  {
    id: 'kayakalp-02',
    name: 'Mehrunissa Ivory Gold Heritage Lehenga',
    category: 'Bridal Lehengas',
    price: '₹3,40,000',
    numericPrice: 340000,
    originalPrice: '₹3,75,000',
    numericOriginalPrice: 375000,
    savingsAmount: '₹35,000',
    discountPercent: 9,
    tag: 'Imperial Heritage',
    description: 'Ethereal ivory raw silk lehenga featuring antique gold marodi embroidery and champagne sequin foliage.',
    fabric: 'Heritage Raw Silk & Benarasi Gold Brocade',
    embellishment: 'Marodi Work & Champagne Sequin Embroidery',
    artisanHours: 510,
    color: 'Warm Ivory',
    colorOptions: [
      { name: 'Warm Ivory', hex: '#FAF9F6' },
      { name: 'Antique Gold', hex: '#C5A059' },
    ],
    sizes: ['S', 'M', 'L', 'Custom Made-to-Measure'],
    occasion: 'Main Wedding',
    image: '/images/lehenga-ivory-1.png',
    hoverImage: '/images/saree-champagne-1.png',
    gallery: ['/images/lehenga-ivory-1.png', '/images/saree-champagne-1.png'],
    rating: 4.9,
    reviewsCount: 29,
    availability: 'Made To Order (4-6 Weeks)',
    isBestseller: true,
  },
  {
    id: 'kayakalp-03',
    name: 'The Chandni Metallic Tissue Concept Saree',
    category: 'Bridal Sarees',
    price: '₹1,45,000',
    numericPrice: 145000,
    originalPrice: '₹1,65,000',
    numericOriginalPrice: 165000,
    savingsAmount: '₹20,000',
    discountPercent: 12,
    tag: 'Heritage Saree',
    description: 'Fluid champagne metallic tissue silk drape with hand-scalloped bullion lace borders and a corset blouse.',
    fabric: 'Handloom Metallic Tissue Silk & Silk Corset',
    embellishment: 'Cut-dana & Scalloped Bullion Lace',
    artisanHours: 180,
    color: 'Champagne Gold',
    colorOptions: [
      { name: 'Champagne Gold', hex: '#D4AF37' },
      { name: 'Rose Gold', hex: '#B76E79' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    occasion: 'Reception & Gala',
    image: '/images/saree-champagne-1.png',
    hoverImage: '/images/lehenga-ivory-1.png',
    gallery: ['/images/saree-champagne-1.png', '/images/lehenga-ivory-1.png'],
    rating: 4.8,
    reviewsCount: 44,
    availability: 'In Stock',
    isNewArrival: true,
  },
  {
    id: 'kayakalp-04',
    name: 'Raja Vikramaditya Raw Silk Sherwani Set',
    category: 'Groom Collection',
    price: '₹1,95,000',
    numericPrice: 195000,
    originalPrice: '₹2,15,000',
    numericOriginalPrice: 215000,
    savingsAmount: '₹20,000',
    discountPercent: 9,
    tag: 'Royal Groom Regalia',
    description: 'Ivory raw silk achkan sherwani woven with tone-on-tone resham embroidery, paired with a gold pleated stole.',
    fabric: 'Pure Raw Silk & Chanderi Silk Stole',
    embellishment: 'Resham Embroidery & Jeweled Brass Buttons',
    artisanHours: 240,
    color: 'Ivory & Warm Sand',
    colorOptions: [
      { name: 'Royal Ivory', hex: '#F5F3EF' },
      { name: 'Vintage Taupe', hex: '#8C8275' },
    ],
    sizes: ['M', 'L', 'XL', 'Custom Made-to-Measure'],
    occasion: 'Royal Groom',
    image: '/images/sherwani-ivory-1.png',
    hoverImage: '/images/lehenga-ivory-1.png',
    gallery: ['/images/sherwani-ivory-1.png'],
    rating: 5.0,
    reviewsCount: 19,
    availability: 'Made To Order (4-6 Weeks)',
    isBestseller: true,
  },
  {
    id: 'kayakalp-05',
    name: 'Sultana Emerald Velvet Sculpted Gown',
    category: 'Reception Collection',
    price: '₹2,25,000',
    numericPrice: 225000,
    originalPrice: '₹2,50,000',
    numericOriginalPrice: 250000,
    savingsAmount: '₹25,000',
    discountPercent: 10,
    tag: 'Indo Western Gown',
    description: 'Sculptural deep emerald green micro-velvet trailing reception gown with hand-draped shoulders and crystal boning.',
    fabric: 'Micro Velvet & Silk Tulle',
    embellishment: 'Swarovski Crystals & Zircon Work',
    artisanHours: 320,
    color: 'Deep Emerald Green',
    colorOptions: [
      { name: 'Emerald Green', hex: '#043927' },
      { name: 'Midnight Sapphire', hex: '#0F172A' },
    ],
    sizes: ['S', 'M', 'L', 'Custom Made-to-Measure'],
    occasion: 'Reception & Gala',
    image: '/images/gown-emerald-1.png',
    hoverImage: '/images/saree-champagne-1.png',
    gallery: ['/images/gown-emerald-1.png'],
    rating: 4.9,
    reviewsCount: 22,
    availability: 'Limited Stock',
    isNewArrival: true,
  },
  {
    id: 'kayakalp-06',
    name: 'Dusty Rose Gulab Kashi Indo Western Set',
    category: 'Indo Western',
    price: '₹1,65,000',
    numericPrice: 165000,
    originalPrice: '₹1,85,000',
    numericOriginalPrice: 185000,
    savingsAmount: '₹20,000',
    discountPercent: 11,
    tag: 'Festive Indo Western',
    description: 'Floor-length dusty rose kalidar Indo Western ensemble with Lucknowi chikankari elevated with gold mukiwork.',
    fabric: 'Pure Georgette & Tulle Dupatta',
    embellishment: 'Lucknowi Chikankari & Mukiwork',
    artisanHours: 290,
    color: 'Dusty Rose',
    colorOptions: [
      { name: 'Dusty Rose', hex: '#D8A7B1' },
      { name: 'Soft Lavender', hex: '#E6E6FA' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    occasion: 'Sangeet & Mehendi',
    image: '/images/anarkali-rose-1.png',
    hoverImage: '/images/lehenga-crimson-1.png',
    gallery: ['/images/anarkali-rose-1.png'],
    rating: 4.7,
    reviewsCount: 31,
    availability: 'In Stock',
  },
];

export const PRODUCT_CATEGORIES = [
  'All Collections',
  'Bridal Lehengas',
  'Indo Western',
  'Bridal Sarees',
  'Reception Collection',
  'Groom Collection',
] as const;
