"use client";

import Link from "next/link";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

type TechItem = Readonly<{ name: string; icon?: string }>;
type Project = Readonly<{
  id: number | string;
  title: string;
  description: string;
  category?: string; // e.g., "Web3 / DApp", "Mobile / ML", "Machine Learning"
  github?: string;
  details?: string;
  tech?: ReadonlyArray<TechItem>;
  // image?: string | null; // ignored on purpose for uniform look
}>;

export const ProjectCard = ({ project }: { project: Project }) => {
  const label = project.category?.toUpperCase() ?? "PROJECT";
  const category = (project.category || "").toLowerCase();

  // Consistent banner style with subtle variation by category (still uniform)
  const bannerClass =
    category.includes("web3") || category.includes("dapp")
      ? "from-purple-500 via-fuchsia-500 to-cyan-500"
      : category.includes("mobile")
      ? "from-sky-500 via-blue-500 to-indigo-500"
      : category.includes("ml") || category.includes("machine")
      ? "from-emerald-500 via-teal-500 to-cyan-500"
      : "from-primary-500 via-secondary-500 to-purple-500";

  const bannerIcon =
    category.includes("web3")
      ? "lucide:shield-check"
      : category.includes("mobile")
      ? "lucide:smartphone"
      : category.includes("ml") || category.includes("machine")
      ? "lucide:brain"
      : "lucide:folder-code";

  return (
    <Card className="overflow-hidden bg-content1 border border-content2/20">
      {/* Uniform gradient banner */}
      <div className={`relative h-56 w-full bg-gradient-to-r ${bannerClass}`}>
        {/* soft radial highlight */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 to-transparent" />
        </div>
        {/* Center icon + label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.92, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 text-white/90"
          >
            <Icon icon={bannerIcon} className="h-7 w-7" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              {label}
            </span>
          </motion.div>
        </div>

        {/* Category chip (bottom-left) */}
        {project.category && (
          <Chip
            color="default"
            variant="flat"
            className="absolute left-4 bottom-4 backdrop-blur bg-black/30 text-foreground-50 border border-white/10"
          >
            {project.category}
          </Chip>
        )}
      </div>

      <CardBody className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-foreground-600">{project.description}</p>

        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.slice(0, 6).map((t) => (
              <Chip
                key={t.name}
                size="sm"
                variant="flat"
                className="bg-content2 text-foreground-600"
                startContent={t.icon ? <Icon icon={t.icon} className="h-4 w-4" /> : null}
              >
                {t.name}
              </Chip>
            ))}
          </div>
        )}
      </CardBody>

      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex w-full items-center justify-between">
          <div />
          {project.github && (
            <Button
              as={Link}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="bordered"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              View Details
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
