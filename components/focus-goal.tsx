import { Sparkles, Target } from 'lucide-react'
import { focusInterests } from '@/lib/portfolio-data'
import { Section } from '@/components/section'

export function FocusGoal() {
  return (
    <Section id="focus" eyebrow="Currently Learning & Growing" title="Where my attention is now">
      <div className="grid gap-4 lg:grid-cols-5">
        <article className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:p-8 lg:col-span-3">
          <span className="inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
            <Sparkles className="size-5" aria-hidden="true" />
          </span>
          <blockquote className="font-display text-xl leading-snug text-pretty text-foreground sm:text-2xl">
            Strengthening programming fundamentals and developing practical technical skills in C and
            C++.
          </blockquote>
          <ul className="flex flex-wrap gap-2">
            {focusInterests.map((interest) => (
              <li
                key={interest}
                className="rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
              >
                {interest}
              </li>
            ))}
          </ul>
        </article>

        <article className="flex flex-col gap-5 rounded-xl border border-primary/25 bg-primary/8 p-6 sm:p-8 lg:col-span-2">
          <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Target className="size-5" aria-hidden="true" />
          </span>
          <h3 className="font-mono text-xs tracking-[0.2em] text-primary uppercase">Career Goal</h3>
          <p className="leading-relaxed text-pretty text-foreground/90">
            My goal is to build a strong career in software development and emerging technologies
            while continuously improving my programming, problem-solving, and AI/ML skills.
          </p>
        </article>
      </div>
    </Section>
  )
}
