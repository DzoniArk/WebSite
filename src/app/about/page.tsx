import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ScrollReveal from '@/components/ScrollReveal'
import TeamCard from '@/components/TeamCard'
import { MdPeople, MdSmartToy, MdSpeed, MdHandshake } from 'react-icons/md'

export const metadata: Metadata = {
  title: 'About Us | R Marine Consultants',
  description: 'R Marine Consultants — change agents focused on the human side of maritime engineering. We help organizations build a culture of agility, empowered by AI and technology.',
  openGraph: {
    title: 'About Us | R Marine Consultants',
    description: 'People, Culture, and Intelligent Augmentation — evolving how maritime teams think and operate.',
    type: 'website',
  },
}

const pillars = [
  {
    icon: MdPeople,
    title: 'Culture-First Transformation',
    description:
      'A process is only as fast as the people running it. We work on the ground to break down silos and foster a high-performance culture that embraces change, values speed, and rewards lean thinking.',
  },
  {
    icon: MdSmartToy,
    title: 'The Power of AI Agents',
    description:
      'We move beyond traditional automation. We help you integrate AI agents into your workflows\u2014not to replace your engineers, but to liberate them. By delegating repetitive, data-heavy tasks to intelligent systems, your team is free to focus on high-value naval architecture and strategic decision-making.',
  },
  {
    icon: MdSpeed,
    title: 'Agility as a Mindset',
    description:
      'We train teams to be responsive, not reactive. We replace rigid, outdated hierarchies with agile structures that allow your organization to pivot faster and deliver to market sooner than the competition.',
  },
]

const team = [
  {
    name: 'Robert Andersen',
    title: 'Managing Director',
    bio: 'Over 25 years of experience in maritime consulting and naval architecture, with expertise in fleet management and regulatory strategy.',
    initials: 'RA',
  },
  {
    name: 'Maria Stavros',
    title: 'Head of Technical Advisory',
    bio: 'Former Chief Engineer with 20 years of sea-going experience. Specializes in vessel design, propulsion systems, and marine engineering.',
    initials: 'MS',
  },
  {
    name: 'David Park',
    title: 'Director of Project Management',
    bio: 'Managed over 100 maritime projects across 15 countries. Expert in shipbuilding supervision, dry-docking, and offshore installations.',
    initials: 'DP',
  },
  {
    name: 'Elena Vasquez',
    title: 'Head of Regulatory Compliance',
    bio: 'Former flag state surveyor with deep knowledge of IMO conventions, classification rules, and international maritime law.',
    initials: 'EV',
  },
]

export default function About() {
  return (
    <>
      <Hero
        title="People, Culture, and Intelligent Augmentation"
        subtitle="We are change agents who focus on the human side of maritime engineering\u2014helping organizations build a culture of agility where talent is empowered by technology, not burdened by it."
      />

      {/* Who We Are */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  At R Marine Consultants, we believe that a shipyard or design firm is not a
                  collection of desks, drydocks, or computers&mdash;it is a living ecosystem of
                  people and culture.
                </p>
                <p>
                  Real improvement doesn&apos;t come from a manual on a shelf; it comes from shifting
                  the mindsets of the people who execute the work. We are change agents who focus
                  on the human side of maritime engineering. We help organizations build a culture
                  of agility, where talent is empowered by technology rather than burdened by it.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Philosophy — Three Pillars */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Philosophy</h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                We don&apos;t just optimize workflows; we evolve the way your team thinks and
                operates. Our approach centers on three transformative pillars.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.15}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-5">
                    <pillar.icon className="text-accent text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">{pillar.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bridging Human Talent and AI */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Bridging the Gap Between Human Talent and AI
                </h2>
                <div className="space-y-4 text-gray-500 leading-relaxed">
                  <p>
                    The future of maritime excellence lies in the partnership between human
                    intuition and artificial intelligence. We help you build that bridge.
                  </p>
                  <p>
                    Our goal is to ensure your people have the right culture to innovate and the
                    right AI tools to execute, creating a business that is fundamentally more
                    efficient and impossible to outpace.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                {/* Visual representation of Human + AI connection */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <MdPeople className="text-accent text-3xl" />
                      </div>
                      <span className="text-sm text-gray-300">Human Talent</span>
                    </div>
                    <div className="flex-1 border-t-2 border-dashed border-accent/40 relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <MdHandshake className="text-accent text-xl" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <MdSmartToy className="text-accent text-3xl" />
                      </div>
                      <span className="text-sm text-gray-300">AI Agents</span>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-gray-300">Culture that embraces innovation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-gray-300">AI tools that amplify human expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-gray-300">Agile teams that outpace the competition</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Leadership</h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Our team doesn&apos;t just solve problems; we challenge the status quo.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <TeamCard {...member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
