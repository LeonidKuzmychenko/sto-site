type InfoCardProps = {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
}

export function InfoCard({ title, icon, children }: InfoCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <h2 className="font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  )
}
