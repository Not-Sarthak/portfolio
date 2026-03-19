"use client";

import BlurFade from "@/components/text/blur-fade";
import Link from "next/link";
import { allBlogPosts } from "@/data/blog";
import { ExternalLinkIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const posts = allBlogPosts;
  const hashnodeBaseUrl = "https://0xsarthak.hashnode.dev";

  return (
    <section className="max-w-2xl mx-auto py-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col space-y-2 mb-8">
          <h1 className="font-medium text-2xl tracking-tighter">blogs</h1>
          <p className="text-sm italic text-muted-foreground">
            my thoughts, learnings and everything in between
          </p>
        </div>
      </BlurFade>
      
      <div className="">
        {posts.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
                className="flex flex-col space-y-1 mb-4 group px-2 py-2 rounded-lg hover:bg-muted/30 transition-all border border-transparent hover:border-border/30"
                href={post.externalUrl ?? `${hashnodeBaseUrl}${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-x-2 justify-between">
                    <p className="tracking-tight font-medium group-hover:text-foreground/90 transition-colors">{post.title}</p>
                    <ExternalLinkIcon className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-xs text-muted-foreground">
                      {post.publishedAt}
                    </p>
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
