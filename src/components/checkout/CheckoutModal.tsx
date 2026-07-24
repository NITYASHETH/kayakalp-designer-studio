'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { X, Check, ShieldCheck, CreditCard, Truck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cart, grandTotal, clearCart } = useCart();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    stitchingOption: 'Standard Ready-to-Wear Fit',
  });

  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'COD'>('UPI');

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
    }
  };

  const handlePlaceOrder = () => {
    setStep(3);
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-[#E5E7EB]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full p-2 text-[#374151] hover:bg-[#F3F4F6]"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header Stepper */}
        <div className="border-b border-[#E5E7EB] pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-1">
            <ShieldCheck className="h-4 w-4 text-[#10B981]" />
            <span>SECURE EXPRESS CHECKOUT</span>
          </div>
          <h2 className="font-serif text-2xl font-extrabold text-[#111827]">
            Complete Your Order
          </h2>

          {/* Stepper Progress */}
          <div className="mt-4 flex items-center justify-between text-xs font-bold">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#111827]' : 'text-[#9CA3AF]'}`}>
              <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${step >= 1 ? 'bg-[#111827] text-[#F59E0B]' : 'bg-[#E5E7EB] text-[#6B7280]'}`}>1</div>
              <span>Delivery Address</span>
            </div>
            <div className="h-0.5 flex-1 mx-4 bg-[#E5E7EB]" />

            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#111827]' : 'text-[#9CA3AF]'}`}>
              <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${step >= 2 ? 'bg-[#111827] text-[#F59E0B]' : 'bg-[#E5E7EB] text-[#6B7280]'}`}>2</div>
              <span>Payment Option</span>
            </div>
            <div className="h-0.5 flex-1 mx-4 bg-[#E5E7EB]" />

            <div className={`flex items-center gap-2 ${step === 3 ? 'text-[#111827]' : 'text-[#9CA3AF]'}`}>
              <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${step === 3 ? 'bg-[#10B981] text-white' : 'bg-[#E5E7EB] text-[#6B7280]'}`}>3</div>
              <span>Order Placed</span>
            </div>
          </div>
        </div>

        {/* STEP 1: Shipping Details */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="mt-6 space-y-4">
            <h3 className="font-serif text-base font-bold text-[#111827]">1. Shipping Address & Contact</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#374151] uppercase mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Sharma"
                  value={shippingInfo.fullName}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                  className="w-full rounded-lg border border-[#D1D5DB] p-3 text-sm focus:border-[#111827] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#374151] uppercase mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={shippingInfo.phone}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                  className="w-full rounded-lg border border-[#D1D5DB] p-3 text-sm focus:border-[#111827] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#374151] uppercase mb-1">Street Address *</label>
              <textarea
                required
                rows={2}
                placeholder="Flat / House No, Street, Landmark"
                value={shippingInfo.address}
                onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                className="w-full rounded-lg border border-[#D1D5DB] p-3 text-sm focus:border-[#111827] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#374151] uppercase mb-1">City *</label>
                <input
                  type="text"
                  required
                  placeholder="Delhi"
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                  className="w-full rounded-lg border border-[#D1D5DB] p-3 text-sm focus:border-[#111827] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#374151] uppercase mb-1">State *</label>
                <input
                  type="text"
                  required
                  placeholder="Delhi"
                  value={shippingInfo.state}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                  className="w-full rounded-lg border border-[#D1D5DB] p-3 text-sm focus:border-[#111827] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#374151] uppercase mb-1">Pincode *</label>
                <input
                  type="text"
                  required
                  placeholder="110049"
                  value={shippingInfo.pincode}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                  className="w-full rounded-lg border border-[#D1D5DB] p-3 text-sm focus:border-[#111827] focus:outline-none"
                />
              </div>
            </div>

            {/* Fitting Preference */}
            <div className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-3">
              <label className="block text-xs font-bold text-[#111827] uppercase mb-1">Stitching Preference</label>
              <select
                value={shippingInfo.stitchingOption}
                onChange={(e) => setShippingInfo({ ...shippingInfo, stitchingOption: e.target.value })}
                className="w-full rounded border border-[#D1D5DB] bg-white p-2 text-xs text-[#111827]"
              >
                <option value="Standard Ready-to-Wear Fit">Standard Ready-to-Wear Size</option>
                <option value="Custom Made-To-Measure (Free Master Tailor Video Call)">Custom Made-To-Measure (Free Master Tailor Call)</option>
                <option value="Unstitched Fabric (Send raw fabric with lining)">Unstitched Material</option>
              </select>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#111827] py-4 text-xs font-extrabold tracking-wider text-[#F59E0B] uppercase hover:bg-[#1F2937] transition shadow-lg"
            >
              <span>Continue to Payment</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}

        {/* STEP 2: Payment */}
        {step === 2 && (
          <div className="mt-6 space-y-4">
            <h3 className="font-serif text-base font-bold text-[#111827]">2. Payment Method</h3>

            <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 flex justify-between items-center">
              <div>
                <span className="text-xs text-[#6B7280]">Total Payable Amount</span>
                <p className="font-serif text-2xl font-extrabold text-[#111827]">₹{grandTotal.toLocaleString('en-IN')}</p>
              </div>
              <span className="rounded bg-[#10B981] px-3 py-1 text-[10px] font-bold text-white uppercase">
                100% Insured
              </span>
            </div>

            <div className="space-y-3">
              {[
                { id: 'UPI', label: 'Instant UPI (GPay / PhonePe / Paytm / BHIM)', desc: 'Fastest 1-tap payment & instant order dispatch.' },
                { id: 'Card', label: 'Credit Card / Debit Card / NetBanking', desc: 'Visa, Mastercard, Amex, Rupay & No-Cost EMI.' },
                { id: 'COD', label: 'Cash on Delivery (COD)', desc: 'Pay cash upon delivery at your doorstep.' },
              ].map((pm) => (
                <label
                  key={pm.id}
                  onClick={() => setPaymentMethod(pm.id as any)}
                  className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition ${
                    paymentMethod === pm.id ? 'border-[#111827] bg-[#FEF3C7]/40 ring-2 ring-[#111827]' : 'border-[#E5E7EB]'
                  }`}
                >
                  <input
                    type="radio"
                    name="pmethod"
                    checked={paymentMethod === pm.id}
                    onChange={() => {}}
                    className="mt-1 accent-[#111827]"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#111827]">{pm.label}</h4>
                    <p className="text-xs text-[#6B7280] mt-0.5">{pm.desc}</p>
                  </div>
                </label>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="rounded-xl border border-[#D1D5DB] px-6 py-4 text-xs font-bold text-[#111827] uppercase hover:bg-[#F3F4F6]"
              >
                Back
              </button>
              <button
                onClick={handlePlaceOrder}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#111827] py-4 text-xs font-extrabold tracking-wider text-[#F59E0B] uppercase hover:bg-[#1F2937] transition shadow-xl"
              >
                <Sparkles className="h-4 w-4" />
                <span>Place Order (₹{grandTotal.toLocaleString('en-IN')})</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Order Confirmation Success */}
        {step === 3 && (
          <div className="mt-6 text-center py-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#10B981] text-white mb-4 shadow-lg">
              <Check className="h-8 w-8" />
            </div>

            <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block mb-1">
              🎉 ORDER SUCCESSFULLY PLACED
            </span>

            <h2 className="font-serif text-2xl font-extrabold text-[#111827]">
              Order ID #KYK-88942
            </h2>

            <p className="mt-3 text-sm text-[#4B5563] max-w-md mx-auto">
              Thank you, <strong className="text-[#111827]">{shippingInfo.fullName || 'Valued Customer'}</strong>! We have sent a confirmation message & receipt to your mobile number.
            </p>

            <div className="mt-6 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-xs text-[#4B5563] space-y-2 text-left max-w-md mx-auto">
              <div className="flex justify-between font-bold text-[#111827]">
                <span>Dispatch Status:</span>
                <span className="text-[#F59E0B]">Preparing for Express Dispatch</span>
              </div>
              <div className="flex justify-between">
                <span>Stitching Selected:</span>
                <span>{shippingInfo.stitchingOption}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Location:</span>
                <span>{shippingInfo.city}, {shippingInfo.state}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-6 rounded-xl bg-[#111827] px-8 py-3.5 text-xs font-extrabold text-[#F59E0B] uppercase tracking-wider hover:bg-[#1F2937] transition shadow-md"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
