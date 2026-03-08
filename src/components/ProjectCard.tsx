interface ProjectCardProps {
  title: string
  client: string
  category: string
  description: string
  gradient: string
}

export default function ProjectCard({ title, client, category, description, gradient }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Gradient placeholder for project image */}
      <div className={`h-48 ${gradient} relative`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 bg-white/90 text-xs font-medium text-primary rounded">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-muted mb-1">{client}</p>
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
