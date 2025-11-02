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
                alt="Bestsellers"
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
            <div className="absolute top-4 left-4">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                BESTSELLER
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-2">Bestsellers Collection</h1>
              <p className="text-lg text-neutral-600">Our most popular wellness products, loved by thousands of customers</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-neutral-600">(4.9) • 342 reviews</span>
            </div>

            <div className="text-3xl font-bold text-neutral-900">$79.99</div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">What's Included</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Complete nutrition meal replacement (Vanilla)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Greens & Superfoods powder</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Protein powder (Chocolate)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                  <span className="text-neutral-700">Shaker bottle and measuring scoop</span>
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
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Why This Collection?</h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                Our Bestsellers Collection combines our three most popular products into one convenient bundle. 
                This carefully curated selection gives you everything you need to start your wellness journey 
                with confidence.
              </p>
              <p>
                Perfect for newcomers to Smile Spa Wellness or anyone looking to stock up on their favorites. 
                Each product in this collection has been tested and loved by thousands of customers, ensuring 
                you get the best of what we have to offer.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Collection Contents</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Complete Nutrition Meal Replacement</h4>
                <p className="text-neutral-600 text-sm">Vanilla flavor • 26 essential vitamins & minerals • 20g protein per serving</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Greens & Superfoods</h4>
                <p className="text-neutral-600 text-sm">25+ organic superfoods • High in vitamins A, C, K • Immune support</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Protein Powder</h4>
                <p className="text-neutral-600 text-sm">Chocolate flavor • 25g protein per serving • Plant-based formula</p>
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
      name: "Jennifer L.",
      rating: 5,
      date: "1 week ago",
      comment: "This bundle is perfect! I love having all three products together. The vanilla meal replacement is my favorite - so smooth and filling."
    },
    {
      name: "David P.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Great value for money. All three products are high quality and the bundle saves you quite a bit compared to buying individually."
    },
    {
      name: "Maria S.",
      rating: 5,
      date: "3 weeks ago",
      comment: "Perfect starter pack! I was new to meal replacements and this bundle gave me everything I needed to get started. Highly recommend!"
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

export default function BestsellersPage() {
  return (
    <>
      <ProductHero />
      <ProductDetails />
      <Reviews />
    </>
  );
}
