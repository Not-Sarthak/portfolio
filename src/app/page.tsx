"use client";

import Link from "next/link";
import BlurFade from "@/components/text/blur-fade";
import { DATA } from "@/data/resume";
import { ProjectList } from "@/components/cards/project-card";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";
import { allBlogPosts } from "@/data/blog";
// import VideoPlayer from "@/components/ui/video";
import { OpenSourceList } from "@/components/open-source";
import type { Project } from "@/components/cards/project-card";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const projects = DATA.projects as Record<string, Project>;

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-2">
          <div className="flex gap-6 items-start">
            <div className="flex-1">
              <h1 className="font-bold">Sarthak Shah</h1>
              <p className="text-gray-400 text-sm">backend / distributed systems engineer</p>
              <p className="mt-4 text-sm">
                i&apos;m a rust/typescript engineer.
              </p>
              <p className="mt-4 text-sm">
                systems and backend is what i specialize in. blockchain (especially defi) is my main niche, ai being the secondary one.
              </p>
              <p className="mt-4 text-sm">
                i was most recently a founding engineer at <a href="https://www.metengine.xyz/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">MetEngine</a>{" "}<img src="/work/metengine.svg" alt="" className="inline-block w-4 h-4 align-middle -translate-y-px" />.
              </p>
              {/* <p className="mt-4 text-sm">
                I enjoy participating in hackathons and have won <Link href="/wins" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">~20</Link> of them. Also, in my free time, I obsess over cameras, drones, and bikes.
              </p> */}
              <p className="mt-4 text-sm">
                links: {" "}
                <a href="https://www.linkedin.com/in/notsarthakshah/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">[LinkedIn]</a>{" "}
                <a href="https://x.com/0xSarthak13" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">[Twitter]</a>{" "}
                <a href="https://github.com/Not-Sarthak/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">[GitHub]</a>{" "}
                <a href="https://docs.google.com/document/d/1Ul0gZj7XOaAxmzpNx_jr5djOBOBt-lyT6kCnBKO_uBg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">[Resume]</a>
              </p>
            </div>
            <img src="/me2.jpg" alt="Sarthak Shah" className="w-28 h-28 rounded object-cover shrink-0" />
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
      <section id="work">
        <div className="space-y-2 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div>
              <h2 className="text-gray-500 text-sm">Work</h2>
              <hr className="border-gray-200 opacity-50 mt-1" />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="py-2 text-sm">
              <div className="flex justify-between gap-4">
                <p className="min-w-0"><a href="https://x.com/met_engine" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">MetEngine</a> <span className="text-gray-400">— founding engineer</span></p>
                <span className="text-gray-400 shrink-0">june 2025 – sept 2026</span>
              </div>
              <p className="text-gray-400">(backed by colosseum, balaji srinivasan &amp; monke foundry)</p>
              <ul className="text-gray-500 text-sm list-disc ml-4 mt-0.5">
                <li>researched, designed and implemented protocol mechanics across amms, liquidity providing, lending &amp; borrowing, yield-bearing vaults, perps, and launchpads</li>
                <li>built the lp trading terminal (<span className="text-foreground">$114m in volume</span>)</li>
                <li>shipped the chrome extension: <span className="text-foreground">2.2k users in 3 weeks</span></li>
                <li>built the data pipeline that streams raw transactions over yellowstone grpc, backfills history with jetstreamer, and decodes both into readable data with codama and carbon</li>
                <li>built a scalable storage system on clickhouse, postgres and redis that handled <span className="text-foreground">10m+ rows/day</span> while serving real-time queries to users</li>
                <li>set up the aws infrastructure, ci/cd and observability that deploy, run and monitor every metengine service</li>
              </ul>
            </div>
            <div className="py-2 text-sm">
              <div className="flex justify-between gap-4">
                <p className="min-w-0"><a href="https://x.com/gasyardfi" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">Gasyard Finance</a> <span className="text-gray-400">— software development engineer</span></p>
                <span className="text-gray-400 shrink-0">dec 2024 – may 2025</span>
              </div>
              <ul className="text-gray-500 text-sm list-disc ml-4 mt-0.5">
                <li>contributed to intent based cross-chain bridge routes (solana, evm and movevm) for evm/non-evm networks across testnet/mainnet environments</li>
                <li>developed the fastify backend that did <span className="text-foreground">$550k</span> in volume and <span className="text-foreground">120k+ requests in 5 months</span> with sub-second quotes</li>
                <li>built a high-performance bridge explorer for gasyard that indexes every transaction in real time</li>
              </ul>
            </div>
            <div className="py-2 text-sm">
              <div className="flex justify-between gap-4">
                <p className="min-w-0"><a href="https://x.com/0rbitco" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">0rbit</a> <span className="text-gray-400">(acq. by <a href="https://x.com/fwdresearch" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">forward research</a>)</span> <span className="text-gray-400">— software engineer</span></p>
                <span className="text-gray-400 shrink-0">mar 2024 – dec 2024</span>
              </div>
              <ul className="text-gray-500 text-sm list-disc ml-4 mt-0.5">
                <li>one of the first 10 builders on <a href="https://ao.arweave.net/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:decoration-current transition-all duration-200">AO</a>, contributing during the ecosystem&apos;s earliest days. later on built and scaled the developer community from <span className="text-foreground">0 to 2,000+ members</span>, providing direct technical support to <span className="text-foreground">10+ integration partners</span></li>
                <li>contributed to the lua smart contracts powering <span className="text-foreground">0rbit&apos;s oracle</span>, the first protocol deployed on AO, enabling price feeds, data feeds, and arbitrary api access on arweave&apos;s actor-oriented compute layer and wrote automated tests for the oracle contracts and stress-tested 0rbit nodes on testnet before mainnet</li>
                <li>authored <span className="text-foreground">4 developer blogs</span>, comprehensive documentation, guides, and working demo applications that accelerated adoption of 0rbit and reduced developer support tickets by <span className="text-foreground">40%</span></li>
              </ul>
            </div>
            <div className="py-2 text-sm">
              <p>&amp; 6x freelance clients <span className="text-gray-400">— mostly backend &amp; protocol eng.</span></p>
            </div>
          </BlurFade>
        </div>
      </section>


      <section id="projects">
        <div className="space-y-2 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div>
              <h2 className="text-gray-500 text-sm">Projects</h2>
              <hr className="border-gray-200 opacity-50 mt-1" />
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="">
              <ProjectList projects={projects} />
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="open-source">
        <div className="space-y-2 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 14.5}>
            <div>
              <h2 className="text-gray-500 text-sm">Open Source</h2>
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
              <h2 className="text-gray-500 text-sm">Writing — my thoughts, learnings and everything in between</h2>
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
          {/* <BlurFade delay={BLUR_FADE_DELAY * 16.5}>
            <div>
              <h2 className="text-gray-500 text-sm">Highlighted Wins</h2>
              <hr className="border-gray-200 opacity-50 mt-1" />
            </div>
          </BlurFade> */}
          <BlurFade delay={BLUR_FADE_DELAY * 16.6}>
            <div className="flex flex-col gap-4 mt-2">
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
                  <div className="py-0.5 text-sm">
                    <Link href="/lab" className="lab-chip">
                      <span className="lab-chip__beam" aria-hidden="true" />
                      <span className="lab-chip__label">Lab</span>
                    </Link>
                    <span className="text-gray-500"> — i experiment with design engineering</span>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* <section id="video" className="py-6">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <VideoPlayer src="/sarthak-pfp.mp4" />
        </BlurFade>
      </section> */}

      <section id="footer" className="pt-20">
        <Footer />
      </section>
    </main>
  );
}
