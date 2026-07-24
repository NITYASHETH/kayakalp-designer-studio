'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* Instagram Button */}
      <a
        href="https://instagram.com/kayakalpdesignerstudio"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-xl transition-transform hover:scale-110"
        title="Follow on Instagram"
      >
        <InstagramIcon className="h-6 w-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919810012345?text=Hello%20Kayakalp,%20I%20want%20to%20inquire%20about%20bridal%20outfits"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-xl transition-transform hover:scale-105"
        title="WhatsApp Concierge"
      >
        <MessageCircle className="h-5 w-5 fill-white text-[#25D366]" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+911149887700"
        className="flex items-center gap-2 rounded-full bg-[#1A1918] px-4 py-3 text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/50 shadow-xl transition-transform hover:scale-105"
        title="Call Us Directly"
      >
        <Phone className="h-4 w-4 text-[#D4AF37]" />
        <span className="hidden sm:inline">Call Us</span>
      </a>
    </div>
  );
}
