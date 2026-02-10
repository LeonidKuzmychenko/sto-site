type SocialLinkProps = {
  href: string
  icon: string
  alt: string
  label: string
}

export function SocialLink({ href, icon, alt, label }: SocialLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="inline-flex items-center gap-3 text-blue-600 transition-colors hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={icon} alt={alt} className="h-6 w-6" loading="lazy" />
        {label}
      </a>
    </li>
  )
}
