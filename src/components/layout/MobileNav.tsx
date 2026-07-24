'use client';

import React from 'react';
import { X, Phone, MapPin, Sparkles } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
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

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function MobileNav({
  isOpen,
  onClose,
  selectedCategory,
  onSelectCategory,
}: MobileNavProps) {
  if (!isOpen) return null;

  const NAV_LINKS = [
    'All Collections',
    'Bridal Lehengas',
    'Heritage Sarees',
    'Gowns',
    'Indo Western',
    'Anarkalis',
  ];

  const handleCategoryClick = (link: string) => {
    onSelectCategory(link);
    onClose();
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative flex w-full max-w-xs flex-col bg-[#FAF9F6] p-6 shadow-2xl transition-transform overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-4">
          <div>
            <span className="font-serif text-lg font-extrabold tracking-wider text-[#4A0E17]">
              kayakalpDesignerstudio™
            </span>
            <span className="block text-[10px] tracking-widest text-[#C5A059] uppercase font-semibold">
              by Sahil • Couture Atelier
            </span>
          </div>
          <button
            suppressHydrationWarning
            onClick={onClose}
            className="rounded-full p-2 text-[#4A0E17] hover:bg-[#E5DFD3]/40"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Category Navigation Links */}
        <nav className="mt-6 flex flex-col gap-4 font-serif text-base tracking-wide text-[#4A0E17]">
          {NAV_LINKS.map((link) => {
            const isActive = selectedCategory === link || (selectedCategory === 'Bridal Sarees' && link === 'Heritage Sarees');
            return (
              <button
                key={link}
                suppressHydrationWarning
                onClick={() => handleCategoryClick(link)}
                className={`flex items-center justify-between border-b border-[#E5DFD3]/50 pb-3 text-left transition ${
                  isActive ? 'font-bold text-[#4A0E17]' : 'text-[#58111A]/80 hover:text-[#4A0E17]'
                }`}
              >
                <span>{link}</span>
                {isActive && <Sparkles className="h-4 w-4 text-[#C5A059]" />}
              </button>
            );
          })}
        </nav>

        {/* Studio Info & Quick Action Contact Buttons */}
        <div className="mt-8 border-t border-[#E5DFD3] pt-6 text-xs text-[#555] space-y-4">
          <div className="flex items-start gap-2.5 text-[#444]">
            <MapPin className="h-4 w-4 text-[#C5A059] shrink-0 mt-0.5" />
            <span className="leading-snug">Shop No. 3, Jitekar Wadi, Opp. Jain Temple, Thakurdwar Road, Mumbai - 400002.</span>
          </div>

          <div className="flex items-center gap-2.5 text-[#444]">
            <Phone className="h-4 w-4 text-[#C5A059] shrink-0" />
            <a href="tel:+917400101995" className="font-semibold text-[#4A0E17] hover:underline">
              7400101995 / 9920781995
            </a>
          </div>

          {/* Social / Direct Action Links */}
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://wa.me/917400101995?text=Hello%20kayakalpDesignerstudio,%20I%20want%20to%20inquire%20about%20bridal%20outfits"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-[#25D366] py-3 text-xs font-bold text-white uppercase tracking-wider shadow"
            >
              <WhatsAppOfficialIcon className="h-5 w-5 fill-white" />
              <span>WhatsApp Concierge</span>
            </a>

            <a
              href="https://instagram.com/kayakalpdesignerstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] py-3 text-xs font-bold text-white uppercase tracking-wider shadow"
            >
              <InstagramIcon className="h-5 w-5" />
              <span>@kayakalpdesignerstudio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
