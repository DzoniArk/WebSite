'use client'

import { useId } from 'react'

export default function Logo({ className }: { className?: string }) {
  const id = useId()
  const gradientId = `satin-gold-${id}`

  return (
    <svg
      viewBox="0 0 160 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="R Marine Consultants logo"
    >
      <defs>
        <linearGradient id={gradientId} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#E8D48B" />
          <stop offset="35%" stopColor="#D4B96A" />
          <stop offset="60%" stopColor="#C5A55A" />
          <stop offset="100%" stopColor="#A68B3A" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="148" height="188" fill="none" stroke="#C5A55A" strokeWidth="2" rx="1" />
      <rect x="14" y="14" width="132" height="172" fill="none" stroke="#A68B3A" strokeWidth="1.3" rx="1" />
      <text
        x="80"
        y="143"
        textAnchor="middle"
        fontFamily="'Cinzel', serif"
        fontSize="120"
        fontWeight="800"
        fill={`url(#${gradientId})`}
      >
        R
      </text>
    </svg>
  )
}
