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
              <h2 className="text-gray-400 text-sm">Projects</h2>
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
              <h2 className="text-gray-400 text-sm">Work</h2>
              <hr className="border-gray-200 opacity-50 mt-1" />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="py-2 text-sm">
              <p><a href="https://x.com/met_engine" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">MetEngine</a> <span className="text-gray-400">[june 2025 – present]</span> <span className="text-gray-400">— founding engineer</span></p>
              <ul className="text-gray-400 text-sm list-disc ml-4 mt-0.5">
                <li>researched across defi verticals like liquidity providing, lending &amp; borrowing, yield-bearing vaults, and launchpads</li>
                <li>built <span className="text-foreground">3ms</span> data pipelines — parsing (manual, codama, carbon), indexing (yellowstone grpc), and historical backfilling (jetstreamer firehose)</li>
                <li>built backend microservices in axum (rust) and typescript</li>
                <li>owned deployments, ci/cd, and the entire aws infrastructure</li>
                <li>ensured scalability and reliability with kafka, redis, docker, clickhouse, and postgresql — achieving <span className="text-foreground">~95%</span> stable uptime while handling <span className="text-foreground">multiple GBs</span> of data per day</li>
                <li>built ui for chrome extension (<span className="text-foreground">2.2k</span> users in 3 weeks, <span className="text-foreground">90</span> paid) and optimised webapp frontend (<span className="text-foreground">$114.25m</span> volume managed, <span className="text-foreground">$100k</span> arr)</li>
                {/* <li>wrote metengine-vaults program and coordinated with auditing firms pre-mainnet launch</li> */}
              </ul>
            </div>
            <div className="py-2 text-sm">
              <p><a href="https://x.com/gasyardfi" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">Gasyard</a> <span className="text-gray-400">[jan 2025 – may 2025]</span> <span className="text-gray-400">— full stack developer</span></p>
              <ul className="text-gray-400 text-sm list-disc ml-4 mt-0.5">
                <li>built backend with fastify, docker, and postgresql — <span className="text-foreground">$570k</span> in volume, <span className="text-foreground">120k</span> requests</li>
                <li>implemented cross-chain bridge routes for hyperliquid, movement, monad, and other evm/non-evm chains</li>
                <li>built bridge explorer for transaction tracking and fuelbae agent for defi actions across protocols</li>
              </ul>
            </div>
            <div className="py-2 text-sm">
              <p><a href="https://x.com/0rbitco" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">0rbit</a> <span className="font-medium">(acq. by <a href="https://x.com/fwdresearch" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">forward research</a>)</span> <span className="text-gray-400">[mar 2024 – dec 2024]</span> <span className="text-gray-400">— full stack developer</span></p>
              <ul className="text-gray-400 text-sm list-disc ml-4 mt-0.5">
                <li>one of the first <span className="text-foreground">10</span> builders on ao during its early stage</li>
                <li>wrote smart contracts in lua for the ao ecosystem and battle-tested core infrastructure</li>
                <li>built frontend tutorials, ui components, docs, and technical blogs</li>
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
              <h2 className="text-gray-400 text-sm">Open Source</h2>
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
              <h2 className="text-gray-400 text-sm">Writing — my thoughts, learnings and everything in between</h2>
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

      <section id="video" className="py-6">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <VideoPlayer src="/sarthak-pfp.mp4" />
        </BlurFade>
      </section>

      {/* <section id="wins">
        <div className="space-y-2 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div>
              <h2 className="text-gray-400 text-sm">Hackathon Wins</h2>
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
