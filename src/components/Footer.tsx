import { Code2, Share2, Camera, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-peach/20 bg-vanilla/50 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <p className="max-w-md text-sm leading-relaxed text-warm-brown/80">
          Thanks for stopping by! Whether you&apos;re here for code, travel stories,
          or curious conversations — I&apos;m glad you visited. ✨
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-warm-brown/80">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm transition-all hover:bg-peach/20"
          >
            <Mail className="h-3.5 w-3.5" />
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.phoneHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm transition-all hover:bg-sage/20"
          >
            <Phone className="h-3.5 w-3.5" />
            {personalInfo.phone}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-peach/30 hover:shadow-md"
          >
            <Code2 className="h-5 w-5 text-warm-brown" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-rose/30 hover:shadow-md"
          >
            <Share2 className="h-5 w-5 text-warm-brown" />
          </a>
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-lavender/30 hover:shadow-md"
          >
            <Camera className="h-5 w-5 text-warm-brown" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-sage/30 hover:shadow-md"
          >
            <Mail className="h-5 w-5 text-warm-brown" />
          </a>
        </div>

        <p className="text-xs text-warm-brown/50">
          © {year} {personalInfo.name}. Made with warmth & curiosity.
        </p>
      </div>
    </footer>
  );
}
