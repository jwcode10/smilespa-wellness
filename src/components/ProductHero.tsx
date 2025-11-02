"use client";

import React from "react";
import { IconArrowLeft, IconShoppingCart, IconHeart, IconShare, IconStar } from "@tabler/icons-react";

interface ProductHeroProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  reviewCount: number;
  imageAlt: string;
  badge?: string;
  features?: string[];
  options?: Array<{
    name: string;
    description: string;
  }>;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  title,
  description,
  price,
  rating,
  reviewCount,
  imageAlt,
  badge,
  features,
  options
}) => {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors">
            <IconArrowLeft size={20} />
            <span>Back to Products</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-[#EAE7DC] rounded-3xl p-8 flex items-center justify-center">
              <img
                src="/pics/products/item-place holder.png"
                alt={imageAlt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <IconHeart size={20} className="text-neutral-600" />
              </button>
              <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <IconShare size={20} className="text-neutral-600" />
              </button>
            </div>
            {badge && (
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {badge}
                </span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-2">{title}</h1>
              <p className="text-lg text-neutral-600">{description}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconStar 
                    key={i} 
                    size={20} 
                    className={i < rating ? "text-yellow-400 fill-current" : "text-neutral-300"} 
                  />
                ))}
              </div>
              <span className="text-neutral-600">({rating}) • {reviewCount} reviews</span>
            </div>

            <div className="text-3xl font-bold text-neutral-900">{price}</div>

            {options && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-900">Available Options</h3>
                <div className="grid grid-cols-1 gap-3">
                  {options.map((option, index) => (
                    <div key={index} className="bg-neutral-50 rounded-xl p-4">
                      <div className="font-medium text-neutral-900 mb-1">{option.name}</div>
                      <div className="text-sm text-neutral-600">{option.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {features && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-900">Key Benefits</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-4">
              <a
                href="https://www.joinblvd.com/b/smilespawellness/widget#/visit-type"
                className="flex-1 bg-[#87CEEB] text-neutral-900 font-semibold py-4 px-6 rounded-full hover:bg-[#79c9f0] transition-colors flex items-center justify-center gap-2"
              >
                <IconShoppingCart size={20} />
                Add to Cart
              </a>
              <a
                href="https://www.joinblvd.com/b/smilespawellness/widget#/visit-type"
                className="px-6 py-4 border-2 border-neutral-300 rounded-full font-semibold text-neutral-700 hover:border-neutral-400 transition-colors text-center"
              >
                Subscribe & Save 20%
              </a>
            </div>

            <div className="text-sm text-neutral-500">
              Free shipping on orders over $50 • 30-day money-back guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
