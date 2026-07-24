'use client';

import React from 'react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { X, Trash2, ShoppingBag, Heart } from 'lucide-react';

export function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="relative flex w-full max-w-md flex-col bg-[#FAF9F6] p-6 shadow-2xl z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-4">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-[#8B0000]" />
            <h2 className="font-serif text-xl font-bold text-[#1A1918]">
              Saved Outfits ({wishlist.length})
            </h2>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="rounded-full p-2 text-[#1A1918] hover:bg-[#E5DFD3]/40"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        {wishlist.length === 0 ? (
          <div className="my-auto text-center py-12">
            <Heart className="mx-auto h-12 w-12 text-[#E5DFD3]" />
            <p className="mt-4 font-serif text-lg text-[#1A1918]">Your Wishlist is empty</p>
            <p className="mt-1 text-xs text-[#777]">Save your favorite bridal lehengas and gowns here.</p>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="mt-6 inline-block bg-[#1A1918] px-6 py-3 text-xs font-semibold text-[#D4AF37] uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition"
            >
              Explore Collections
            </button>
          </div>
        ) : (
          <div className="mt-4 flex-1 overflow-y-auto space-y-4 pr-1">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border border-[#E5DFD3] bg-white p-3 shadow-sm transition hover:shadow"
              >
                <div className="h-24 w-20 flex-shrink-0 bg-[#F5F3EF]">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-[#C5A059]">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-sm font-semibold text-[#1A1918] line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="mt-1 font-serif text-sm font-bold text-[#1A1918]">
                      {item.price}
                    </p>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => {
                        addToCart(item);
                        removeFromWishlist(item.id);
                      }}
                      className="flex items-center gap-1 bg-[#1A1918] px-3 py-1.5 text-[10px] font-semibold uppercase text-[#D4AF37] hover:bg-[#C5A059] hover:text-white transition"
                    >
                      <ShoppingBag className="h-3 w-3" />
                      <span>Move to Bag</span>
                    </button>

                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-1.5 text-[#888] hover:text-[#8B0000] transition"
                      title="Remove"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
