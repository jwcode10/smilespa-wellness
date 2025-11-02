"use client";

import React, { useEffect, useRef, useState } from "react";
import { IconCircleCheckFilled, IconBrandYoutube, IconBrandFacebook, IconBrandX, IconBrandLinkedin, IconBrandTiktok, IconBrandInstagram } from "@tabler/icons-react";
import Faq1 from "./components/Faq1";
import { getAllProducts, getCategoryDisplayName } from "../data/products";

/**
 * Section 1 - Scrolling Fill Headline (Centered + Upward scroll accent)
 * - Sticky rounded header styled like the reference
 * - Headline block centered; each row fills from gray to black and subtly rises
 *   as it crosses a center band while scrolling upward.
 * - Respects prefers-reduced-motion.
 */

// ---------- Landing full-screen hero ----------
const LandingHero: React.FC = () => {
  return (
    <section aria-label="Landing hero" className=" isolate h-[70svh] md:h-[70dvh] w-full overflow-hidden bg-black">
      <img
        src="/pics/hero.png"
        alt="Smile Spa Wellness hero"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        fetchPriority="high"
      />
      {/* Soft blue overlay + gentle vignette for readability */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#b9cbea]/60 via-[#c7d6ef]/30 to-transparent" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_20%_50%,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.08)_40%,transparent_75%)]" aria-hidden />

      {/* Content overlay (left-aligned) */}
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 md:px-10">
          <div className="max-w-3xl text-left text-white">
            <h1 className="text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-tight tracking-tight">
              Clinician‑guided peptide memberships for strength, metabolism, and longevity
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#join" className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-[1px] hover:bg-white/15">Memberships</a>
              <a href="#weight" className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-[1px] hover:bg-white/15">Weight Management</a>
              <a href="#recovery" className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-[1px] hover:bg-white/15">Recovery & Performance</a>
              <a href="#consult" className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-[1px] hover:bg-white/15">Consultations</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// ---------- Headline logic ----------
const lines = [
  "Smile Spa Wellness Peptide Memberships",
  "Strength. Vitality. Longevity.",
  "No gimmicks. No guesswork.",
];

const useRowReveal = () => {
  const refs = useRef<HTMLDivElement[]>([]);
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    Array(lines.length).fill(false)
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(Array(lines.length).fill(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idxAttr = entry.target.getAttribute("data-index");
          if (!idxAttr) return;
          const idx = parseInt(idxAttr, 10);
          // Reveal when row passes the center band
          if (entry.isIntersecting) {
            setRevealed((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0.6,
      }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { refs, revealed } as const;
};

const Badge: React.FC = () => (
  <div className="mx-auto mb-6 flex w-fit items-center gap-2 text-sm text-neutral-500 md:mb-8 md:text-base">
    <span
      className="inline-block h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_0_4px_rgba(255,137,94,0.15)]"
      aria-hidden
    />
    <span className="select-none">Instant Access to Prescription-Strength Peptides</span>
  </div>
);

const HeadlineRow: React.FC<{
  children: React.ReactNode;
  isRevealed: boolean;
  index: number;
  rowRef: (el: HTMLDivElement | null) => void;
}> = ({ children, isRevealed, index, rowRef }) => (
  <div
    ref={rowRef}
    data-index={index}
    className={[
      "transition-all duration-[900ms] ease-out will-change-[transform,color,opacity]",
      // Allow natural wrapping at all breakpoints and center align
      "whitespace-normal break-words text-center",
      isRevealed
        ? "text-neutral-900 translate-y-0 opacity-100"
        : "text-neutral-300 translate-y-2 opacity-80",
    ].join(" ")}
  >
    {children}
  </div>
);

const SectionContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section aria-label="Personalized healthcare statement" className="relative bg-white text-neutral-900 overflow-hidden">
    <div className="mx-auto flex min-h-[84vh] max-w-[1200px] flex-col items-center justify-center px-6 py-24 md:px-10 lg:px-12 md:py-32 lg:py-40">
      {children}
    </div>
  </section>
);

const Headline: React.FC = () => {
  const { refs, revealed } = useRowReveal();

  return (
    <h1 className="mx-auto max-w-[52rem] px-4 text-center font-sans font-semibold leading-tight tracking-tight text-[clamp(2rem,6vw,3.75rem)] md:text-[clamp(2.75rem,5.5vw,5rem)] [text-wrap:balance] break-words">
      {lines.map((text, i) => (
        <HeadlineRow
          key={i}
          isRevealed={revealed[i]}
          index={i}
          rowRef={(el) => {
            if (!el) return;
            refs.current[i] = el;
          }}
        >
          {text}
        </HeadlineRow>
      ))}
    </h1>
  );
};

const SectionOne: React.FC = () => {
  return (
    <SectionContainer>
      <Badge />
      <Headline />
      <p className="mt-4 text-center text-neutral-600">
        Memberships start as low as $XX/month — pricing subject to change.
      </p>
    </SectionContainer>
  );
};

// =============================
// Products Section
// =============================

const ProductsSection: React.FC = () => {
  // Get all products and group by category
  const allProducts = getAllProducts();
  const categories = Array.from(new Set(allProducts.map(p => p.category)));
  
  // Create category summary data for homepage
  const products = categories.slice(0, 6).map(category => {
    const categoryProducts = allProducts.filter(p => p.category === category);
    const featuredProduct = categoryProducts.find(p => p.featured) || categoryProducts[0];
    
    return {
      title: getCategoryDisplayName(category),
      image: featuredProduct?.images.main || '/pics/products/item-place holder.png',
      link: `/products/${category}`
    };
  });

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900 mb-10">
          Wellness Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="group relative overflow-hidden rounded-2xl bg-[#EAE7DC] p-6 min-h-[280px] flex flex-col transition-transform hover:scale-[1.02]"
            >
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 max-w-[55%] z-10 leading-tight mb-auto">
                {product.title}
              </h3>
              
              <div className="absolute bottom-6 left-6 z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-transform group-hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="absolute right-2 bottom-2 w-[45%] h-[50%] flex items-end justify-end">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export a full-page preview so all sections render in canvas
export const SectionOneBlock = SectionOne;
export default function Page() {
  return (
    <>
      <LandingHero />
      <SectionOne />
      <ExploreStartSection />
      <ProductHeroMetformin />
      <ProblemsIntro />
      <ProductsSection />
      <EveryBodyGrid />
      <PricingRebuilt />
      <GlpCalculatorSection />
      <FunnelIntroSection />
      <FunnelBenefitsSection />
      <FunnelEvidenceSection />
      <FunnelTestimonialsSection />
      <Faq1 />
      <FunnelGuaranteeCtaSection />
    </>
  );
}

// =============================
// Section 2 - CTA Options (two panels)
// =============================

const CtaButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { asLink?: boolean; href?: string }>
  = ({ asLink, href = "#", className = "", children, ...props }) => {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-[0.98]";
  if (asLink) {
    return (
      <a href={href} className={[base, className].join(" ")}>{children}</a>
    );
  }
  return (
    <button {...props} className={[base, className].join(" ")}>{children}</button>
  );
};

export const ExploreStartSection: React.FC = () => {
  return (
    <section aria-label="Get started choices" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="mx-auto max-w-3xl text-[clamp(2rem,5vw,3rem)] leading-tight text-neutral-900 font-semibold">
          Ready to take command of your health?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#dfeff5] p-8 md:p-12">
            <img
              src="/pics/app.png"
              alt="Assorted treatment bottles"
              className="mx-auto h-48 w-auto object-contain md:h-56 select-none pointer-events-none"
            />
            <h3 className="mt-8 text-[clamp(1.3rem,2.2vw,1.8rem)] font-semibold tracking-tight text-neutral-900">
              Join the Peptide Membership
            </h3>
            <p className="mx-auto mt-2 max-w-md text-base text-neutral-700">
              Join our doctor‑guided program for prescription‑strength support designed to build strength,
              improve metabolism, and help you feel your best.
            </p>
            <CtaButton
              asLink
              href="#join"
              className="mt-6 bg-[#87CEEB] text-neutral-900 hover:bg-[#79c9f0]"
              aria-label="Join Smile Spa Wellness Peptide Membership"
            >
              Join Now
            </CtaButton>
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 translate-y-6 bg-gradient-to-t from-black/5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"/>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-neutral-100 p-8 md:p-12">
            <img
              src="/pics/scheduling-aimee.png"
              alt="Telehealth consultation on phone"
              className="mx-auto h-48 w-auto object-contain md:h-56 select-none pointer-events-none"
            />
            <h3 className="mt-8 text-[clamp(1.3rem,2.2vw,1.8rem)] font-semibold tracking-tight text-neutral-900">
              Not sure which membership is best?
            </h3>
            <p className="mx-auto mt-2 text-sm text-neutral-700">
              Book a consultation to get a personalized peptide plan tailored to your goals.
            </p>
            <CtaButton
              asLink
              href="#consult"
              className="mt-6 bg-[#87CEEB] text-neutral-900 hover:bg-[#79c9f0]"
              aria-label="Request a consultation"
            >
              Book a Consultation
            </CtaButton>
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 translate-y-6 bg-gradient-to-t from-black/5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"/>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================
// Section 3 - Product Hero (Metformin style)
// =============================

export const ProductHeroMetformin: React.FC = () => {
  return (
    <section aria-label="Smile Spa Wellness Peptide Membership hero" className="bg-[#dfeff5] py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-12">
        {/* Bottle / visual */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -z-10 h-72 w-72 rounded-full bg-white/70 blur-2xl" aria-hidden />
          <img
            src="/pics/app.png"
            alt="Peptide vials and syringes on a clean background"
            className="h-[360px] w-auto object-contain drop-shadow-xl"
          />
          <div className="absolute right-10 top-6 rounded-full bg-[#87CEEB] px-4 py-3 text-center text-sm font-bold text-neutral-900 shadow-lg">
            From $XX/mo
            <div className="text-xs font-medium">Membership pricing</div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900">
            Smile Spa Wellness Peptide Memberships
          </h2>
          <div className="mt-2 h-1 w-14 rounded" style={{ backgroundColor: '#87CEEB' }} aria-hidden />
          <p className="mt-4 max-w-xl text-lg text-neutral-800">
            Instant access to prescription‑strength peptides designed for men and women ready to build strength, reclaim metabolism, and feel alive again — under licensed medical supervision.
          </p>

          <ul className="mt-6 space-y-3 text-neutral-900">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" aria-hidden /> Doctor‑supervised, prescription‑only peptides</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" aria-hidden /> Tailored for men & women — strength, tone, vitality</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" aria-hidden /> Glucose monitor + smart scale included on select plans</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" aria-hidden /> Lab‑tested quality; medical oversight</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" aria-hidden /> Ongoing support from the Smile Spa Wellness team</li>
          </ul>

          <div className="mt-6 rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-700">
            <div>
              <span className="font-semibold">Members Note:</span> Pricing is subject to change; limited spots available.
            </div>
          </div>

          <CtaButton
            asLink
            href="https://meet.makewellness.com/"
            className="mt-6 bg-[#87CEEB] text-neutral-900 hover:bg-[#79c9f0]"
            aria-label="Visit Make Wellness"
          >
            Visit Make Wellness
          </CtaButton>

          <a href="#consult" className="mt-4 ml-4 inline-block text-sm font-semibold underline decoration-2 underline-offset-4">
            Or, book a consultation
          </a>
        </div>
      </div>
    </section>
  );
};

// =============================
// Section 4 - Problems Intro (two-column) - with scrolling/fade list
// =============================

// Fade-in hook scoped to a scrollable root
const useFadeInWithin = (rootRef: React.RefObject<Element | null>) => {
  const ref = React.useRef<HTMLLIElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const root = rootRef.current ?? null;
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { root, threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootRef]);

  return { ref, visible } as const;
};

const ScrollPillItem: React.FC<{ label: string; rootRef: React.RefObject<Element | null> }>
  = ({ label, rootRef }) => {
  const { ref, visible } = useFadeInWithin(rootRef);
  return (
    <li
      ref={ref}
      className={[
        "flex items-center rounded-2xl border border-zinc-100 bg-white px-6 py-5",
        "shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      ].join(" ")}
    >
      <span className="mr-3 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full" style={{ backgroundColor: '#87CEEB', boxShadow: '0 0 0 4px rgba(135,206,235,0.25)' }} aria-hidden />
      <span className="text-xl font-medium leading-none text-zinc-800">{label}</span>
    </li>
  );
};

export const ProblemsIntro: React.FC = () => {
  const listRef = React.useRef<HTMLUListElement | null>(null);
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const pauseRef = React.useRef(false);
  const items = ["Fatigue", "Muscle loss", "Brain fog", "Weight gain", "Menopause"];
  const scrollItems = React.useMemo(() => [...items, ...items], [items]);
  const offsetRef = React.useRef(0);

  // Smooth auto-scroll with seamless loop; respects reduced motion and pauses on hover
  React.useEffect(() => {
    const listEl = listRef.current;
    if (!listEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let last = performance.now();
    const pxPerSecond = 12; // slowed by 2x

    const tick = (t: number) => {
      const dt = Math.min(48, t - last);
      last = t;
      if (!pauseRef.current) {
        const dy = (pxPerSecond * dt) / 1000;
        offsetRef.current += dy;
        const half = listEl.scrollHeight / 2;
        if (offsetRef.current >= half) {
          offsetRef.current -= half;
        }
        listEl.style.transform = `translateY(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="bg-[#fcfaf8] py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2">
        {/* Left copy */}
        <div className="pt-4">
          <h2 className="text-[clamp(2rem,5vw,3rem)] leading-tight font-semibold text-neutral-900 [text-wrap:balance]">
            Most healthcare waits for something to go wrong
          </h2>
          <p className="mt-4 max-w-md text-neutral-600">
            Designed to meet you where you are - this is your health journey, we’re just here to support it
          </p>
          <a
            href="#treatments"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#87CEEB] px-6 py-3 text-base font-semibold text-black hover:bg-[#79c9f0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB]/60"
          >
            Explore treatments
          </a>
        </div>

        {/* Right scrollable pills with gradient fades */}
        <div className="relative">
          {/* Top/Bottom fade masks - deep, but moved further out to reveal more */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 md:h-32 bg-gradient-to-b from-[#fcfaf8] via-[#fcfaf8] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 md:h-32 bg-gradient-to-t from-[#fcfaf8] via-[#fcfaf8] to-transparent" />

          <div
            ref={viewportRef}
            className="relative max-h-[640px] md:max-h-[720px] overflow-hidden pr-1 touch-none"
            onMouseEnter={() => (pauseRef.current = true)}
            onMouseLeave={() => (pauseRef.current = false)}
          >
          <ul
            ref={listRef}
              className="space-y-4 will-change-transform"
            aria-label="Common concerns list"
          >
                {scrollItems.map((label, i) => (
                  <ScrollPillItem key={`${label}-${i}`} label={label} rootRef={viewportRef} />
            ))}
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================
// Section 5 - "For every body, every step" Mosaic Grid
// =============================

// Reveal + animate helper for the stat circle
const useProgressReveal = (target = 92, duration = 1200) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = React.useState(0);
  const playedRef = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !playedRef.current) {
            playedRef.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const pct = Math.min(1, (t - start) / duration);
              setProgress(Math.round(pct * target));
              if (pct < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, progress } as const;
};

const StatCircle: React.FC<{ value?: number }> = ({ value = 92 }) => {
  const { ref, progress } = useProgressReveal(value, 1300);
  const r = 44;
  const C = 2 * Math.PI * r; // ~276
  const offset = C * (1 - progress / 100);
  const angle = (progress / 100) * 360;

  return (
    <div
      ref={ref}
      className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-neutral-900 text-white shadow-sm ring-1 ring-black/10"
      aria-label={`Positive change statistic ${progress}%`}
    >
      {/* Ring */}
      <svg viewBox="0 0 100 100" className="absolute h-[88%] w-[88%]">
        <circle cx="50" cy="50" r={r} className="fill-none stroke-white/15" strokeWidth="2" />
        <circle
          cx="50"
          cy="50"
          r={r}
          className="fill-none stroke-white/70 transition-[stroke-dashoffset] duration-300"
          strokeDasharray={C}
          strokeDashoffset={offset}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Orbiting dot */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: 'rotate(' + angle + 'deg)' }}
      >
        <div className="relative h-[88%] w-[88%]">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 h-3 w-3 rounded-full bg-white/80 shadow" />
        </div>
      </div>

      {/* Value */}
      <div className="text-5xl font-semibold">+{progress}%<span className="align-top text-lg">*</span></div>
      <div className="pointer-events-none absolute bottom-5 left-6 right-6 text-xs text-white/70">
        Of ReadyRX patients reported a positive change since starting a treatment <span className="opacity-60">*of reporting patients</span>
      </div>
    </div>
  );
};

export const EveryBodyGrid: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900">
          Recommended by top performers and nutrition <span className="accent-serif italic">experts</span>
        </h2>
        <p className="mt-3 text-neutral-600">
          No. 1 choice for the world’s top health, nutrition and human performance experts
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <figure className="overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
              src="/pics/team/aimee2-team.png"
                alt="Kristen Holmes"
                className="object-top-[25%_75%]"
                loading="lazy"
            />
          </div>
            <blockquote className="px-6 pb-4 pt-5 text-neutral-800">
              “What you put into your body really matters. In today's world life is pretty busy, and to have a suite of
              products that I can trust - that fill the gaps in times where I can't get a full meal - gives me that level of
              assurance I feel really good about.”
            </blockquote>
            <figcaption className="flex items-start gap-2 px-6 pb-6">
              <div>
                <div className="flex items-center gap-2 font-semibold text-neutral-900">
                  Kristen Holmes
                  <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400">
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1a2 2 0 0 1 4 0c.3.37.8.56 1.28.43A2 2 0 0 1 14.53 3.17c.03.55.36 1.07.86 1.27A2 2 0 0 1 16.73 7.8c-.3.47-.3 1.06 0 1.53a2 2 0 0 1-1.34 3l-.2 3.05A2 2 0 0 1 12.07 16.3c-.48.13-.98-.06-1.27-.43A2 2 0 0 1 7 17a2 2 0 0 1-3.03-1.47c-.03-.55-.36-1.07-.86-1.27A2 2 0 0 1 .31 9.92c.3-.47.3-1.06 0-1.53A2 2 0 0 1 1.26 4.9c.5-.2.83-.72.86-1.27A2 2 0 0 1 4.97 1.38C5.45 1.5 5.95 1.32 6.23.92Z" fill="#00C8FD"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.88 6.68c.28.3.26.78-.06 1.06L8.38 11.9c-.3.28-.76.28-1.04 0L4.66 9.21a.75.75 0 1 1 1.06-1.06l1.16 1.16 3.93-3.67a.75.75 0 0 1 1.06.04Z" fill="#fff"/>
                    </svg>
                  </span>
            </div>
                <p className="text-sm text-neutral-600">Principal Scientist at WHOOP</p>
          </div>
            </figcaption>
          </figure>

          {/* Card 2 */}
          <figure className="overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/pics/team/jude.png"
                className="object-top-[5%_95%]"
                loading="lazy"
              />
          </div>
            <blockquote className="px-6 pb-4 pt-5 text-neutral-800">
              “I’ve been a Hueligan for several years now, starting my journey while preparing for my role in Thor. I
              believe in their mission to deliver nutritionally complete food, sustainably.”
            </blockquote>
            <figcaption className="flex items-start gap-2 px-6 pb-6">
              <div>
                <div className="flex items-center gap-2 font-semibold text-neutral-900">
                  Idris Elba
                  <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400">
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1a2 2 0 0 1 4 0c.3.37.8.56 1.28.43A2 2 0 0 1 14.53 3.17c.03.55.36 1.07.86 1.27A2 2 0 0 1 16.73 7.8c-.3.47-.3 1.06 0 1.53a2 2 0 0 1-1.34 3l-.2 3.05A2 2 0 0 1 12.07 16.3c-.48.13-.98-.06-1.27-.43A2 2 0 0 1 7 17a2 2 0 0 1-3.03-1.47c-.03-.55-.36-1.07-.86-1.27A2 2 0 0 1 .31 9.92c.3-.47.3-1.06 0-1.53A2 2 0 0 1 1.26 4.9c.5-.2.83-.72.86-1.27A2 2 0 0 1 4.97 1.38C5.45 1.5 5.95 1.32 6.23.92Z" fill="#00C8FD"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.88 6.68c.28.3.26.78-.06 1.06L8.38 11.9c-.3.28-.76.28-1.04 0L4.66 9.21a.75.75 0 1 1 1.06-1.06l1.16 1.16 3.93-3.67a.75.75 0 0 1 1.06.04Z" fill="#fff"/>
                    </svg>
                  </span>
          </div>
                <p className="text-sm text-neutral-600">Actor & Huel Investor</p>
              </div>
            </figcaption>
          </figure>

          {/* Card 3 */}
          <figure className="overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200">
            <div className="aspect-[4/3] w-full overflow-hidden">
            <img
                src="https://images.ctfassets.net/z5siblnwi90s/1ZCKCTi6c6NSywvazTPnCp/dca7c32191c048bcf150cbfd21916902/Frame_48099171.png?fm=png&w=1200&q=35"
                alt="Steven Bartlett"
              className="h-full w-full object-cover"
                loading="lazy"
            />
          </div>
            <blockquote className="px-6 pb-4 pt-5 text-neutral-800">
              “Huel is an ally on my busiest days. Even when I’m pursuing my professional goals; my health goals can be
              pursued at the same time.”
            </blockquote>
            <figcaption className="flex items-start gap-2 px-6 pb-6">
              <div>
                <div className="flex items-center gap-2 font-semibold text-neutral-900">
                  Steven Bartlett
                  <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400">
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1a2 2 0 0 1 4 0c.3.37.8.56 1.28.43A2 2 0 0 1 14.53 3.17c.03.55.36 1.07.86 1.27A2 2 0 0 1 16.73 7.8c-.3.47-.3 1.06 0 1.53a2 2 0 0 1-1.34 3l-.2 3.05A2 2 0 0 1 12.07 16.3c-.48.13-.98-.06-1.27-.43A2 2 0 0 1 7 17a2 2 0 0 1-3.03-1.47c-.03-.55-.36-1.07-.86-1.27A2 2 0 0 1 .31 9.92c.3-.47.3-1.06 0-1.53A2 2 0 0 1 1.26 4.9c.5-.2.83-.72.86-1.27A2 2 0 0 1 4.97 1.38C5.45 1.5 5.95 1.32 6.23.92Z" fill="#00C8FD"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.88 6.68c.28.3.26.78-.06 1.06L8.38 11.9c-.3.28-.76.28-1.04 0L4.66 9.21a.75.75 0 1 1 1.06-1.06l1.16 1.16 3.93-3.67a.75.75 0 0 1 1.06.04Z" fill="#fff"/>
                    </svg>
                  </span>
                </div>
                <p className="text-sm text-neutral-600">Entrepreneur</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

// =============================
// Section 6 - Pricing (sky hero + three cards)
// =============================

/* PricingSection removed for redesign */

// =============================
// Section 6 (rebuilt) - Pricing (4 tiers with highlighted plan)
// =============================

type Plan = {
  name: string;
  blurb: string;
  price: string;
  cadence?: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Free',
    blurb: 'Everything you need to get started',
    price: '$0',
    cadence: 'per month\nbilled monthly',
    features: [
      '1 seat',
      'Discovery',
      'Campaigns',
      'Live Campaigns',
      'Vetted approval',
    ],
    cta: 'Select Free',
  },
  {
    name: 'Growth',
    blurb: 'Perfect for teams looking to grow their brand',
    price: '$199',
    cadence: 'per month\nbilled monthly',
    features: [
      'Instant start - no vetting',
      'Up to 3 seats',
      'Personalized creator picks',
      'Procurement payments',
      'Campaign exports',
      'Pro Badge',
    ],
    cta: 'Select Growth',
    highlight: true,
  },
  {
    name: 'Scale',
    blurb: 'Designed for teams running campaigns at scale',
    price: '$499',
    cadence: 'per month\nbilled monthly',
    features: [
      'Up to 6 seats',
      'Mass outreach',
      'Live Campaign broadcast',
    ],
    cta: 'Select Scale',
  },
  {
    name: 'Enterprise',
    blurb: 'For large organizations with custom needs',
    price: 'Custom',
    features: [
      'Even more seats',
      'Payments wallet',
      'Custom payment setup',
      'Premium placement of Live Campaigns',
    ],
    cta: 'Talk to Sales',
  },
];

const CheckIcon = () => (
  <IconCircleCheckFilled aria-hidden size={24} className="mt-0.5 shrink-0 text-black" />
);

export const PricingRebuilt: React.FC = () => {
  return (
    <section aria-label="Pricing" className="bg-white py-28">
      <div className="mx-auto max-w-[88rem] px-6">
        <div className="text-center">
          <h2 className="text-[clamp(3rem,8vw,5.5rem)] font-semibold leading-tight tracking-tight text-neutral-900">Unleash your brand</h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-neutral-600">Use our platform for free to unlock growth. If you're an enterprise needing procurement support — we'll help you out!</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
           {plans.map((p) => (
             <div
              key={p.name}
                className={[
                 'relative rounded-3xl p-8 xl:p-10 ring-1 ring-inset ring-neutral-200 shadow-sm flex h-full flex-col',
                p.highlight
                  ? 'bg-white shadow-[0_30px_90px_-25px_rgba(135,206,235,0.35)] ring-[#87CEEB]/40'
                  : 'bg-white',
                ].join(' ')}
              >
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#87CEEB] px-4 py-1.5 text-base font-semibold text-black">Most popular</div>
              )}

              {/* Remove deep blue glow; keep gentle shadow above */}

               <div>
                <h3 className="text-2xl font-semibold text-neutral-900">{p.name}</h3>
                <p className="mt-2 text-lg text-neutral-600">{p.blurb}</p>
                <div className="mt-10">
                  <div className="text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">{p.price}</div>
                  {p.cadence && p.price !== 'Custom' && (
                    <div className="mt-5 text-neutral-500 leading-7">
                      {p.cadence.split('\n').map((line, i) => (
                        <div key={i} className={i === 0 ? 'text-xl' : 'text-base'}>{line}</div>
                      ))}
            </div>
                  )}
            </div>
          </div>

              <ul className="mt-10 space-y-4 text-neutral-800">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base xl:text-lg">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
            </ul>

               <a
                href="#pricing-cta"
               className={[
                  'mt-auto inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-base xl:text-lg font-semibold transition',
                   // All buttons black except Talk to Sales (Enterprise)
                   (p.name === 'Enterprise' || /sales/i.test(p.cta))
                     ? 'bg-[#87CEEB] text-black hover:bg-[#79c9f0]'
                     : 'bg-neutral-900 text-white hover:bg-black',
                 ].join(' ')}
                aria-label={p.cta}
              >
                {p.cta}
            </a>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================
// Section 7 - GLP-1s Weight Loss Calculator
// =============================

export const GlpCalculatorSection: React.FC = () => {
  const min = 100;
  const max = 400;
  const [weight, setWeight] = React.useState<number>(265);

  const pct = (weight - min) / (max - min);
  const estLoss = Math.round(weight * 0.149); // 14.9%

  const handleChange = (v: number) => {
    const clamped = Math.max(min, Math.min(max, v));
    setWeight(clamped);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Left copy */}
        <div>
          <h2 className="text-[clamp(2rem,5vw,3rem)] leading-tight font-semibold tracking-tight text-neutral-900">
            There's a reason why <br /> everyone is talking about <br /> GLP-1s. It works.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-neutral-700">
            On average, people on Semaglutide lose <span className="font-semibold">14.9%</span> of their weight in a year<span aria-hidden>*</span>.
          </p>
        </div>

        {/* Right interactive */}
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold text-blue-900">Your current weight:</div>
          <div className="mt-3 rounded-full bg-blue-900 px-6 py-3 text-2xl font-semibold text-white shadow-md">
            {weight}
          </div>

          {/* Custom slider with large thumb */}
          <div className="relative mt-10 w-full max-w-xl">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 rounded-full bg-blue-100" style={{height: 6}} aria-hidden />
            {/* Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-14 w-14 -translate-x-1/2 rounded-full bg-blue-900 shadow-md"
              style={{ left: 'calc(' + (pct * 100) + '% )' }}
              aria-hidden
            />
            {/* Transparent native range for a11y/keyboard */}
            <input
              type="range"
              min={min}
              max={max}
              value={weight}
              onChange={(e) => handleChange(Number(e.target.value))}
              className="relative z-10 h-10 w-full cursor-pointer appearance-none bg-transparent"
              aria-label="Weight in pounds"
            />
          </div>

          {/* Result bubble */}
          <div className="mt-12 w-full max-w-xl rounded-[2.5rem] bg-blue-100 px-8 py-8 text-blue-900">
            <div className="text-center text-xl font-semibold">You could easily lose:</div>
            <div className="mt-2 text-center text-[48px] font-extrabold" aria-live="polite">
              {estLoss} <span className="text-3xl font-semibold">lbs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================
// Section 8 - Funnel Intro (text-focused promise)
// =============================

export const FunnelIntroSection: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-inset ring-black/10">
          <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden /> New formula, same doctors
        </p>
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900">
          Lose stubborn weight without white‑knuckle dieting.
        </h2>
        <p className="mt-4 text-lg text-neutral-700">
          Our doctor-guided program combines clinically backed ingredients with simple daily routines so you can finally see progress that lasts.
        </p>
        <ul className="mt-6 grid list-outside grid-cols-1 gap-3 text-neutral-800 md:grid-cols-3">
          <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden /> Steady weekly loss without jitters</li>
          <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden /> Curb cravings and late‑night snacking</li>
          <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden /> Support for energy, mood and sleep</li>
        </ul>
      </div>
    </section>
  );
};

// =============================
// Section 9 - Funnel Benefits (text cards)
// =============================

const BenefitCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-black/5">
    <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
    <p className="mt-2 text-neutral-700">{children}</p>
  </div>
);

export const FunnelBenefitsSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900">Why this program works</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <BenefitCard title="Metabolic support">
            Nutrients selected to help improve insulin sensitivity and fat oxidation while keeping energy steady throughout the day.
          </BenefitCard>
          <BenefitCard title="Appetite control">
            Gentle actives that help you feel satisfied faster so portions shrink naturally without strict rules.
          </BenefitCard>
          <BenefitCard title="Consistency built in">
            A simple once‑daily routine, reminders and progress tracking keep you on course even when life gets busy.
          </BenefitCard>
        </div>
      </div>
    </section>
  );
};

// =============================
// Section 10 - Funnel Evidence (text only)
// =============================

export const FunnelEvidenceSection: React.FC = () => {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900">Clinically guided. Transparent results.</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <div className="text-4xl font-semibold text-neutral-900">14.9%</div>
            <p className="mt-1 text-neutral-700">Average body‑weight loss reported in a year with GLP‑1 therapy when paired with lifestyle changes.*</p>
          </div>
          <div>
            <div className="text-4xl font-semibold text-neutral-900">92%</div>
            <p className="mt-1 text-neutral-700">Members who reported a positive change after starting their plan.*</p>
          </div>
          <div>
            <div className="text-4xl font-semibold text-neutral-900">Zero</div>
            <p className="mt-1 text-neutral-700">Stimulants or harsh laxatives. Just thoughtful, doctor‑guided support.</p>
          </div>
        </div>
        <p className="mt-4 text-xs text-neutral-500">*Individual results vary. Our program is designed to support healthy habits and should be used with diet and exercise guidance from your clinician.</p>
      </div>
    </section>
  );
};

// =============================
// Section 11 - Funnel Testimonials (text quotes)
// =============================

const QuoteCard: React.FC<{ quote: string; name: string; meta?: string }> = ({ quote, name, meta }) => (
  <figure className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/10">
    <blockquote className="text-neutral-900">“{quote}”</blockquote>
    <figcaption className="mt-3 text-sm text-neutral-600">— {name}{meta ? ', ' + meta : ''}</figcaption>
  </figure>
);

export const FunnelTestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900">Real members. Real momentum.</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <QuoteCard quote="Down 18 lbs in 10 weeks without feeling deprived." name="Kelly R." meta="age 42" />
          <QuoteCard quote="The cravings finally quieted. I actually enjoy meals again." name="Marcus T." meta="age 37" />
          <QuoteCard quote="Easy to stick with. The weekly check‑ins kept me honest." name="Priya V." meta="age 33" />
        </div>
      </div>
    </section>
  );
};

// =============================
// Section 12 - Funnel Guarantee + CTA (text dominant)
// =============================

export const FunnelGuaranteeCtaSection: React.FC = () => {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-black/10">
          <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden /> 30-day money-back guarantee
        </div>
        <h2 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900">
          Try it for yourself — feel the difference in weeks
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-700">
          Start today with no risk. If you don’t love your results in the first 30 days, we’ll refund you. No hoops. Just honest support for your goals.
        </p>
        <a
          href="#get-started"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-black"
        >
          Get started now
        </a>
        <div className="mt-3 text-xs text-neutral-500">Results vary. Always consult your clinician for medical advice.</div>
      </div>
    </section>
  );
};



