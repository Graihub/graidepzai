"use client"

const admins = [
  {
    name: "HẢI YẾN",
    role: "CÀY THUÊ / TRADER",
    quote: '"Uy tín tạo nên thương hiệu. Giá rẻ cho học sinh."',
    image: "https://via.placeholder.com/120?text=Hai+Yen",
    gradient: "linear-gradient(135deg, #1e3c72, #2a5298)",
    socials: [
      { icon: "f", link: "https://facebook.com/Sunnixkissyou" },
      { icon: "d", link: "https://discord.gg/aZ4AD9vfxg" },
      { icon: "t", link: "https://www.tiktok.com/@daily.giveways.3" },
    ],
  },
  {
    name: "NAK NO HACK",
    role: "OWNER / DEVELOPER",
    quote: '"Gái đẹp nhất server. Điều hành mọi hoạt động."',
    image: "https://via.placeholder.com/120?text=NAK",
    gradient: "linear-gradient(135deg, #4b6cb7, #182848)",
    socials: [
      { icon: "t", link: "https://www.tiktok.com/@nak_nohack" },
      { icon: "d", link: "https://discord.gg/CJbpkPC4KJ" },
    ],
  },
  {
    name: "NHOI",
    role: "DESIGNER / BANNER",
    quote: '"Nghệ thuật là ánh trăng lừa dối. Đẹp trai nhất Sivi."',
    image: "https://via.placeholder.com/120?text=Nhoi",
    gradient: "linear-gradient(135deg, #8E2DE2, #4A00E0)",
    socials: [
      { icon: "t", link: "https://www.tiktok.com/@nhoiii_dev" },
      { icon: "d", link: "https://discord.gg/CJbpkPC4KJ" },
    ],
  },
  {
    name: "SUN MEDIA",
    role: "SUPPORT / SELLER",
    quote: '"Đẹp trai miền Tây. Hỗ trợ nhiệt tình 24/7."',
    image: "https://via.placeholder.com/120?text=Sun",
    gradient: "linear-gradient(135deg, #f12711, #f5af19)",
    socials: [
      { icon: "f", link: "https://facebook.com/share/1BeKF5sQ88" },
      { icon: "d", link: "https://discord.gg/CJbpkPC4KJ" },
    ],
  },
  {
    name: "bch.said",
    role: "SCRIPT / CLIENT",
    quote: '"Nghệ thuật là ánh trăng lừa dối"',
    image: "https://via.placeholder.com/120?text=Bch",
    gradient: "linear-gradient(135deg, #0f0249, #4915af)",
    socials: [
      { icon: "t", link: "https://www.tiktok.com/@bch.said" },
      { icon: "d", link: "https://discord.gg/CJbpkPC4KJ" },
    ],
  },
  {
    name: "NHU AO BUDYY",
    role: "IDOL TIKTOK",
    quote: '"CHỦ QUÁN NÉT"',
    image: "https://via.placeholder.com/120?text=Nhu+Ao",
    gradient: "linear-gradient(135deg, #51e22d, #ebf1f0)",
    socials: [
      { icon: "t", link: "https://www.tiktok.com/@nhuaobddy" },
      { icon: "d", link: "https://discord.gg/E2jTEvfF8h" },
    ],
  },
]

export default function AdminCards() {
  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "f":
        return "👍"
      case "d":
        return "🎮"
      case "t":
        return "🎵"
      default:
        return "🔗"
    }
  }

  return (
    <div className="grid-admins">
      {admins.map((admin, idx) => (
        <div key={idx} className="landscape-card">
          <div className="card-scenery" style={{ background: admin.gradient }}>
            <div className="star"></div>
            <div className="mountain"></div>
          </div>
          <div className="card-avatar-container">
            <img src={admin.image || "/placeholder.svg"} alt={admin.name} className="card-avatar" />
          </div>
          <div className="card-details">
            <div className="wave-divider"></div>
            <div className="admin-name">{admin.name}</div>
            <div className="admin-role">{admin.role}</div>
            <div className="admin-quote">{admin.quote}</div>
            <div className="social-bar">
              {admin.socials.map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="social-btn">
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
