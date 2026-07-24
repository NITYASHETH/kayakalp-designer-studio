export interface CraftPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  artisanTechnique: string;
  hoursSpent: string;
}

export const CRAFT_PILLARS: CraftPillar[] = [
  {
    id: 'zardozi',
    title: 'Imperial Zardozi',
    subtitle: 'High Precision Gold Threadwork',
    description: 'Using metallic wire (kalabattu), real pearls, and cut beads sewn onto heavy silk velvet by 3rd-generation artisan masters.',
    image: '/images/artisan-zardozi.png',
    artisanTechnique: 'Heirloom Dabka & Salma Needlework',
    hoursSpent: '350+ Hours Per Piece'
  },
  {
    id: 'handloom',
    title: 'Heritage Weaves',
    subtitle: 'Varanasi & Kanchipuram Looms',
    description: 'Pure zari woven into mulberry silk on traditional pit looms, producing fabrics that drape with liquid gold sheen.',
    image: '/images/saree-champagne-1.png',
    artisanTechnique: 'Real Gold Zari Interlocking Work',
    hoursSpent: '180 Loom Days'
  },
  {
    id: 'tailoring',
    title: 'Couture Sculpting',
    subtitle: 'Architectural Bespoke Fit',
    description: 'Each bridal ensemble is custom draped on a personalized mannequin matching exact client proportions down to the millimeter.',
    image: '/images/lehenga-ivory-1.png',
    artisanTechnique: 'Precision Corsetry & French Boning',
    hoursSpent: '6 Fitting Iterations'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How far in advance should I book my bridal consultation?',
    answer: 'We recommend initiating your bridal consultation 4 to 6 months prior to your wedding date. This allows ample time for custom sketch approvals, artisan hand-embroidery, and multi-stage fitting trials.'
  },
  {
    question: 'Do you offer international bridal consultations and worldwide shipping?',
    answer: 'Yes. We conduct virtual video consultations with our lead designer, send custom color swatches to your international residence, and deliver fully insured worldwide via DHL Express.'
  },
  {
    question: 'Can I customize the color, fabric, and embroidery weight of an existing outfit?',
    answer: 'Every piece at Kayakalp Designer Studio is made to order. You can customize the base silk hue, sleeve silhouettes, neckline, dupatta length, and embroidery density to align with your personal vision.'
  },
  {
    question: 'What is the price range of Kayakalp Couture?',
    answer: 'Bespoke bridal lehengas range from ₹2,50,000 to ₹6,00,000 based on embroidery intricacy and artisan hours. Concept sarees and festive silk anarkalis range from ₹1,20,000 to ₹2,20,000.'
  }
];
