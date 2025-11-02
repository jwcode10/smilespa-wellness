"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "@/data/products";
import { getCategoryBoxImage } from "@/lib/imageMap";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get featured products for dropdown
  const featuredProducts = getAllProducts()
    .filter(p => p.featured)
    .slice(0, 4);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      const body = document.body;
      if (isMenuOpen) body.classList.add("overflow-hidden");
      else body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const handleSearch: React.MouseEventHandler<HTMLButtonElement> = () => {
    alert("Open search");
  };
  const handleKeySearch: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      alert("Open search");
    }
  };

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav
        className="mx-auto max-w-[1200px] px-6 py-1 relative"
        aria-label="Primary"
      >
        {/* Desktop Layout - lg and xl */}
        <div className="hidden lg:grid lg:grid-cols-[0.7fr_auto_0.7fr] lg:items-center lg:gap-4">
          {/* Left nav links - constrained to left side, adaptive sizing */}
          <ul className="flex items-center justify-start gap-2 text-xs overflow-hidden uppercase tracking-wide">
            {[
              ["Home", "/"],
              ["Products", "/products"],
              ["Pricing", "/#pricing"],
              ["Certificates", "/certificates"],
              ["Privacy", "/privacy"],
            ].map(([label, href]) => (
              <li key={label} className="flex-shrink-0">
                <a
                  href={href}
                  className={`px-2 transition-colors duration-700 whitespace-nowrap font-sans ${isScrolled ? 'text-black hover:text-gray-900' : 'text-white hover:text-gray-200'}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Center logo - forced to stay in absolute center */}
          <a href="/" className="select-none flex justify-center items-start -mt-1" aria-label="Home">
            <img
              src="/pics/smile-spa-wellness-logo.png"
              alt="Smile Spa Wellness logo"
              className={`h-20 w-auto transition-all duration-700 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Right controls - Get in touch */}
          <div className="flex items-center justify-end gap-4">
            <a
              href="/contact"
              className={`group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-700 focus-visible:ring-2 focus-visible:ring-gray-300 focus:outline-none ${
                isScrolled 
                  ? 'border border-black text-black hover:bg-black hover:text-white' 
                  : 'border border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              <span>Get in touch</span>
              <span
                className={`inline-flex h-4 w-4 items-center justify-center rounded-full transition-colors duration-700 ${
                  isScrolled 
                    ? 'border border-black group-hover:border-white' 
                    : 'border border-white group-hover:border-black'
                }`}
                aria-hidden
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Logo on mobile/tablet */}
          <a href="/" className="select-none" aria-label="Home">
            <img
              src="/pics/smile-spa-wellness-logo.png"
              alt="Smile Spa Wellness logo"
              className={`h-12 w-auto transition-all duration-700 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Hamburger (all breakpoints except lg and xl) */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(v => !v)}
            className={`h-11 w-11 inline-flex items-center justify-center rounded-full transition-colors duration-700 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-gray-300 ${
              isScrolled 
                ? 'border border-black text-black hover:border-gray-600' 
                : 'border border-white text-white hover:border-gray-300'
            }`}
          >
            <span className="relative block h-4 w-5" aria-hidden>
              <span className={`${isMenuOpen ? "translate-y-2 rotate-45" : ""} absolute left-0 top-0 h-0.5 w-5 transition-transform ${isScrolled ? 'bg-black' : 'bg-white'}`} />
              <span className={`${isMenuOpen ? "opacity-0" : "opacity-100"} absolute left-0 top-1.5 h-0.5 w-5 transition-opacity ${isScrolled ? 'bg-black' : 'bg-white'}`} />
              <span className={`${isMenuOpen ? "-translate-y-2 -rotate-45" : ""} absolute left-0 top-3 h-0.5 w-5 transition-transform ${isScrolled ? 'bg-black' : 'bg-white'}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Full-screen dark dropdown menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[100] bg-[#9CBECE]/50 backdrop-blur-xl text-white lg:hidden transition-all duration-700 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsMenuOpen(false);
        }}
      >
        <div className="h-full w-full flex flex-col px-6 pt-8 pb-12 overflow-y-auto">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between mb-16">
            <a href="/" className="select-none" aria-label="Home" onClick={() => setIsMenuOpen(false)}>
              <img
                src="/pics/smile-spa-wellness-logo.png"
                alt="Smile Spa Wellness logo"
                className="h-20 w-auto brightness-0 invert"
              />
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="h-10 w-10 inline-flex items-center justify-center rounded-lg border border-white/30 hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main navigation links */}
          <div className="flex-1 flex flex-col justify-center">
            <ul className="space-y-8">
              {[
                ["Home", "/", "01"],
                ["Products", "/products", "02"],
                ["Pricing", "/#pricing", "03"],
                ["Certificates", "/certificates", "04"],
                ["Privacy", "/privacy", "05"],
              ].map(([label, href, num]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center justify-between text-5xl md:text-6xl font-semibold tracking-tight text-white hover:opacity-80 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-baseline gap-3">
                      <span>{label}</span>
                      <span className="text-2xl md:text-3xl font-normal text-white/40">({num})</span>
                    </span>
                    <span className="ml-6 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-white/30 group-hover:border-white/50 transition-colors" aria-hidden>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Products Row */}
          {featuredProducts.length > 0 && (
            <div className="mb-8">
              <p className="text-base text-white/70 mb-4 font-normal">Featured Products</p>
              <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2">
                {featuredProducts.map((product) => (
                  <a
                    key={product.id}
                    href={`/products/${product.category}/${product.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-lg border border-white/20 hover:border-white/40 transition-colors overflow-hidden"
                  >
                    <img
                      src={getCategoryBoxImage(product.category) || product.images.main || product.images.thumbnail || '/pics/products/boxes/box.png'}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-white/10 my-8"></div>

          {/* Follow me section */}
          <div className="mb-6">
            <p className="text-base text-white/70 mb-4 font-normal">Follow me.</p>
            <div className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-wide">
              {[
                ["Instagram", "https://instagram.com"],
                ["Behance", "https://behance.net"],
                ["Twitter", "https://twitter.com"],
                ["Dribble", "https://dribbble.com"],
              ].map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:opacity-70 transition-opacity flex items-center gap-2"
                >
                  <span>{label}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Stay connected section */}
          <div>
            <p className="text-base text-white/70 mb-4 font-normal">Stay connected w/ me.</p>
            <div className="flex items-center gap-2 border-b border-white/20 pb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-white placeholder:text-white/40 focus:outline-none text-base"
              />
              <button
                type="button"
                aria-label="Submit email"
                className="inline-flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
