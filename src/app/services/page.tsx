import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import {
  MdPeople,
  MdSmartToy,
  MdHub,
  MdAutorenew,
} from 'react-icons/md'
import type { IconType } from 'react-icons'

export const metadata: Metadata = {
  title: 'Services | R Marine Consultants',
  description:
    'Three integrated service streams — Cultural Architecture, AI Agent Integration, and Digital Shipbuilding Strategy — working as a virtuous cycle to transform maritime organizations.',
  openGraph: {
    title: 'Our Services | R Marine Consultants',
    description:
      'Culture, AI Agents, and Digital Strategy — a virtuous cycle for maritime transformation.',
    type: 'website',
  },
}

interface SubService {
  title: string
  description: string
}

interface ServiceStream {
  number: number
  icon: IconType
  title: string
  tagline: string
  description: string
  subServices: SubService[]
}

const streams: ServiceStream[] = [
  {
    number: 1,
    icon: MdPeople,
    title: 'Cultural Architecture & Change Management',
    tagline: 'Process is secondary; the people running it are primary.',
    description:
      'We don\u2019t just hand over a new workflow; we embed the mindset required to sustain it. We help maritime organizations shift from traditional, siloed hierarchies to agile, cross-functional teams.',
    subServices: [
      {
        title: 'Organizational Health Audit',
        description:
          'Identifying the cultural friction points that slow down ship design and production.',
      },
      {
        title: 'Agile for Maritime',
        description:
          'Implementing Scrum and Kanban methodologies specifically tailored for the shipyard environment to increase transparency and velocity.',
      },
      {
        title: 'Leadership Mentoring',
        description:
          'Coaching executives on how to lead digital-first teams and manage the emotional journey of transformation.',
      },
    ],
  },
  {
    number: 2,
    icon: MdSmartToy,
    title: 'AI Agent Integration (Intelligent Augmentation)',
    tagline: 'Liberating your engineers from the \u2018Data Tax\u2019.',
    description:
      'Stop treating AI as a chatbot and start treating it as a specialized team member. We help you deploy AI Agents that act as co-pilots for your technical staff, allowing them to focus on creativity while the agents handle the complexity.',
    subServices: [
      {
        title: 'Automated Design Agents',
        description:
          'Deploying AI to handle repetitive naval architecture tasks (like structural weight optimization or compartment layout) to reduce lead times by up to 40%.',
      },
      {
        title: 'Knowledge-Base Agents',
        description:
          'Creating proprietary AI systems that \u201Cread\u201D your company\u2019s decades of legacy drawings and data, making tribal knowledge instantly accessible to new engineers.',
      },
      {
        title: 'Workflow Orchestration',
        description:
          'Implementing AI agents that monitor project health, flagging bottlenecks in the design-to-production handoff before they cause delays.',
      },
    ],
  },
  {
    number: 3,
    icon: MdHub,
    title: 'Digital Shipbuilding Strategy (Industry 5.0)',
    tagline:
      'Building the bridge between human intuition and digital precision.',
    description:
      'We help shipyards move beyond basic CAD and PLM. We design a \u201CDigital Thread\u201D that ensures information flows seamlessly from the first sketch to the final weld.',
    subServices: [
      {
        title: 'Human-Centric Digital Twins',
        description:
          'Developing digital twins that aren\u2019t just for monitoring machines, but for empowering the workforce with real-time, actionable data.',
      },
      {
        title: 'Process De-Risking',
        description:
          'Using simulation and AI to \u201Cpre-build\u201D ships in a virtual environment, identifying human-factors issues before they reach the shop floor.',
      },
      {
        title: 'Time-to-Market Acceleration',
        description:
          'Auditing the entire business lifecycle to identify where digital tools can shave weeks off the production schedule.',
      },
    ],
  },
]

