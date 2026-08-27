import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

const socials = [
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', href: profile.github, Icon: GithubIcon },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-20 sm:px-8 sm:py-28">
        <div className="animate-rise flex flex-col gap-6">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              Open to internships
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground normal-case tracking-normal">
              <MapPin className="size-3.5" aria-hidden="true" />
              Phagwara, Punjab
            </span>
          </p>

          <h1
            id="hero-title"
            className="font-display text-5xl leading-[0.95] font-bold tracking-tight text-balance sm:text-7xl"
          >
            B. Jayaram
          </h1>

          <p className="max-w-3xl font-display text-lg leading-snug text-pretty text-foreground/90 sm:text-2xl">
            B.Tech AI &amp; ML Student <span className="text-border">/</span> C/C++ Programmer{' '}
            <span className="text-border">/</span> Aspiring Software Engineer
          </p>

          <p className="max-w-2xl leading-relaxed text-pretty text-muted-foreground">
            {profile.intro}
          </p>
        </div>

        <div
          className="animate-rise flex flex-col gap-5 sm:flex-row sm:items-center"
          style={{ animationDelay: '120ms' }}
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Projects
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <ul className="flex items-center gap-2 sm:ml-auto">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                  className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="size-5" aria-hidden="true" />
                  <span className="sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
