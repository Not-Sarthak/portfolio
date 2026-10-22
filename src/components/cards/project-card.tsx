"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectLink {
  type: string;
  href: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  tech?: readonly Tech[];
  links: readonly ProjectLink[];
  description: string;
  details?: readonly React.ReactNode[];
}

interface ProjectCardProps {
  title: string;
  links: readonly ProjectLink[];
  description?: string;
  details?: readonly React.ReactNode[];
  tech?: readonly Tech[];
  className?: string;
}

interface ProjectListProps {
  projects: Record<string, Project>;
}

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-gray-400 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
    style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const linkClass =
  "underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200";

export interface Tech {
  name: string;
  icon: string;
}

function TechRow({ tech }: { tech: readonly Tech[] }) {
  return (
    <li className="py-0.5">
      <span className="flex flex-wrap items-center gap-2">
        <span>tech stack:</span>
        {tech.map((t) => (
          <span key={t.name} className="group/tech relative flex">
            <img
              src={t.icon}
              alt={t.name}
              className="w-4 h-4 shrink-0 text-gray-500"
            />
            <span className="pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-1.5 py-0.5 text-[11px] text-white opacity-0 transition-opacity duration-150 group-hover/tech:opacity-100">
              {t.name}
            </span>
          </span>
        ))}
      </span>
    </li>
  );
}

export function ProjectCard({
  title,
  links,
  description,
  details,
  tech,
  className,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const expandable = !!(details?.length || tech?.length);
  const href = (links.find((l) => l.type === "Source") || links[0]).href;

  if (!expandable) {
    return (
      <div className={cn("py-0.5 flex items-start gap-1.5", className)}>
        <span className="w-[14px] shrink-0" aria-hidden="true" />
        <p className="text-sm">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("font-medium", linkClass)}
          >
            {title.toLowerCase()}
          </Link>
          {description && (
            <span className="text-gray-500"> — {description}</span>
          )}
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex items-start gap-1.5 py-0.5 text-sm">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "collapse" : "expand"}
          className="flex h-5 items-center"
        >
          <ChevronIcon open={open} />
        </button>
        <p>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("font-medium", linkClass)}
          >
            {title.toLowerCase()}
          </Link>
          {description && (
            <>
              {" "}
              <button
                onClick={() => setOpen(!open)}
                className="text-gray-500 text-left"
              >
                — {description}
              </button>
            </>
          )}
        </p>
      </div>
      <div
        className="grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <ul className="ml-5 list-disc pl-4 pb-1 text-sm text-gray-500 [&_b]:font-medium [&_b]:text-foreground">
            {details?.map((d, i) => (
              <li key={i} className="py-0.5">
                {d}
              </li>
            ))}
            {tech && tech.length > 0 && <TechRow tech={tech} />}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="flex flex-col">
      {Object.entries(projects).map(([title, project]) => (
        <ProjectCard
          key={title}
          title={title}
          links={project.links}
          description={project.description}
          details={project.details}
          tech={project.tech}
        />
      ))}
    </div>
  );
}
