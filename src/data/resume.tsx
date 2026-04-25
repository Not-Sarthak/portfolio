import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, TrophyIcon } from "lucide-react";
import { GithubIcon } from "../../public/icons/github";
import { LinkIcon } from "../../public/icons/link";

export const DATA = {
  name: "Sarthak Shah",
  initials: "SS",
  url: "https://www.0xsarthak.xyz/",
  description: "I Code.",
  summary: `
I'm a full-stack developer with an experience of working with various languages and blockchains.

Previously, I've interned at 3x early-stage startups and have won 20x hackathons🏆. I enjoy contributing to open source projects. I'm also a member at SuperteamIn (@superteamIn) & FBI (@callusfbi).

Beyond code, I'm passionate about cinematography and am stepping out of my comfort zone to create both technical and non-technical content. I'm a sneakerhead, love traveling, and enjoy endless talks on finance. Also, I play chess.
`,
  avatarUrl: "/me.jpg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "notsarthakshah@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Not-Sarthak/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sarthak-shah-49267b224/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/0xSarthak13",
        icon: Icons.x,

        navbar: true,
      },
      resume: {
        name: "Download Resume",
        url: "/resume.pdf",
        icon: Icons.work,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "MetEngine",
      href: "",
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "/work/metengine.svg",
      start: "June 2025",
      end: "Present",
      description: "",
    },
    {
      company: "Gasyard",
      href: "https://gasyard.fi/",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/work/gasyard.png",
      start: "January 2025",
      end: "May 2025",
      description:
        "Built backend with Fastify, Docker, and PostgreSQL that handled $570K in transaction volume and processed 120K requests. Implemented cross-chain bridge routes for Hyperliquid, Movement, Monad (Testnet), and other EVM/Non-EVM integrations in Testnet and Mainnet environments. Created Gasyard Bridge Explorer using Next.js, TypeScript, Tanstack Query, Zustand, and Tailwind CSS for transaction tracking. Developed Fuelbae Agent tool for executing DeFi actions across protocols.",
    },
    {
      company: "0rbit",
      href: "https://www.0rbit.co/",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/work/0rbit.jpg",
      start: "March 2024",
      end: "December 2024",
      description:
        "Developed multiple smart contracts in Lua for the AO Ecosystem, while battle-testing 0rbit's core infrastructure and contributing to the core node. I also integrated frontend tutorials using AOConnect, showcasing 0rbit's capabilities in blog posts. Beyond code, I enhanced the documentation, converted Figma designs into functional UI components, and contributed to the website development. Additionally, I handled social media content and authored blogs and technical documentation, ensuring a better developer experience.",
    },
    {
      company: "Pyano (now Bytebell AI)",
      href: "",
      location: "Remote",
      title: "Software Developer Intern (Part-Time)",
      logoUrl: "/work/bytebell.png",
      start: "May 2024",
      end: "June 2024",
      description:
        "Developed a complete desktop application using Electron.js, integrating multiple LLM API endpoints into the frontend. Successfully deployed the stable release through Amazon S3 and GitHub Releases, ensuring seamless access for users.",
    },
    {
      company: "D2Clytics",
      href: "",
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/work/d2clytics.jpg",
      start: "January 2024",
      end: "April 2024",
      description:
        "Developed over 35 charts using various libraries with React.js and TailwindCSS. I led the end-to-end state management process and converted more than 30 pages Figma design into functional code.",
    },
  ],
  openSource: [],
  projects: {
    "gossip-toy": {
      id: 0,
      language: "/languages/rust.svg",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/gossip-rs",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description: "reimplementing toy version of solana's gossip protocol from scratch",
    },
    Aqua: {
      id: 1,
      language: "/languages/rust.svg",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/aqua",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description:
        "load testing tool for benchmarking solana nodes over rpc and grpc",
    },
    Curators: {
      id: 2,
      language: "/languages/typescript.svg",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/curators",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description:
        "identifies high-performing LSTs on solana and auto-swaps to optimize yield.",
    },
    Pintel: {
      id: 4,
      language: "/languages/solidity.svg",
      description:
        "precision prediction market using gaussian probability distribution",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/pintel",
          icon: <GithubIcon className="size-9" />,
        },
      ],
    },
    "Pinocchio Squads v4": {
      id: 12,
      language: "/languages/rust.svg",
      description: "squads v4 multisig rewritten in pinocchio",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/pinocchio-squads-v4",
          icon: <GithubIcon className="size-9" />,
        },
      ],
    },
    "Anchor Turbin3": {
      id: 5,
      language: "/languages/rust.svg",
      description: "minimal solana programs built during turbin3 builders' cohort",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/anchor-turbin3",
          icon: <GithubIcon className="size-9" />,
        },
      ],
    },
    "Cyfrin EVM": {
      id: 6,
      language: "/languages/solidity.svg",
      description: "lil projects i built while watching cyfrin's solidity course",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/cyfrin-evm",
          icon: <GithubIcon className="size-9" />,
        },
      ],
    },
    "Solana Security Dashboard": {
      id: 7,
      language: "/languages/typescript.svg",
      links: [
        {
          type: "Website",
          href: "https://st-security.vercel.app/",
          icon: <LinkIcon className="size-9" />,
        },
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/st-security",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description:
        "track hacks, exploits, and vulnerabilities in the solana ecosystem.",
    },
    Predictify: {
      id: 8,
      language: "/languages/typescript.svg",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/predictify",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description:
        "polymarket telegram bot — 2.5k+ users, $100k+ volume.",
    },
    Hunch: {
      id: 9,
      language: "/languages/typescript.svg",
      links: [
        {
          type: "Website",
          href: "https://www.hunchkaro.xyz/",
          icon: <LinkIcon className="size-9" />,
        },
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/hunch-lens",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description:
        "social trading platform for creating and trading onchain markets on viral content.",
    },
    Ticker: {
      id: 10,
      language: "/languages/typescript.svg",
      links: [
        {
          type: "Website",
          href: "https://farcaster.xyz/~/mini-apps/launch?domain=ticker.megabyte0x.xyz",
          icon: <LinkIcon className="size-9" />,
        },
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/ticker",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description: "a farcaster mini-app to buy rwa assets onchain ($10k+ in volume)",
    },
    "SIMD.live": {
      id: 13,
      language: "/languages/typescript.svg",
      links: [
        {
          type: "Website",
          href: "https://simd.live/",
          icon: <LinkIcon className="size-9" />,
        },
      ],
      description: "a readable index of every solana improvement document",
    },
    "Ticket Booking CLI": {
      id: 11,
      language: "/languages/go.svg",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/booking-app-cli",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description: "a simple cli ticket booking app in golang",
    },
  },
  wins: {
    "Colosseum Breakout Hackathon - 1x Bounty (Light Protocol)": {
      link: "",
      type: "hackathon",
    },
    "Superteam Security Dashboard - 1st Place": {
      link: "",
      type: "hackathon",
    },
    "Fellow @Wormhole India": {
      link: "",
      type: "title",
    },
    "Based Builder of the Year '24": {
      link: "",
      type: "title",
    },
    "Member @SuperteamIn": {
      link: "",
      type: "title",
    },
    "Player @callusfbi": {
      link: "",
      type: "title",
    },
    "ETHIndia '24 - 1x Bounty (Base)": {
      link: "",
      type: "hackathon",
    },
    "Onchain AI Fellowship - by @callusfbi": {
      link: "",
      type: "hackathon",
    },
    "EthBangkok '24 - 1x Bounty (Flow)": {
      link: "",
      type: "hackathon",
    },
    "Encode Club BTC Hackathon - 2nd Place (Goat Network)": {
      link: "",
      type: "hackathon",
    },
    "Funding the Commons '24 Bangkok - 1x Bounty (Talent Protocol)": {
      link: "",
      type: "hackathon",
    },
    "Based India '24 - Winner": {
      link: "",
      type: "hackathon",
    },
    "Colosseum Radar Hackathon - 2x Bounty (Ore and Mercyuro)": {
      link: "",
      type: "hackathon",
    },
    "100xDevs Hackathon - Bounty": {
      link: "",
      type: "hackathon",
    },
    "Stellar Builders' Residency - 1st Place": {
      link: "",
      type: "hackathon",
    },
    "Stellar IndiaThon '24 - Infra Track": {
      link: "",
      type: "hackathon",
    },
    "NuvYuva Tinkerthon '24 - 2nd Place": {
      link: "",
      type: "hackathon",
    },
    "ITMBU Hackathon '24 - 2nd Place": {
      link: "",
      type: "hackathon",
    },
    "HackTheLeague '24 - 2x Bounties": {
      link: "",
      type: "hackathon",
    },
    "Arweave HackerHouse '1 - Runner Up": {
      link: "",
      type: "hackathon",
    },
  },
  highlightedWins: [
    { name: "arweave hacker house #1", place: "2nd place", date: "nov 2023", type: "hackathon" },
    { name: "hack itmbu", place: "1st place", date: "jan 2024", type: "hackathon" },
    { name: "nuvyuva", place: "2nd place", date: "apr 2024", type: "hackathon" },
    { name: "stellar indiathon — infra track", place: "2nd place", date: "jun 2024", type: "hackathon" },
    { name: "stellar builders residency", place: "top 5", date: "jul 2024", type: "fellowship" },
    { name: "colosseum radar hackathon — side track (ore)", place: "1st place", date: "oct 2024", type: "hackathon" },
    { name: "based india", place: "top 10", date: "oct 2024", type: "hackathon" },
    { name: "funding the commons bangkok edition", place: "1st place", date: "nov 2024", type: "hackathon" },
    { name: "bitcoin hackathon", place: "1st place", date: "nov 2024", type: "hackathon" },
    { name: "bnbhack", place: "top 5", date: "nov 2024", type: "hackathon" },
    { name: "ethbangkok", place: "1st place", date: "nov 2024", type: "hackathon" },
    { name: "ethindia", place: "top 5", date: "dec 2024", type: "hackathon" },
    { name: "onchain ai fellowship by fbi", place: "fellow", date: "dec 2024", type: "fellowship" },
    { name: "superteam india", place: "member", date: "—", type: "fellowship" },
    { name: "superteam security dashboard", place: "1st place", date: "apr 2025", type: "hackathon" },
    { name: "colosseum breakout hackathon — side track (light protocol)", place: "1st place", date: "may 2025", type: "hackathon" },
  ],
} as const;
