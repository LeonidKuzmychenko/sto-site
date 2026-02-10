import { NavLink } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

type SectionLinkProps = {
  to: string
  description: string
  label: string
}

export function SectionLink({ to, description, label }: SectionLinkProps) {
  return (
    <NavLink
      to={to}
      className="group rounded border border-gray-200 p-4 transition-colors hover:border-blue-600"
    >
      <p className="mb-2 text-sm text-gray-600">{description}</p>
      <span className="flex items-center gap-1 font-medium text-gray-900">
        {label}
        <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5" />
      </span>
    </NavLink>
  )
}
