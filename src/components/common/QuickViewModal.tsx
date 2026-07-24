'use client';

import React, { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useCompare } from '@/context/CompareContext';
import { X, Heart, ShoppingBag, ArrowLeftRight, Clock, Award, ShieldCheck, Check } from 'lucide-react';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL' | 'Custom Made-to-Measure'>(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [selectedImage, setSelectedImage] = useState(product.image);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCompare, isInCompare } = useCompare();

  const inWishlist = isInWishlist(product.id);
  const inCompare = isInCompare(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-white p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full p-2 text-[#1A1918] hover:bg-[#E5DFD3]/40"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] w-full overflow-hidden bg-[#F5F3EF] border border-[#E5DFD3]">
              <img
                src={selectedImage}
                alt={product.name}
                className="h-full w-full object-cover object-top transition-all duration-300"
              />
            </div>

            {/* Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`h-20 w-16 flex-shrink-0 border ${
                      selectedImage === imgUrl ? 'border-[#C5A059] ring-2 ring-[#C5A059]/30' : 'border-[#E5DFD3]'
                    }`}
                  >
                    <img src={imgUrl} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
              {product.category}
            </span>

            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#1A1918]">
              {product.name}
            </h2>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-serif text-2xl font-bold text-[#1A1918]">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#888] line-through">
                  {product.originalPrice}
                </span>
              )}
              {product.discountPercent && (
                <span className="rounded bg-[#8B0000] px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                  Save {product.savingsAmount}
                </span>
              )}
            </div>

            <p className="mt-4 text-xs text-[#555] font-light leading-relaxed">
              {product.description}
            </p>

            {/* Artisan Specs */}
            <div className="mt-6 border-t border-b border-[#E5DFD3] py-4 space-y-2 text-xs text-[#444]">
              <div className="flex justify-between">
                <span className="text-[#888]">Fabric:</span>
                <span className="font-medium text-[#1A1918]">{product.fabric}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Embellishment:</span>
                <span className="font-medium text-[#1A1918]">{product.embellishment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Artisan Handwork:</span>
                <span className="font-medium text-[#C5A059]">{product.artisanHours} Dedicated Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Lead Time:</span>
                <span className="font-medium text-[#1A1918]">{product.availability}</span>
              </div>
            </div>

            {/* Color Options */}
            {product.colorOptions && product.colorOptions.length > 0 && (
              <div className="mt-6">
                <label className="block text-xs font-semibold text-[#1A1918] uppercase tracking-wider mb-2">
                  Select Shade: <span className="text-[#C5A059]">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colorOptions.map((opt) => (
                    <button
                      key={opt.name}
                      onClick={() => setSelectedColor(opt.name)}
                      className={`h-7 w-7 rounded-full border-2 transition-transform ${
                        selectedColor === opt.name ? 'scale-110 border-[#1A1918]' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: opt.hex }}
                      title={opt.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-[#1A1918] uppercase tracking-wider">
                  Select Size
                </label>
                <span className="text-[11px] text-[#C5A059] underline cursor-pointer">
                  Custom Made-To-Measure Guide
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3 py-2 text-xs font-medium border transition ${
                      selectedSize === sz
                        ? 'border-[#1A1918] bg-[#1A1918] text-[#D4AF37]'
                        : 'border-[#E5DFD3] text-[#1A1918] hover:border-[#C5A059]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-[#1A1918] py-3.5 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase hover:bg-[#C5A059] hover:text-white transition"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Add to Royal Bag</span>
              </button>

              <button
                onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
                className="flex h-12 w-12 items-center justify-center border border-[#E5DFD3] text-[#1A1918] hover:bg-[#F5F3EF]"
                title="Wishlist"
              >
                <Heart className={`h-5 w-5 ${inWishlist ? 'fill-[#8B0000] text-[#8B0000]' : ''}`} />
              </button>

              <button
                onClick={() => addToCompare(product)}
                className={`flex h-12 w-12 items-center justify-center border transition ${
                  inCompare ? 'border-[#C5A059] bg-[#C5A059] text-white' : 'border-[#E5DFD3] text-[#1A1918] hover:bg-[#F5F3EF]'
                }`}
                title="Compare"
              >
                <ArrowLeftRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
