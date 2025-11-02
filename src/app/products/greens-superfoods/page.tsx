"use client";

import React from "react";
import { IconArrowLeft, IconShoppingCart, IconHeart, IconShare, IconStar } from "@tabler/icons-react";

const ProductHero: React.FC = () => {
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
                alt="Greens & Superfoods"
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
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-2">Greens & Superfoods</h1>
              <p className="text-lg text-neutral-600">Premium plant-based nutrition to fuel your wellness journey</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-neutral-600">(4.8) • 127 reviews</span>
            </div>

            <div className="text-3xl font-bold text-neutral-900">$29.99</div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">Key Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">25+ organic superfoods and greens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">High in vitamins A, C, K, and folate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Supports immune system and energy levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Easy to mix, great taste</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-[#87CEEB] text-neutral-900 font-semibold py-4 px-6 rounded-full hover:bg-[#79c9f0] transition-colors flex items-center justify-center gap-2">
                <IconShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="px-6 py-4 border-2 border-neutral-300 rounded-full font-semibold text-neutral-700 hover:border-neutral-400 transition-colors">
                Subscribe & Save 20%
              </button>
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

const ProductDetails: React.FC = () => {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Product Details</h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                Our Greens & Superfoods blend is a carefully crafted combination of 25+ organic superfoods, 
                including spirulina, chlorella, wheat grass, barley grass, and nutrient-dense vegetables. 
                This powerful formula provides essential vitamins, minerals, and antioxidants to support 
                your overall health and wellness.
              </p>
              <p>
                Perfect for busy individuals who want to ensure they're getting their daily dose of 
                greens and superfoods without the hassle of juicing or preparing multiple vegetables. 
                Simply mix with water, juice, or your favorite smoothie for a quick nutritional boost.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Nutritional Information</h3>
            <div className="bg-white rounded-2xl p-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-neutral-600">Serving Size</span>
                <span className="font-semibold">1 scoop (10g)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Calories</span>
                <span className="font-semibold">35</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Protein</span>
                <span className="font-semibold">3g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Vitamin A</span>
                <span className="font-semibold">150% DV</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Vitamin C</span>
                <span className="font-semibold">200% DV</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Vitamin K</span>
                <span className="font-semibold">180% DV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Love this greens powder! It mixes well and doesn't have that grassy taste. I feel more energized throughout the day."
    },
    {
      name: "Mike R.",
      rating: 5,
      date: "1 month ago",
      comment: "Great way to get my daily greens without having to eat a salad. The taste is actually pretty good mixed with orange juice."
    },
    {
      name: "Lisa K.",
      rating: 4,
      date: "3 weeks ago",
      comment: "Good quality product. I notice a difference in my energy levels. Only downside is the price, but you get what you pay for."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-neutral-900 mb-8">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-neutral-50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-neutral-900">{review.name}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <IconStar key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-neutral-500">{review.date}</span>
              </div>
              <p className="text-neutral-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function GreensSuperfoodsPage() {
  return (
    <>
      <ProductHero />
      <ProductDetails />
      <Reviews />
    </>
  );
}
