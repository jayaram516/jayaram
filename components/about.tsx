import { profile } from '@/lib/portfolio-data'
import { Section } from '@/components/section'

const facts = [
  { label: 'Specialization', value: 'Artificial Intelligence & Machine Learning' },
  { label: 'Institution', value: 'Lovely Professional University' },
  { label: 'Current CGPA', value: '7.50' },
  { label: 'Core Languages', value: 'C, C++, Python' },
]

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A student building a solid technical foundation">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="flex max-w-2xl flex-col gap-4 leading-relaxed text-muted-foreground lg:flex-1">
          <p className="text-pretty">
            I am a B.Tech student at {profile.university.split(',')[0]}, specializing in Artificial
            Intelligence and Machine Learning. My focus right now is on the fundamentals — writing
            correct, readable code in C and C++, understanding how data is structured and stored, and
            practising problem solving consistently.
          </p>
          <p className="text-pretty">
            Alongside programming fundamentals, I work with HTML and CSS to build small applications
            and interfaces, and I study Database Management Systems to understand how real
            applications persist and query data. I enjoy taking an idea from a problem statement to a
            working program.
          </p>
          <p className="text-pretty">
            I am genuinely interested in software development and emerging technologies, and I treat
            every course, project and certificate as a step toward becoming a capable engineer. I
            keep learning continuously rather than claiming expertise I have not earned yet.
          </p>
        </div>

        <dl className="flex flex-col gap-px overflow-hidden rounded-xl border border-border bg-border lg:w-80">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 bg-card px-5 py-4">
              <dt className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {fact.label}
              </dt>
              <dd className="font-display text-sm text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
