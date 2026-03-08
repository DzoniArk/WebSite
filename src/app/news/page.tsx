import Hero from '@/components/Hero'
import NewsCard from '@/components/NewsCard'
import ScrollReveal from '@/components/ScrollReveal'

const articles = [
  {
    title: 'New IMO Regulations for 2026: What Ship Owners Need to Know',
    excerpt: 'A comprehensive overview of the upcoming IMO regulatory changes and their impact on fleet operations, compliance requirements, and investment planning.',
    date: 'January 15, 2026',
    category: 'Industry News',
    gradient: 'bg-gradient-to-br from-blue-900 to-cyan-800',
  },
  {
    title: 'R Marine Consultants Expands Operations to Southeast Asia',
    excerpt: 'We are excited to announce the opening of our new advisory office in Singapore, strengthening our presence in one of the world\'s busiest maritime hubs.',
    date: 'December 8, 2025',
    category: 'Company Update',
    gradient: 'bg-gradient-to-br from-teal-800 to-emerald-900',
  },
  {
    title: 'Best Practices for Maritime Safety Management Systems',
    excerpt: 'Drawing from our experience across 200+ projects, we share key insights on building and maintaining effective safety management systems that go beyond compliance.',
    date: 'November 22, 2025',
    category: 'Technical',
    gradient: 'bg-gradient-to-br from-slate-800 to-blue-900',
  },
  {
    title: 'The Future of LNG-Powered Vessels: Trends and Challenges',
    excerpt: 'An analysis of the growing adoption of LNG propulsion in commercial shipping, including technical considerations, infrastructure needs, and cost implications.',
    date: 'October 30, 2025',
    category: 'Technical',
    gradient: 'bg-gradient-to-br from-indigo-900 to-purple-800',
  },
  {
    title: 'Successful Completion of North Sea Decommissioning Project',
    excerpt: 'Our team has successfully delivered the technical advisory for the decommissioning of three offshore platforms, setting a new benchmark for environmental compliance.',
    date: 'October 5, 2025',
    category: 'Company Update',
    gradient: 'bg-gradient-to-br from-amber-900 to-orange-800',
  },
  {
    title: 'Understanding the CII Rating System: A Guide for Fleet Operators',
    excerpt: 'A practical guide to the Carbon Intensity Indicator rating system, including strategies for improving your fleet\'s energy efficiency and achieving compliance.',
    date: 'September 12, 2025',
    category: 'Industry News',
    gradient: 'bg-gradient-to-br from-gray-800 to-slate-700',
  },
]

export default function News() {
  return (
    <>
      <Hero
        title="News & Insights"
        subtitle="Stay informed with the latest maritime industry news, company updates, and technical insights from our team."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ScrollReveal key={article.title} delay={index * 0.1}>
                <NewsCard {...article} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
