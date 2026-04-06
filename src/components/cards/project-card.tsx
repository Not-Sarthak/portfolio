import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectLink {
  type: string;
  href: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  language?: string;
  links: readonly ProjectLink[];
  description: string;
}

interface ProjectCardProps {
  title: string;
  links: readonly ProjectLink[];
  description?: string;
  language?: string;
  className?: string;
}

interface ProjectListProps {
  projects: Record<string, Project>;
}

export function ProjectCard({
  title,
  links,
  description,
  language,
  className,
}: ProjectCardProps) {
  return (
    <div className={cn("py-0.5 group", className)}>
      <p className="text-sm">
        <Link
          href={(links.find(l => l.type === "Source") || links[0]).href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200"
        >
          {title.toLowerCase()}
        </Link>
        {description && (
          <span className="text-gray-400"> — {description}</span>
        )}
      </p>
    </div>
  );
}

export function ProjectList({ projects }: ProjectListProps) {
  const grouped: Record<string, [string, Project][]> = {};
  Object.entries(projects).forEach(([title, project]) => {
    const lang = project.language || "other";
    if (!grouped[lang]) grouped[lang] = [];
    grouped[lang].push([title, project]);
  });

  return (
    <div className="flex flex-col gap-3">
      {Object.entries(grouped).map(([lang, items]) => (
        <div key={lang} className="flex gap-2">
          <div className="flex flex-col items-center pt-1">
            <img src={lang} alt="" className="w-4 h-4 shrink-0" />
            <div className="w-px flex-1 bg-gray-200 mt-1" />
          </div>
          <div className="flex-1">
            {items.map(([title, project]) => (
              <ProjectCard
                key={title}
                title={title}
                links={project.links}
                description={project.description}
                className=""
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 