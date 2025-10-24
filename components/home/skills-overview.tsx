"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Card, CardBody } from "@heroui/react";

import { DATA } from "@/data";

/**
 * Small helper to match the hero gradient exactly.
 */
const GradientText: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <span
    className={`bg-gradient-to-r from-[#A3E0FF] to-[#C77DFF] bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);

/**
 * Chips to show under each category, without modifying your DATA.
 * You can edit these lists anytime; DATA.home.skills.overview stays the same.
 */
const SKILL_ITEMS: Record<string, string[]> = {
  "Programming Languages (C, C++, Python, Java, JavaScript)": [
    "C",
    "C++",
    "Python",
    "Java",
    "JavaScript",
  ],
  "Backend & APIs (Node, Flask, Spring Boot)": ["Node", "Flask", "Spring Boot"],
  "Frontend & Mobile (React, Flutter, Tailwind)": ["React", "Flutter", "Tailwind"],
  "Blockchain (Solidity, Web3.js, Truffle)": ["Solidity", "Web3.js", "Truffle"],
  "Observability (Zipkin, Jaeger, OTel)": ["Zipkin", "Jaeger", "OTel"],
  "Data Structures & Algorithms": ["Data Structures & Algorithms"],
  "Methods (Agile, Scrum, PDLC, XFN Collaboration)": [
    "Agile",
    "Scrum",
    "PDLC",
    "XFN Collaboration",
  ],
  "Cloud & DevOps (GCP, Docker, GitHub Actions)": ["GCP", "Docker", "GitHub Actions"],
};

/**
 * Optional pictograms for popular chips (keeps a subtle, consistent look).
 * Missing keys will simply render plain text chips.
 */
const CHIP_ICONS: Record<string, string> = {
  C: "mdi:language-c",
  "C++": "mdi:language-cpp",
  Python: "logos:python",
  Java: "mdi:language-java",
  JavaScript: "logos:javascript",
  React: "logos:react",
  Flutter: "logos:flutter",
  Tailwind: "logos:tailwindcss-icon",
  Node: "logos:nodejs-icon",
  Flask: "logos:flask",
  "Spring Boot": "logos:spring-icon",
  Solidity: "simple-icons:solidity",
  "Web3.js": "simple-icons:web3dotjs",
  Truffle: "simple-icons:trufflesuite",
  Zipkin: "simple-icons:zipkin",
  Jaeger: "simple-icons:jaegertracing",
  OTel: "simple-icons:opentelemetry",
  GCP: "logos:google-cloud",
  Docker: "logos:docker-icon",
  "GitHub Actions": "octicon:actions-24",
};

export const SkillsOverviewSection = () => {
  const overview = DATA.home.skills.overview;

  return (
    <section className="py-20 bg-content1">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GradientText className="text-3xl md:text-4xl font-bold block">
            {DATA.home.skills.sectionTitle}
          </GradientText>
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto mt-3">
            {DATA.home.skills.sectionDescription}
          </p>
        </motion.div>

        {/* Responsive grid: 1 / 2 / 3 / 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {overview.map((cat, idx) => {
            const items = SKILL_ITEMS[cat.name] ?? [];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * idx, duration: 0.5 }}
                className="h-full"
              >
                <Card className="h-full rounded-2xl bg-black/70 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 transition-all">
                  <CardBody className="p-0 flex flex-col h-full">
                    {/* Top: centered category label with gradient text */}
                    <div className="px-6 pt-6 pb-5 flex flex-col items-center text-center">
                      <div className="mb-3 grid place-items-center">
                        <div className="h-11 w-11 grid place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                          <Icon
                            icon={cat.icon}
                            className="h-5 w-5 text-foreground/80"
                          />
                        </div>
                      </div>

                      <h3 className="text-xl md:text-[1.35rem] leading-tight font-semibold">
                        <GradientText>{cat.name}</GradientText>
                      </h3>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/10 mx-6" />

                    {/* Bottom: chips area */}
                    <div className="p-6">
                      {items.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {items.map((label) => (
                            <span
                              key={label}
                              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-foreground/90"
                            >
                              {CHIP_ICONS[label] && (
                                <Icon
                                  icon={CHIP_ICONS[label]}
                                  className="h-4 w-4 opacity-80"
                                />
                              )}
                              {label}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-foreground-600 text-sm">
                          More details coming soon.
                        </p>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
