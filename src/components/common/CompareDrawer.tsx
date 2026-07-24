'use client';

import React from 'react';
import { useCompare } from '@/context/CompareContext';
import { useCart } from '@/context/CartContext';
import { X, Trash2, ShoppingBag, ArrowLeftRight, Check } from 'lucide-react';

export function CompareDrawer() {
  const { compareItems, isCompareOpen, setIsCompareOpen, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();

  if (!isCompareOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCompareOpen(false)}
      />

      {/* Comparison Drawer */}
      <div className="relative z-10 max-h-[85vh] w-full max-w-5xl overflow-y-auto bg-white p-6 shadow-2xl border-t border-[#D4AF37]/50">
        <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-4">
          <div className="flex items-center gap-2">
            <ArrowLeftRight className="h-5 w-5 text-[#C5A059]" />
            <h2 className="font-serif text-xl font-bold text-[#1A1918]">
              Couture Outfit Comparison ({compareItems.length}/3)
            </h2>
          </div>
          <div className="flex items-center gap-4">
            {compareItems.length > 0 && (
              <button
                onClick={clearCompare}
                className="text-xs text-[#888] hover:text-[#8B0000] underline"
              >
                Clear All
              </button>
            )}
            <button
              onClick={() => setIsCompareOpen(false)}
              className="rounded-full p-2 text-[#1A1918] hover:bg-[#E5DFD3]/40"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {compareItems.length === 0 ? (
          <div className="py-12 text-center">
            <ArrowLeftRight className="mx-auto h-12 w-12 text-[#E5DFD3]" />
            <p className="mt-4 font-serif text-lg text-[#1A1918]">No outfits selected for comparison</p>
            <p className="mt-1 text-xs text-[#777]">Click "Compare" on any product card to evaluate side-by-side specs.</p>
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs text-[#333]">
              <thead>
                <tr className="border-b border-[#E5DFD3]">
                  <th className="p-3 font-semibold uppercase text-[#777] w-1/4">Spec / Feature</th>
                  {compareItems.map((item) => (
                    <th key={item.id} className="p-3 w-1/4 text-center min-w-[200px]">
                      <div className="relative mx-auto h-32 w-24 bg-[#F5F3EF] mb-2 border border-[#E5DFD3]">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                        <button
                          onClick={() => removeFromCompare(item.id)}
                          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#1A1918] text-white hover:bg-[#8B0000]"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                      <h4 className="font-serif font-bold text-[#1A1918] line-clamp-2">{item.name}</h4>
                      <p className="font-serif font-bold text-[#C5A059] mt-1">{item.price}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD3]">
                <tr>
                  <td className="p-3 font-semibold text-[#888]">Category</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-3 text-center">{item.category}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#888]">Fabric & Weave</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-3 text-center">{item.fabric}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#888]">Embellishment</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-3 text-center">{item.embellishment}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#888]">Artisan Handwork</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-3 text-center font-semibold text-[#C5A059]">
                      {item.artisanHours} Hours
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#888]">Occasion</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-3 text-center">{item.occasion}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#888]">Availability</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-3 text-center font-medium text-[#1A1918]">{item.availability}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#888]">Action</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-3 text-center">
                      <button
                        onClick={() => addToCart(item)}
                        className="inline-flex items-center gap-1.5 bg-[#1A1918] px-4 py-2 text-[11px] font-semibold uppercase text-[#D4AF37] hover:bg-[#C5A059] hover:text-white transition"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>Add to Bag</span>
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
