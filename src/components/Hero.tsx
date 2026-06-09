"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pb-20 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-peach/20 blur-3xl" />
        <div className="absolute -left-16 bottom-32 h-64 w-64 rounded-full bg-lavender/20 blur-3xl" />
        <div className="absolute right-1/3 top-1/2 h-48 w-48 rounded-full bg-sage/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-peach/30 px-4 py-1.5 text-sm font-medium text-warm-brown">
            <MapPin className="h-4 w-4" />
            Welcome to my corner of the internet
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {personalInfo.name}!{" "}
            <span className="inline-block animate-[wiggle_2s_ease-in-out_infinite]">
              ✨
            </span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-warm-brown/90 sm:text-xl">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-2xl bg-foreground px-6 py-3 text-sm font-semibold text-cream shadow-md transition-all hover:-translate-y-0.5 hover:bg-warm-brown hover:shadow-lg"
            >
              Explore my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#travel"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-peach/60 bg-white/80 px-6 py-3 text-sm font-semibold text-warm-brown shadow-sm transition-all hover:-translate-y-0.5 hover:border-rose/60 hover:bg-rose/10 hover:shadow-md"
            >
              See my adventures
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 0 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="group relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-peach/40 via-rose/30 to-lavender/40 opacity-60 blur-sm transition-opacity group-hover:opacity-80" />
            <div className="relative rotate-2 rounded-sm bg-white p-3 pb-10 shadow-lg transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]">
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src="/images/profile-pic.jpeg"
                  alt={`${personalInfo.name} profile photo`}
                  width={320}
                  height={380}
                  priority
                  className="h-auto w-full max-w-[280px] object-cover sm:max-w-[320px]"
                />
              </div>
              <p className="mt-3 text-center font-[family-name:var(--font-caveat)] text-lg text-warm-brown/70">
                hello, world! 👋
              </p>
            </div>
            <div className="absolute -right-2 -top-3 h-8 w-8 rounded-full bg-rose/60 shadow-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
