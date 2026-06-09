"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "@/lib/data";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

async function parseJsonSafe(response: Response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as { success?: boolean; message?: string };
  } catch {
    return {};
  }
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError(
        `Form is not configured yet. Please email me directly at ${personalInfo.email}`,
      );
      setLoading(false);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `Portfolio message from ${name}`,
          from_name: "Sakshi Saini Portfolio",
        }),
      });

      const data = await parseJsonSafe(response);

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ??
            "Something went wrong. Please try again or email me directly.",
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : `Failed to send. Please email me at ${personalInfo.email}`,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-xl">
        <SectionHeading
          emoji="💌"
          title="Let's Connect!"
          subtitle="I'd love to hear from you — whether it's about testing frameworks, travel itineraries, or social theories."
        />

        <FadeIn delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl border border-peach/30 bg-white/80 p-8 shadow-md backdrop-blur-sm">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-peach/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-lavender/20 blur-2xl" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-2 border-b border-peach/20 pb-4">
                <Sparkles className="h-5 w-5 text-rose" />
                <span className="text-sm font-medium text-warm-brown/70">
                  A cozy postcard just for you
                </span>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <span className="text-4xl">🎉</span>
                    <p className="mt-4 text-lg font-bold text-foreground">
                      Message sent!
                    </p>
                    <p className="mt-2 text-sm text-warm-brown/70">
                      Thanks for reaching out — I&apos;ll get back to you at{" "}
                      {personalInfo.email} soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-medium text-rose/80 underline-offset-2 hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-warm-brown"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={loading}
                        placeholder="What should I call you?"
                        className="w-full rounded-2xl border border-peach/30 bg-vanilla/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-warm-brown/40 focus:border-rose/50 focus:ring-2 focus:ring-rose/20 disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-warm-brown"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={loading}
                        placeholder="your@email.com"
                        className="w-full rounded-2xl border border-peach/30 bg-vanilla/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-warm-brown/40 focus:border-rose/50 focus:ring-2 focus:ring-rose/20 disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-warm-brown"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        disabled={loading}
                        rows={4}
                        placeholder="Let's chat about testing frameworks, travel itineraries, or social theories!"
                        className="w-full resize-none rounded-2xl border border-peach/30 bg-vanilla/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-warm-brown/40 focus:border-rose/50 focus:ring-2 focus:ring-rose/20 disabled:opacity-60"
                      />
                    </div>

                    {error && (
                      <p className="rounded-2xl bg-rose/15 px-4 py-3 text-sm text-warm-brown">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-6 py-3.5 text-sm font-semibold text-cream shadow-md transition-all hover:-translate-y-0.5 hover:bg-warm-brown hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              <p className="mt-6 border-t border-peach/15 pt-5 text-center text-sm text-warm-brown/70">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-medium text-foreground hover:text-rose/80"
                >
                  {personalInfo.email}
                </a>
                <span className="mx-2 text-warm-brown/30">·</span>
                <a
                  href={personalInfo.phoneHref}
                  className="font-medium text-foreground hover:text-rose/80"
                >
                  {personalInfo.phone}
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
