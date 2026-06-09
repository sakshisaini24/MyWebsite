"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import FadeIn from "./FadeIn";
import { mapPins } from "@/lib/data";

const TravelMapLeaflet = dynamic(() => import("./TravelMapLeaflet"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[380px] items-center justify-center rounded-2xl bg-vanilla/60 sm:h-[420px]">
      <p className="text-sm text-warm-brown/50">Loading map…</p>
    </div>
  ),
});

const chipStyles = {
  home: "ring-rose/50 bg-rose/15",
  current: "ring-sage/50 bg-sage/15",
  visited: "ring-peach/50 bg-peach/10",
  international: "ring-lavender/50 bg-lavender/15",
} as const;

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

        <TravelMapLeaflet activeId={activeId} onSelect={setActiveId} />

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {mapPins.map((pin) => (
            <button
              key={pin.id}
              onClick={() => setActiveId(pin.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:text-sm ${
                activeId === pin.id
                  ? `ring-2 ${chipStyles[pin.type]} text-foreground shadow-sm`
                  : "bg-vanilla text-warm-brown hover:bg-peach/20"
              }`}
            >
              {pin.emoji} {pin.name.split(",")[0]}
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
