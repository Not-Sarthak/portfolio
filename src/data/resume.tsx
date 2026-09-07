import { GithubIcon } from "../../public/icons/github";
import { LinkIcon } from "../../public/icons/link";

export const DATA = {
  name: "Sarthak Shah",
  url: "https://www.0xsarthak.xyz/",
  description: "I Code.",
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
    "Pinocchio Squads v4": {
      id: 2,
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
    "Nock": {
      id: 3,
      language: "/languages/rust.svg",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/nock",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description:
        "per-maker on-chain order book exchange (clob) on solana",
    },
    "Resolut": {
      id: 4,
      language: "/languages/rust.svg",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/resolut",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description:
        "an optimistic oracle (oo) that can record any verifiable truth or data onto solana",
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
    Predictify: {
      id: 6,
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
    Ticker: {
      id: 7,
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
    CloseCode: {
      id: 8,
      language: "/languages/typescript.svg",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/closecode",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description:
        "a terminal coding agent aggregator to experiment with different models locally",
    },
    Curators: {
      id: 9,
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
    "SIMD.live": {
      id: 10,
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
    "Cyfrin EVM": {
      id: 11,
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
    // Pintel: {
    //   id: 12,
    //   language: "/languages/solidity.svg",
    //   description:
    //     "precision prediction market using gaussian probability distribution",
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/Not-Sarthak/pintel",
    //       icon: <GithubIcon className="size-9" />,
    //     },
    //   ],
    // },
    // Hunch: {
    //   id: 12,
    //   language: "/languages/typescript.svg",
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://www.hunchkaro.xyz/",
    //       icon: <LinkIcon className="size-9" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/Not-Sarthak/hunch-lens",
    //       icon: <GithubIcon className="size-9" />,
    //     },
    //   ],
    //   description:
    //     "social trading platform for creating and trading onchain markets on viral content.",
    // },
    // "Solana Security Dashboard": {
    //   id: 13,
    //   language: "/languages/typescript.svg",
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://st-security.vercel.app/",
    //       icon: <LinkIcon className="size-9" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/Not-Sarthak/st-security",
    //       icon: <GithubIcon className="size-9" />,
    //     },
    //   ],
    //   description:
    //     "track hacks, exploits, and vulnerabilities in the solana ecosystem.",
    // },
    // "Ticket Booking CLI": {
    //   id: 14,
    //   language: "/languages/go.svg",
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/Not-Sarthak/booking-app-cli",
    //       icon: <GithubIcon className="size-9" />,
    //     },
    //   ],
    //   description: "a simple cli ticket booking app in golang",
    // },
    // "Oracle Aggregator": {
    //   id: 15,
    //   language: "/languages/rust.svg",
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/Not-Sarthak/oracle-aggregator",
    //       icon: <GithubIcon className="size-9" />,
    //     },
    //   ],
    //   description:
    //     "solana oracle over pyth, switchboard, dex amms, twap & price transforms",
    // },
  },
  highlightedWins: [
    { name: "arweave hacker house #1", place: "2nd place", date: "nov 2023", type: "hackathon" },
    { name: "hack itmbu", place: "1st place", date: "jan 2024", type: "hackathon" },
    { name: "nuvyuva", place: "2nd place", date: "apr 2024", type: "hackathon" },
    { name: "hacktheleague", place: "2x bounties", date: "may 2024", type: "hackathon" },
    { name: "stellar indiathon — infra track", place: "2nd place", date: "jun 2024", type: "hackathon" },
    { name: "stellar builders residency", place: "top 5", date: "jul 2024", type: "fellowship" },
    { name: "colosseum radar hackathon — side track (ore)", place: "1st place", date: "oct 2024", type: "hackathon" },
    { name: "based india", place: "top 10", date: "oct 2024", type: "hackathon" },
    { name: "funding the commons bangkok edition (talent protocol)", place: "1st place", date: "nov 2024", type: "hackathon" },
    { name: "encode club bitcoin hackathon", place: "1st place", date: "nov 2024", type: "hackathon" },
    { name: "ethbangkok — side track (flow)", place: "1st place", date: "nov 2024", type: "hackathon" },
    { name: "educhain", place: "bounty", date: "nov 2024", type: "hackathon" },
    { name: "ethindia (base)", place: "top 5", date: "dec 2024", type: "hackathon" },
    { name: "onchain ai fellowship by fbi", place: "fellow", date: "dec 2024", type: "fellowship" },
    { name: "superteam india", place: "member", date: "—", type: "fellowship" },
    { name: "network school v2", place: "member", date: "—", type: "fellowship" },
    { name: "superteam security dashboard", place: "1st place", date: "apr 2025", type: "hackathon" },
    { name: "colosseum breakout hackathon — side track (light protocol)", place: "1st place", date: "may 2025", type: "hackathon" },
  ],
  sidequests: [
    { name: "optimization arena's prop amm challenge", detail: "scored 517 (top 25)", url: "https://www.optimizationarena.com/prop-amm" },
    { name: "optimization arena's amm challenge", detail: "scored 523 (top 25)", url: "https://www.optimizationarena.com/amm" },
  ],
} as const;
