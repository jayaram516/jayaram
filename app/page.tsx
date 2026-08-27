import { About } from '@/components/about'
import { Certificates } from '@/components/certificates'
import { Contact } from '@/components/contact'
import { Education } from '@/components/education'
import { FocusGoal } from '@/components/focus-goal'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { Skills } from '@/components/skills'
import { SoftSkills } from '@/components/soft-skills'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-60 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <SoftSkills />
        <Projects />
        <Certificates />
        <Education />
        <FocusGoal />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
