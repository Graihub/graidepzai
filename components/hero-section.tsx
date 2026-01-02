interface HeroSectionProps {
  title: string
  subtitle: string
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <div className="hero-head">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}
