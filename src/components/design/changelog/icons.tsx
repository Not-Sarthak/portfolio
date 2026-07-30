import {
  Brain,
  Wand,
  Sparkles,
  AudioLines,
  Type,
  List,
  Eye,
  Share2,
  type LucideIcon,
} from "lucide-react";

export const ICONS = {
  brain: Brain,
  wand: Wand,
  sparkles: Sparkles,
  waveform: AudioLines,
  type: Type,
  list: List,
  eye: Eye,
  share: Share2,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;
