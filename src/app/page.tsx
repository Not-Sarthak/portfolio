"use client";

import BlurFade from "@/components/text/blur-fade";
import { DATA } from "@/data/resume";
import { ProjectList } from "@/components/cards/project-card";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";
import { allBlogPosts } from "@/data/blog";
import VideoPlayer from "@/components/ui/video";
import { OpenSourceList } from "@/components/open-source";

interface ProjectLink {
  type: string;
  href: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  links: readonly ProjectLink[];
  description: string;
}

type ProjectsData = Record<string, Project>;

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const getAllProjects = () => {
    return DATA.projects as unknown as ProjectsData;
  };


  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-2">
          <div className="flex gap-6 items-start">
            <div className="flex-1">
              <h1 className="font-bold">Sarthak Shah</h1>
              <p className="text-gray-400 text-sm">backend / smart contract engineer</p>
              <p className="mt-4 text-sm">
                I'm a Founding Engineer at <a href="https://www.metengine.xyz/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">MetEngine</a>{" "}<img src="/work/metengine.svg" alt="" className="inline-block w-4 h-4 align-middle -translate-y-px" />.
              </p>
              <p className="mt-4 text-sm">
                I love working with financial systems, quantitative research, game theory and mechanism design. You'll find me building elaborate backend systems, smart contracts, and low-latency distributed infra as weekend gigs.
              </p>
              <p className="mt-4 text-sm">
                I enjoy participating in hackathons and have won ~20 of them. Also, in my free time, I obsess over cameras, drones, and bikes.
              </p>
              <p className="mt-4 text-sm">
                Links: {" "}
                <a href="https://www.linkedin.com/in/sarthak-shah-49267b224/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">[LinkedIn]</a>{" "}
                <a href="https://x.com/0xSarthak13" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">[Twitter]</a>{" "}
                <a href="https://github.com/Not-Sarthak/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">[GitHub]</a>
              </p>
            </div>
            <img src="/me.jpg" alt="Sarthak Shah" className="w-28 h-28 rounded object-cover shrink-0" />
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="mt-6 flex justify-center">
            <CommandPalette />
          </div>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-2 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div>
              <h2 className="text-gray-500 text-sm underline underline-offset-4 decoration-gray-300">Projects</h2>
              <hr className="border-gray-200 opacity-50 mt-1" />
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="">
              <ProjectList projects={getAllProjects()} />
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="space-y-2 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div>
              <h2 className="text-gray-500 text-sm underline underline-offset-4 decoration-gray-300">Work</h2>
              <hr className="border-gray-200 opacity-50 mt-1" />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="py-2 text-sm">
              <p><a href="https://x.com/met_engine" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">MetEngine</a> <span className="text-gray-400">[june 2025 – present]</span> <span className="text-gray-400">— founding engineer</span></p>
              <ul className="text-gray-500 text-sm list-disc ml-4 mt-0.5">
                <li>researched across defi verticals like liquidity providing, lending &amp; borrowing, yield-bearing vaults, and launchpads</li>
                <li>built <span className="text-foreground">3ms</span> data pipelines — parsing (manual, codama, carbon), indexing (yellowstone grpc), and historical backfilling (jetstreamer firehose)</li>
                <li>built backend microservices in axum (rust) and typescript</li>
                <li>owned deployments, ci/cd, and the entire monitoring, observability and aws infrastructure</li>
                <li>set up nginx as a reverse proxy for backend microservices</li>
                <li>ensured scalability and reliability with kafka, redis, docker, clickhouse, and postgresql — achieving <span className="text-foreground">~95%</span> stable uptime while handling <span className="text-foreground">multiple GBs</span> of data per day</li>
                <li>built ui for chrome extension (<span className="text-foreground">2.2k</span> users in 3 weeks, <span className="text-foreground">90</span> paid) and optimised webapp frontend (<span className="text-foreground">$114.25m</span> volume managed, <span className="text-foreground">$100k</span> arr)</li>
                {/* <li>wrote metengine-vaults program and coordinated with auditing firms pre-mainnet launch</li> */}
              </ul>
            </div>
            <div className="py-2 text-sm">
              <p><a href="https://x.com/gasyardfi" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">Gasyard</a> <span className="text-gray-400">[jan 2025 – may 2025]</span> <span className="text-gray-400">— full stack developer</span></p>
              <ul className="text-gray-500 text-sm list-disc ml-4 mt-0.5">
                <li>co-built the fastify backend with a team of <span className="text-foreground">5</span> (docker, postgresql), handling <span className="text-foreground">$570k</span> volume across <span className="text-foreground">120k</span> requests in 5 months</li>
                <li>wrote integrations from scratch for hyperliquid, movement, monad, and other evm/non-evm chains, often pre-sdk on the newer ones</li>
                <li>shipped a public-facing bridge explorer for transaction tracking</li>
                <li>built fuelbae, an ai agent executing defi actions across aave, uniswap, hyperliquid, and curve</li>
              </ul>
            </div>
            <div className="py-2 text-sm">
              <p><a href="https://x.com/0rbitco" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">0rbit</a> <span className="font-medium">(acq. by <a href="https://x.com/fwdresearch" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">forward research</a>)</span> <span className="text-gray-400">[mar 2024 – dec 2024]</span> <span className="text-gray-400">— full stack developer</span></p>
              <ul className="text-gray-500 text-sm list-disc ml-4 mt-0.5">
                <li>shipped the lua smart contracts powering 0rbit's oracle alongside <span className="text-foreground">3</span> other developers, making it the <span className="text-foreground">first protocol live on AO</span> and bringing any price feed, data feed, or api onto <a href="https://ao.arweave.net/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">AO</a> (arweave's actor-oriented compute layer)</li>
                <li>one of the first <span className="text-foreground">10</span> builders on <a href="https://ao.arweave.net/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">AO</a> in its earliest days</li>
                <li>battle-tested 0rbit's node pre-launch, surfacing edge cases and stability issues before mainnet</li>
                <li>authored <span className="text-foreground">4</span> developer tutorials with working demo apps to onboard new builders to the ecosystem</li>
              </ul>
            </div>
            <div className="py-2 text-sm">
              <p>&amp; previously: 2x other startups and 3x freelance clients</p>
            </div>
          </BlurFade>
        </div>
      </section>


      <section id="open-source">
        <div className="space-y-2 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 14.5}>
            <div>
              <h2 className="text-gray-500 text-sm underline underline-offset-4 decoration-gray-300">Open Source</h2>
              <hr className="border-gray-200 opacity-50 mt-1" />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14.6}>
            <OpenSourceList />
          </BlurFade>
        </div>
      </section>

      <section id="blogs">
        <div className="space-y-2 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div>
              <h2 className="text-gray-500 text-sm underline underline-offset-4 decoration-gray-300">Writing — my thoughts, learnings and everything in between</h2>
              <hr className="border-gray-200 opacity-50 mt-1" />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div>
              {allBlogPosts.map((post) => (
                <div key={post.id} className="py-0.5 text-sm">
                  <a
                    href={post.externalUrl ?? `https://0xsarthak.hashnode.dev${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200"
                  >
                    {post.title.toLowerCase()}
                  </a>
                  <span className="text-gray-400"> — {post.publishedAt.toLowerCase()}</span>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="wins">
        <div className="space-y-2 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16.5}>
            <div>
              <h2 className="text-gray-500 text-sm underline underline-offset-4 decoration-gray-300">Highlighted Wins</h2>
              <hr className="border-gray-200 opacity-50 mt-1" />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 16.6}>
            <div className="flex flex-col gap-4 mt-2">
              {(["hackathon", "fellowship", "other"] as const).map((type) => {
                const items = DATA.highlightedWins.filter((w) => (w.type as string) === type);
                if (items.length === 0) return null;
                const label = type === "hackathon" ? "hackathons" : type === "fellowship" ? "fellowships & honors" : "misc";
                return (
                  <div key={type}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-foreground font-bold uppercase tracking-widest">{label}</span>
                      <div className="flex-1 h-px bg-gray-300" />
                    </div>
                    <div>
                      {items.map((win) => (
                        <div key={win.name} className="py-0.5 text-sm">
                          <div className="flex justify-between gap-4">
                            <span className="min-w-0">
                              <span className="inline-block w-20">{win.place}</span>
                              {win.name}
                            </span>
                            <span className="text-gray-400 shrink-0">{win.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-foreground font-bold uppercase tracking-widest">sidequests & fun</span>
                  <div className="flex-1 h-px bg-gray-300" />
                </div>
                <div>
                  {DATA.sidequests.map((sq) => (
                    <div key={sq.url} className="py-0.5 text-sm">
                      <a
                        href={sq.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200"
                      >
                        {sq.name}
                      </a>
                      <span className="text-gray-500"> — {sq.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="video" className="py-6">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <VideoPlayer src="/sarthak-pfp.mp4" />
        </BlurFade>
      </section>

      {/* <section id="wins">
        <div className="space-y-2 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div>
              <h2 className="text-gray-500 text-sm underline underline-offset-4 decoration-gray-300">Hackathon Wins</h2>
              <hr className="border-gray-200 opacity-50 mt-1" />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <HackathonWins />
          </BlurFade>
        </div>
      </section> */}

      <section id="footer" className="pt-20">
        <Footer />
      </section>
    </main>
  );
}
