interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  gradient: string
}

export default function NewsCard({ title, excerpt, date, category, gradient }: NewsCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Gradient placeholder for article image */}
      <div className={`h-40 ${gradient} relative`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs text-muted">{date}</span>
          <span className="px-2 py-0.5 bg-accent/10 text-xs font-medium text-accent rounded">
            {category}
          </span>
        </div>
        <h3 className="text-base font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">{excerpt}</p>
        <span className="text-sm font-medium text-accent inline-flex items-center gap-1">
          Read more
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  )
}
