"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import copy from "@/content/copy.json";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    console.log("Subscribe:", email);
    // In production, POST to /api/subscribe
    alert(copy.contact.form.subscribeSuccess);
  };

  return (
    <footer className="bg-neutral-950 text-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Newsletter + Brand */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <a href="/" className="flex items-center gap-2" aria-label={copy.site.brand.ariaHome}>
              <img src="/pics/logo.webp" alt={copy.site.brand.name} className="h-8 w-auto" />
              <span className="sr-only">{copy.site.brand.name}</span>
            </a>
            <p className="mt-3 max-w-md text-neutral-400">{copy.footer.tagline}</p>
            <form onSubmit={handleSubscribe} className="mt-4 flex max-w-md gap-2">
              <input
                name="email"
                type="email"
                required
                aria-label="Email address"
                placeholder={copy.footer.emailPlaceholder}
                className="w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 shadow-sm focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Button type="submit" aria-label="Subscribe" className="bg-white text-black hover:bg-neutral-200">
                {copy.footer.subscribe}
              </Button>
            </form>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-white">{copy.footer.columns.services.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                {copy.footer.columns.services.links.map((l) => (
                  <li key={l.label}><a href={l.href} className="hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">{copy.footer.columns.company.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                {copy.footer.columns.company.links.map((l) => (
                  <li key={l.label}><a href={l.href} className="hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">{copy.footer.columns.support.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                {copy.footer.columns.support.links.map((l) => (
                  <li key={l.label}><a href={l.href} className="hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <img src="/pics/logo.webp" alt={copy.site.brand.name} className="h-8 w-auto" />
              <span className="text-xs text-neutral-400">{copy.footer.copyrightPrefix}{new Date().getFullYear()}{copy.footer.copyrightSuffix}</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-400">
              {copy.footer.legal.map((l) => (
                <a key={l.label} href={l.href} className="hover:text-white">{l.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}




