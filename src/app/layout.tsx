import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { WishlistProvider } from '@/context/WishlistContext';
import { CartProvider } from '@/context/CartContext';
import { CompareProvider } from '@/context/CompareContext';
import { SearchProvider } from '@/context/SearchContext';
import { Toaster } from 'sonner';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kayakalp Designer Studio | Haute Couture & Royal Bridal Lehengas',
  description:
    'Luxury Indian bridal couture, hand-embroidered zardozi velvet lehengas, heritage tissue silk sarees, and regal groom achkans by Kayakalp Designer Studio.',
  keywords: [
    'Kayakalp Designer Studio',
    'Bridal Lehenga Surat',
    'Luxury Indian Couture',
    'Zardozi Velvet Lehenga',
    'Heritage Saree Atelier',
    'Royal Wedding Groom Wear',
  ],
  authors: [{ name: 'Kayakalp Designer Studio' }],
  openGraph: {
    title: 'Kayakalp Designer Studio | Luxury Royal Couture',
    description:
      'Immersive luxury bridal couture engineered with 400+ artisan hours per ensemble.',
    url: 'https://kayakalpdesignerstudio.com',
    siteName: 'Kayakalp Designer Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
        width: 1200,
        height: 630,
        alt: 'Kayakalp Royal Bridal Lehenga',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kayakalp Designer Studio | Royal Bridal Couture',
    description: 'Bespoke bridal lehengas and royal heritage drapes.',
    images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: 'Kayakalp Designer Studio',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    description: 'Luxury Indian bridal couture, bespoke lehengas, and royal groom regalia.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    sameAs: ['https://www.instagram.com/kayakalpdesignerstudio'],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#EAE5DC] selection:text-[#1A1918]">
        <WishlistProvider>
          <CartProvider>
            <CompareProvider>
              <SearchProvider>
                {children}
                <Toaster
                  position="bottom-right"
                  toastOptions={{
                    style: {
                      background: '#1A1918',
                      color: '#FAF9F6',
                      border: '1px solid #C5A059',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '12px',
                    },
                  }}
                />
              </SearchProvider>
            </CompareProvider>
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
