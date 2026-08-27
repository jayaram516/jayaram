import { profile } from '@/lib/portfolio-data'

const links = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
  { label: 'Email', href: `mailto:${profile.email}` },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-muted-foreground">© 2026 B. Jayaram. All rights reserved.</p>
        <nav aria-label="Footer">
          <ul className="flex items-center gap-1">
            {links.map((link, i) => (
              <li key={link.label} className="flex items-center gap-1">
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                  className="rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
                {i < links.length - 1 ? (
                  <span aria-hidden="true" className="text-border">
                    |
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
