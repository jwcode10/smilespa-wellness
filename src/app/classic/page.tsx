"use client";

import React, { useState } from "react";
import Image from "next/image";
import Faq1 from "../components/Faq1";
import HeroSlider from "../components/HeroSlider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import copy from "@/content/copy.json";

// ---------- Utility Components ----------
const Container = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const SectionTitle = ({ eyebrow, title, subtitle, center }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) => (
  <div className={`mb-8 ${center ? "text-center" : "text-left"}`}>
    {eyebrow && (
      <p className="text-sm font-semibold tracking-wide text-blue-800/80">{eyebrow}</p>
    )}
    <h2 className="mt-1 text-2xl font-semibold tracking-tight text-blue-900 sm:text-3xl">
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-2 text-blue-900/70 ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const Input = ({ label, id, type = "text", required, ...props }: { label: string; id: string; type?: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <label htmlFor={id} className="block">
    <span className="text-sm font-medium text-blue-900">{label}</span>
    <input
      id={id}
      type={type}
      required={required}
      className="mt-2 w-full rounded-xl border border-blue-900/10 bg-white px-3 py-2 text-blue-900 placeholder-blue-900/40 shadow-sm shadow-blue-900/5 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
      {...props}
    />
  </label>
);

const Textarea = ({ label, id, required, ...props }: { label: string; id: string; required?: boolean } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <label htmlFor={id} className="block">
    <span className="text-sm font-medium text-blue-900">{label}</span>
    <textarea
      id={id}
      required={required}
      className="mt-2 w-full rounded-xl border border-blue-900/10 bg-white px-3 py-2 text-blue-900 placeholder-blue-900/40 shadow-sm shadow-blue-900/5 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
      rows={5}
      {...props}
    />
  </label>
);

//


// Replaced by full-screen slider

const Stats = () => (
  <section aria-label="statistics" className="stats-theme stats-section">
    <Container className="py-10">
      <div className="grid gap-10 lg:grid-cols-4 items-center">
        {/* Stats group */}
        <div className="lg:col-span-3">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            {/* Item 1 */}
            {copy.stats.items.map((s, idx) => (
              <div key={idx} className="flex flex-col items-start sm:min-w-0">
                <div className="flex items-baseline">
                  <span className="text-[65px] font-normal tracking-tight">{s.value}</span>
                  <span className="ml-1 text-3xl" style={{ color: "var(--text-color--text-tertiary)" }}>{s.suffix}</span>
                </div>
                <div className="mt-2 text-base opacity-80" style={{ color: "var(--text-color--text-secondary)" }}>{s.label}</div>
              </div>
            ))}

          </div>
        </div>

        {/* Description and link */}
        <div className="lg:col-span-1">
          <p className="opacity-80" style={{ color: "var(--text-color--text-secondary)" }}>
            {copy.stats.aside.description}
          </p>
          <a href={copy.stats.aside.ctaHref} className="mt-4 inline-block font-semibold" style={{ color: "var(--text-color--text-tertiary)" }}>
            {copy.stats.aside.cta}
          </a>
        </div>
      </div>
    </Container>
  </section>
);

const Services = () => (
  <section id="services" className="bg-blue-50">
    <Container className="py-20">
      <div className="flex items-start justify-between gap-8">
        <div>
          <h2 className="text-5xl sm:text-6xl font-normal tracking-tight text-blue-900">{copy.services.title}</h2>
          <p className="mt-4 max-w-2xl text-blue-900/80">
            {copy.services.subtitle}
          </p>
        </div>
        <div className="hidden sm:block">
          <Button variant="default" className="rounded-full px-6 py-3 text-base" aria-label="Explore services">{copy.services.cta}</Button>
        </div>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {copy.services.cards.map((c, i) => (
          <div key={i} className="max-w-sm">
            {/* Keep existing SVGs for visuals; leaving them static */}
            <svg aria-hidden className="h-14 w-14 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="6" r="2" />
              <path d="M6 20l3-3 3 3M12 10v5M18 20l-3-3-3 3" />
            </svg>
            <h3 className="mt-6 text-3xl sm:text-4xl font-normal text-blue-900">{c.title}</h3>
            <p className="mt-3 text-blue-900/80">{c.description}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const Team = () => (
  <section id="team" className="section_team bg-blue-50">
    <Container className="py-14">
      <div className="team_content">
        <div className="top_component">
          <div className="top_content">
            <div className="text-sm font-semibold uppercase tracking-wide text-blue-700">{copy.team.eyebrow}</div>
            <h2 className="mt-2 text-4xl font-normal text-blue-900 sm:text-5xl">{copy.team.title}</h2>
          </div>
        </div>
      </div>
    </Container>

    {/* Full-bleed horizontal scroller */}
    <div
      className="mt-6 w-screen overflow-x-auto pb-6 [-webkit-overflow-scrolling:touch] scroll-smooth snap-x snap-mandatory"
      role="region"
      aria-label="Team members horizontal list"
    >
      <div className="flex gap-6">
        {[
          { name: 'Clare Ford', img: 'https://cdn.prod.website-files.com/66ba20660e1615d7b0d2bbaf/66c8edc092b211a578c60f54_Rectangle%201916.webp', href: '/trainers/clare-bamford' },
          { name: 'Alicia Regis', img: 'https://cdn.prod.website-files.com/66ba20660e1615d7b0d2bbaf/66cd26acd74f348d10f28578_Rectangle%201921.webp', href: '/trainers/alicia-regis-' },
          { name: 'Clare Ford', img: 'https://cdn.prod.website-files.com/66ba20660e1615d7b0d2bbaf/66c8edc092b211a578c60f54_Rectangle%201916.webp', href: '/trainers/clare-bamford' },
          { name: 'Alicia Regis', img: 'https://cdn.prod.website-files.com/66ba20660e1615d7b0d2bbaf/66cd26acd74f348d10f28578_Rectangle%201921.webp', href: '/trainers/alicia-regis-' },
          { name: 'Clare Ford', img: 'https://cdn.prod.website-files.com/66ba20660e1615d7b0d2bbaf/66c8edc092b211a578c60f54_Rectangle%201916.webp', href: '/trainers/clare-bamford' },
        ].map((m, idx) => (
          <a
            key={`${m.name}-${idx}`}
            href={m.href}
            className="snap-start [scroll-snap-stop:always] shrink-0 min-w-[80%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[28%] overflow-hidden rounded-3xl bg-transparent transition hover:shadow-md"
          >
            <div className="relative w-full overflow-hidden rounded-3xl">
              <img src={m.img} alt={m.name} className="h-[28rem] w-full object-cover" />
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div className="text-lg font-medium text-blue-900">{m.name}</div>
              <div className="text-base font-bold text-blue-900">{copy.team.more}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
    <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-10">
      For every body, every step
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex flex-col gap-4">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/woman.jpg"
            alt="Happy woman"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-orange-500 text-white rounded-xl p-6">
          <h3 className="text-lg font-semibold">5,000+ Members</h3>
          <p className="text-sm mt-2">
            Get access to a growing community, doctor-led plans and on-going peer support
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-neutral-900 rounded-xl p-8 relative text-center flex-col">
        <div className="w-48 h-48 border border-neutral-700 rounded-full flex items-center justify-center">
          <span className="text-4xl font-bold text-white">+92%</span>
        </div>
        <p className="text-xs text-neutral-400 mt-6">
          Of ReadyRX patients reported a positive change since starting a treatment <br />
          <span className="italic">*of reporting patients</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-neutral-100 rounded-xl p-6">
          <h3 className="text-lg font-semibold">2 Minutes</h3>
          <p className="text-sm mt-2 text-neutral-600">
            It takes to complete our online assessment to see if you’re eligible for treatment
          </p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/runner.jpg"
            alt="Runner"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section id="reviews" className="bg-blue-50">
    <Container className="py-20">
      {/* Title styled to match reference */}
      <div className="text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-blue-900 sm:text-5xl md:text-6xl">
          {copy.reviews.titleLine1}
          <br className="hidden sm:block" />
          {copy.reviews.titleLine2}
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {[...copy.reviews.items, ...copy.reviews.items, ...copy.reviews.items].slice(0,5).map((r: any, i) => (
          <div
            key={i}
            className="rounded-2xl bg-blue-100/70 p-5 shadow-[0_1px_0_rgba(16,24,40,0.02)] ring-1 ring-blue-900/10"
          >
            {/* Header row */}
            <div className="flex items-center gap-3">
              <img
                src={r.img ?? "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"}
                alt={r.name}
                className="h-10 w-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-blue-900">{r.name}</p>
                <p className="text-xs text-blue-900/70">{r.handle}</p>
              </div>
            </div>

            {/* Quote */}
            <p className="mt-5 text-[15px] leading-6 text-blue-900">
              “{r.quote}”
            </p>

            {/* Date */}
            <div className="mt-10 text-right text-xs font-medium text-blue-900/70">{r.date}</div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const AppPromo = () => (
  <section aria-label="app promo" className="bg-blue-100/60">
    <Container className="py-14">
      <div className="grid items-center gap-8 rounded-3xl bg-blue-50 p-6 shadow-sm shadow-blue-900/10 sm:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold text-blue-900">{copy.appPromo.titlePrefix}<span className="italic font-serif">{copy.appPromo.titleEmphasis}</span>{copy.appPromo.titleSuffix}</h3>
          <p className="mt-2 text-blue-900/70">{copy.appPromo.description}</p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label={copy.appPromo.appStoreAria}>
              <img
                className="h-10 w-auto"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store badge"
              />
            </a>
            <a href="#" aria-label={copy.appPromo.googlePlayAria}>
              <img
                className="h-10 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play badge"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/pics/app.png"
            alt={copy.appPromo.imageAlt}
            className="h-100 w-auto object-cover"
          />
        </div>
      </div>
    </Container>
  </section>
);

const Pricing = () => (
  <section id="plans" className="bg-blue-50">
    <Container className="py-14">
      <SectionTitle center title={copy.pricing.section.title} subtitle={copy.pricing.section.subtitle} />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {copy.pricing.section.plans.map((p) => (
          <Card key={p.name} className={`relative p-6 ${p.highlight ? "ring-2 ring-blue-700" : ""}`}>
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold text-white shadow">
                {copy.pricing.section.highlightLabel}
              </span>
            )}
            <h3 className="text-lg font-semibold text-blue-900">{p.name}</h3>
            <p className="mt-3 text-4xl font-bold tracking-tight text-blue-900">{p.price}<span className="text-base font-medium text-blue-900/60">/mo</span></p>
            <ul className="mt-4 space-y-2 text-blue-900/80">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-700"></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button aria-label={p.cta} className={`mt-6 w-full ${p.highlight ? "bg-blue-800 hover:bg-blue-900" : ""}`}>
              {p.cta}
            </Button>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

// --- MVPBlock Pricing Sections ---
const PricingMVPBlockOne = () => (
  <section id="plans-mvp-1" className="bg-blue-50 mvpblock">
    <Container className="py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-blue-900">{copy.pricing.mvp1.title}</h2>
          <p className="mt-2 max-w-2xl text-blue-900/70">{copy.pricing.mvp1.subtitle}</p>
        </div>
        <Button variant="secondary" aria-label="Compare all plans" className="hidden sm:inline-flex rounded-full px-5 py-2">{copy.pricing.mvp1.compare}</Button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {copy.pricing.mvp1.plans.map((p) => (
          <Card key={p.name} className={`relative p-6 ${p.highlight ? "ring-2 ring-blue-700" : ""}`}>
            {p.highlight && (<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold text-white shadow">{copy.pricing.mvp1.badges.highlightLabel}</span>)}
            <h3 className="text-lg font-semibold text-blue-900">{p.name}</h3>
            <p className="mt-3 text-4xl font-bold tracking-tight text-blue-900">{p.price}<span className="text-base font-medium text-blue-900/60">/mo</span></p>
            <ul className="mt-4 space-y-2 text-blue-900/80">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2"><span aria-hidden className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-700"></span><span>{f}</span></li>
              ))}
            </ul>
            <Button className={`mt-6 w-full ${p.highlight ? "bg-blue-800 hover:bg-blue-900" : ""}`}>{p.cta}</Button>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

const PricingMVPBlockTwo = () => (
  <section id="plans-mvp-2" className="bg-blue-50 mvpblock">
    <Container className="py-16">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-blue-900">{copy.pricing.mvp2.title}</h2>
        <p className="mt-2 text-blue-900/70">{copy.pricing.mvp2.subtitle}</p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-blue-900/10">
        <div className="grid gap-px bg-blue-900/10 sm:grid-cols-3">
          {copy.pricing.mvp2.tiers.map((tier) => (
            <div key={tier.name} className="bg-white p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-blue-900">{tier.name}</h3>
                <div className="text-3xl font-bold text-blue-900">{tier.price}<span className="text-base font-medium text-blue-900/60">/mo</span></div>
              </div>
              <ul className="mt-4 space-y-2 text-blue-900/80">
                {tier.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2"><span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-700"></span><span>{p}</span></li>
                ))}
              </ul>
              <Button className="mt-6 w-full" aria-label={`Select ${tier.name}`}>Select {tier.name}</Button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    console.log("Contact form submitted", payload); // replace with fetch to /api/contact
    alert(copy.contact.form.success);
  };

  return (
    <section id="contact" className="bg-blue-50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle title={copy.contact.title} subtitle={copy.contact.subtitle} />
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {[
                "/pics/testimonials/66bba53415a4b103f364d541_Ellipse%205.jpg",
                "/pics/testimonials/66c8e3c5b74fa1defc2b8459_image1.png",
                "/pics/testimonials/66c8e3c53008c0e8dd980405_image2.png",
                "/pics/testimonials/66c8e3c5bc8311f5a754aaee_image3.png",
                "/pics/testimonials/66c8e3c5db5564ac2ffbb973_image4.png",
                "/pics/testimonials/66c8e3c5e999225e0652265e_image5.png",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Studio moment"
                  className="h-20 w-20 rounded-full object-cover shadow shadow-blue-900/10"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-blue-900/10 bg-white p-6 shadow-sm shadow-blue-900/5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input id="name" name="name" label={copy.contact.form.nameLabel} required placeholder={copy.contact.form.namePlaceholder} />
              <Input id="email" name="email" type="email" label={copy.contact.form.emailLabel} required placeholder={copy.contact.form.emailPlaceholder} />
            </div>
            <div className="mt-4">
              <Textarea id="message" name="message" label={copy.contact.form.messageLabel} placeholder={copy.contact.form.messagePlaceholder} required />
            </div>
            <Button type="submit" aria-label="Send message" className="mt-4">{copy.contact.form.submit}</Button>
          </form>
        </div>
      </Container>
    </section>
  );
};


const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = copy.faq.items;

  const handleToggle = (idx: number) => setOpen((prev) => (prev === idx ? null : idx));
  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (["Enter", " ", "ArrowRight", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      handleToggle(idx);
    }
  };

  return (
    <section id="faq" aria-label="FAQ" className="bg-blue-900">
      <Container className="py-14">
        <h2 className="text-2xl font-semibold text-blue-50">{copy.faq.titleBefore}<span className="italic font-serif">{copy.faq.titleEmphasis}</span></h2>
        <p className="mt-2 max-w-2xl text-blue-100/80">{copy.faq.subtitle}</p>

        <div className="mt-8 divide-y divide-blue-800 rounded-2xl border border-blue-800 bg-blue-900/40">
          {faqs.map((item, idx) => (
            <div key={item.q} className="group">
              <button
                aria-expanded={open === idx}
                aria-controls={`faq-${idx}`}
                onClick={() => handleToggle(idx)}
                onKeyDown={(e) => handleKey(e, idx)}
                className="flex w-full items-center justify-between p-5 text-left text-blue-50 hover:bg-blue-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span className="text-base font-medium">{item.q}</span>
                <span className="ml-4 grid h-6 w-6 place-items-center rounded-full bg-blue-800 text-blue-50">{open === idx ? "–" : "+"}</span>
              </button>
              <div
                id={`faq-${idx}`}
                className={`overflow-hidden px-5 pb-5 text-blue-100/90 transition-[max-height] duration-300 ${open === idx ? "max-h-40" : "max-h-0"}`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};



// ---------- Page ----------
export default function FitnessLandingPage() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <main>
        <HeroSlider />
        <Stats />
        <Services />
        <Team />
        <StatsSection />
        <Reviews />
        <AppPromo />
        <Pricing />
        <Contact />
        <FAQ />
      </main>
    </div>
  );
}









