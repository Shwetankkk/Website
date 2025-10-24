"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { MotionEffect } from "@/components/motion-effect";
import type { ProjectsGridProps } from "@/components/projects/types";

export const ProjectsGrid = ({ projects, className = "" }: ProjectsGridProps) => {
  const [animationKey, setAnimationKey] = useState(0);

  // Re-trigger item animations when the list changes
  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [projects]);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {projects.map((project, index) => (
        <MotionEffect
          key={`${project.id}-${animationKey}`}
          fade
          inView
          zoom
          className="w-full md:max-w-none"
          delay={0.1 + index * 0.1}
          resetKey={animationKey}
          slide={{ direction: "down" }}
        >
          <ProjectCard project={project} />
        </MotionEffect>
      ))}
    </div>
  );
};
