import { MdOpenInNew } from 'react-icons/md'

interface TeamCardProps {
  name: string
  title: string
  bio: string
  initials: string
}

export default function TeamCard({ name, title, bio, initials }: TeamCardProps) {
  return (
    <div className="text-center group">
      <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
        <span className="text-2xl font-bold text-gold" style={{ fontFamily: "'Cinzel', serif" }}>
          {initials}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-primary">{name}</h3>
      <p className="text-sm text-accent font-medium mb-2">{title}</p>
      <p className="text-sm text-gray-500 leading-relaxed mb-3">{bio}</p>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors"
        aria-label={`${name}'s LinkedIn profile`}
      >
        LinkedIn <MdOpenInNew className="text-xs" />
      </a>
    </div>
  )
}
