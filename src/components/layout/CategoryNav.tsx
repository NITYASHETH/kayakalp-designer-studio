'use client';

import React from 'react';

const CATEGORIES = [
  { name: 'Bridal Lehengas', icon: '👗', tag: 'Bestsellers' },
  { name: 'Heritage Sarees', icon: '🥻', tag: 'Trending' },
  { name: 'Indo-Western Gowns', icon: '💃', tag: 'New' },
  { name: 'Sangeet & Anarkalis', icon: '✨', tag: null },
  { name: 'Groom Sherwanis', icon: '🤵', tag: null },
  { name: 'Clearance Sale', icon: '🔥', tag: 'Up to 40% OFF' },
];

interface CategoryNavProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryNav({ selectedCategory, onSelectCategory }: CategoryNavProps) {
  return (
    <div className="border-b border-[#E5E7EB] bg-white sticky top-[65px] z-30 shadow-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start overflow-x-auto py-2.5 gap-3 scrollbar-none">
          <button
            onClick={() => onSelectCategory('All Collections')}
            className={`flex items-center gap-2 flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === 'All Collections'
                ? 'bg-[#111827] text-[#F59E0B]'
                : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]'
            }`}
          >
            <span>🛍️ All Outfits</span>
          </button>

          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className={`flex items-center gap-2 flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                  isActive
                    ? 'bg-[#111827] text-[#F59E0B]'
                    : 'bg-[#F9FAFB] border border-[#E5E7EB] text-[#374151] hover:bg-[#F3F4F6]'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                {cat.tag && (
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-extrabold uppercase ${
                    cat.tag.includes('OFF') ? 'bg-[#EF4444] text-white' : 'bg-[#F59E0B] text-[#111827]'
                  }`}>
                    {cat.tag}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
