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
      details: [
        <>built a complete peer-to-peer gossip network in <b>rust</b> over udp, implementing solana's pull/push protocol, crds replication, liveness detection (ping/pong), and binary message serialization</>,
        <>implemented <b>bloom filter–based anti-entropy synchronization</b> and timestamp-based conflict resolution, enabling efficient state reconciliation while minimizing redundant network traffic</>,
        "designed a multi-threaded peer-to-peer system where nodes converge to a consistent replicated state using crds, bloom filter anti-entropy synchronization, and udp-based pull/push gossip",
      ],
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
      details: [
        <>built a <b>rust</b> load generator on tokio that drives solana json-rpc nodes at fixed request rates with semaphore-bounded concurrency, recording throughput, error rate and <b>p50/p90/p95/p99 latency</b> in an <b>hdr histogram</b>, across <b>40+ rpc methods</b> with stress, spike and soak modes</>,
        <>implemented <b>geyser grpc benchmarking</b> that subscribes to two yellowstone endpoints concurrently and measures <b>per-slot delivery latency</b> between them, with account subscription filtering</>,
        <>added <b>differential testing</b> that issues the same calls to multiple nodes and reports response mismatches, plus json and interactive html reports for every run</>,
      ],
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
      details: [
        <>rewrote the <b>squads v4 multisig</b> (the multisig behind most solana treasuries) in native pinocchio with all <b>35 instructions</b> and <b>10 account types</b>, covering threshold voting, time locks, spending limits, batch transactions and rent reclamation</>,
        <>implemented <b>arbitrary cpi execution through vault pdas</b> with invoke_signed, resolving up to <b>8 address lookup tables</b> and <b>64 account keys</b> per message, plus a transaction buffer path for messages larger than one instruction</>,
        <>structured it as an on-chain program plus a shared interface crate of layouts, seeds and errors, so clients compile against the same state definitions as the program</>,
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
      details: [
        <>architected a <b>per-maker order book</b> on solana where each market maker owns an independent pda, eliminating write contention and enabling concurrent quote updates under sealevel's parallel execution model</>,
        <>implemented an <b>on-chain quote freshness mechanism</b> that automatically expires stale quotes using slot-based liveness checks without requiring external keepers</>,
        <>built a <b>native pinocchio-based solana program</b> with deterministic fixed-size account layouts and optimized binary size for low compute overhead</>,
      ],
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
      details: [
        <>built a <b>native pinocchio (no_std) solana program</b> with <b>39 instructions</b> across assertion, dispute, staking, voting, policy and emergency paths, with deterministic account layouts and pda seeds</>,
        <>implemented the <b>optimistic assertion flow</b>: a claim posted with a bond settles as true after a <b>slot-based liveness window</b> unless disputed; a dispute escrows a matching bond and escalates to the court</>,
        <>implemented a <b>staked dispute court with sha-256 commit-reveal voting</b>, per-voter stake, reputation and reward pdas, and slashing of the losing side on resolution</>,
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
    "Solver Engine": {
      id: 6,
      language: "/languages/typescript.svg",
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/solver-engine",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description: "intent-based cross-chain swap solver",
      details: [
        <>fill-then-settle solver in <b>typescript</b> over real uniswap v2 and v3 pools on <b>7 chains</b>: create2-derived pool addresses, pool state replayed from swap/mint/burn/sync logs, gas measured from receipts on anvil forks, signed fills</>,
        <>uniswap v2 and v3 swap math <b>exact to the wei against quoterv2</b>; quote path at <b>0.87 ms</b> and <b>7.3k quotes/s at p99 10 ms</b> on one process</>,
        <>order lifecycle as an <b>idempotent state machine</b> with refunds, payout retries, stray-deposit sweeping, restart recovery from chain logs, and a <b>redis writer lease with fencing tokens</b> against double-signing</>,
      ],
    },
    Predictify: {
      id: 7,
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
      details: [
        <>built a <b>typescript</b> telegram bot (telegraf, webhook mode) for trading polymarket from chat: fok market orders, gtc limit orders, cancels, redemptions and allowance management through the <b>polymarket clob client</b>, with <b>2.5k+ users and $100k+ volume</b></>,
        <>ran two <b>polymarket websocket watchers</b> with auto-reconnect and redis-backed registrations for price alerts and limit-order fills, a <b>12-hourly cron notifier</b> for high-probability markets by subscribed category, and every order published to <b>aws sqs</b> for downstream processing</>,
        <>integrated <b>mayan and debridge</b> so users fund from solana into polygon usdc in one flow, rendered pnl and position cards server-side with satori, shipped en/zh localisation, and deployed as a docker image to <b>ec2 through github actions</b> with staging and production pipelines</>,
      ],
    },
    Ticker: {
      id: 8,
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
      details: [
        <>built a <b>next.js 15 farcaster mini app</b> where users buy and sell <b>20 tokenized rwas</b> (tsla, nvda, aapl, msft, xgold and others) with any token on any chain, doing <b>$10k+ in volume</b></>,
        <>routed every trade through <b>bungee's cross-chain aggregator</b>: quotes fetched on debounced input, executed as an erc20 approval plus an <b>eip-712 signed order</b> on the returned route, across base, polygon and gnosis</>,
        <>wired farcaster's frame sdk and manifest for in-feed launch, <b>privy with wagmi/viem</b> for wallets, and zustand stores for token, quote and bridge state</>,
      ],
    },
    CloseCode: {
      id: 9,
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
      details: [
        <>built a terminal coding agent in <b>typescript on bun</b> with an <b>opentui</b> interface and a <b>hono</b> api streaming anthropic and openai models through the ai sdk. a model is one shared catalogue entry (id, provider, pricing) that drives validation, the picker, provider resolution and billing; a new provider is one compiler-enforced switch case</>,
        <>designed a <b>split agent loop</b>: the server owns the model, prompt, tool contracts and session transcript; the cli executes every tool call locally and posts results back, so source code never leaves the machine. <b>plan and build modes</b> are enforced on both sides</>,
        <>added <b>clerk oauth with pkce</b>, session transcripts in postgres, and <b>usage-metered billing</b> with token usage priced into credits, ingested into <b>polar</b> and gated by a balance check</>,
      ],
    },
    Curators: {
      id: 10,
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
      details: [
        <><b>fastify + typescript</b> backend with <b>prisma on postgresql</b> that ranks every <b>sanctum</b> lst by apy and, on each sol deposit, auto-swaps into the top lst through <b>jupiter v6</b></>,
        <>designed <b>mev-protected execution</b>: the jupiter swap is decompiled, a treasury fee instruction appended, then sent as a <b>jito bundle</b> when the next leader is within <b>10 slots</b>, tipping at the <b>75th-percentile landed tip</b> across <b>5 block engines</b>; otherwise falls back to a plain rpc send with a fresh blockhash</>,
        <>wallet-based <b>jwt auth</b> with per-user authorization on all <b>16 endpoints</b>, and portfolio accounting with <b>weighted-average entry price</b> and realized/unrealized profit in sol</>,
      ],
    },
    "SIMD.live": {
      id: 11,
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
      id: 12,
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
