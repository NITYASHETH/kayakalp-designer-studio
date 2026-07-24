'use client';

import React, { useState } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES, Product } from '@/data/products';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useCompare } from '@/context/CompareContext';
import { Heart, Eye, ShoppingBag, ArrowLeftRight, Star, Truck, Zap, Check } from 'lucide-react';

interface FeaturedCollectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onProceedToCheckout: () => void;
}

export function FeaturedCollection({
  selectedCategory,
  onSelectCategory,
  onProceedToCheckout,
}: FeaturedCollectionProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist, setSelectedProductForQuickView } = useWishlist();
  const { addToCart } = useCart();
  const { addToCompare, isInCompare } = useCompare();

  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const filteredProducts = selectedCategory === 'All Collections'
    ? PRODUCTS
    : PRODUCTS.filter(p =>
        (p.category as string) === selectedCategory ||
        (selectedCategory === 'Heritage Sarees' && p.category === 'Bridal Sarees')
      );

  const handleAddToCart = (product: Product) => {
    addToCart(product, 'M', product.color, 1);
    setAddedNotice(product.id);
    setTimeout(() => setAddedNotice(null), 2500);
  };

  const handleBuyNow = (product: Product) => {
    addToCart(product, 'M', product.color, 1);
    onProceedToCheckout();
  };

  return (
    <section id="collections" className="py-12 bg-white text-[#111827]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Title Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5E7EB] pb-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-1">
              <Zap className="h-4 w-4 fill-[#F59E0B]" />
              <span>HANDPICKED ETHNIC WEAR</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#111827]">
              {selectedCategory === 'All Collections' ? 'Featured Outfits & Bestsellers' : selectedCategory}
            </h2>
          </div>
          <span className="text-xs text-[#6B7280] font-medium mt-2 md:mt-0">
            Showing <strong>{filteredProducts.length}</strong> items • 100% Insured Delivery
          </span>
        </div>

        {/* E-Commerce Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const inWishlist = isInWishlist(product.id);
            const inCompare = isInCompare(product.id);
            const isJustAdded = addedNotice === product.id;

            return (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-[#E5E7EB] bg-white transition-all duration-300 hover:border-[#111827] hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F3F4F6]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Top Discount Tag */}
                  <div className="absolute left-3 top-3 flex flex-col gap-1 z-10">
                    {product.discountPercent && (
                      <span className="rounded-md bg-[#EF4444] px-2.5 py-1 text-[11px] font-extrabold text-white uppercase shadow">
                        {product.discountPercent}% OFF
                      </span>
                    )}
                    <span className="rounded-md bg-[#111827] px-2.5 py-0.5 text-[10px] font-bold text-[#F59E0B] uppercase">
                      {product.tag}
                    </span>
                  </div>

                  {/* Quick Action Badges (Wishlist & Compare) */}
                  <div className="absolute right-3 top-3 flex flex-col gap-2 z-10">
                    <button
                      onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow text-[#111827] transition hover:bg-[#EF4444] hover:text-white"
                      title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart className={`h-4 w-4 ${inWishlist ? 'fill-[#EF4444] text-[#EF4444]' : ''}`} />
                    </button>

                    <button
                      onClick={() => addToCompare(product)}
                      className={`flex h-9 w-9 items-center justify-center rounded-full shadow transition ${
                        inCompare ? 'bg-[#111827] text-[#F59E0B]' : 'bg-white/90 text-[#111827] hover:bg-[#111827] hover:text-white'
                      }`}
                      title="Compare Outfits"
                    >
                      <ArrowLeftRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Quick View Button */}
                  <button
                    onClick={() => setSelectedProductForQuickView(product)}
                    className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-1.5 rounded-lg bg-white/95 py-2.5 text-xs font-bold text-[#111827] uppercase tracking-wider shadow-lg opacity-0 transition-opacity group-hover:opacity-100 hover:bg-[#111827] hover:text-white"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Quick View Specs</span>
                  </button>
                </div>

                {/* Product Info Block */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between text-xs text-[#6B7280]">
                    <span className="font-semibold uppercase text-[#F59E0B] tracking-wider">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 bg-[#FEF3C7] px-2 py-0.5 rounded text-[#92400E] font-bold">
                      <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                      <span>{product.rating}</span>
                      <span className="text-[10px] text-[#B45309]">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="mt-2 font-serif text-base font-bold text-[#111827] line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#6B7280] line-clamp-1 font-normal">
                    {product.fabric} • {product.embellishment}
                  </p>

                  {/* E-Commerce Price Section */}
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-serif text-2xl font-extrabold text-[#111827]">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#9CA3AF] line-through font-normal">
                        {product.originalPrice}
                      </span>
                    )}
                    {product.savingsAmount && (
                      <span className="text-xs font-bold text-[#10B981]">
                        Save {product.savingsAmount}
                      </span>
                    )}
                  </div>

                  {/* Shipping Tag */}
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#10B981]">
                    <Truck className="h-3.5 w-3.5" />
                    <span>Free Shipping • Made To Order</span>
                  </div>

                  {/* Added Notice Toast */}
                  {isJustAdded && (
                    <div className="mt-2 flex items-center justify-center gap-1 rounded bg-[#10B981] py-1 text-xs font-bold text-white uppercase animate-fade-in">
                      <Check className="h-3.5 w-3.5" /> Added to Cart!
                    </div>
                  )}

                  {/* Unambiguous Action Buttons: ADD TO CART & BUY NOW */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex items-center justify-center gap-1.5 rounded-lg border-2 border-[#111827] bg-white py-2.5 text-xs font-bold uppercase text-[#111827] hover:bg-[#F3F4F6] transition"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </button>

                    <button
                      onClick={() => handleBuyNow(product)}
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-[#111827] py-2.5 text-xs font-bold uppercase text-[#F59E0B] hover:bg-[#1F2937] transition shadow-md"
                    >
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
