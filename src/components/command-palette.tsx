"use client";

import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import {
  Book,
  Link2Icon,
  Linkedin,
  MailIcon,
  TrophyIcon,
  TwitterIcon,
  X,
} from "lucide-react";

type CommandItem = {
  icon: React.ReactNode;
  label: string;
  shortcut?: string;
  href?: string;
  action?: () => void;
};

type CommandGroup = {
  title: string;
  items: CommandItem[];
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }

      if (open) {
        if (e.key === "Escape") {
          e.preventDefault();
          setOpen(false);
        }

        if (e.key === "c" || e.key === "C") {
          e.preventDefault();
          handleCopyLink();
        } else if (e.key === "e" || e.key === "E") {
          e.preventDefault();
          handleSendEmail();
        } else if (e.key === "s" || e.key === "S") {
          e.preventDefault();
          window.open("https://github.com/Not-Sarthak/portfolio", "_blank");
        } else if (e.key === "t" || e.key === "T") {
          e.preventDefault();
          window.open("https://x.com/0xSarthak13", "_blank");
        } else if (e.key === "l" || e.key === "L") {
          e.preventDefault();
          window.open(
            "https://www.linkedin.com/in/sarthak-shah-49267b224/",
            "_blank"
          );
        } else if (e.key === "g" || e.key === "G") {
          const handleSecondKey = (e2: KeyboardEvent) => {
            if (e2.key === "h" || e2.key === "H") {
              e2.preventDefault();
              window.location.href = "/";
            }
            document.removeEventListener("keydown", handleSecondKey);
          };
          document.addEventListener("keydown", handleSecondKey, { once: true });
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      setSearch("");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(false);
  };

  const handleSendEmail = () => {
    window.location.href = "mailto:notsarthakshah@gmail.com";
    setOpen(false);
  };

  const socialCommands: CommandGroup = {
    title: "GENERAL",
    items: [
      {
        icon: <Link2Icon />,
        label: "Copy Link",
        shortcut: "C",
        action: handleCopyLink,
      },
      {
        icon: <MailIcon />,
        label: "Send Email",
        shortcut: "E",
        action: handleSendEmail,
      },
      {
        icon: <TwitterIcon />,
        label: "X",
        shortcut: "T",
        href: "https://x.com/0xSarthak13",
      },
      {
        icon: <Linkedin />,
        label: "LinkedIn",
        shortcut: "L",
        href: "https://www.linkedin.com/in/sarthak-shah-49267b224/",
      },
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
        label: "View Source",
        shortcut: "S",
        href: "https://github.com/Not-Sarthak/portfolio",
      },
    ],
  };

  const navigationCommands: CommandGroup = {
    title: "GO TO",
    items: [
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
        label: "Home",
        shortcut: "G H",
        href: "/",
      },
    ],
  };

  const commandGroups = [socialCommands, navigationCommands];

  const filteredGroups = commandGroups
    .map((group) => {
      const filteredItems = group.items.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      );
      return {
        ...group,
        items: filteredItems,
      };
    })
    .filter((group) => group.items.length > 0);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Press{" "}
        <kbd className="px-1.5 py-0.5 text-xs bg-muted border border-border rounded">
          ⌘ K
        </kbd>{" "}
        to <span className="underline text-foreground">get in touch</span> →
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                  onClick={() => setOpen(false)}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-[101] w-full max-w-[640px] bg-background/95 border border-border/30 shadow-lg sm:rounded-xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute z-20 right-4 top-4">
                    <button
                      onClick={() => {
                        console.log("Closing");
                        setOpen(false);
                      }}
                      className="rounded-full p-1.5 opacity-70 transition-all hover:bg-muted/80 hover:opacity-100 focus:outline-none"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="relative">
                      <input
                        ref={inputRef}
                        type="text"
                        placeholder="Type a Command or Search"
                        className="w-full bg-transparent text-sm border-none outline-none text-foreground placeholder:text-muted-foreground py-2 px-0"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="px-2 pb-4">
                    {filteredGroups.map((group, groupIndex) => (
                      <div key={groupIndex} className="mt-4 first:mt-0">
                        <div className="px-2 mb-2">
                          <div className="text-xs font-medium text-muted-foreground">
                            {group.title}
                          </div>
                        </div>
                        <div>
                          {group.items.map((item, itemIndex) => (
                            <CommandItem
                              key={itemIndex}
                              icon={item.icon}
                              label={item.label}
                              shortcut={item.shortcut}
                              href={item.href}
                              onClick={item.action}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                    {filteredGroups.length === 0 && (
                      <div className="py-6 text-center text-muted-foreground">
                        No results found
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

function CommandItem({
  icon,
  label,
  shortcut,
  href,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  shortcut?: string;
  href?: string;
  onClick?: () => void;
}) {
  const content = (
    <div
      className={cn(
        "flex items-center justify-between w-full px-2 py-3 text-sm rounded-md hover:bg-muted cursor-pointer",
        onClick && "cursor-pointer"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center text-muted-foreground">
          {icon}
        </div>
        <div>{label}</div>
      </div>
      {shortcut && (
        <div className="flex items-center gap-1">
          {shortcut.split(" ").map((key, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="text-muted-foreground mx-1"></span>
              )}
              <kbd className="px-1.5 py-0.5 text-xs bg-muted border border-border rounded">
                {key}
              </kbd>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
