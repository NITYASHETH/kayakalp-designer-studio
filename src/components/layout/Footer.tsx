'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppOfficialIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" {...props}>
    <path d="M16 2A13 13 0 0 0 4.68 20.88L2 30l9.36-2.6A13 13 0 1 0 16 2zm0 23.83a10.8 10.8 0 0 1-5.52-1.51l-.4-.24-4.1.1.84-4-1.27-2.02A10.83 10.83 0 1 1 16 25.83zm5.94-8.11c-.32-.16-1.92-.95-2.22-1.06s-.51-.16-.73.16-.84 1.06-1.03 1.27-.38.24-.7.08a8.87 8.87 0 0 1-2.6-1.6 9.78 9.78 0 0 1-1.8-2.24c-.19-.32 0-.49.14-.65s.32-.38.48-.57a2.22 2.22 0 0 0 .32-.54.6.6 0 0 0 0-.57c-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62a1.2 1.2 0 0 0-.87.4 3.65 3.65 0 0 0-1.14 2.71 6.35 6.35 0 0 0 1.33 3.37 14.54 14.54 0 0 0 5.58 4.93 18.66 18.66 0 0 0 1.86.69 4.47 4.47 0 0 0 2.06.13 3.36 3.36 0 0 0 2.21-1.55 2.72 2.72 0 0 0 .19-1.55c-.08-.14-.3-.22-.62-.38z" />
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
              kayakalpDesignerstudio™
            </span>
            <span className="block text-[11px] tracking-[0.2em] text-[#C5A059] uppercase mt-1 font-semibold">
              by Sahil • Haute Couture & Bridal Atelier
            </span>

            <p className="mt-4 text-xs text-[#A5A095] font-light leading-relaxed max-w-sm">
              Luxury Indian bridal couture, bespoke handcrafted lehengas, royal sarees, and regal groom wear crafted with timeless artisan perfection.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://instagram.com/kayakalpdesignerstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1.5 text-xs font-semibold text-[#E1306C]"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
                <span>@kayakalpdesignerstudio</span>
              </a>

              <a
                href="https://wa.me/917400101995?text=Hello%20kayakalpDesignerstudio,%20I%20want%20to%20inquire%20about%20bridal%20outfits"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1.5 text-xs font-semibold text-[#25D366]"
                aria-label="WhatsApp"
              >
                <WhatsAppOfficialIcon className="h-5 w-5 fill-[#25D366]" />
                <span>WhatsApp 7400101995</span>
              </a>
            </div>
          </div>

          {/* Col 2: Studio Location & Phone */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#D4AF37] uppercase mb-4">
              Mumbai Flagship Studio
            </h4>
            <div className="space-y-3 text-xs text-[#D5D0C5] font-light">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Shop No. 3, Jitekar Wadi, Opp. Jain Temple, Thakurdwar Road, Mumbai - 400002.</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#C5A059] shrink-0" />
                <a href="tel:+917400101995" className="hover:text-[#C5A059] transition font-medium">
                  7400101995 / 9920781995
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Collections */}
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

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#D4AF37] uppercase mb-4">
              VIP Guestlist
            </h4>
            <p className="text-xs text-[#A5A095] font-light mb-4">
              Subscribe for private trunk show invitations & new collection previews.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                suppressHydrationWarning
                type="email"
                placeholder="Enter your email..."
                className="w-full bg-[#252422] border border-[#E5DFD3]/20 px-3 py-2.5 text-xs text-white placeholder-[#777] focus:border-[#C5A059] focus:outline-none"
              />
              <button
                suppressHydrationWarning
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
          <p>© 2026 kayakalpDesignerstudio™ by Sahil. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C5A059] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#C5A059] transition">Terms of Service</a>
            <a href="#" className="hover:text-[#C5A059] transition">Mumbai Studio Location</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
