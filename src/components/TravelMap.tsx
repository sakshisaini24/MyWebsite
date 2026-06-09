"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import FadeIn from "./FadeIn";
import { mapPins } from "@/lib/data";

const pinStyles = {
  home: "bg-rose shadow-[0_0_0_4px_rgba(232,180,184,0.4)]",
  current: "bg-sage shadow-[0_0_0_4px_rgba(181,201,168,0.45)]",
  visited: "bg-peach/90 shadow-sm",
  international: "bg-lavender shadow-sm",
} as const;

const legend = [
  { label: "Home", color: "bg-rose", type: "home" as const },
  { label: "Current", color: "bg-sage", type: "current" as const },
  { label: "Visited", color: "bg-peach/90", type: "visited" as const },
  { label: "International", color: "bg-lavender", type: "international" as const },
];

export default function TravelMap() {
  const [activeId, setActiveId] = useState("pune");
  const active = mapPins.find((p) => p.id === activeId) ?? mapPins[0];

  return (
    <FadeIn delay={0.15} className="mt-16">
      <div className="rounded-3xl border border-white/80 bg-white/60 p-6 shadow-sm backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex items-center justify-center gap-2 text-sm font-semibold text-warm-brown">
          <MapPin className="h-4 w-4 text-rose" />
          My Travel Map
        </div>

        <div className="relative mx-auto aspect-[4/3] max-w-2xl overflow-hidden rounded-2xl bg-gradient-to-br from-sage/15 via-vanilla to-peach/10">
          <svg
            viewBox="0 0 100 75"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <path
              d="M18 38 C22 28 30 20 42 18 C52 16 58 14 62 18 C68 22 72 28 70 36 C68 44 62 52 54 58 C46 64 36 68 28 66 C22 64 18 58 16 50 C14 44 15 40 18 38 Z"
              fill="#b5c9a8"
              fillOpacity="0.25"
              stroke="#b5c9a8"
              strokeWidth="0.4"
              strokeOpacity="0.5"
            />
            <path
              d="M76 42 C80 38 86 40 88 46 C90 52 86 58 80 60 C74 62 70 58 72 52 C74 46 74 44 76 42 Z"
              fill="#c9b8e0"
              fillOpacity="0.3"
              stroke="#c9b8e0"
              strokeWidth="0.35"
              strokeOpacity="0.5"
            />
            <text x="38" y="48" fontSize="3" fill="#6b5b4e" opacity="0.35" fontFamily="sans-serif">
              India
            </text>
            <text x="78" y="56" fontSize="2.5" fill="#6b5b4e" opacity="0.35" fontFamily="sans-serif">
              Thailand
            </text>
          </svg>

          {mapPins.map((pin) => {
            const isActive = pin.id === activeId;
            return (
              <button
                key={pin.id}
                onClick={() => setActiveId(pin.id)}
                aria-label={`${pin.name}: ${pin.places.join(", ")}`}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/50"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              >
                {pin.type === "current" && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-sage/40" />
                )}
                <span
                  className={`relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-white sm:h-5 sm:w-5 ${pinStyles[pin.type]} ${isActive ? "scale-125 ring-2 ring-white" : ""}`}
                >
                  {isActive && (
                    <span className="text-[8px] sm:text-[9px]">{pin.emoji}</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {legend.map((item) => (
            <button
              key={item.type}
              onClick={() => {
                const first = mapPins.find((p) => p.type === item.type);
                if (first) setActiveId(first.id);
              }}
              className="flex items-center gap-1.5 rounded-full bg-vanilla/80 px-2.5 py-1 text-[11px] text-warm-brown/70 transition-all hover:bg-peach/20"
            >
              <span className={`h-2 w-2 rounded-full ${item.color}`} />
              {item.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-5 max-w-md rounded-2xl bg-vanilla/80 p-5 text-center"
          >
            <p className="text-lg font-bold text-foreground">
              {active.emoji} {active.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-warm-brown/75">
              {active.places.join(" · ")}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}
