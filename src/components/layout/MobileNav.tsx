'use client';

import React from 'react';
import { X, Calendar, Phone, MapPin, Sparkles } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative flex w-full max-w-xs flex-col bg-[#FAF9F6] p-6 shadow-2xl transition-transform">
        <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-4">
          <div>
            <span className="font-serif text-xl font-bold tracking-widest text-[#1A1918]">
              KAYAKALP
            </span>
            <span className="block text-[9px] tracking-widest text-[#C5A059] uppercase">
              Designer Studio
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-[#1A1918] hover:bg-[#E5DFD3]/40"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-6 font-serif text-lg tracking-wide text-[#1A1918]">
          <a
            href="#collections"
            onClick={onClose}
            className="flex items-center justify-between border-b border-[#E5DFD3]/50 pb-3 hover:text-[#C5A059]"
          >
            <span>Bridal Collections</span>
            <Sparkles className="h-4 w-4 text-[#C5A059]" />
          </a>
          <a
            href="#gallery"
            onClick={onClose}
            className="border-b border-[#E5DFD3]/50 pb-3 hover:text-[#C5A059]"
          >
            Atelier Gallery
          </a>
          <a
            href="#about"
            onClick={onClose}
            className="border-b border-[#E5DFD3]/50 pb-3 hover:text-[#C5A059]"
          >
            Our Heritage & Artisans
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="border-b border-[#E5DFD3]/50 pb-3 hover:text-[#C5A059]"
          >
            Book Private Consultation
          </a>
        </nav>

        <div className="mt-auto border-t border-[#E5DFD3] pt-6 text-xs text-[#555]">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-4 w-4 text-[#C5A059]" />
            <span>Flagship Boutique: South Extension II, New Delhi</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Phone className="h-4 w-4 text-[#C5A059]" />
            <span>+91 (011) 4988-7700 | VIP Line</span>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full rounded-none bg-[#1A1918] py-3 font-sans text-xs tracking-widest text-[#D4AF37] uppercase transition hover:bg-[#C5A059] hover:text-white"
          >
            <Calendar className="h-4 w-4" />
            <span>Reserve Atelier Appointment</span>
          </a>
        </div>
      </div>
    </div>
  );
}
