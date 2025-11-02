"use client";

import React, { useEffect, useRef, useState } from "react";

type Slide = { image: string };

const slides: Slide[] = [
  { image: "/pics/hero-1.png" },
  { image: "/pics/hero-2.png" },
  { image: "/pics/hero-3.png" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const total = slides.length;

  const goTo = (i: number) => setIndex(((i % total) + total) % total);
  const next = () => goTo(index + 1);

  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [total]);

  return (
    <section id="hero" className="relative h-[80vh] sm:h-[85vh] w-full overflow-hidden bg-blue-900" aria-roledescription="carousel" aria-label="Hero">
      <div
        className="h-full w-full"
        style={{ transform: `translateX(-${index * 120}vw)`, transition: "transform 700ms ease-out", display: "flex" }}
      >
        {slides.map((s, i) => (
          <div key={i} className="relative h-full w-[120vw] shrink-0">
            <img src={s.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}


