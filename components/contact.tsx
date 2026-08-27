import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'
import { Section } from '@/components/section'

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    action: 'Email Me',
  },
  {
    label: 'LinkedIn',
    value: profile.linkedinLabel,
    href: profile.linkedin,
    Icon: LinkedinIcon,
    action: 'LinkedIn',
  },
  {
    label: 'GitHub',
    value: profile.githubLabel,
    href: profile.github,
    Icon: GithubIcon,
    action: 'GitHub',
  },
]

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Connect"
      description="I am open to learning opportunities, technical collaborations, internships, and opportunities that help me grow as a software and AI/ML professional."
    >
      <div className="flex flex-col gap-6">
        <ul className="grid gap-4 sm:grid-cols-3">
          {channels.map(({ label, value, href, Icon, action }) => {
            const external = !href.startsWith('mailto:')
            return (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer noopener' : undefined}
                  className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      {label}
                    </span>
                    <span className="text-sm break-all text-foreground">{value}</span>
                  </span>
                  <span className="mt-auto text-sm font-medium text-primary">{action} →</span>
                </a>
              </li>
            )
          })}
        </ul>

        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="size-4 text-primary" aria-hidden="true" />
          <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} className="hover:text-foreground">
            {profile.phone}
          </a>
        </p>
      </div>
    </Section>
  )
}
