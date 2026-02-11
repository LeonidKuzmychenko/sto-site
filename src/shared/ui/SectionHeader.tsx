type SectionHeaderProps = {
  title: string
  children?: React.ReactNode
}

export function SectionHeader({ title, children }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      {children}
    </div>
  )
}
