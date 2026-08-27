import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('border-t border-border/60 py-16 sm:py-20', className)}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 sm:px-8">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs tracking-[0.24em] text-primary uppercase">
            {eyebrow}
          </span>
          <h2
            id={`${id}-title`}
            className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl leading-relaxed text-pretty text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  )
}
