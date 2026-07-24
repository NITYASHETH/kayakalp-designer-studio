'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  selectedSize: 'S' | 'M' | 'L' | 'XL' | 'Custom Made-to-Measure';
  selectedColor: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (
    product: Product,
    selectedSize?: 'S' | 'M' | 'L' | 'XL' | 'Custom Made-to-Measure',
    selectedColor?: string,
    quantity?: number
  ) => void;
  removeFromCart: (productId: string, selectedSize: string) => void;
  updateQuantity: (productId: string, selectedSize: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  promoCode: string;
  discountAmount: number;
  applyPromoCode: (code: string) => boolean;
  subtotal: number;
  taxAmount: number;
  shippingFee: number;
  freeShippingThreshold: number;
  grandTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  const freeShippingThreshold = 200000;

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('kayakalp_cart');
        if (stored) {
          setCart(JSON.parse(stored));
        }
      }
    } catch {
      // Ignore errors
    }
  }, []);

  // Save to localStorage when cart changes
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('kayakalp_cart', JSON.stringify(cart));
      }
    } catch {
      // Ignore storage errors
    }
  }, [cart]);

  const addToCart = (
    product: Product,
    selectedSize: 'S' | 'M' | 'L' | 'XL' | 'Custom Made-to-Measure' = 'M',
    selectedColor: string = product.color,
    quantity: number = 1
  ) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize
      );

      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += quantity;
        return updated;
      }

      return [...prevCart, { product, selectedSize, selectedColor, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, selectedSize: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.product.id === productId && item.selectedSize === selectedSize)
      )
    );
  };

  const updateQuantity = (productId: string, selectedSize: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId && item.selectedSize === selectedSize
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'ROYAL10' || clean === 'KAYAKALP10') {
      setPromoCode(clean);
      setDiscountPercent(10);
      return true;
    }
    return false;
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.numericPrice * item.quantity,
    0
  );

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const taxAmount = Math.round((subtotal - discountAmount) * 0.05); // 5% GST
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 2500;
  const grandTotal = Math.max(0, subtotal - discountAmount + taxAmount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        promoCode,
        discountAmount,
        applyPromoCode,
        subtotal,
        taxAmount,
        shippingFee,
        freeShippingThreshold,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
