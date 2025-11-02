"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import ProductHeader from "../../../components/ProductHeader";
import Breadcrumb from "../../../components/Breadcrumb";
import CategoryNavigation from "../../../components/CategoryNavigation";
import { getProductsByCategory, getCategoryDisplayName, getAllProducts } from "../../../data/products";
import { getCategoryBoxImage } from "../../../lib/imageMap";

const CategoryPage: React.FC = () => {
  const params = useParams();
  const categorySlug = params?.category as string;
  
  // Get all products for this category
  const categoryProducts = getProductsByCategory(categorySlug);
  const allProducts = getAllProducts();
  
  // Get unique subcategories for filtering
  const subcategories = Array.from(new Set(categoryProducts.map(p => p.subcategory).filter(Boolean)));
  
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  
  // Filter products by subcategory if selected
  const filteredProducts = selectedSubcategory 
    ? categoryProducts.filter(product => product.subcategory === selectedSubcategory)
    : categoryProducts;

  const breadcrumbs = [
    { label: "Products", href: "/products" },
    { label: getCategoryDisplayName(categorySlug) }
  ];

  const categoryDisplayName = getCategoryDisplayName(categorySlug);

  return (
    <>
      <ProductHeader breadcrumbs={breadcrumbs} />
      
      {/* Category Header */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900 mb-4">
              {categoryDisplayName}
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover our comprehensive range of {categoryDisplayName.toLowerCase()} solutions designed to support your wellness goals
            </p>
          </div>

          {/* Subcategory Filter */}
          {subcategories.length > 0 && (
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setSelectedSubcategory(null)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    !selectedSubcategory
                      ? 'bg-[#87CEEB] text-neutral-900'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  All {categoryDisplayName}
                </button>
                {subcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => setSelectedSubcategory(subcategory || null)}
                    className={`px-6 py-3 rounded-full font-medium transition-colors ${
                      selectedSubcategory === subcategory
                        ? 'bg-[#87CEEB] text-neutral-900'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {subcategory?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="aspect-square bg-[#EAE7DC] overflow-hidden">
                    <img
                      src={getCategoryBoxImage(categorySlug)}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  {product.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        FEATURED
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                  <p className="text-neutral-600 mb-4">{product.shortDescription}</p>
                  
                  {/* Key Benefits */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-[#87CEEB]"></div>
                      <span className="text-sm text-neutral-700">
                        {product.benefits[0]}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#87CEEB]"></div>
                      <span className="text-sm text-neutral-700">
                        {product.benefits[1]}
                      </span>
                    </div>
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-neutral-900">
                      ${product.price}
                    </div>
                    {product.rating && (
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-neutral-600">
                          {product.rating} ({product.reviewCount} reviews)
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={`/products/${categorySlug}/${product.id}`}
                      className="flex-1 bg-neutral-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-black transition-colors text-center"
                    >
                      View Product
                    </a>
                    <a
                      href="https://www.joinblvd.com/b/smilespawellness/widget#/visit-type"
                      className="px-6 py-3 border-2 border-neutral-300 rounded-full font-semibold text-neutral-700 hover:border-neutral-400 transition-colors"
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">No products found</h3>
              <p className="text-neutral-600 mb-6">
                We're working on adding more products to this category. Check back soon!
              </p>
              <a
                href="/products"
                className="inline-flex items-center bg-[#87CEEB] text-neutral-900 font-semibold py-3 px-8 rounded-full hover:bg-[#79c9f0] transition-colors"
              >
                Browse All Products
              </a>
            </div>
          )}

          {/* Category Info */}
          <div className="mt-16 text-center">
            <div className="bg-neutral-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Need help choosing the right {categoryDisplayName.toLowerCase()} solution?
              </h2>
              <p className="text-neutral-600 mb-6">
                Our wellness experts are here to help you find the perfect products for your specific goals
              </p>
              <a
                href="/home#contact"
                className="inline-flex items-center bg-[#87CEEB] text-neutral-900 font-semibold py-3 px-8 rounded-full hover:bg-[#79c9f0] transition-colors"
              >
                Get Personalized Recommendations
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CategoryNavigation />
    </>
  );
};

export default CategoryPage;
