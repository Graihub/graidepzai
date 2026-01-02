interface DiscordPlateProps {
  name: string
  description: string
  image: string
  link: string
}

export default function DiscordPlate({ name, description, image, link }: DiscordPlateProps) {
  return (
    <div className="discord-plate">
      <div className="dc-icon-frame">
        <img src={image || "/placeholder.svg"} alt={name} className="dc-img" />
        <div className="dc-status"></div>
      </div>
      <div className="dc-name">{name}</div>
      <div className="dc-info">{description}</div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn-join">
        THAM GIA NGAY
      </a>
    </div>
  )
}
