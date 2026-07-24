'use client';

import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones, Sparkles, Award } from 'lucide-react';

export function TrustBadges() {
  const TRUST_ITEMS = [
    {
      icon: ShieldCheck,
      title: '100% Genuine Handwork',
      subtitle: 'Certified authentic silk & zardozi embroidery.',
    },
    {
      icon: Truck,
      title: 'Free Worldwide Delivery',
      subtitle: 'Fully insured express shipping on all orders.',
    },
    {
      icon: RotateCcw,
      title: '7-Day Fit Guarantee',
      subtitle: 'Free alterations & size adjustments guaranteed.',
    },
    {
      icon: Headphones,
      title: '24/7 VIP Assistance',
      subtitle: 'Dedicated 1-on-1 WhatsApp & phone concierge.',
    },
  ];

  return (
    <section className="bg-[#F9FAFB] border-t border-b border-[#E5E7EB] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-4 rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#111827] text-[#F59E0B]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#111827]">{item.title}</h4>
                  <p className="text-xs text-[#6B7280] font-normal mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
