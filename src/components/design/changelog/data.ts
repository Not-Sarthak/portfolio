import type { IconName } from "./icons";

export interface Change {
  title: string;
  date: string;
  icon: IconName;
}

export const CHANGES: Change[] = [
  { title: "Change 1", date: "July 27, 2026", icon: "brain" },
  { title: "Change 2", date: "July 20, 2026", icon: "eye" },
  { title: "Change 3", date: "July 13, 2026", icon: "wand" },
  { title: "Change 4", date: "July 6, 2026", icon: "share" },
  { title: "Change 5", date: "June 29, 2026", icon: "waveform" },
  { title: "Change 6", date: "June 22, 2026", icon: "type" },
  { title: "Change 7", date: "June 15, 2026", icon: "list" },
];
