"use client";

import React from "react";
import { IconStar } from "@tabler/icons-react";

interface Review {
  name: string;
  rating: number;
  date: string;
  comment: string;
}

interface ProductReviewsProps {
  reviews: Review[];
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
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
                    {[...Array(5)].map((_, i) => (
                      <IconStar 
                        key={i} 
                        size={16} 
                        className={i < review.rating ? "text-yellow-400 fill-current" : "text-neutral-300"} 
                      />
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

export default ProductReviews;
