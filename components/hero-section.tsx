"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "./Header";

type Partner = { name: string; src: string };

const PARTNERS: Partner[] = [
  { name: "NVIDIA", src: "https://html.tailus.io/blocks/customers/nvidia.svg" },
  { name: "GitHub", src: "https://html.tailus.io/blocks/customers/github.svg" },
  { name: "OpenAI", src: "https://html.tailus.io/blocks/customers/openai.svg" },
  {
    name: "Tailwind CSS",
    src: "https://html.tailus.io/blocks/customers/tailwindcss.svg",
  },
  { name: "Vercel", src: "https://html.tailus.io/blocks/customers/vercel.svg" },
  { name: "Zapier", src: "https://html.tailus.io/blocks/customers/zapier.svg" },
];

export default function HeroSection() {
  const [menuState, setMenuState] = useState(false);

  return (
    <main className="relative">
      <Header
        menuState={menuState}
        setMenuState={setMenuState}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-10 sm:pt-32 sm:pb-16">
          <div className="max-w-3xl text-center sm:mx-auto lg:mr-auto lg:w-4/5">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700/90 backdrop-blur dark:border-white/10 dark:bg-zinc-900/50 dark:text-zinc-300">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Visual builder for AI assistants
            </p>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl xl:text-6xl xl:[line-height:1.1]">
              Build AI
              <span className="mx-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                chatbots
              </span>
              visually
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-white sm:text-lg">
              Create, customize, and deploy intelligent assistants without code.
              Design flows, connect data, and ship in minutes—not weeks.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
              <Button size="lg" asChild>
                <Link
                  href="https://bgremoverwz.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Rocket className="size-4" />
                  <span className="text-nowrap">Start building</span>
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/demo">
                  <span className="text-nowrap">Watch demo</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom fade to content */}
      </section>

      {/* PARTNERS */}
      <section className="relative z-10 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Trusted by teams at
          </h2>

          <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-16 sm:gap-y-10">
            {PARTNERS.map((p) => (
              <li
                key={p.name}
                className="opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <span className="sr-only">{p.name}</span>
                {/* Use unoptimized or add the domain to next.config.js images.remotePatterns */}
                <Image
                  src={p.src}
                  alt={`${p.name} logo`}
                  width={120}
                  height={32}
                  className="h-5 w-auto dark:invert"
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
