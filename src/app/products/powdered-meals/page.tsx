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
                alt="Powdered Meals"
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
              <h1 className="text-4xl font-bold text-neutral-900 mb-2">Powdered Meals</h1>
              <p className="text-lg text-neutral-600">Complete nutrition in convenient powder form - perfect for busy lifestyles</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-neutral-600">(4.7) • 89 reviews</span>
            </div>

            <div className="text-3xl font-bold text-neutral-900">$34.99</div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">Available Flavors</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-neutral-50 rounded-xl p-3 text-center">
                  <span className="font-medium text-neutral-900">Vanilla</span>
                </div>
                <div className="bg-neutral-50 rounded-xl p-3 text-center">
                  <span className="font-medium text-neutral-900">Chocolate</span>
                </div>
                <div className="bg-neutral-50 rounded-xl p-3 text-center">
                  <span className="font-medium text-neutral-900">Strawberry</span>
                </div>
                <div className="bg-neutral-50 rounded-xl p-3 text-center">
                  <span className="font-medium text-neutral-900">Banana</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">Key Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Complete nutrition with 26 essential vitamins & minerals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">20g of plant-based protein per serving</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">400 calories per serving - perfect meal replacement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Ready in 30 seconds - just add water and shake</span>
                </li>
              </ul>
            </div>

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

const ProductDetails: React.FC = () => {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Complete Nutrition Made Simple</h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                Our Powdered Meals are designed to provide complete, balanced nutrition in a convenient, 
                easy-to-prepare format. Each serving contains all the essential vitamins, minerals, 
                protein, and carbohydrates your body needs for optimal health and energy.
              </p>
              <p>
                Perfect for busy professionals, students, athletes, or anyone looking for a quick, 
                nutritious meal option. Simply mix with water, shake, and enjoy a complete meal 
                in under a minute.
              </p>
              <p>
                Made with high-quality plant-based ingredients and no artificial preservatives, 
                our powdered meals are suitable for vegetarians and vegans.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Nutritional Information</h3>
            <div className="bg-white rounded-2xl p-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-neutral-600">Serving Size</span>
                <span className="font-semibold">1 scoop (90g)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Calories</span>
                <span className="font-semibold">400</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Protein</span>
                <span className="font-semibold">20g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Carbohydrates</span>
                <span className="font-semibold">37g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Fat</span>
                <span className="font-semibold">13g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Fiber</span>
                <span className="font-semibold">7g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Sugar</span>
                <span className="font-semibold">1g</span>
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
      name: "Alex T.",
      rating: 5,
      date: "1 week ago",
      comment: "These powdered meals are a game-changer! Perfect for my busy schedule. The vanilla flavor is smooth and not too sweet."
    },
    {
      name: "Rachel M.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Great for meal prep and busy mornings. The chocolate flavor is rich and satisfying. Keeps me full for hours."
    },
    {
      name: "Tom K.",
      rating: 5,
      date: "3 weeks ago",
      comment: "Love the convenience and nutrition. The strawberry flavor is my favorite. Perfect for post-workout recovery."
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

export default function PowderedMealsPage() {
  return (
    <>
      <ProductHero />
      <ProductDetails />
      <Reviews />
    </>
  );
}
