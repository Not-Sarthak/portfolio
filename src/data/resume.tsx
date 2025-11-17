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
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/wins", icon: TrophyIcon, label: "Wins" },
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
  projects: [
    {
      Frontend: {
        "Superteam Security Dashboard": {
          id: 1,
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
            "Superteam Security Dashboard is a one-stop place to read everything about hacks, exploits, and vulnerabilities in the Solana Ecosystem.",
        },
        "Sol UI": {
          id: 2,
          links: [
            {
              type: "Website",
              href: "https://sol-ui.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/sol-ui",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "A modern UI component library for Solana dApps, featuring customizable components native to Solana Ecosystem.",
        },
        "SendAI Dashboard": {
          id: 3,
          links: [
            {
              type: "Website",
              href: "https://sendai-dashboard.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/sendai-dashboard",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "A comprehensive dashboard for SendAI, providing analytics and insights for projects built during Send AI Hackathon.",
        },
      },
      Backend: {
        Curators: {
          id: 1,
          links: [
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/curators",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "Curators Backend automates the process of identifying high-performing Liquid Staking Tokens (LSTs) on Solana and facilitates automatic swapping to optimize yield.",
        },
      },
      "Full Stack": {
        Hunch: {
          id: 1,
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
            "A social trading platform connecting people who spot viral content early with those who want to profit from it. Create markets for viral posts, trade on insights, and earn from your predictions.",
        },
        Ticker: {
          id: 2,
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
          description: "A Farcaster Mini-App to buy RWA Assets Onchain",
        },
        Vox: {
          id: 3,
          links: [
            {
              type: "Website",
              href: "https://voxnow.xyz/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/vox",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "A Ticket-Reselling platform for events, that allows users to buy and sell tickets for events.",
        },
        Twinn: {
          id: 4,
          links: [
            {
              type: "Website",
              href: "https://usetwinn.com/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/twinn",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "Bookmark your Life, with Twinn - A zk-compressed digital badge on Solana for every moment you showed up.",
        },
        Ghiblub: {
          id: 5,
          links: [
            {
              type: "Website",
              href: "https://ghiblub.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/ghiblub",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "A community platform for Studio Ghibli fans, that helps them find out how closely they're connected to literally anyone on github.",
        },
        "Lulo Blinks": {
          id: 6,
          links: [
            {
              type: "Website",
              href: "https://dial.to/developer?url=https://www.investorrr.club/api/donate&cluster=mainnet",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/lulo-blinks",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description: "Solana Blink to deposit funds directly to Lulo",
        },
      },
      "Smart Contracts": {
        Solana: {
          "NFT Marketplace Program": {
            id: 1,
            description: "NFT Marketplace Program using Anchor",
            links: [
              {
                type: "Source",
                href: "https://github.com/Not-Sarthak/anchor-nft-marketplace",
                icon: <GithubIcon className="size-9" />,
              },
            ],
          },
          "AMM Program": {
            id: 2,
            description:
              "AMM Program using Anchor to understand the Constant Product Curve",
            links: [
              {
                type: "Source",
                href: "https://github.com/Not-Sarthak/amm-anchor",
                icon: <GithubIcon className="size-9" />,
              },
            ],
          },
          "NFT Staking Program": {
            id: 3,
            description: "NFT Staking Program using Anchor",
            links: [
              {
                type: "Source",
                href: "https://github.com/Not-Sarthak/nft-stake-anchor",
                icon: <GithubIcon className="size-9" />,
              },
            ],
          },
          "Vault Program": {
            id: 4,
            description: "Solana Vault Program using Anchor",
            links: [
              {
                type: "Source",
                href: "https://github.com/Not-Sarthak/vault-anchor",
                icon: <GithubIcon className="size-9" />,
              },
            ],
          },
          "Escrow Program": {
            id: 5,
            description: "Solana Escrow Program using Anchor",
            links: [
              {
                type: "Source",
                href: "https://github.com/Not-Sarthak/escrow-anchor/",
                icon: <GithubIcon className="size-9" />,
              },
            ],
          },
        },
        EVM: {
          "Foundry Stablecoin": {
            id: 1,
            description:
              "This project is meant to be a stablecoin where users can deposit WETH and WBTC in exchange for a token that will be pegged to the USD.",
            links: [
              {
                type: "Source",
                href: "https://github.com/Not-Sarthak/defi-stablecoin",
                icon: <GithubIcon className="size-9" />,
              },
            ],
          },
          "Merkle Airdrop": {
            id: 2,
            description:
              "An introduction to the Merkle Airdrop and Signatures project",
            links: [
              {
                type: "Source",
                href: "https://github.com/Not-Sarthak/merkle-airdrop",
                icon: <GithubIcon className="size-9" />,
              },
            ],
          },
          "DAO - Foundry": {
            id: 3,
            description: "On-chain voting system for DAOs",
            links: [
              {
                type: "Source",
                href: "https://github.com/Not-Sarthak/foundry-dao",
                icon: <GithubIcon className="size-9" />,
              },
            ],
          },
          "ERC - 4337 / Foundry": {
            id: 4,
            description:
              "A project to learn Account Abstraction using EIP-4337",
            links: [
              {
                type: "Source",
                href: "https://github.com/Not-Sarthak/foundry-account-abstraction",
                icon: <GithubIcon className="size-9" />,
              },
            ],
          },
        },
      },
    },
  ],
  wins: {
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
    "ETHIndia '24 - Bounty Winner": {
      link: "",
      type: "hackathon",
    },
    "Onchain AI Fellowship - by @callusfbi - Selected": {
      link: "",
      type: "hackathon",
    },
    "EthBangkok '24 - Bounty Winner": {
      link: "",
      type: "hackathon",
    },
    "Encode Club BTC Hackathon - 2nd Place": {
      link: "",
      type: "hackathon",
    },
    "Funding the Commons '24 Bangkok - Bounty Winner": {
      link: "",
      type: "hackathon",
    },
    "Based India '24 - Winner List": {
      link: "",
      type: "hackathon",
    },
    "Colosseum Radar Hackathon - 2x Bounties": {
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
} as const;
