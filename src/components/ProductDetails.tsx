"use client";

import React from "react";

interface ProductDetailsProps {
  title: string;
  description: string[];
  rightContent?: React.ReactNode;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  description,
  rightContent
}) => {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">{title}</h2>
            <div className="space-y-4 text-neutral-700">
              {description.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          </div>

          <div>
            {rightContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
