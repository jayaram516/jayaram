import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

const socials = [
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', href: profile.github, Icon: GithubIcon },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

const facts = [
  { value: 'AI & ML', label: 'B.Tech specialization' },
  { value: '7.50', label: 'Current CGPA' },
  { value: '04', label: 'Projects built' },
  { value: '05', label: 'Certifications' },
]

const ticker = [
  'C',
  'C++',
  'Python',
  'HTML',
  'CSS',
  'DBMS',
  'Problem Solving',
  'Data Structures',
  'Machine Learning',
  'Software Development',
]

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(75%_65%_at_30%_0%,black,transparent)]" />
      <div className="hero-light pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-16">
          {/* Copy column */}
          <div className="flex min-w-0 flex-1 flex-col gap-7">
            <p className="animate-rise flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-[0.2em] uppercase">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-primary">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                </span>
                Open to internships
              </span>
              <span className="inline-flex items-center gap-1.5 tracking-normal text-muted-foreground normal-case">
                <MapPin className="size-3.5" aria-hidden="true" />
                Phagwara, Punjab
              </span>
            </p>

            <h1 id="hero-title" className="animate-rise" style={{ animationDelay: '80ms' }}>
              <span className="sr-only">B. Jayaram</span>
              <span
                aria-hidden="true"
                className="font-display block text-[clamp(3.25rem,11vw,7rem)] leading-[0.86] font-bold tracking-[-0.03em]"
              >
                <span className="block text-foreground">B.</span>
                <span className="text-stroke block">JAYARAM</span>
              </span>
            </h1>

            <div
              className="animate-rise flex flex-col gap-5 border-l-0"
              style={{ animationDelay: '160ms' }}
            >
              <p className="font-display max-w-2xl text-lg leading-snug text-pretty text-foreground/90 sm:text-2xl">
                B.Tech AI &amp; ML Student <span className="text-primary/60">/</span> C/C++
                Programmer <span className="text-primary/60">/</span> Aspiring Software Engineer
              </p>

              <p className="max-w-xl leading-relaxed text-pretty text-muted-foreground">
                {profile.intro}
              </p>
            </div>

            <div
              className="animate-rise flex flex-col gap-5 sm:flex-row sm:items-center"
              style={{ animationDelay: '240ms' }}
            >
              <a
                href="#projects"
                className="group inline-flex h-12 w-fit items-center justify-center gap-2.5 rounded-lg bg-primary px-7 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                View My Projects
                <ArrowDown
                  className="size-4 transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <ul className="flex items-center gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                      className="inline-flex size-12 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:bg-secondary hover:text-primary"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                      <span className="sr-only">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Terminal panel — the signature element */}
          <div
            className="animate-rise w-full shrink-0 lg:w-[26rem]"
            style={{ animationDelay: '320ms' }}
          >
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
                <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                <span className="size-2.5 rounded-full bg-primary/70" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">profile.cpp</span>
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-[0.8rem] leading-relaxed">
                <code>
                  <span className="text-muted-foreground/60">{'#include <future>'}</span>
                  {'\n\n'}
                  <span className="text-primary/80">struct</span>{' '}
                  <span className="text-foreground">Developer</span>{' '}
                  <span className="text-muted-foreground">{'{'}</span>
                  {'\n  '}
                  <span className="text-muted-foreground/70">string</span>{' '}
                  <span className="text-foreground/90">focus</span>
                  <span className="text-muted-foreground"> = </span>
                  <span className="text-primary">&quot;AI &amp; ML&quot;</span>
                  <span className="text-muted-foreground">;</span>
                  {'\n  '}
                  <span className="text-muted-foreground/70">string</span>{' '}
                  <span className="text-foreground/90">core</span>
                  <span className="text-muted-foreground">[]= {'{'}</span>
                  <span className="text-primary">&quot;C&quot;</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-primary">&quot;C++&quot;</span>
                  <span className="text-muted-foreground">{'};'}</span>
                  {'\n  '}
                  <span className="text-muted-foreground/70">bool</span>{' '}
                  <span className="text-foreground/90">learning</span>
                  <span className="text-muted-foreground"> = </span>
                  <span className="text-primary">true</span>
                  <span className="text-muted-foreground">;</span>
                  {'\n'}
                  <span className="text-muted-foreground">{'};'}</span>
                  {'\n\n'}
                  <span className="text-muted-foreground/60">{'// building, one commit at a time'}</span>
                  {'\n'}
                  <span className="text-primary">$</span>{' '}
                  <span className="text-foreground/90">./jayaram --build</span>
                  <span className="animate-caret text-primary">▌</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Quick facts */}
        <dl
          className="animate-rise mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4"
          style={{ animationDelay: '400ms' }}
        >
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1.5">
              <dt className="sr-only">{fact.label}</dt>
              <dd className="font-display text-3xl leading-none font-bold text-primary sm:text-4xl">
                {fact.value}
              </dd>
              <p className="font-mono text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase">
                {fact.label}
              </p>
            </div>
          ))}
        </dl>
      </div>

      {/* Keyword ticker */}
      <div
        className="relative flex overflow-hidden border-y border-border bg-card/40 py-4"
        aria-hidden="true"
      >
        <div className="animate-ticker flex shrink-0 items-center gap-8 pr-8">
          {[...ticker, ...ticker].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-8 font-mono text-xs tracking-[0.18em] whitespace-nowrap text-muted-foreground uppercase"
            >
              {item}
              <span className="size-1 shrink-0 rounded-full bg-primary/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
