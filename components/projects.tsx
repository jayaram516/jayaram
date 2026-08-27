import { CheckSquare, Code, Calculator, LayoutTemplate, Users } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { Section } from '@/components/section'

const icons: Record<string, typeof Code> = {
  '01': Users,
  '02': LayoutTemplate,
  '03': CheckSquare,
  '04': Calculator,
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Academic and personal projects"
      description="Small, practical builds where I applied programming fundamentals, structured thinking and clean layout."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => {
          const Icon = icons[project.index] ?? Code
          return (
            <article
              key={project.name}
              className="group flex flex-col gap-5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{project.index}</span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-display text-lg font-semibold text-balance">{project.name}</h3>
                <div className="flex flex-col gap-1.5">
                  {project.description.map((line) => (
                    <p key={line} className="text-sm leading-relaxed text-pretty text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <ul className="mt-auto flex flex-wrap gap-2 border-t border-border/70 pt-4">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {tech}
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
