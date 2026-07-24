'use client';

import React, { useState } from 'react';
import { X, User, Clock, Award, ShieldCheck, Ruler, Calendar, CheckCircle2 } from 'lucide-react';

interface AccountDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccountDashboardModal({ isOpen, onClose }: AccountDashboardModalProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'measurements' | 'appointments'>('orders');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dashboard Modal */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-white p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full p-2 text-[#1A1918] hover:bg-[#E5DFD3]/40"
        >
          <X className="h-6 w-6" />
        </button>

        {/* User Header */}
        <div className="flex items-center gap-4 border-b border-[#E5DFD3] pb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1A1918] text-[#D4AF37] font-serif text-xl font-bold shadow-md">
            RS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-xl font-bold text-[#1A1918]">Maharani Radhika Sharma</h2>
              <span className="bg-[#D4AF37]/20 border border-[#D4AF37] px-2 py-0.5 text-[10px] font-bold text-[#1A1918] uppercase">
                VIP Royal Bride
              </span>
            </div>
            <p className="text-xs text-[#777]">Client ID: #KAYAKALP-VIP-9021 • Delhi Atelier Member</p>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 border-b border-[#E5DFD3] pb-3">
          {[
            { id: 'orders', label: 'Couture Orders & Tracker', icon: Clock },
            { id: 'measurements', label: 'Bespoke Measurements', icon: Ruler },
            { id: 'appointments', label: 'Atelier Appointments', icon: Calendar },
            { id: 'profile', label: 'VIP Profile', icon: User },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition ${
                  isActive
                    ? 'border-b-2 border-[#C5A059] bg-[#1A1918] text-[#D4AF37]'
                    : 'text-[#666] hover:bg-[#F5F3EF] hover:text-[#1A1918]'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Orders Tracker */}
        {activeTab === 'orders' && (
          <div className="mt-6 space-y-6">
            <div className="border border-[#E5DFD3] bg-[#FAF9F6] p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5DFD3] pb-4 gap-2">
                <div>
                  <span className="text-[10px] font-bold text-[#C5A059] uppercase">Active Order #KAYAKALP-88942</span>
                  <h3 className="font-serif text-lg font-bold text-[#1A1918]">The Royal Noor-e-Zarin Velvet Lehenga</h3>
                  <p className="text-xs text-[#666]">Ordered on: July 14, 2026 • Made-To-Measure Fitting</p>
                </div>
                <span className="self-start sm:self-auto bg-[#043927] px-3 py-1 text-[11px] font-bold text-white uppercase">
                  In Production (Stage 2/4)
                </span>
              </div>

              {/* Progress Tracker Bar */}
              <div className="mt-6">
                <span className="text-xs font-semibold text-[#1A1918] block mb-3">Atelier Production Milestones</span>
                <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                  <div className="border-t-4 border-[#C5A059] pt-2 font-semibold text-[#1A1918]">
                    <CheckCircle2 className="h-4 w-4 mx-auto text-[#C5A059] mb-1" />
                    <span>1. Fabric Dyeing</span>
                  </div>
                  <div className="border-t-4 border-[#C5A059] pt-2 font-semibold text-[#1A1918]">
                    <Clock className="h-4 w-4 mx-auto text-[#C5A059] mb-1 animate-pulse" />
                    <span>2. Zardozi Embroidery</span>
                  </div>
                  <div className="border-t-4 border-[#E5DFD3] pt-2 text-[#888]">
                    <span>3. Master Fitting</span>
                  </div>
                  <div className="border-t-4 border-[#E5DFD3] pt-2 text-[#888]">
                    <span>4. Insured Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Measurements */}
        {activeTab === 'measurements' && (
          <div className="mt-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1A1918]">Saved Bridal Profile Specs</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border border-[#E5DFD3] p-4 bg-[#FAF9F6] text-xs">
              <div>
                <span className="text-[#888] block">Bust Size</span>
                <strong className="text-sm text-[#1A1918]">36.5 Inches</strong>
              </div>
              <div>
                <span className="text-[#888] block">Under Bust</span>
                <strong className="text-sm text-[#1A1918]">30.0 Inches</strong>
              </div>
              <div>
                <span className="text-[#888] block">Waist Size</span>
                <strong className="text-sm text-[#1A1918]">28.0 Inches</strong>
              </div>
              <div>
                <span className="text-[#888] block">Lehenga Height</span>
                <strong className="text-sm text-[#1A1918]">42.5 Inches</strong>
              </div>
            </div>
            <p className="text-xs text-[#777]">Need to update your measurements? Request a virtual session with your stylist.</p>
          </div>
        )}

        {/* Tab 3: Appointments */}
        {activeTab === 'appointments' && (
          <div className="mt-6 space-y-4">
            <div className="border border-[#E5DFD3] p-4 flex justify-between items-center bg-[#FAF9F6]">
              <div>
                <span className="text-[10px] font-bold text-[#C5A059] uppercase">Upcoming Fitting</span>
                <h4 className="font-serif font-bold text-[#1A1918]">Delhi Flagship Atelier 1-on-1 Trial</h4>
                <p className="text-xs text-[#666]">August 12, 2026 at 3:00 PM • Senior Stylist Ananya</p>
              </div>
              <button className="bg-[#1A1918] px-4 py-2 text-xs font-semibold text-[#D4AF37] uppercase">Reschedule</button>
            </div>
          </div>
        )}

        {/* Tab 4: Profile */}
        {activeTab === 'profile' && (
          <div className="mt-6 space-y-4 text-xs text-[#444]">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#888] mb-1">Full Name</label>
                <input type="text" readOnly value="Maharani Radhika Sharma" className="w-full border p-2 bg-[#F5F3EF]" />
              </div>
              <div>
                <label className="block text-[#888] mb-1">VIP Email</label>
                <input type="text" readOnly value="radhika.sharma@example.com" className="w-full border p-2 bg-[#F5F3EF]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
