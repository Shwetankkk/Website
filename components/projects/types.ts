export interface Project {
  readonly id: number | string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly details: string;
  readonly image: string;
  readonly github?: string;
  readonly live?: string;
  readonly gallery?: readonly string[];
  // 🔽 keep tech readonly (items and array)
  readonly tech: ReadonlyArray<{
    readonly name: string;
    readonly icon: string;
  }>;
}

export interface ProjectsTabsProps {
  readonly categories: readonly string[];
  readonly selectedCategory: string;
  readonly onSelectCategory: (category: string) => void;
  readonly className?: string;
}

export interface ProjectsGridProps {
  readonly projects: readonly Project[];
  readonly className?: string;
}

export interface ProjectCardProps {
  readonly project: Project;      // ⬅ consume the same readonly Project
  readonly index?: number;
  readonly onViewDetails?: () => void;
}

export interface ProjectModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly project: Project | null;
}
