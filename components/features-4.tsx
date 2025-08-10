import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

type Feature = {
  title: string
  description: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  iconColor: string
  iconBg: string
}

const features: Feature[] = [
  {
    title: 'Blazing Fast',
    description: 'Optimized rendering and caching deliver instant feedback from first paint to heavy workloads.',
    Icon: Zap,
    iconColor: 'text-amber-600 dark:text-amber-400',
    iconBg: 'from-amber-500/20 to-amber-500/5',
  },
  {
    title: 'Powerful',
    description: 'Type‑safe APIs, streaming, and edge‑ready architecture so you can scale without rewrites.',
    Icon: Cpu,
    iconColor: 'text-sky-600 dark:text-sky-400',
    iconBg: 'from-sky-500/20 to-sky-500/5',
  },
  {
    title: 'Security',
    description: 'Least‑privilege defaults, secrets isolation, and end‑to‑end encryption where it matters.',
    Icon: Fingerprint,
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    title: 'Customization',
    description: 'Composable primitives and theming that match your brand—not the other way around.',
    Icon: Pencil,
    iconColor: 'text-fuchsia-600 dark:text-fuchsia-400',
    iconBg: 'from-fuchsia-500/20 to-fuchsia-500/5',
  },
  {
    title: 'Control',
    description: 'Granular roles, environments, rate limits, and audit trails for confident governance.',
    Icon: Settings2,
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    iconBg: 'from-indigo-500/20 to-indigo-500/5',
  },
  {
    title: 'Built for AI',
    description: 'Token‑aware streaming, function calling, and vector‑native workflows baked in.',
    Icon: Sparkles,
    iconColor: 'text-violet-600 dark:text-violet-400',
    iconBg: 'from-violet-500/20 to-violet-500/5',
  },
]

function FeatureCard({ feature }: { feature: Feature }) {
  const { title, description, Icon, iconColor, iconBg } = feature

  return (
    <div
      className="
        group relative rounded-2xl p-6 sm:p-8
        bg-white/60 dark:bg-zinc-900/60
        ring-1 ring-zinc-950/5 dark:ring-white/10
        backdrop-blur-sm
        shadow-[0_1px_0_0_rgba(0,0,0,0.04)]
        transition
        hover:-translate-y-1 hover:shadow-xl
        focus-within:-translate-y-1 focus-within:shadow-xl
      "
    >
      <div
        className={`
          mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl
          bg-gradient-to-br ${iconBg}
          ring-1 ring-inset ring-black/5 dark:ring-white/10
          transition-transform
          group-hover:scale-[1.03]
        `}
        aria-hidden="true"
      >
        <Icon className={`size-5 ${iconColor}`} />
      </div>

      <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      {/* Focus ring target for keyboard users if/when the card becomes actionable */}
      <span className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900" tabIndex={-1} />
    </div>
  )
}

export default function Features() {
  return (
    <section className="relative py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-zinc-950/[0.03] px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-900/5 dark:bg-white/5 dark:text-zinc-300 dark:ring-white/10">
            <span className="size-1.5 rounded-full bg-emerald-500/80" />
            Why choose us
          </p>
          <h2 id="features-heading" className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Everything you need to build with confidence
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Beautiful by default, customizable by design, and engineered for performance.
          </p>
        </header>

        <div
          aria-labelledby="features-heading"
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {features.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </div>
    </section>
  )
}