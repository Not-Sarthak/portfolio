export interface BlogPost {
  id: number;
  title: string;
  publishedAt: string;
  slug: string;
  externalUrl?: string;
}

export const allBlogPosts: BlogPost[] = [
  {
    id: 4,
    title: "Thinking is Rarer Than Ever",
    publishedAt: "Mar 19, 2026",
    slug: "/thinking-is-rarer-than-ever",
    externalUrl: "https://x.com/0xSarthak13/status/2028152465489793451",
  },
  {
    id: 3,
    title: "The In(Complete) Guide to Jito",
    publishedAt: "Mar 10, 2025",
    slug: "/the-incomplete-guide-to-jito",
  },
  {
    id: 2,
    title: "tcp/ip life",
    publishedAt: "Feb 25, 2025",
    slug: "/tcpip-life",
  },
  {
    id: 1,
    title: "Engineering Onchain AI Agents",
    publishedAt: "Dec 17, 2024",
    slug: "/onchain-ai-agents",
  },
];
