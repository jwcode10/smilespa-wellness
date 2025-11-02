"use client";

import React from "react";
import { useParams } from "next/navigation";
import ProductHeader from "../../../../components/ProductHeader";
import Breadcrumb from "../../../../components/Breadcrumb";
import CategoryNavigation from "../../../../components/CategoryNavigation";
import { getProductById, getCategoryDisplayName, getProductsByCategory } from "../../../../data/products";
import { getCategoryBoxImage } from "../../../../lib/imageMap";

const ProductPage: React.FC = () => {
  const params = useParams();
  const categorySlug = params?.category as string;
  const productId = params?.productId as string;
  
  const product = getProductById(productId);
  const relatedProducts = getProductsByCategory(categorySlug).slice(0, 3);

  if (!product) {
    return (
      <>
        <ProductHeader />
        <div className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">Product Not Found</h1>
            <p className="text-neutral-600 mb-8">The product you're looking for doesn't exist.</p>
            <a
              href="/products"
              className="inline-flex items-center bg-[#87CEEB] text-neutral-900 font-semibold py-3 px-8 rounded-full hover:bg-[#79c9f0] transition-colors"
            >
              Browse All Products
            </a>
          </div>
        </div>
      </>
    );
  }

  const breadcrumbs = [
    { label: "Products", href: "/products" },
    { label: getCategoryDisplayName(categorySlug), href: `/products/${categorySlug}` },
    { label: product.name }
  ];

  return (
    <>
      <ProductHeader breadcrumbs={breadcrumbs} />
      
      {/* Product Hero Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-[#EAE7DC] rounded-3xl overflow-hidden">
                <img
                  src={getCategoryBoxImage(categorySlug)}
                  alt={product.name}
                  className="w-full h-full object-cover"
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

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-neutral-900 mb-2">{product.name}</h1>
                <p className="text-lg text-neutral-600">{product.description}</p>
              </div>

              {product.rating && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating!) ? "text-yellow-400" : "text-neutral-300"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-neutral-600">({product.rating}) • {product.reviewCount} reviews</span>
                </div>
              )}

              <div className="text-3xl font-bold text-neutral-900">
                ${product.price}
                {product.originalPrice && (
                  <span className="text-lg text-neutral-500 line-through ml-2">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-900">Key Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.slice(0, 4).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                      <span className="text-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href="https://www.joinblvd.com/b/smilespawellness/widget#/visit-type"
                  className="flex-1 bg-[#87CEEB] text-neutral-900 font-semibold py-4 px-6 rounded-full hover:bg-[#79c9f0] transition-colors text-center"
                >
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

      {/* Product Details */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Product Details</h2>
              <div className="space-y-4 text-neutral-700">
                <p>{product.description}</p>
                
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Ingredients</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>

                {product.nutrition && (
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Nutritional Information</h3>
                    <div className="bg-white rounded-2xl p-6 space-y-3">
                      {product.nutrition.servingSize && (
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Serving Size</span>
                          <span className="font-semibold">{product.nutrition.servingSize}</span>
                        </div>
                      )}
                      {product.nutrition.calories && (
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Calories</span>
                          <span className="font-semibold">{product.nutrition.calories}</span>
                        </div>
                      )}
                      {product.nutrition.protein && (
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Protein</span>
                          <span className="font-semibold">{product.nutrition.protein}g</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">All Benefits</h3>
              <div className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#87CEEB]" aria-hidden />
                      <span className="text-neutral-700">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.filter(p => p.id !== product.id).map((relatedProduct) => (
                <div key={relatedProduct.id} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square bg-[#EAE7DC] overflow-hidden">
                      <img
                        src={getCategoryBoxImage(relatedProduct.category)}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-neutral-600 mb-4">{relatedProduct.shortDescription}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-neutral-900">
                        ${relatedProduct.price}
                      </div>
                      {relatedProduct.rating && (
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm text-neutral-600">
                            {relatedProduct.rating} ({relatedProduct.reviewCount} reviews)
                          </span>
                        </div>
                      )}
                    </div>

                    <a
                      href={`/products/${categorySlug}/${relatedProduct.id}`}
                      className="block w-full bg-[#87CEEB] text-neutral-900 font-semibold py-3 px-6 rounded-full hover:bg-[#79c9f0] transition-colors text-center"
                    >
                      View Product
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <CategoryNavigation />
    </>
  );
};

export default ProductPage;
