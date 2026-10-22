import { GithubIcon } from "../../public/icons/github";
import { LinkIcon } from "../../public/icons/link";

export const DATA = {
  name: "Sarthak Shah",
  url: "https://www.notsarthak.xyz/",
  description: "backend / distributed systems engineer",
  projects: {
    Predictify: {
      id: 0,
      tech: [{ name: "TypeScript", icon: "/tech/typescript.svg" }, { name: "Bun", icon: "/tech/bun.svg" }, { name: "Telegram Bot API", icon: "/tech/telegram.svg" }, { name: "Mayan", icon: "/tech/mayan.png" }, { name: "deBridge", icon: "/tech/debridge.png" }, { name: "Supabase", icon: "/tech/supabase.svg" }, { name: "Redis", icon: "/tech/redis.svg" }, { name: "AWS SQS", icon: "/tech/amazonsqs.svg" }, { name: "AWS EC2", icon: "/tech/amazonec2.svg" }, { name: "Cloudflare", icon: "/tech/cloudflare.svg" }, { name: "Docker", icon: "/tech/docker.svg" }, { name: "GitHub Actions", icon: "/tech/githubactions.svg" }],
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/predictify",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description: "all-in-one trading toolkit for polymarket — 2.5k users, $100k volume",
      details: [
        <>built a typescript telegram bot (telegraf, webhook mode) for trading polymarket from chat: fok market orders, gtc limit orders, cancels, redemptions, allowance management, copy trading and referrals</>,
        <>made order execution <b>idempotent on stateless webhook handlers</b> by queuing every order through <b>aws sqs</b> and running each one single-flight</>,
        <>built a <b>chain-abstraction layer</b> with mayan and debridge, funding polymarket&apos;s native collateral from other chains in one flow</>,
        <>ran polymarket websocket watchers with auto-reconnect and redis-backed subscriptions for live fill tracking</>,
      ],
    },
    "Solver Engine": {
      id: 1,
      tech: [{ name: "TypeScript", icon: "/tech/typescript.svg" }, { name: "Bun", icon: "/tech/bun.svg" }, { name: "Fastify", icon: "/tech/fastify.svg" }, { name: "Redis", icon: "/tech/redis.svg" }, { name: "PostgreSQL", icon: "/tech/postgresql.svg" }, { name: "Prisma", icon: "/tech/prisma.svg" }, { name: "Prometheus", icon: "/tech/prometheus.svg" }, { name: "AWS KMS", icon: "/tech/amazonwebservices.svg" }, { name: "Solidity", icon: "/tech/solidity.svg" }, { name: "Foundry", icon: "/tech/foundry.png" }, { name: "Circle CCTP", icon: "/tech/circle.svg" }, { name: "Across", icon: "/tech/across.png" }, { name: "Uniswap", icon: "/tech/uniswap.png" }, { name: "Docker", icon: "/tech/docker.svg" }],
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/solver-engine",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description: "intent-based cross-chain swap solver",
      details: [
        <>fill-then-settle solver in <b>typescript</b> over uniswap v2 and v3 pools on <b>6 evm chains</b>, with pools found by create2 and kept live by replaying swap, mint, burn and sync logs every block</>,
        <>uniswap v3 swap math <b>exact to the wei against quoterv2</b>, with quotes at <b>p99 15 ms</b> and <b>5.5k quotes/s</b> on one process</>,
        <>every transaction journaled and fsynced in redis before broadcast, so payouts stay <b>exactly-once</b> across crashes, reorgs and leader failover</>,
        <>deposits escrowed in an audited contract and claimed once final, with inventory rebalanced across chains over <b>cctp</b> and <b>across</b></>,
      ],
    },
    "Nock": {
      id: 2,
      tech: [{ name: "Rust", icon: "/tech/rust.svg" }, { name: "Solana", icon: "/tech/solana.svg" }, { name: "Pinocchio", icon: "/tech/pinocchio.png" }],
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
        <>built a sharded on-chain clob on solana in <b>pinocchio</b> with one pda order book per maker, eliminating write-lock contention so fills execute in parallel under sealevel</>,
        <>packed each maker&apos;s full 16-level bid and ask ladders into a single <b>zero-copy 704-byte account</b> with quotes stored as tick offsets from the mid, so repricing the whole book is one <b>o(1) update</b> at under <b>2% of solana&apos;s per-instruction compute budget</b></>,
        <>shielded makers from toxic flow by expiring quotes on a <b>slot-based ttl</b> and sequencing every update, so takers never hit a stale or out-of-order quote</>,
      ],
    },
    "Resolut": {
      id: 3,
      tech: [{ name: "Rust", icon: "/tech/rust.svg" }, { name: "Solana", icon: "/tech/solana.svg" }, { name: "Pinocchio", icon: "/tech/pinocchio.png" }],
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
        <>built a native <b>pinocchio (no_std)</b> solana program with <b>46 instructions</b> across assertion, dispute, policy, staking, voting and settlement, with discriminated fixed-size accounts and on-chain derived ids</>,
        <>claims post a bond and settle as true after a <b>slot-based liveness window</b> unless disputed, when an equal bond escalates them to the court or an escalation manager</>,
        <>staked dispute court with <b>commit-reveal voting</b> bound to each voter, round and request, slashing wrong and silent voters within a per-round budget and paying correct ones</>,
        <>settled assertions leave a <b>tombstone</b> so ids can never be reused, with every account closable to reclaim rent</>,
      ],
    },
    CloseCode: {
      id: 4,
      tech: [{ name: "TypeScript", icon: "/tech/typescript.svg" }, { name: "Bun", icon: "/tech/bun.svg" }, { name: "React", icon: "/tech/react.svg" }, { name: "OpenTUI", icon: "/tech/opentui.svg" }, { name: "Hono", icon: "/tech/hono.svg" }, { name: "AI SDK", icon: "/tech/vercel.svg" }, { name: "Clerk", icon: "/tech/clerk.svg" }, { name: "PostgreSQL", icon: "/tech/postgresql.svg" }, { name: "Prisma", icon: "/tech/prisma.svg" }, { name: "Polar", icon: "/tech/polar.png" }, { name: "Sentry", icon: "/tech/sentry.svg" }],
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
    Aqua: {
      id: 5,
      tech: [{ name: "Rust", icon: "/tech/rust.svg" }, { name: "Tokio", icon: "/tech/tokio.svg" }, { name: "gRPC", icon: "/tech/triton.png" }],
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
        <>built a <b>rust</b> load generator on <b>tokio</b> that drives solana json-rpc nodes at set request rates across <b>40+ rpc methods</b>, recording throughput, error rate and <b>p50/p90/p95/p99 latency</b> in hdr histograms</>,
        <>benchmarks <b>yellowstone geyser grpc</b> endpoints head to head, measuring <b>per-slot delivery latency</b> between two providers</>,
        <>runs stress, spike and soak modes and writes json and interactive html reports for every run</>,
      ],
    },
    "gossip-toy": {
      id: 6,
      tech: [{ name: "Rust", icon: "/tech/rust.svg" }],
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/gossip-rs",
          icon: <GithubIcon className="size-9" />,
        },
      ],
      description:
        "solana's gossip protocol rebuilt from scratch with crds and bloom-filter sync",
      details: [
        <>built solana&apos;s gossip protocol in <b>rust</b> over udp, with push/pull gossip, <b>crds replication</b>, ping/pong liveness and binary serialization</>,
        <>reconciles state through <b>bloom filter–based anti-entropy</b> and timestamp-based conflict resolution, so nodes converge without redundant traffic</>,
        <>runs <b>multi-threaded peers</b> that converge to one consistent replicated state across the network</>,
      ],
    },
    "SIMD.live": {
      id: 7,
      tech: [{ name: "Next.js", icon: "/tech/nextdotjs.svg" }, { name: "TypeScript", icon: "/tech/typescript.svg" }, { name: "GitHub Actions", icon: "/tech/githubactions.svg" }],
      links: [
        {
          type: "Website",
          href: "https://simd.live/",
          icon: <LinkIcon className="size-9" />,
        },
      ],
      description: "a readable index of every solana improvement document",
    },
    // "Anchor Turbin3": {
    //   id: 5,
    //   language: "/languages/rust.svg",
    //   description: "minimal solana programs built during turbin3 builders' cohort",
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/Not-Sarthak/anchor-turbin3",
    //       icon: <GithubIcon className="size-9" />,
    //     },
    //   ],
    // },
    // "Cyfrin EVM": {
    //   id: 12,
    //   language: "/languages/solidity.svg",
    //   description: "lil projects i built while watching cyfrin's solidity course",
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/Not-Sarthak/cyfrin-evm",
    //       icon: <GithubIcon className="size-9" />,
    //     },
    //   ],
    // },
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
