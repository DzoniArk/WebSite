import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  showCTA?: boolean
  ctaText?: string
  ctaHref?: string
  children?: React.ReactNode
}

export default function Hero({ title, subtitle, showCTA = false, ctaText = 'Get in Touch', ctaHref = '/contact', children }: HeroProps) {
  return (
    <section className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f172a 70%, #0d3544 100%)' }}>
      {/* Animated wave pattern overlay */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: '40%' }}>
          <path fill="currentColor" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: '30%' }}>
          <path fill="currentColor" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl opacity-0 animate-fade-in-up">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up-delay-1">
          {subtitle}
        </p>
        {showCTA && (
          <div className="mt-8 opacity-0 animate-fade-in-up-delay-2">
            <Link
              href={ctaHref}
              className="inline-block bg-accent hover:bg-accent-dark text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              {ctaText}
            </Link>
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
