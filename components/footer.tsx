"use client"

import Link from 'next/link'
import { TextShimmer } from './ui/text-shimmer'
import { useTranslation } from 'react-i18next'

const links = [
  { key: 'features', href: '#' },
  { key: 'solution', href: '#' },
  { key: 'customers', href: '#' },
  { key: 'pricing', href: '#' },
  { key: 'help', href: '#' },
  { key: 'about', href: '#' },
]

export default function FooterSection() {
  const { t } = useTranslation()
  return (
    <footer className="relative py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-zinc-50/60 to-transparent dark:via-zinc-900/50" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Brand */}
        <Link
          href="/"
          aria-label="go home"
          className="mx-auto flex w-fit items-center gap-3 rounded-2xl border border-zinc-200/70 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-md transition-all hover:shadow-md dark:border-zinc-800/70 dark:bg-zinc-900/60"
        >
          <TextShimmer>NEOCHAT AI</TextShimmer>
        </Link>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-zinc-200/70 to-purple-500 dark:via-zinc-700/60" />

        {/* Navigation */}
        <nav aria-label="Footer navigation" className="flex justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:text-zinc-300"
                >
                  {t(`footer.links.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/70 bg-white/70 text-zinc-600 transition-all hover:scale-105 hover:border-zinc-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:text-zinc-300"
          >
            <svg className="size-5 transition-transform group-hover:rotate-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" />
            </svg>
          </Link>

          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/70 bg-white/70 text-zinc-600 transition-all hover:scale-105 hover:border-zinc-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:text-zinc-300"
          >
            <svg className="size-5 transition-transform group-hover:-rotate-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
            </svg>
          </Link>

          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/70 bg-white/70 text-zinc-600 transition-all hover:scale-105 hover:border-zinc-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:text-zinc-300"
          >
            <svg className="size-5 transition-transform group-hover:rotate-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
            </svg>
          </Link>

          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/70 bg-white/70 text-zinc-600 transition-all hover:scale-105 hover:border-zinc-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:text-zinc-300"
          >
            <svg className="size-5 transition-transform group-hover:-rotate-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4"
              />
            </svg>
          </Link>

          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/70 bg-white/70 text-zinc-600 transition-all hover:scale-105 hover:border-zinc-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:text-zinc-300"
          >
            <svg className="size-5 transition-transform group-hover:rotate-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
          </Link>

          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/70 bg-white/70 text-zinc-600 transition-all hover:scale-105 hover:border-zinc-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:text-zinc-300"
          >
            <svg className="size-5 transition-transform group-hover:-rotate-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
              />
            </svg>
          </Link>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-purple-500 via-zinc-200/40 to-transparent dark:via-zinc-700/60" />

        {/* Copyright */}
        <span className="block text-center text-xs sm:text-sm text-muted-foreground">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </span>
      </div>
    </footer>
  )
}