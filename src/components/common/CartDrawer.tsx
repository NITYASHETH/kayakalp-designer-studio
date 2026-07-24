'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck } from 'lucide-react';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
}

export function CartDrawer({ onProceedToCheckout }: CartDrawerProps) {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    taxAmount,
    shippingFee,
    freeShippingThreshold,
    grandTotal,
    applyPromoCode,
    promoCode,
    discountAmount,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoError, setPromoError] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const success = applyPromoCode(inputCode);
    setPromoError(!success);
  };

  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="relative flex w-full max-w-md flex-col bg-white p-6 shadow-2xl z-10 border-l border-[#E5E7EB]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#F59E0B]" />
            <h2 className="font-serif text-lg font-bold text-[#111827]">
              Shopping Cart ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-lg p-2 text-[#374151] hover:bg-[#F3F4F6]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="mt-4 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-3">
          <div className="flex items-center justify-between text-xs mb-1 font-medium text-[#111827]">
            {subtotal >= freeShippingThreshold ? (
              <span className="text-[#10B981] font-bold">✨ You Unlocked FREE Express Delivery!</span>
            ) : (
              <span>Add ₹{(freeShippingThreshold - subtotal).toLocaleString('en-IN')} more for Free Delivery</span>
            )}
          </div>
          <div className="h-2 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#F59E0B] transition-all duration-500"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        {cart.length === 0 ? (
          <div className="my-auto text-center py-12">
            <ShoppingBag className="mx-auto h-12 w-12 text-[#D1D5DB]" />
            <p className="mt-4 font-serif text-lg font-bold text-[#111827]">Your Shopping Cart is empty</p>
            <p className="mt-1 text-xs text-[#6B7280]">Browse our lehengas, sarees & designer collection.</p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="mt-6 inline-block rounded-lg bg-[#111827] px-6 py-3 text-xs font-bold text-[#F59E0B] uppercase tracking-wider hover:bg-[#1F2937] transition shadow"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="mt-4 flex-1 overflow-y-auto space-y-4 pr-1">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex gap-4 rounded-xl border border-[#E5E7EB] bg-white p-3 shadow-sm"
                >
                  <div className="h-24 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-[#F3F4F6]">
                    <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm font-bold text-[#111827] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                          className="text-[#9CA3AF] hover:text-[#EF4444] p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-[#6B7280]">
                        <span>Size: <strong className="text-[#111827]">{item.selectedSize}</strong></span>
                        <span>•</span>
                        <span>Color: <strong className="text-[#111827]">{item.selectedColor}</strong></span>
                      </div>

                      <p className="mt-1 font-serif text-sm font-extrabold text-[#111827]">
                        ₹{(item.product.numericPrice * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center border border-[#D1D5DB] rounded-md overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                          className="px-2.5 py-1 text-[#111827] hover:bg-[#F3F4F6]"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-xs font-bold text-[#111827]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                          className="px-2.5 py-1 text-[#111827] hover:bg-[#F3F4F6]"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code & Order Summary */}
            <div className="mt-4 border-t border-[#E5E7EB] pt-4 space-y-3">
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-2.5 h-4 w-4 text-[#9CA3AF]" />
                  <input
                    type="text"
                    placeholder="Coupon Code (ROYAL10)"
                    value={inputCode}
                    onChange={(e) => {
                      setInputCode(e.target.value);
                      setPromoError(false);
                    }}
                    className="w-full rounded-md border border-[#D1D5DB] py-2 pl-9 pr-3 text-xs uppercase placeholder:normal-case focus:border-[#111827] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-[#111827] px-4 text-xs font-bold text-[#F59E0B] uppercase hover:bg-[#1F2937] transition"
                >
                  Apply
                </button>
              </form>
              {promoCode && (
                <p className="text-xs text-[#10B981] font-bold">
                  ✓ Code {promoCode} applied! Discounted ₹{discountAmount.toLocaleString('en-IN')}
                </p>
              )}
              {promoError && (
                <p className="text-xs text-[#EF4444]">
                  Invalid coupon. Try ROYAL10 for 10% off.
                </p>
              )}

              <div className="space-y-1.5 text-xs text-[#4B5563] border-t border-[#E5E7EB] pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#EF4444] font-semibold">
                    <span>Discount (ROYAL10)</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span>₹{taxAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charge</span>
                  <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee.toLocaleString('en-IN')}`}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-[#111827] border-t border-[#E5E7EB] pt-2 font-serif">
                  <span>Total Amount</span>
                  <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onProceedToCheckout();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#111827] py-4 text-xs font-extrabold tracking-wider text-[#F59E0B] uppercase hover:bg-[#1F2937] transition shadow-xl"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6B7280] text-center pt-1">
                <ShieldCheck className="h-4 w-4 text-[#10B981]" />
                <span>100% Safe & Secure Checkout</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
