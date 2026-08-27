import { GraduationCap, Languages as LanguagesIcon, MapPin } from 'lucide-react'
import { education, languages } from '@/lib/portfolio-data'
import { Section } from '@/components/section'

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <ol className="relative flex flex-1 flex-col gap-8 border-l border-border pl-6 sm:pl-8">
          {education.map((item) => (
            <li key={item.institution} className="relative flex flex-col gap-2">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[calc(1.5rem+1px)] inline-flex size-3 items-center justify-center rounded-full border-2 border-background bg-primary sm:-left-[calc(2rem+1px)]"
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold">{item.institution}</h3>
                <span className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground">
                  {item.period}
                </span>
              </div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {item.qualification}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="font-mono text-foreground">{item.result}</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {item.location}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 lg:h-fit lg:w-72">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
              <LanguagesIcon className="size-4.5" aria-hidden="true" />
            </span>
            <h3 className="font-display text-base font-semibold">Languages Known</h3>
          </div>
          <ul className="flex flex-col gap-px overflow-hidden rounded-lg border border-border bg-border">
            {languages.map((language) => (
              <li key={language} className="bg-card px-4 py-3 text-sm text-foreground">
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
