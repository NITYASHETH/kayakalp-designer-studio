'use client';

import React from 'react';
import { Sparkles, Truck, Scissors, Star, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-[#FAF9F6] py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Stitch Luxury Headline & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/50 bg-[#FAF3E0] px-4 py-1.5 self-start mb-6 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#C5A059]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                HANDCRAFTED LUXURY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#4A0E17] leading-[1.15]">
              Imperial Bridal <br />
              Lehengas & <br />
              Designer Outfits
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm sm:text-base text-[#554] font-normal leading-relaxed max-w-lg">
              Shop handcrafted bridal lehengas, silk sarees, and sherwanis with custom made-to-measure stitching.
            </p>

            {/* Side-by-Side Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#collections"
                className="inline-flex items-center justify-center rounded-none bg-[#4A0E17] px-8 py-4 text-xs font-bold tracking-widest text-white uppercase hover:bg-[#58111A] transition shadow-md"
              >
                <span>SHOP ALL OUTFITS</span>
              </a>

              <a
                href="#collections"
                className="inline-flex items-center justify-center rounded-none border border-[#D5CFC3] bg-[#FAF9F6] px-8 py-4 text-xs font-bold tracking-widest text-[#4A0E17] uppercase hover:bg-[#F3EFE6] transition"
              >
                <span>EXPLORE BESTSELLERS</span>
              </a>
            </div>

            {/* Micro-Features Row */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-xs text-[#665] font-medium border-t border-[#E5DFD3]/60 pt-6">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-[#C5A059]" />
                <span>Free Global Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Scissors className="h-4 w-4 text-[#C5A059]" />
                <span>Custom Tailoring</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tall Frame with Overlaid Floating Cards */}
          <div className="lg:col-span-6 relative">
            {/* Tall Rounded Image Frame */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-[#F5F3EF] border border-[#E5DFD3] shadow-xl">
              <img
                src="/images/hero-bridal.png"
                alt="Imperial Bridal Lehenga"
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Card 1: Top-Left Discount Coupon Card */}
            <div className="absolute top-6 -left-4 sm:left-6 z-20 w-52 rounded-2xl bg-white p-4 shadow-xl border border-[#E5DFD3]/80 animate-fade-in">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">
                <span>LIMITED</span>
                <span>💎</span>
              </div>
              <h4 className="mt-1 font-serif text-base font-bold text-[#4A0E17]">
                Flat 10% OFF
              </h4>
              <p className="text-[10px] text-[#777]">V.I.P Discount Exclusive</p>

              <div className="mt-2.5 rounded-lg border border-dashed border-[#C5A059] bg-[#FAF9F6] p-1.5 text-center font-mono text-xs font-bold tracking-widest text-[#4A0E17]">
                ROYAL10
              </div>
            </div>

            {/* Floating Card 2: Bottom-Right Customer Review Card */}
            <div className="absolute bottom-6 -right-4 sm:right-6 z-20 max-w-xs rounded-2xl bg-white p-5 shadow-2xl border border-[#E5DFD3]/80">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-[#10B981] font-bold text-[11px]">
                  <span>✓ 100% Genuine Quality</span>
                </div>
                <div className="flex items-center text-[#F59E0B] font-extrabold text-[11px]">
                  <Star className="h-3.5 w-3.5 fill-[#F59E0B]" />
                  <span className="ml-1 text-[#1A1918]">4.9 / 5.0</span>
                </div>
              </div>

              <p className="mt-2 text-xs italic text-[#444] leading-relaxed">
                "The crimson lehenga exceeded all expectations. Exceptional couture craftsmanship and perfect fitting!"
              </p>

              <div className="mt-3 flex items-center justify-between text-[11px] font-semibold">
                <span className="text-[#666]">— Ananya M., Delhi</span>
                <a href="#collections" className="text-[#4A0E17] font-bold hover:underline flex items-center gap-1">
                  <span>BROWSE REVIEWS</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
