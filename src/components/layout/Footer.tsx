'use client';

import React from 'react';
import { Mail, Phone, MapPin, Award, MessageCircle } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

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
              <a
                href="https://instagram.com/kayakalpdesignerstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1.5 text-xs font-semibold"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5 text-[#E1306C]" />
                <span>Instagram</span>
              </a>

              <a
                href="https://wa.me/919810012345?text=Hello%20Kayakalp,%20I%20want%20to%20inquire%20about%20bridal%20outfits"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1.5 text-xs font-semibold"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-[#10B981]" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+911149887700"
                className="hover:text-white transition flex items-center gap-1.5 text-xs font-semibold"
                aria-label="Call Us"
              >
                <Phone className="h-5 w-5 text-[#D4AF37]" />
                <span>Call Us</span>
              </a>
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
