'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/data/products';

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  selectedProductForQuickView: Product | null;
  setSelectedProductForQuickView: (product: Product | null) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedProductForQuickView, setSelectedProductForQuickView] = useState<Product | null>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('kayakalp_wishlist');
        if (stored) {
          setWishlist(JSON.parse(stored));
        }
      }
    } catch {
      // Ignore errors
    }
  }, []);

  const saveWishlist = (items: Product[]) => {
    setWishlist(items);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('kayakalp_wishlist', JSON.stringify(items));
      }
    } catch {
      // Ignore localStorage errors
    }
  };

  const addToWishlist = (product: Product) => {
    if (!isInWishlist(product.id)) {
      saveWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId: string) => {
    saveWishlist(wishlist.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        selectedProductForQuickView,
        setSelectedProductForQuickView,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
