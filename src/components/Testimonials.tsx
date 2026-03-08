import ScrollReveal from './ScrollReveal'
import { MdFormatQuote } from 'react-icons/md'

const testimonials = [
  {
    quote: 'R Marine Consultants provided exceptional guidance during our fleet expansion. Their technical expertise and regulatory knowledge saved us months of delays.',
    name: 'James Mitchell',
    title: 'Fleet Director',
    company: 'Atlantic Shipping Co.',
  },
  {
    quote: 'Their risk assessment methodology is thorough and practical. We have significantly improved our safety record since partnering with them.',
    name: 'Sarah Chen',
    title: 'Operations Manager',
    company: 'Pacific Maritime Group',
  },
  {
    quote: 'Outstanding project management from start to finish. They delivered our dry-docking project on time and under budget with zero safety incidents.',
    name: 'Henrik Johansson',
    title: 'Technical Superintendent',
    company: 'Nordic Marine Services',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Trusted by leading maritime companies worldwide.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.15}>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <MdFormatQuote className="text-gold text-3xl mb-3" />
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{item.name}</p>
                  <p className="text-gray-400 text-xs">{item.title}, {item.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
