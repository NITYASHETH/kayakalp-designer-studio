'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { CategoryNav } from '@/components/layout/CategoryNav';
import { MobileNav } from '@/components/layout/MobileNav';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedCollection } from '@/components/home/FeaturedCollection';
import { TrustBadges } from '@/components/home/TrustBadges';
import { Footer } from '@/components/layout/Footer';
import { QuickViewModal } from '@/components/common/QuickViewModal';
import { WishlistDrawer } from '@/components/common/WishlistDrawer';
import { CartDrawer } from '@/components/common/CartDrawer';
import { CompareDrawer } from '@/components/common/CompareDrawer';
import { PredictiveSearchModal } from '@/components/common/PredictiveSearchModal';
import { CheckoutModal } from '@/components/checkout/CheckoutModal';
import { AccountDashboardModal } from '@/components/account/AccountDashboardModal';
import { useWishlist } from '@/context/WishlistContext';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All Collections');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const { selectedProductForQuickView, setSelectedProductForQuickView } = useWishlist();

  return (
    <main className="min-h-screen bg-white text-[#111827] font-sans antialiased">
      {/* Google Stitch Style Header with Inline Category Links */}
      <Navbar
        onOpenMobileNav={() => setIsMobileNavOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Horizontal Sub-Category Bar */}
      <CategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Mobile Slide-over Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      {/* High-Converting E-Commerce Hero Banners */}
      <HeroSection />

      {/* Product Catalog Grid with ADD TO CART and BUY NOW */}
      <FeaturedCollection
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* 100% Genuine, Free Delivery & Guarantee Pillars */}
      <TrustBadges />

      {/* E-Commerce Footer */}
      <Footer />

      {/* Overlays & Drawers */}
      <PredictiveSearchModal />
      <WishlistDrawer />
      <CartDrawer onProceedToCheckout={() => setIsCheckoutOpen(true)} />
      <CompareDrawer />

      {/* PDP Quick View Modal */}
      {selectedProductForQuickView && (
        <QuickViewModal
          product={selectedProductForQuickView}
          onClose={() => setSelectedProductForQuickView(null)}
        />
      )}

      {/* 3-Step Simple E-Commerce Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Customer Account & Order Tracking */}
      <AccountDashboardModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />
    </main>
  );
}
