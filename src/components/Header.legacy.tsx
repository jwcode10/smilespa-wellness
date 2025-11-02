"use client";

import React, { useEffect, useState } from "react";

export default function HeaderLegacy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const body = document.body;
      if (menuOpen) {
        body.classList.add("overflow-hidden");
      } else {
        body.classList.remove("overflow-hidden");
      }
    }
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-3 z-50 flex w-full justify-center px-4">
      <nav
        aria-label="Primary"
        className={`nav-sr-bange flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 text-neutral-200 transition-all duration-300 bg-neutral-900/95 shadow-xl ring-1 ring-black/40 backdrop-blur`}
        style={{ opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? "auto" : "none" }}
      >
        <a
          href="/"
          className="flex items-center gap-2 rounded-full px-3 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60"
        >
          <img
            src="/pics/smile-spa-wellness-logo.png"
            alt="Smile Spa Wellness logo"
            className="h-12 w-auto filter brightness-200 saturate-0 contrast-200"
          />
        </a>

        <ul className="hidden gap-10 md:flex">
          <li>
            <a href="/" className="px-2 py-1 text-[17px] text-neutral-300 hover:text-white focus-visible:text-white focus:outline-none">Home</a>
          </li>
          <li>
            <a href="/products" className="px-2 py-1 text-[17px] text-neutral-300 hover:text-white focus-visible:text-white focus:outline-none">Products</a>
          </li>
          <li>
            <a href="/#pricing" className="px-2 py-1 text-[17px] text-neutral-300 hover:text-white focus-visible:text-white focus:outline-none">Pricing</a>
          </li>
          <li>
            <a href="/certificates" className="px-2 py-1 text-[17px] text-neutral-300 hover:text-white focus-visible:text-white focus:outline-none">Certificates</a>
          </li>
          <li>
            <a href="/privacy" className="px-2 py-1 text-[17px] text-neutral-300 hover:text-white focus-visible:text-white focus:outline-none">Privacy</a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60"
        >
          <span className="relative block h-4 w-5">
            <span className={`${menuOpen ? "translate-y-2 rotate-45" : ""} absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform`} />
            <span className={`${menuOpen ? "opacity-0" : "opacity-100"} absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity`} />
            <span className={`${menuOpen ? "-translate-y-2 -rotate-45" : ""} absolute left-0 top-3 h-0.5 w-5 bg-current transition-transform`} />
          </span>
        </button>

        <a
          href="https://makewellness.com/512320"
          aria-label="Download for Apple"
          className="ml-3 hidden md:inline-flex items-center gap-2 rounded-full bg-blue-300 px-5 py-2 font-medium text-neutral-900 transition-colors hover:bg-lime-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
        >
          <span>MAKE WELLNESS</span>
        </a>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[80] bg-white text-neutral-900 transition-opacity duration-200 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-start px-6 pt-28">
          <ul className="space-y-6">
            <li>
              <a href="/" className="flex items-center justify-between text-5xl font-semibold tracking-tight" onClick={() => setMenuOpen(false)}>
                Home
                <span className="ml-6 inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-neutral-300" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-neutral-700"><path fill="currentColor" d="M7 11h8.17l-3.59-3.59L12 6l6 6l-6 6l-1.41-1.41L15.17 13H7z"/></svg>
                </span>
              </a>
            </li>
            <li>
              <a href="/products" className="flex items-center justify-between text-5xl font-semibold tracking-tight" onClick={() => setMenuOpen(false)}>
                Products
                <span className="ml-6 inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-neutral-300" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-neutral-700"><path fill="currentColor" d="M7 11h8.17l-3.59-3.59L12 6l6 6l-6 6l-1.41-1.41L15.17 13H7z"/></svg>
                </span>
              </a>
            </li>
            <li>
              <a href="/#pricing" className="flex items-center justify-between text-5xl font-semibold tracking-tight" onClick={() => setMenuOpen(false)}>
                Pricing
                <span className="ml-6 inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-neutral-300" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-neutral-700"><path fill="currentColor" d="M7 11h8.17l-3.59-3.59L12 6l6 6l-6 6l-1.41-1.41L15.17 13H7z"/></svg>
                </span>
              </a>
            </li>
            <li>
              <a href="/certificates" className="flex items-center justify-between text-5xl font-semibold tracking-tight" onClick={() => setMenuOpen(false)}>
                Certificates
                <span className="ml-6 inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-neutral-300" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-neutral-700"><path fill="currentColor" d="M7 11h8.17l-3.59-3.59L12 6l6 6l-6 6l-1.41-1.41L15.17 13H7z"/></svg>
                </span>
              </a>
            </li>
            <li>
              <a href="/privacy" className="flex items-center justify-between text-5xl font-semibold tracking-tight" onClick={() => setMenuOpen(false)}>
                Privacy
                <span className="ml-6 inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-neutral-300" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-neutral-700"><path fill="currentColor" d="M7 11h8.17l-3.59-3.59L12 6l6 6l-6 6l-1.41-1.41L15.17 13H7z"/></svg>
                </span>
              </a>
            </li>
          </ul>

          <div className="mt-12 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
            <p className="mb-4 font-medium">Follow us</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
