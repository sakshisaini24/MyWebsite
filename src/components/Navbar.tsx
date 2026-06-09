"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Plane, Mail } from "lucide-react";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#experience", label: "Experience & Projects", icon: Briefcase },
  { href: "#travel", label: "Travel & Perspectives", icon: Plane },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2"
    >
      <div className="flex items-center justify-center gap-1 rounded-3xl border border-white/60 bg-white/70 px-2 py-2 shadow-md backdrop-blur-md sm:gap-2 sm:px-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex items-center gap-1.5 rounded-2xl px-3 py-2 text-sm font-medium text-warm-brown transition-all hover:bg-peach/30 hover:text-foreground sm:px-4"
          >
            <link.icon className="h-4 w-4 text-rose/80 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline">{link.label}</span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
