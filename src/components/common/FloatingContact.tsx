'use client';

import React from 'react';
import { Phone } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppOfficialIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" {...props}>
    <path d="M16 2A13 13 0 0 0 4.68 20.88L2 30l9.36-2.6A13 13 0 1 0 16 2zm0 23.83a10.8 10.8 0 0 1-5.52-1.51l-.4-.24-4.1.1.84-4-1.27-2.02A10.83 10.83 0 1 1 16 25.83zm5.94-8.11c-.32-.16-1.92-.95-2.22-1.06s-.51-.16-.73.16-.84 1.06-1.03 1.27-.38.24-.7.08a8.87 8.87 0 0 1-2.6-1.6 9.78 9.78 0 0 1-1.8-2.24c-.19-.32 0-.49.14-.65s.32-.38.48-.57a2.22 2.22 0 0 0 .32-.54.6.6 0 0 0 0-.57c-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62a1.2 1.2 0 0 0-.87.4 3.65 3.65 0 0 0-1.14 2.71 6.35 6.35 0 0 0 1.33 3.37 14.54 14.54 0 0 0 5.58 4.93 18.66 18.66 0 0 0 1.86.69 4.47 4.47 0 0 0 2.06.13 3.36 3.36 0 0 0 2.21-1.55 2.72 2.72 0 0 0 .19-1.55c-.08-.14-.3-.22-.62-.38z" />
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
        title="Follow on Instagram (@kayakalpdesignerstudio)"
      >
        <InstagramIcon className="h-6 w-6" />
      </a>

      {/* Official WhatsApp Floating Button */}
      <a
        href="https://wa.me/917400101995?text=Hello%20kayakalpDesignerstudio,%20I%20want%20to%20inquire%20about%20bridal%20outfits"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-2xl transition-transform hover:scale-105"
        title="WhatsApp VIP Inquiry (7400101995)"
      >
        <WhatsAppOfficialIcon className="h-6 w-6 fill-white" />
        <span className="hidden sm:inline font-sans tracking-wide">WhatsApp Us</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+917400101995"
        className="flex items-center gap-2 rounded-full bg-[#1A1918] px-4 py-3 text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/50 shadow-xl transition-transform hover:scale-105"
        title="Call Us (7400101995 / 9920781995)"
      >
        <Phone className="h-4 w-4 text-[#D4AF37]" />
        <span className="hidden sm:inline font-sans">Call 7400101995</span>
      </a>
    </div>
  );
}
