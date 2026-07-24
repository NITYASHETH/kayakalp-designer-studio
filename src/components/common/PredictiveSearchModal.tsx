'use client';

import React, { useState } from 'react';
import { useSearch } from '@/context/SearchContext';
import { PRODUCTS } from '@/data/products';
import { useWishlist } from '@/context/WishlistContext';
import { Search, X, TrendingUp, Sparkles, Eye } from 'lucide-react';

const TRENDING_SEARCHES = ['Bridal Lehenga', 'Velvet Crimson', 'Saree', 'Emerald Gown', 'Raw Silk Sherwani'];

export function PredictiveSearchModal() {
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery } = useSearch();
  const { setSelectedProductForQuickView } = useWishlist();

  if (!isSearchOpen) return null;

  const filteredResults = searchQuery.trim() === ''
    ? []
    : PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.embellishment.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Search Modal */}
      <div className="relative z-10 w-full max-w-3xl overflow-hidden bg-white p-6 shadow-2xl border border-[#D4AF37]/40">
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b-2 border-[#1A1918] pb-3">
          <Search className="h-6 w-6 text-[#C5A059] mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Search by outfit name, category, fabric (e.g., Zardozi, Velvet, Saree)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-lg font-serif placeholder:font-sans placeholder:text-sm placeholder:text-[#888] focus:outline-none text-[#1A1918]"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="p-1 text-[#888] hover:text-[#1A1918]">
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="ml-3 rounded-full p-2 text-[#1A1918] hover:bg-[#F5F3EF]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Trending Suggestions */}
        {searchQuery.trim() === '' ? (
          <div className="py-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#C5A059] tracking-wider mb-3">
              <TrendingUp className="h-4 w-4" />
              <span>Trending Search Terms</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TRENDING_SEARCHES.map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="border border-[#E5DFD3] bg-[#FAF9F6] px-4 py-2 text-xs text-[#1A1918] hover:border-[#C5A059] hover:bg-[#1A1918] hover:text-[#D4AF37] transition"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-4">
            <span className="text-xs font-semibold text-[#888] uppercase tracking-wider block mb-3">
              Search Results ({filteredResults.length})
            </span>

            {filteredResults.length === 0 ? (
              <div className="py-8 text-center text-sm text-[#777]">
                No couture pieces match "{searchQuery}". Try searching "Lehenga", "Saree", or "Velvet".
              </div>
            ) : (
              <div className="max-h-96 overflow-y-auto space-y-3 pr-1">
                {filteredResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSelectedProductForQuickView(product);
                    }}
                    className="flex items-center justify-between border border-[#E5DFD3] p-3 hover:border-[#C5A059] hover:bg-[#FAF9F6] cursor-pointer transition"
                  >
                    <div className="flex items-center gap-4">
                      <img src={product.image} alt={product.name} className="h-16 w-14 object-cover border" />
                      <div>
                        <span className="text-[10px] font-semibold text-[#C5A059] uppercase">{product.category}</span>
                        <h4 className="font-serif text-sm font-bold text-[#1A1918]">{product.name}</h4>
                        <p className="text-xs text-[#666]">{product.fabric}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-serif text-sm font-bold text-[#1A1918]">{product.price}</span>
                      <button className="flex items-center gap-1 bg-[#1A1918] px-3 py-1.5 text-[10px] font-semibold uppercase text-[#D4AF37]">
                        <Eye className="h-3 w-3" />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
