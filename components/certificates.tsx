import { Award, ExternalLink } from 'lucide-react'
import { certificates } from '@/lib/portfolio-data'
import { Section } from '@/components/section'

export function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="Certificates & Achievements"
      title="Verified learning, course by course"
      description="Courses I have completed across AI foundations, generative AI, emerging technology and leadership."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <article
            key={cert.title}
            className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Award className="size-5" aria-hidden="true" />
              </span>
              {cert.date ? (
                <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
              ) : null}
            </div>

            <div className="mb-auto flex flex-col gap-1.5">
              <h3 className="font-display text-base leading-snug font-semibold text-balance">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">{cert.issuer ?? 'Certified Course'}</p>
            </div>

            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-auto inline-flex h-9 w-fit items-center gap-2 rounded-lg border border-border bg-secondary px-3.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              View Certificate
              <ExternalLink className="size-3.5" aria-hidden="true" />
              <span className="sr-only">— {cert.title}</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
