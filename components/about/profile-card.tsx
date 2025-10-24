"use client";

import { memo } from "react";
import { Card } from "@heroui/react";
import { ProfileCardProps } from "@/components/about/types";

export const ProfileCard = memo(function ProfileCard({
  description,
}: ProfileCardProps) {
  // Make rendering safe even if description is missing or has undefined items
  const safeDescription = (description ?? []).filter(
    (p): p is string => typeof p === "string" && p.trim().length > 0
  );

  return (
    <Card className="w-full max-w-4xl mx-auto mb-12 rounded-2xl p-8 dark:shadow-neutral-700 shadow-md bg-white/90 dark:bg-black/60">
      <div className="text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto">
        {safeDescription.map((paragraph, index) => (
          <p key={index} className="mb-6 text-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </Card>
  );
});
