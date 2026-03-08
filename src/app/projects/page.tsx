'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import ScrollReveal from '@/components/ScrollReveal'

const categories = ['All', 'Vessels', 'Offshore', 'Regulatory', 'Safety']

const projects = [
  {
    title: 'LNG Carrier Fleet Inspection Program',
    client: 'Global Energy Transport Ltd.',
    category: 'Vessels',
    description: 'Comprehensive condition assessment and classification survey support for a fleet of 12 LNG carriers, ensuring full compliance with IGC Code requirements.',
    gradient: 'bg-gradient-to-br from-blue-900 to-cyan-800',
  },
  {
    title: 'Offshore Platform Decommissioning Study',
    client: 'North Sea Energy Corp.',
    category: 'Offshore',
    description: 'Technical feasibility study and environmental impact assessment for the decommissioning of three aging offshore production platforms in the North Sea.',
    gradient: 'bg-gradient-to-br from-slate-800 to-blue-900',
  },
  {
    title: 'IMO 2030 Compliance Roadmap',
    client: 'Mediterranean Shipping Alliance',
    category: 'Regulatory',
    description: 'Strategic roadmap for achieving IMO 2030 GHG reduction targets across a mixed fleet of container ships, bulk carriers, and tankers.',
    gradient: 'bg-gradient-to-br from-teal-800 to-emerald-900',
  },
  {
    title: 'Shipyard Safety Management System',
    client: 'Asian Maritime Industries',
    category: 'Safety',
    description: 'Design and implementation of a comprehensive SMS compliant with ISM Code, covering all shipyard operations and workforce of 2,000+ personnel.',
    gradient: 'bg-gradient-to-br from-amber-900 to-orange-800',
  },
  {
    title: 'Container Terminal Expansion Project',
    client: 'Port Authority of Santos',
    category: 'Offshore',
    description: 'Project management and technical advisory for a $200M container terminal expansion, including berth design and crane procurement oversight.',
    gradient: 'bg-gradient-to-br from-indigo-900 to-purple-800',
  },
  {
    title: 'Bulk Carrier Conversion Supervision',
    client: 'Pacific Bulk Shipping Co.',
    category: 'Vessels',
    description: 'Full supervision of the conversion of two Capesize bulk carriers to dual-fuel LNG propulsion, from design review through sea trials.',
    gradient: 'bg-gradient-to-br from-gray-800 to-slate-700',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <Hero
        title="Our Projects"
        subtitle="Explore our portfolio of marine consulting engagements across the global maritime industry."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
