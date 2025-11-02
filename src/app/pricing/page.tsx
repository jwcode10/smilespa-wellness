"use client";

import { Instrument_Serif } from "next/font/google";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import copy from "@/content/copy.json";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

export default function DesignerPricing() {
  return (
    <div className="relative min-h-full w-full bg-white font-sans text-black antialiased">
      <section className="relative mr-auto ml-auto max-w-7xl pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-16 text-center sm:mb-20">
          <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className={cn("text-7xl font-normal tracking-tight text-red-500", serif.className)}>
              {copy.pricingPage.hero.line1}
            </span>
            <br />
            <span className={cn("text-8xl font-normal tracking-tight text-black", serif.className)}>
              {copy.pricingPage.hero.line2}
            </span>
          </h1>
          <p className="mr-auto ml-auto max-w-3xl text-base text-neutral-600 sm:text-lg">
            {copy.pricingPage.hero.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          <article className="relative flex flex-col rounded-3xl border-2 border-neutral-200 bg-white pt-8 pr-8 pb-8 pl-8 transition-all duration-300 hover:border-red-500 lg:p-10">
            <div className="mb-8 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="palette" className="lucide lucide-palette h-5 w-5 text-red-500">
                  <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </svg>
                <span className="text-sm font-semibold tracking-wide text-neutral-500 uppercase">{copy.pricingPage.cards[0].category}</span>
              </div>
              <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-600 uppercase">{copy.pricingPage.cards[0].badge}</span>
            </div>

            <div className="mb-8">
              <h2 className="mb-3 text-2xl leading-tight font-medium lg:text-2xl">{copy.pricingPage.cards[0].title}</h2>
              <p className="text-sm text-neutral-600">{copy.pricingPage.cards[0].description}</p>
            </div>

            <div className="mb-8">
              <div className="mb-2 flex items-end gap-2">
                <span className="text-4xl font-bold tracking-tight lg:text-5xl">{copy.pricingPage.cards[0].price}</span>
                <span className="mb-1 text-neutral-500">{copy.pricingPage.cards[0].period}</span>
              </div>
              <p className="text-xs text-neutral-500">{copy.pricingPage.cards[0].note}</p>
            </div>

            <div className="mb-8 flex flex-col gap-3">
              <button className="w-full rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-600">{copy.pricingPage.cards[0].primaryCta}</button>
              <button className="w-full rounded-full border-2 border-black px-6 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-black hover:text-white">{copy.pricingPage.cards[0].secondaryCta}</button>
            </div>

            <hr className="mb-8 border-neutral-200" />

            <ul className="space-y-4 text-sm">
              {copy.pricingPage.cards[0].features.map(([title, desc]) => (
                <li key={title as string} className="flex items-start gap-3">
                  <IconCircleCheckFilled size={16} className="mt-0.5 h-4 w-4 flex-shrink-0 text-black" aria-hidden />
                  <span>
                    <strong>{title}</strong> - {desc}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative z-10 flex scale-105 flex-col rounded-3xl border-2 border-black bg-black p-8 text-white transition-all duration-300 lg:scale-110 lg:p-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
              <div className="rounded-full bg-red-500 px-4 py-2 text-xs font-bold text-white uppercase">{copy.pricingPage.cards[1].mostPopular}</div>
            </div>

            <div className="mt-4 mb-8 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="rocket" className="lucide lucide-rocket h-5 w-5 text-red-500">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
                <span className="text-sm font-semibold tracking-wide text-neutral-400 uppercase">{copy.pricingPage.cards[1].category}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-3 text-2xl leading-tight font-medium lg:text-2xl">{copy.pricingPage.cards[1].title}</h2>
              <p className="text-sm text-neutral-300">{copy.pricingPage.cards[1].description}</p>
            </div>

            <div className="mb-8">
              <div className="mb-2 flex items-end gap-2">
                <span className="text-4xl font-bold tracking-tight lg:text-5xl">{copy.pricingPage.cards[1].price}</span>
                <span className="mb-1 text-neutral-400">{copy.pricingPage.cards[1].period}</span>
              </div>
              <p className="text-xs text-neutral-400">{copy.pricingPage.cards[1].note}</p>
            </div>

            <div className="mb-8 flex flex-col gap-3">
              <button className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-neutral-100">{copy.pricingPage.cards[1].primaryCta}</button>
              <button className="w-full rounded-full border-2 border-white px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white hover:text-black">{copy.pricingPage.cards[1].secondaryCta}</button>
            </div>

            <hr className="mb-8 border-neutral-700" />

            <ul className="space-y-4 text-sm">
              {copy.pricingPage.cards[1].features.map(([title, desc]) => (
                <li key={title as string} className="flex items-start gap-3">
                  <IconCircleCheckFilled size={16} className="mt-0.5 h-4 w-4 flex-shrink-0 text-black" aria-hidden />
                  <span>
                    <strong>{title}</strong> - {desc}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative flex flex-col rounded-3xl border-2 border-neutral-200 bg-white pt-8 pr-8 pb-8 pl-8 transition-all duration-300 hover:border-red-500 lg:col-span-2 lg:p-10 xl:col-span-1">
            <div className="mb-8 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="building-2" className="lucide lucide-building-2 h-5 w-5 text-red-500">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                  <path d="M10 6h4"></path>
                  <path d="M10 10h4"></path>
                  <path d="M10 14h4"></path>
                  <path d="M10 18h4"></path>
                </svg>
                <span className="text-sm font-semibold tracking-wide text-neutral-500 uppercase">{copy.pricingPage.cards[2].category}</span>
              </div>
              <span className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 uppercase">{copy.pricingPage.cards[2].badge}</span>
            </div>

            <div className="mb-8">
              <h2 className="mb-3 text-2xl leading-tight font-medium lg:text-2xl">{copy.pricingPage.cards[2].title}</h2>
              <p className="text-sm text-neutral-600">{copy.pricingPage.cards[2].description}</p>
            </div>

            <div className="mb-8">
              <div className="mb-2 flex items-end gap-2">
                <span className="text-4xl font-bold tracking-tight text-black lg:text-5xl">{copy.pricingPage.cards[2].price}</span>
              </div>
              <p className="text-xs text-neutral-500">{copy.pricingPage.cards[2].note}</p>
            </div>

            <div className="mb-8 flex flex-col gap-3">
              <button className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-neutral-800">{copy.pricingPage.cards[2].primaryCta}</button>
              <button className="w-full rounded-full border-2 border-black px-6 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-black hover:text-white">{copy.pricingPage.cards[2].secondaryCta}</button>
            </div>

            <hr className="mb-8 border-neutral-200" />

            <ul className="space-y-4 text-sm">
              {copy.pricingPage.cards[2].features.map(([title, desc]) => (
                <li key={title as string} className="flex items-start gap-3">
                  <IconCircleCheckFilled size={16} className="mt-0.5 h-4 w-4 flex-shrink-0 text-black" aria-hidden />
                  <span>
                    <strong>{title}</strong> - {desc}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-16 text-center sm:mt-20">
          <p className="mb-8 text-sm text-neutral-500">{copy.pricingPage.trust.caption}</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="shield-check" className="lucide lucide-shield-check h-6 w-6">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span className="text-sm">{copy.pricingPage.trust.items[0].label}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="clock" className="lucide lucide-clock h-6 w-6">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="text-sm">{copy.pricingPage.trust.items[1].label}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="refresh-cw" className="lucide lucide-refresh-cw h-6 w-6">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M8 16H3v5"></path>
            </svg>
            <span className="text-sm">{copy.pricingPage.trust.items[2].label}</span>
          </div>
        </div>
      </section>
    </div>
  );
}


