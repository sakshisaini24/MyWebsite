"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";
import {
  galleryPhotos,
  visitedPlaces,
  funFacts,
  funFactColors,
} from "@/lib/data";

export default function TravelSection() {
  const [current, setCurrent] = useState(0);
  const [activePlace, setActivePlace] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const thumbStripRef = useRef<HTMLDivElement>(null);

  const total = galleryPhotos.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total],
  );

  const next = useCallback(
    () => goTo((current + 1) % total),
    [current, goTo, total],
  );
  const prev = useCallback(
    () => goTo((current - 1 + total) % total),
    [current, goTo, total],
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  useEffect(() => {
    const strip = thumbStripRef.current;
    if (!strip) return;
    const thumb = strip.children[current] as HTMLElement | undefined;
    if (!thumb) return;

    const scrollLeft =
      thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2;
    strip.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [current]);

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section id="travel" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="mb-14 text-center">
          <span className="mb-4 inline-block text-3xl">✈️</span>
          <blockquote className="mx-auto max-w-3xl space-y-4">
            <p className="font-[family-name:var(--font-caveat)] text-2xl leading-relaxed text-foreground sm:text-3xl lg:text-4xl">
              &ldquo;One day you&apos;ll leave this world behind — so live a life
              you will remember.&rdquo;
            </p>
            <p className="text-base leading-relaxed text-warm-brown/85 sm:text-lg">
              As Avicii said in{" "}
              <em className="font-medium text-rose/90">The Nights</em>. My father
              told me when I was just a child:{" "}
              <span className="font-semibold text-foreground">
                these are nights that never die.
              </span>
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="relative mx-auto w-full max-w-sm sm:max-w-md"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-peach/20 via-rose/10 to-lavender/15 blur-2xl" />

            <div className="relative group">
              <div className="absolute -right-2 -top-2 z-10 h-7 w-7 rounded-full bg-rose/45 shadow-sm" />

              <div className="rotate-1 rounded-sm bg-white p-3 pb-9 shadow-[0_12px_40px_-8px_rgba(107,91,78,0.2)] transition-transform duration-500 group-hover:rotate-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-vanilla/40">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={current}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={galleryPhotos[current].src}
                        alt={galleryPhotos[current].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 80vw, 400px"
                        priority={current < 2}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <button
                    onClick={prev}
                    aria-label="Previous photo"
                    className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-warm-brown/80 shadow-sm opacity-70 backdrop-blur-sm transition-all hover:bg-white sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next photo"
                    className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-warm-brown/80 shadow-sm opacity-70 backdrop-blur-sm transition-all hover:bg-white sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-3 text-center font-[family-name:var(--font-caveat)] text-lg leading-snug text-warm-brown/75">
                  {galleryPhotos[current].caption}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-1.5">
              {galleryPhotos.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => goTo(index)}
                  aria-label={`Go to photo ${index + 1}`}
                  className={`rounded-full transition-all ${
                    index === current
                      ? "h-2 w-5 bg-rose/70"
                      : "h-2 w-2 bg-peach/40 hover:bg-peach/60"
                  }`}
                />
              ))}
            </div>

            <div
              ref={thumbStripRef}
              className="mt-5 flex justify-center gap-2.5 overflow-x-auto px-2 pb-2 scrollbar-thin snap-x"
            >
              {galleryPhotos.map((photo, index) => (
                <button
                  key={`thumb-${index}`}
                  onClick={() => goTo(index)}
                  aria-label={`View photo ${index + 1}`}
                  aria-current={index === current}
                  className={`shrink-0 snap-center rounded-sm bg-white p-1 shadow-sm transition-all ${
                    index === current
                      ? "-translate-y-1 ring-2 ring-rose/40"
                      : "opacity-55 hover:opacity-90"
                  }`}
                >
                  <div className="relative h-10 w-14 overflow-hidden rounded-sm sm:h-11 sm:w-16">
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-16">
          <div className="rounded-3xl border border-white/80 bg-white/60 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <div className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold text-warm-brown">
              <Globe className="h-4 w-4 text-sage" />
              Places I&apos;ve Wandered
            </div>

            <div className="mb-5 flex flex-wrap justify-center gap-2">
              {visitedPlaces.map((place, index) => (
                <button
                  key={place.name}
                  onClick={() => setActivePlace(index)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:text-sm ${
                    activePlace === index
                      ? "bg-foreground text-cream shadow-sm"
                      : "bg-vanilla text-warm-brown hover:bg-peach/30"
                  }`}
                >
                  {place.emoji} {place.name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePlace}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mx-auto max-w-md rounded-2xl bg-vanilla/80 p-4 text-center"
              >
                <p className="text-sm font-medium text-foreground">
                  {visitedPlaces[activePlace].emoji}{" "}
                  {visitedPlaces[activePlace].name}
                </p>
                <p className="mt-1 text-xs text-warm-brown/70 sm:text-sm">
                  {visitedPlaces[activePlace].places.join(" · ")}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16">
          <div className="mb-8 text-center">
            <div className="mb-2 flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-rose" />
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Fun Facts About Me
              </h3>
              <Sparkles className="h-5 w-5 text-rose" />
            </div>
            <p className="text-sm text-warm-brown/70">
              The adventures, the adrenaline, and the dreams still on my list
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {funFacts.map((fact, index) => (
              <FadeIn key={fact.question} delay={index * 0.08}>
                <div
                  className={`flex h-full flex-col rounded-3xl border bg-gradient-to-br p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${funFactColors[fact.color]}`}
                >
                  <span className="mb-3 text-2xl">{fact.emoji}</span>
                  <h4 className="text-sm font-bold text-foreground">
                    {fact.question}
                  </h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-warm-brown/80">
                    {fact.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