const cycleNodes = [
  {
    label: 'Culture',
    detail: 'creates the openness to adopt\u2026',
    icon: MdPeople,
  },
  {
    label: 'AI Agents',
    detail: 'which automate the mundane to allow for\u2026',
    icon: MdSmartToy,
  },
  {
    label: 'Rapid Delivery',
    detail: 'which generates the ROI to reinvest in\u2026',
    icon: MdHub,
  },
]

export default function Services() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Three integrated service streams that work as a virtuous cycle — transforming culture, deploying intelligent agents, and accelerating digital delivery."
      />

      {/* Service Streams */}
      {streams.map((stream, streamIndex) => (
        <section
          key={stream.number}
          className={`py-16 md:py-20 ${streamIndex % 2 === 1 ? 'bg-slate-50' : ''}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Header column */}
              <div className="lg:col-span-4">
                <ScrollReveal>
                  <span className="text-sm font-semibold text-accent tracking-wider uppercase">
                    Service Stream {stream.number}
                  </span>
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mt-4 mb-5">
                    <stream.icon className="text-accent text-2xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                    {stream.title}
                  </h2>
                  <p className="mt-4 text-gray-500 italic">
                    &ldquo;{stream.tagline}&rdquo;
                  </p>
                </ScrollReveal>
              </div>

              {/* Content column */}
              <div className="lg:col-span-8">
                <ScrollReveal delay={0.15}>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    {stream.description}
                  </p>
                  <div className="space-y-6">
                    {stream.subServices.map((sub, i) => (
                      <div key={sub.title} className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                        <div>
                          <h3 className="font-semibold text-primary">
                            {sub.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed mt-1">
                            {sub.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Virtuous Cycle */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The Virtuous Cycle
              </h2>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                Our three service streams aren&apos;t isolated offerings&mdash;they
                reinforce each other in a continuous cycle of improvement.
              </p>
            </div>
          </ScrollReveal>

          {/* Cycle visual */}
          <ScrollReveal delay={0.2}>
            <div className="relative mx-auto max-w-lg">
              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <MdAutorenew className="text-accent/20 text-7xl" />
              </div>

              {/* Three nodes in a triangle layout */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                {cycleNodes.map((node, i) => (
                  <div key={node.label} className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-accent/15 border-2 border-accent/40 flex items-center justify-center mb-3">
                      <node.icon className="text-accent text-3xl" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">
                      {node.label}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{node.detail}</p>
                    {/* Arrow between nodes (visible on sm+) */}
                    {i < cycleNodes.length - 1 && (
                      <div className="hidden sm:block absolute" />
                    )}
                  </div>
                ))}
              </div>

              {/* Connecting arrows for sm+ */}
              <svg
                className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 200"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Arrow from node 1 to node 2 */}
                <path
                  d="M120 80 L200 80"
                  stroke="#0d9488"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  opacity="0.5"
                  markerEnd="url(#arrowhead)"
                />
                {/* Arrow from node 2 to node 3 */}
                <path
                  d="M280 80 L360 80"
                  stroke="#0d9488"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  opacity="0.5"
                  markerEnd="url(#arrowhead)"
                />
                {/* Arrow from node 3 back to node 1 (curved) */}
                <path
                  d="M360 100 C360 160, 120 160, 120 100"
                  stroke="#C5A55A"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  opacity="0.4"
                  markerEnd="url(#arrowhead-gold)"
                />
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="8"
                    markerHeight="6"
                    refX="8"
                    refY="3"
                    orient="auto"
                  >
                    <path d="M0 0 L8 3 L0 6Z" fill="#0d9488" opacity="0.6" />
                  </marker>
                  <marker
                    id="arrowhead-gold"
                    markerWidth="8"
                    markerHeight="6"
                    refX="8"
                    refY="3"
                    orient="auto"
                  >
                    <path d="M0 0 L8 3 L0 6Z" fill="#C5A55A" opacity="0.5" />
                  </marker>
                </defs>
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Ready to Start the Cycle?
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Every organization&apos;s journey is different. Let&apos;s talk about
              where you are today and which service stream will unlock the most
              value for your team.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-8 bg-accent hover:bg-accent-dark text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Discuss Your Needs
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
