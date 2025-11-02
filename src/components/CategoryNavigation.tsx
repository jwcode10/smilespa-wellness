"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllProducts, getCategoryDisplayName } from "../data/products";

const CategoryNavigation: React.FC = () => {
  const pathname = usePathname();
  
  // Get all unique categories from products
  const allProducts = getAllProducts();
  const categories = Array.from(new Set(allProducts.map(p => p.category)));
  
  const categoryLinks = categories.map(category => ({
    name: getCategoryDisplayName(category),
    href: `/products/${category}`,
    description: `${allProducts.filter(p => p.category === category).length} products available`
  }));

  return (
    <div className="bg-neutral-50 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryLinks.map((category) => {
            const isActive = pathname === category.href;
            return (
              <Link
                key={category.href}
                href={category.href}
                className={`p-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-[#87CEEB] text-neutral-900 shadow-md"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 hover:shadow-sm"
                }`}
              >
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm opacity-80">{category.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation;
