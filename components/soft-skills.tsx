import { Compass, MessageSquare, Puzzle, Users, Waypoints } from 'lucide-react'
import { softSkills } from '@/lib/portfolio-data'
import { Section } from '@/components/section'

const icons = [Waypoints, MessageSquare, Users, Compass, Puzzle]

export function SoftSkills() {
  return (
    <Section
      id="soft-skills"
      eyebrow="Soft Skills"
      title="How I work with people"
      description="Strengths I have developed through academic teamwork, group projects and campus activities."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {softSkills.map((skill, i) => {
          const Icon = icons[i % icons.length]
          return (
            <li
              key={skill.name}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="size-4.5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-sm font-semibold">{skill.name}</h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  {skill.note}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
