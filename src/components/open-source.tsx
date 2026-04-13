"use client";

import { useState } from "react";
import Link from "next/link";

const MergeIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="#8957e5"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-gray-400 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

interface PR {
  href: string;
  title: string;
}

interface Org {
  name: string;
  prs: PR[];
}

const orgs: Org[] = [
  {
    name: "anza-xyz/agave",
    prs: [
      { href: "https://github.com/anza-xyz/agave/pull/10797", title: "cli: fix flaky test_cli_program_deploy_with_args" },
      { href: "https://github.com/anza-xyz/agave/pull/10792", title: "banking_stage: fix receive_time_us accumulating total elapsed instead of delta" },
      { href: "https://github.com/anza-xyz/agave/pull/10751", title: "validator: emit the deprecated arg warning to logger" },
      { href: "https://github.com/anza-xyz/agave/pull/10750", title: "clap-utils: handle file paths with spaces in parse_signer_source" },
      { href: "https://github.com/anza-xyz/agave/pull/10749", title: "cli: add --authority and --payer flags to solana program extend" },
      { href: "https://github.com/anza-xyz/agave/pull/11779", title: "core: fix inverted reporting interval check in bls sigverifier" },
    ],
  },
  {
    name: "socketio/socket.io",
    prs: [
      { href: "https://github.com/socketio/socket.io/pull/5457", title: "fix(adapter): do not skip local broadcast when publishAndReturnOffset throws" },
    ],
  },
  {
    name: "prisma/prisma",
    prs: [
      { href: "https://github.com/prisma/prisma/pull/29287", title: "feat(adapter-pg): accept connection string URL in PrismaPg constructor" },
      { href: "https://github.com/prisma/prisma/pull/29286", title: "fix(client): fix browser-imported Prisma.DbNull producing empty object" },
    ],
  },
];

function OrgSection({ org }: { org: Org }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 py-1 text-sm font-medium w-full text-left"
      >
        <ChevronIcon open={open} />
        {org.name}
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          maxHeight: open ? `${org.prs.length * 40}px` : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="ml-5 flex flex-col">
          {org.prs.map((pr) => (
            <Link
              key={pr.href}
              href={pr.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-0.5 text-sm text-gray-400 hover:text-foreground transition-colors duration-200"
            >
              <MergeIcon />
              {pr.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OpenSourceList() {
  return (
    <div>
      {orgs.map((org) => (
        <OrgSection key={org.name} org={org} />
      ))}
    </div>
  );
}
