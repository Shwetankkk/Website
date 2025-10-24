"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

import { ContactMapProps } from "../types";

export const ContactMap: React.FC<ContactMapProps> = ({ className = "" }) => {
  return (
    <motion.div
      className={`w-full mb-10 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="w-full h-64 md:h-96 rounded-xl border border-divider shadow-md bg-content1/80 dark:bg-black/50 flex items-center justify-center text-center p-8">
        <div className="max-w-xl mx-auto">
          <Icon icon="mdi:linkedin" className="w-12 h-12 mx-auto mb-4 text-[#0077B5]" />
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Let’s connect on LinkedIn
          </h3>
          <p className="text-foreground-600 mb-6">
            I’m actively looking for full-time Software Developer roles in the USA and
            graduating in <strong>May 2026</strong>. If you’d like to chat about roles,
            projects, or collaborations, I’d love to hear from you.
          </p>
          <Button
            as="a"
            href="https://www.linkedin.com/in/iamshwetanksingh/"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            size="lg"
            radius="full"
            startContent={<Icon icon="mdi:linkedin" className="w-5 h-5" />}
          >
            Connect on LinkedIn
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};
