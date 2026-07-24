'use client';

import React from 'react';
import { Mail, Share2, Globe, Sparkles, Phone, MapPin, Award } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A1918] text-[#FAF9F6] border-t border-[#D4AF37]/20 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#E5DFD3]/10">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <span className="font-serif text-2xl font-bold tracking-widest text-[#FAF9F6]">
              KAYAKALP
            </span>
            <span className="block text-[10px] tracking-[0.3em] text-[#C5A059] uppercase mt-1">
              Designer Studio • Couture
            </span>

            <p className="mt-4 text-xs text-[#A5A095] font-light leading-relaxed max-w-sm">
              Kayakalp is a luxury Indian couture house specializing in handcrafted bridal lehengas, royal sarees, and bespoken made-to-measure groom attire. Celebrating 30+ years of artisan mastery.
            </p>

            <div className="mt-6 flex items-center gap-4 text-[#C5A059]">
              <a href="#" className="hover:text-white transition" aria-label="Share"><Share2 className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition" aria-label="Website"><Globe className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition" aria-label="Exclusives"><Sparkles className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Col 2: Collections */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#D4AF37] uppercase mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D5D0C5] font-light">
              <li><a href="#collections" className="hover:text-[#C5A059] transition">Bridal Lehengas 2026</a></li>
              <li><a href="#collections" className="hover:text-[#C5A059] transition">Heritage Concept Sarees</a></li>
              <li><a href="#collections" className="hover:text-[#C5A059] transition">Indo Western Gowns</a></li>
              <li><a href="#collections" className="hover:text-[#C5A059] transition">Sangeet & Mehendi Line</a></li>
              <li><a href="#collections" className="hover:text-[#C5A059] transition">Royal Groom Sherwanis</a></li>
            </ul>
          </div>

          {/* Col 3: Client Care */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#D4AF37] uppercase mb-4">
              VIP Client Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D5D0C5] font-light">
              <li><a href="#contact" className="hover:text-[#C5A059] transition">Book Private Consultation</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition">Made-To-Measure Guide</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition">Worldwide Insured Shipping</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition">Artisan Authenticity Certificate</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition">Returns & Fitting Guarantee</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#D4AF37] uppercase mb-4">
              The Royal Circle
            </h4>
            <p className="text-xs text-[#A5A095] font-light mb-4">
              Subscribe for private trunk show invitations & new collection previews.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full bg-[#252422] border border-[#E5DFD3]/20 px-3 py-2.5 text-xs text-white placeholder-[#777] focus:border-[#C5A059] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#C5A059] py-2.5 text-[11px] font-bold tracking-widest text-white uppercase hover:bg-[#B38F48] transition"
              >
                Join VIP Guestlist
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#777]">
          <p>© 2026 Kayakalp Designer Studio. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C5A059] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#C5A059] transition">Terms of Service</a>
            <a href="#" className="hover:text-[#C5A059] transition">Atelier Locations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
