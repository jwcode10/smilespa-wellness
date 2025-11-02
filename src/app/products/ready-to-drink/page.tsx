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
                alt="Ready-to-drink Meals"
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
              <h1 className="text-4xl font-bold text-neutral-900 mb-2">Ready-to-Drink Meals</h1>
              <p className="text-lg text-neutral-600">Complete nutrition in convenient, portable bottles - no mixing required</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-neutral-600">(4.8) • 203 reviews</span>
            </div>

            <div className="text-3xl font-bold text-neutral-900">$44.99</div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">Available Flavors</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="font-medium text-neutral-900 mb-1">Vanilla</div>
                  <div className="text-sm text-neutral-600">Smooth vanilla flavor • 400 calories • 20g protein</div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="font-medium text-neutral-900 mb-1">Chocolate</div>
                  <div className="text-sm text-neutral-600">Rich chocolate flavor • 400 calories • 20g protein</div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="font-medium text-neutral-900 mb-1">Strawberry</div>
                  <div className="text-sm text-neutral-600">Fresh strawberry flavor • 400 calories • 20g protein</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">Key Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Ready to drink - no preparation needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Complete meal replacement with 26 vitamins & minerals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Perfect for on-the-go nutrition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Shelf-stable for up to 12 months</span>
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
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Ultimate Convenience</h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                Our Ready-to-Drink Meals are the perfect solution for busy lifestyles. Each bottle 
                contains a complete, balanced meal with all the essential nutrients your body needs, 
                ready to enjoy whenever and wherever you need it.
              </p>
              <p>
                Whether you're rushing to work, traveling, or simply want a quick, nutritious meal, 
                our ready-to-drink formula provides complete nutrition without any preparation time. 
                Just grab, shake, and enjoy.
              </p>
              <p>
                Made with high-quality plant-based ingredients and fortified with essential vitamins 
                and minerals, these meals are perfect for anyone looking for convenient, complete nutrition.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Perfect For</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Busy Professionals</h4>
                <p className="text-neutral-600 text-sm">Quick lunch solution that keeps you energized throughout the day</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Travel & Commuting</h4>
                <p className="text-neutral-600 text-sm">Portable nutrition that doesn't require refrigeration or preparation</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Post-Workout Recovery</h4>
                <p className="text-neutral-600 text-sm">Complete protein and nutrients to support muscle recovery</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Emergency Meals</h4>
                <p className="text-neutral-600 text-sm">Shelf-stable option for when you need a meal but can't cook</p>
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
      name: "Lisa P.",
      rating: 5,
      date: "1 week ago",
      comment: "These are perfect for my busy schedule! The vanilla flavor is smooth and not too sweet. Great for breakfast on the go."
    },
    {
      name: "Mark T.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Love the convenience factor. The chocolate flavor is rich and satisfying. Perfect for post-workout recovery."
    },
    {
      name: "Sarah K.",
      rating: 4,
      date: "3 weeks ago",
      comment: "Great for traveling. The strawberry flavor is refreshing and the bottles are easy to pack. Very filling too!"
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

export default function ReadyToDrinkPage() {
  return (
    <>
      <ProductHero />
      <ProductDetails />
      <Reviews />
    </>
  );
}
