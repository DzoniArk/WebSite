import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import StatsBar from '@/components/StatsBar'
import Testimonials from '@/components/Testimonials'
import CertificationsBar from '@/components/CertificationsBar'
import ProjectCard from '@/components/ProjectCard'
import NewsCard from '@/components/NewsCard'
import ScrollReveal from '@/components/ScrollReveal'
import { MdEngineering, MdAssignment, MdVerifiedUser, MdShield, MdGroups, MdTimeline } from 'react-icons/md'

const services = [
  {
    icon: MdEngineering,
    title: 'Technical Advisory',
    description: 'Expert technical guidance for vessel operations, marine engineering, and fleet optimization.',
  },
  {
    icon: MdAssignment,
    title: 'Project Management',
    description: 'End-to-end project management for maritime operations, shipbuilding, and offshore projects.',
  },
  {
    icon: MdVerifiedUser,
    title: 'Regulatory Compliance',
    description: 'Navigate complex maritime regulations with confidence. IMO, flag state, and classification society compliance.',
  },
  {
    icon: MdShield,
    title: 'Risk Assessment',
    description: 'Comprehensive risk evaluation and mitigation strategies for maritime operations and assets.',
  },
]

const strengths = [
  {
    icon: MdTimeline,
    title: 'Industry Experience',
    description: 'Decades of combined expertise across all sectors of the maritime industry.',
  },
  {
    icon: MdGroups,
    title: 'Dedicated Team',
    description: 'Qualified professionals committed to delivering exceptional results for every client.',
  },
  {
    icon: MdVerifiedUser,
    title: 'Proven Track Record',
    description: 'Trusted by leading maritime companies worldwide for consistent, reliable consulting.',
  },
]

const featuredProjects = [
  {
    title: 'LNG Carrier Fleet Inspection Program',
    client: 'Global Energy Transport Ltd.',
    category: 'Vessels',
    description: 'Comprehensive condition assessment and classification survey support for a fleet of 12 LNG carriers.',
    gradient: 'bg-gradient-to-br from-blue-900 to-cyan-800',
  },
  {
    title: 'Offshore Platform Decommissioning Study',
    client: 'North Sea Energy Corp.',
    category: 'Offshore',
    description: 'Technical feasibility study and environmental impact assessment for three aging offshore platforms.',
    gradient: 'bg-gradient-to-br from-slate-800 to-blue-900',
  },
  {
    title: 'IMO 2030 Compliance Roadmap',
    client: 'Mediterranean Shipping Alliance',
    category: 'Regulatory',
    description: 'Strategic roadmap for achieving IMO 2030 GHG reduction targets across a mixed fleet.',
    gradient: 'bg-gradient-to-br from-teal-800 to-emerald-900',
  },
]

const latestNews = [
  {
    title: 'New IMO Regulations for 2026: What Ship Owners Need to Know',
    excerpt: 'A comprehensive overview of upcoming IMO regulatory changes and their impact on fleet operations.',
    date: 'January 15, 2026',
    category: 'Industry News',
    gradient: 'bg-gradient-to-br from-blue-900 to-cyan-800',
  },
  {
    title: 'R Marine Consultants Expands to Southeast Asia',
    excerpt: 'Opening of our new advisory office in Singapore, strengthening presence in a key maritime hub.',
    date: 'December 8, 2025',
    category: 'Company Update',
    gradient: 'bg-gradient-to-br from-teal-800 to-emerald-900',
  },
  {
    title: 'Best Practices for Maritime Safety Management',
    excerpt: 'Key insights on building effective safety management systems that go beyond compliance.',
    date: 'November 22, 2025',
    category: 'Technical',
    gradient: 'bg-gradient-to-br from-slate-800 to-blue-900',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Trusted Marine Consulting for a Complex Industry"
        subtitle="We provide expert technical advisory, project management, and regulatory compliance solutions that keep your maritime operations running safely and efficiently."
        showCTA
        ctaText="Get in Touch"
        ctaHref="/contact"
      />

      {/* Stats Bar */}
      <StatsBar />

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Comprehensive marine consulting services tailored to meet the evolving needs of the maritime industry.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="text-accent hover:text-accent-dark font-medium text-sm transition-colors"
              >
                View All Services &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Featured Projects</h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Recent engagements showcasing our expertise across the maritime industry.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.15}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10">
              <Link
                href="/projects"
                className="text-accent hover:text-accent-dark font-medium text-sm transition-colors"
              >
                View All Projects &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Us</h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                R Marine Consultants brings together expertise, integrity, and a client-first approach to every engagement.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.15}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-accent text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Certifications */}
      <CertificationsBar />

      {/* Latest News */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Latest Insights</h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Stay informed with our latest maritime industry news and technical insights.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((article, index) => (
              <ScrollReveal key={article.title} delay={index * 0.15}>
                <NewsCard {...article} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10">
              <Link
                href="/news"
                className="text-accent hover:text-accent-dark font-medium text-sm transition-colors"
              >
                View All News &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Discuss Your Project?
            </h2>
            <p className="mt-4 text-teal-100 max-w-xl mx-auto">
              Whether you need technical guidance, project management support, or regulatory advice — we&apos;re here to help.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-8 bg-white text-accent hover:bg-gray-50 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
