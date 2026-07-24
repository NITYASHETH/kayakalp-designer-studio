'use client';

import React from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 'g1',
    title: 'Imperial Zardozi Workshop',
    subtitle: 'Hand-sewn micro pearls and pure gold dabka wiring',
    image: '/images/artisan-zardozi.png',
  },
  {
    id: 'g2',
    title: 'The Crimson Heritage Bride',
    subtitle: 'Custom bridal lehenga crafted over 420 artisan hours',
    image: '/images/lehenga-crimson-1.png',
  },
  {
    id: 'g3',
    title: 'High-Jewel Metallic Tissue Saree',
    subtitle: 'Concept saree drape with corset bullion embroidery',
    image: '/images/saree-champagne-1.png',
  },
  {
    id: 'g4',
    title: 'Royal Groom Regalia Achkan',
    subtitle: 'Pure mulberry silk achkan with tone-on-tone resham work',
    image: '/images/sherwani-ivory-1.png',
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-[#1A1918] text-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-2">
              <Sparkles className="h-4 w-4" />
              <span>ATELIER CRAFTSMANSHIP</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light">
              Inside the <span className="font-bold italic text-[#C5A059]">Atelier</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#A5A095] max-w-md font-light">
            Behind every Kayakalp silhouette lies centuries of preserved Indian heritage weaving, intricate bullion embroidery, and bespoke made-to-measure tailoring.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative h-96 overflow-hidden border border-[#E5DFD3]/20 bg-[#252422] transition-all duration-500 hover:border-[#D4AF37]/50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918] via-[#1A1918]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[#D4AF37] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                  <Maximize2 className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#D5D0C5] font-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
