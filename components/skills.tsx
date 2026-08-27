import { Braces, Code2, Database, Layout } from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { Section } from '@/components/section'

const icons = [Code2, Layout, Database, Braces]

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title="Tools and concepts I work with"
      description="The languages, technologies and core concepts I have studied and applied in coursework and personal projects."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length]
          return (
            <article
              key={group.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-base font-semibold">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
