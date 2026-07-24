'use client';

import React from 'react';
import { Award, Feather, HeartHandshake, ShieldCheck } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F5F3EF] text-[#1A1918]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase block mb-2">
              HERITAGE & COUTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1918] leading-tight">
              Preserving Royal <br />
              <span className="font-bold italic text-[#C5A059]">Indian Craftsmanship</span>
            </h2>

            <p className="mt-6 text-sm text-[#555] leading-relaxed font-light">
              Founded with the vision of revitalizing centuries-old royal embroidery techniques, Kayakalp Designer Studio brings together over 150 master karigars (artisans) across Varanasi, Old Delhi, and Jaipur.
            </p>

            <p className="mt-4 text-sm text-[#555] leading-relaxed font-light">
              From pure silver and gold wired Zardozi work to delicate Marodi and Lucknowi Mukiwork, every piece undergoes a rigorous 8-stage quality inspection to ensure museum-grade perfection for your special day.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#E5DFD3] pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#1A1918] p-2.5 text-[#D4AF37]">
                  <Feather className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#1A1918] text-sm">Pure Mulberry Silks</h4>
                  <p className="text-xs text-[#777] mt-0.5">Ethically sourced, hand-woven textiles</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#1A1918] p-2.5 text-[#D4AF37]">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#1A1918] text-sm">Fair Artisan Wages</h4>
                  <p className="text-xs text-[#777] mt-0.5">Direct empowerment of master weavers</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#1A1918] p-2.5 text-[#D4AF37]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#1A1918] text-sm">Bespoke Fit Guaranteed</h4>
                  <p className="text-xs text-[#777] mt-0.5">Virtual & in-person concierge fittings</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#1A1918] p-2.5 text-[#D4AF37]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#1A1918] text-sm">Heritage Certificate</h4>
                  <p className="text-xs text-[#777] mt-0.5">Authenticity card with artisan signatures</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/images/artisan-zardozi.png"
                alt="Master Artisan at Work"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#1A1918] p-6 shadow-xl border border-[#D4AF37]/30 text-white max-w-xs hidden sm:block">
              <span className="font-serif text-3xl font-bold text-[#D4AF37]">150+</span>
              <p className="text-xs font-light text-[#D5D0C5] uppercase tracking-widest mt-1">
                Master Karigars Preserving Royal Heritage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
