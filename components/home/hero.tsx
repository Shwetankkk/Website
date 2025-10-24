"use client";

import { useEffect, useMemo, useState } from "react";
import type { PressEvent } from "@react-aria/interactions";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { Hole } from "@/components/backgrounds/hole/hole";
import { DATA } from "@/data";

const GREETINGS = [
  "Hi",
  "Hola",
  "Bonjour",
  "नमस्ते", // Namaste (Hindi)
  "Olá",
  "Ciao",
  "Hallo",
  "Salut",
];

export const HeroSection = ({
  showBackground = true,
  name = DATA.home.hero.name,
  title = DATA.home.hero.title,
  greetings = GREETINGS,
  rotateMs = 1800,
}: {
  showBackground?: boolean;
  name?: string;
  title?: string;
  greetings?: string[];
  rotateMs?: number;
}) => {
  const prefersReducedMotion = useReducedMotion();
  const words = useMemo(
    () => (greetings && greetings.length ? greetings : GREETINGS),
    [greetings]
  );
  const [i, setI] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), rotateMs);
    return () => clearInterval(t);
  }, [prefersReducedMotion, rotateMs, words.length]);

  const scrollToWork = (_e: PressEvent) => {
    document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background ripple effect */}
      {showBackground && <Hole />}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent" />

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Rotating greeting + name */}
          <h1 className="mb-6 font-extrabold leading-tight text-4xl md:text-7xl">
            <span className="inline-flex items-baseline gap-2 md:gap-3">
              <span className="inline-flex min-w-[5ch] md:min-w-[6ch] justify-end">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={words[i]}
                    className="bg-gradient-to-r from-[#A3E0FF] to-[#C77DFF] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(199,125,255,0.35)]"
                    initial={prefersReducedMotion ? { opacity: 0 } : { y: 16, opacity: 0 }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { y: -16, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    aria-live="polite"
                  >
                    {words[i]},
                  </motion.span>
                </AnimatePresence>
              </span>

              <span className="bg-gradient-to-r from-[#A3E0FF] to-[#C77DFF] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(199,125,255,0.35)]">
                I&apos;m {name}.
              </span>
            </span>
          </h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-foreground-600 text-xl md:text-3xl mb-6"
          >
            {title}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <Link
              download
              href="/Shwetank_Singh_CV.pdf"
              aria-label="Download CV in PDF format"
              className="w-full sm:w-auto"
            >
              <Button
                fullWidth
                aria-label="Download CV"
                color="primary"
                size="lg"
                variant="shadow"
                endContent={<Icon icon="lucide:download" />}
              >
                Download CV
              </Button>
            </Link>

            <Button
              fullWidth
              aria-label="View Work"
              className="w-full sm:w-auto"
              color="primary"
              size="lg"
              variant="bordered"
              endContent={<Icon icon="lucide:arrow-down" />}
              onPress={scrollToWork}
            >
              View Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
