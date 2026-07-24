'use client';

import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, Phone, MessageCircle } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useSearch } from '@/context/SearchContext';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

interface NavbarProps {
  onOpenMobileNav: () => void;
  onOpenAccount: () => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function Navbar({
  onOpenMobileNav,
  onOpenAccount,
  selectedCategory,
  onSelectCategory,
}: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  const { wishlist, setIsWishlistOpen } = useWishlist();
  const { cart, setIsCartOpen } = useCart();
  const { setIsSearchOpen, searchQuery, setSearchQuery } = useSearch();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const NAV_LINKS = [
    'Bridal Lehengas',
    'Heritage Sarees',
    'Gowns',
    'Indo Western',
    'Anarkalis',
  ];

  const handleCategoryClick = (link: string) => {
    onSelectCategory(link);
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5DFD3]">
      <div className="mx-auto max-w-7xl px-4 py-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">

          {/* Left: Brand Logo & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenMobileNav}
              className="rounded-lg p-2 text-[#4A0E17] hover:bg-[#E5DFD3]/40 lg:hidden"
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            <a href="#" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wider text-[#4A0E17]">
                KAYAKALP
              </span>
            </a>
          </div>

          {/* Center: Stitch Style Inline Category Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-serif text-sm font-semibold tracking-wide text-[#4A0E17]">
            {NAV_LINKS.map((link) => {
              const isActive = selectedCategory === link || (selectedCategory === 'Bridal Sarees' && link === 'Heritage Sarees');
              return (
                <button
                  key={link}
                  onClick={() => handleCategoryClick(link)}
                  className={`transition-all pb-0.5 border-b-2 ${
                    isActive
                      ? 'border-[#4A0E17] font-bold text-[#4A0E17]'
                      : 'border-transparent text-[#58111A]/80 hover:text-[#4A0E17] hover:border-[#C5A059]'
                  }`}
                >
                  {link}
                </button>
              );
            })}
          </nav>

          {/* Right: Search Input & Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Stitch Rounded Search Pill */}
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-3.5 h-4 w-4 text-[#888]" />
              <input
                type="text"
                placeholder="Search for luxury..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                className="w-48 lg:w-56 rounded-full border border-[#E5DFD3] bg-white/80 py-2 pl-9 pr-4 text-xs text-[#1A1918] placeholder-[#999] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] shadow-xs"
              />
            </div>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="rounded-full p-2 text-[#4A0E17] hover:bg-[#E5DFD3]/40 md:hidden"
              title="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Call Us Link */}
            <a
              href="tel:+911149887700"
              className="hidden xl:flex items-center gap-1 text-xs font-bold text-[#4A0E17] hover:text-[#C5A059] transition"
              title="Call Us: +91 (011) 4988-7700"
            >
              <Phone className="h-4 w-4 text-[#C5A059]" />
              <span>Call Us</span>
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/919810012345?text=Hello%20Kayakalp,%20I%20want%20to%20inquire%20about%20bridal%20outfits"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center rounded-full p-2 text-[#059669] hover:bg-[#E5DFD3]/40 transition"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5 fill-[#10B981] text-white" />
            </a>

            {/* Instagram Link */}
            <a
              href="https://instagram.com/kayakalpdesignerstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center rounded-full p-2 text-[#E1306C] hover:bg-[#E5DFD3]/40 transition"
              title="Follow us on Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative rounded-full p-2 text-[#4A0E17] hover:bg-[#E5DFD3]/40 transition"
              title="Wishlist"
            >
              <Heart className="h-5 w-5 text-[#8B0000]" />
              {mounted && wishlist.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#8B0000] text-[10px] font-bold text-white">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full p-2 text-[#4A0E17] hover:bg-[#E5DFD3]/40 transition"
              title="Cart"
            >
              <ShoppingBag className="h-5 w-5 text-[#4A0E17]" />
              {mounted && totalCartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#4A0E17] text-[10px] font-bold text-[#D4AF37]">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Account Button */}
            <button
              onClick={onOpenAccount}
              className="rounded-full p-2 text-[#4A0E17] hover:bg-[#E5DFD3]/40 transition"
              title="Account"
            >
              <User className="h-5 w-5 text-[#4A0E17]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
