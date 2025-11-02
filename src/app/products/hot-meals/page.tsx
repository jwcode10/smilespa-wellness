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
                alt="Hot Meals"
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
              <h1 className="text-4xl font-bold text-neutral-900 mb-2">Hot Meals</h1>
              <p className="text-lg text-neutral-600">Nutritious, ready-to-eat hot meals that satisfy your hunger and fuel your body</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-neutral-600">(4.6) • 156 reviews</span>
            </div>

            <div className="text-3xl font-bold text-neutral-900">$39.99</div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">Available Options</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="font-medium text-neutral-900 mb-1">Thai Green Curry</div>
                  <div className="text-sm text-neutral-600">Coconut curry with vegetables and rice • 450 calories</div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="font-medium text-neutral-900 mb-1">Mexican Chili</div>
                  <div className="text-sm text-neutral-600">Bean chili with quinoa and vegetables • 420 calories</div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="font-medium text-neutral-900 mb-1">Indian Dal</div>
                  <div className="text-sm text-neutral-600">Lentil curry with basmati rice • 380 calories</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">Key Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Ready in 2 minutes - just add hot water</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Complete meal with protein, carbs, and vegetables</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Authentic flavors from around the world</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">No artificial preservatives or additives</span>
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
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Gourmet Meals, Instant Convenience</h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                Our Hot Meals collection brings you restaurant-quality flavors in convenient, 
                ready-to-eat format. Each meal is carefully crafted with authentic ingredients 
                and traditional cooking methods, then freeze-dried to preserve nutrition and taste.
              </p>
              <p>
                Perfect for office lunches, camping trips, or any time you need a satisfying, 
                hot meal in minutes. Simply add hot water, wait 2 minutes, and enjoy a 
                complete, nutritious meal that tastes like it came from a professional kitchen.
              </p>
              <p>
                All meals are plant-based, high in protein and fiber, and free from artificial 
                preservatives, making them a healthy choice for any lifestyle.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">How It Works</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#87CEEB] rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                  <h4 className="font-semibold text-neutral-900">Add Hot Water</h4>
                </div>
                <p className="text-neutral-600 text-sm">Pour hot water up to the fill line in the container</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#87CEEB] rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                  <h4 className="font-semibold text-neutral-900">Wait 2 Minutes</h4>
                </div>
                <p className="text-neutral-600 text-sm">Let the meal rehydrate and absorb the water</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#87CEEB] rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                  <h4 className="font-semibold text-neutral-900">Stir & Enjoy</h4>
                </div>
                <p className="text-neutral-600 text-sm">Mix well and enjoy your hot, delicious meal</p>
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
      name: "Kevin L.",
      rating: 5,
      date: "1 week ago",
      comment: "The Thai Green Curry is amazing! Tastes like it came from a restaurant. Perfect for lunch at the office."
    },
    {
      name: "Amanda R.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Great for camping and hiking. The Mexican Chili is hearty and filling. Love the convenience factor."
    },
    {
      name: "Chris M.",
      rating: 5,
      date: "3 weeks ago",
      comment: "The Indian Dal is authentic and delicious. Much better than I expected from a freeze-dried meal. Will order again!"
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

export default function HotMealsPage() {
  return (
    <>
      <ProductHero />
      <ProductDetails />
      <Reviews />
    </>
  );
}
