"use client";

import { DATA } from "@/data/resume";
import BlurFade from "@/components/text/blur-fade";
import Link from "next/link";
import { AchievementCard } from "@/components/cards/hackathon-card";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

type AchievementType = 'hackathon' | 'title' | 'speaker';

const hasProperty = <T extends object, K extends string>(obj: T, prop: K): obj is T & Record<K, unknown> => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

export default function WinsPage() {
  const [activeTab, setActiveTab] = useState<AchievementType>('hackathon');
  
  const achievementTabs = ['hackathon', 'title', 'speaker'];
  
  const filteredAchievements = useMemo(() => {
    return Object.entries(DATA.wins).filter(([_, data]) => {
      if (!hasProperty(data, 'type')) return false;
      
      const type = data.type as string;
      const mappedType = type === 'role' || type === 'recognition' ? 'title' : type;
      
      return mappedType === activeTab;
    });
  }, [activeTab]);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6 max-w-2xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-2xl font-bold tracking-tight">Wins</h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
        </BlurFade>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <p className="text-muted-foreground">
          I lose sleep to hackathons, build sprints, & silly little side quests.
        </p>
      </BlurFade>

      <div className={cn(
        "flex flex-col gap-y-2 border-t border-border/40 w-full",
      )}>
        {filteredAchievements.length > 0 ? (
          filteredAchievements.map(([title, data], id) => (
            <BlurFade key={title} delay={BLUR_FADE_DELAY * 4 + id * 0.05}>
              <AchievementCard
                key={title}
                title={title}
                href={data.link || "#"}
                type={activeTab}
              />
            </BlurFade>
          ))
        ) : (
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <p className="text-center text-muted-foreground py-8">
              Coming Soon. <br />
              // i speak less, work more.  :p
            </p>
          </BlurFade>
        )}
      </div>
    </main>
  );
}
