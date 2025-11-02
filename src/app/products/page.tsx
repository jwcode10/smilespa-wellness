"use client";

import React, { useState } from "react";
import ProductHeader from "../../components/ProductHeader";
import CategoryNavigation from "../../components/CategoryNavigation";
import { getAllProducts, getCategoryDisplayName } from "../../data/products";
import { getCategoryBoxImage } from "../../lib/imageMap";

const ProductsIndex: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all products and group by category
  const allProducts = getAllProducts();
  const categories = Array.from(new Set(allProducts.map(p => p.category)));
  
  // Create category summary data
  const categoryData = categories.map(category => {
    const categoryProducts = allProducts.filter(p => p.category === category);
    const featuredProduct = categoryProducts.find(p => p.featured) || categoryProducts[0];
    
    return {
      title: getCategoryDisplayName(category),
      description: `${categoryProducts.length} products available`,
      image: getCategoryBoxImage(category),
      link: `/products/${category}`,
      price: featuredProduct ? `From $${featuredProduct.price}` : 'Contact for pricing',
      rating: featuredProduct?.rating || 4.5,
      reviewCount: featuredProduct?.reviewCount || 0,
      category: category,
      productCount: categoryProducts.length
    };
  });

  // Get products for selected category
  const selectedCategoryProducts = selectedCategory 
    ? allProducts.filter(product => product.category === selectedCategory)
    : [];

  const breadcrumbs = [
    { label: "Products" }
  ];

  return (
    <>
      <ProductHeader breadcrumbs={breadcrumbs} />
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900 mb-4">
              Our Products
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover our complete range of wellness products designed to support your health and nutrition goals
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  !selectedCategory
                    ? 'bg-[#87CEEB] text-neutral-900'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                All Categories
              </button>
              {categoryData.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setSelectedCategory(category.category)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    selectedCategory === category.category
                      ? 'bg-[#87CEEB] text-neutral-900'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Show category cards when no category is selected */}
          {!selectedCategory && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.map((category, index) => (
                <div key={index} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className={'aspect-square bg-[#EAE7DC] overflow-hidden'}>
                      <img
                        src={category.image}
                        alt={category.title}
                        className={'w-full h-full object-cover transition-transform group-hover:scale-105'}
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{category.title}</h3>
                    <p className="text-neutral-600 mb-4">{category.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-neutral-900">{category.price}</div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-neutral-600">
                          {category.rating} ({category.reviewCount} reviews)
                        </span>
                      </div>
                    </div>

                    <a
                      href="https://www.joinblvd.com/b/smilespawellness/widget#/book"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#87CEEB] text-neutral-900 font-semibold py-3 px-6 rounded-full hover:bg-[#79c9f0] transition-colors text-center"
                    >
                      View Products
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Show individual products when a category is selected */}
          {selectedCategory && (
            <>
              <div className="mb-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <span>←</span>
                  Back to All Categories
                </button>
                <h2 className="text-2xl font-bold text-neutral-900 mt-4">
                  {getCategoryDisplayName(selectedCategory)} Products
                </h2>
                <p className="text-neutral-600 mt-2">
                  {selectedCategoryProducts.length} products available
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedCategoryProducts.map((product) => (
                  <div key={product.id} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative">
                    <div className="aspect-square bg-[#EAE7DC] overflow-hidden">
                        <img
                          src={getCategoryBoxImage(selectedCategory)}
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
                          href={`/products/${selectedCategory}/${product.id}`}
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
            </>
          )}

          <div className="mt-16 text-center">
            <div className="bg-neutral-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Not sure which product is right for you?
              </h2>
              <p className="text-neutral-600 mb-6">
                Our wellness experts are here to help you find the perfect products for your goals
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

export default ProductsIndex;
