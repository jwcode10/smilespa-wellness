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
                alt="Energy Drinks & Bars"
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
              <h1 className="text-4xl font-bold text-neutral-900 mb-2">Energy Drinks & Bars</h1>
              <p className="text-lg text-neutral-600">Natural energy boosters to power your day without the crash</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-neutral-600">(4.9) • 178 reviews</span>
            </div>

            <div className="text-3xl font-bold text-neutral-900">$24.99</div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">Product Options</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="font-medium text-neutral-900 mb-1">Natural Energy Drink</div>
                  <div className="text-sm text-neutral-600">Green tea extract, B-vitamins, natural caffeine • 12 fl oz</div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="font-medium text-neutral-900 mb-1">Protein Energy Bar</div>
                  <div className="text-sm text-neutral-600">15g protein, natural ingredients, no artificial sweeteners • 2.1 oz</div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="font-medium text-neutral-900 mb-1">Energy Gummies</div>
                  <div className="text-sm text-neutral-600">Vitamin B12, natural fruit flavors, plant-based • 30 count</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">Key Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Natural caffeine from green tea and guarana</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">B-vitamins for sustained energy production</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">No artificial colors, flavors, or preservatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Sustained energy without the crash</span>
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
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Natural Energy, Real Results</h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                Our Energy Drinks & Bars collection provides clean, natural energy without the jitters 
                or crash associated with traditional energy products. Made with carefully selected 
                natural ingredients, these products deliver sustained energy to power your day.
              </p>
              <p>
                Whether you need a morning boost, afternoon pick-me-up, or pre-workout energy, 
                our natural formulations provide the perfect solution. Each product is designed 
                to work with your body's natural energy systems for optimal results.
              </p>
              <p>
                Free from artificial stimulants, colors, and preservatives, our energy products 
                are a healthier alternative to conventional energy drinks and bars.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Natural Ingredients</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Green Tea Extract</h4>
                <p className="text-neutral-600 text-sm">Natural caffeine source with antioxidants for sustained energy</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">B-Vitamins</h4>
                <p className="text-neutral-600 text-sm">Essential for energy metabolism and nervous system function</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Guarana</h4>
                <p className="text-neutral-600 text-sm">Natural stimulant that provides gradual energy release</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">L-Theanine</h4>
                <p className="text-neutral-600 text-sm">Promotes calm focus and reduces caffeine jitters</p>
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
      name: "Jessica M.",
      rating: 5,
      date: "1 week ago",
      comment: "The natural energy drink is amazing! No crash like with other energy drinks. I feel energized and focused all afternoon."
    },
    {
      name: "Ryan K.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Love the protein energy bars. Great taste and they actually keep me full and energized. Perfect for my morning commute."
    },
    {
      name: "Emma L.",
      rating: 4,
      date: "3 weeks ago",
      comment: "The energy gummies are delicious and effective. Much better than coffee for a quick energy boost. Love the natural ingredients!"
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

export default function EnergyDrinksBarsPage() {
  return (
    <>
      <ProductHero />
      <ProductDetails />
      <Reviews />
    </>
  );
}
