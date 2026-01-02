"use client"

import HeroSection from "./hero-section"
import DiscordPlate from "./discord-plate"

const servers = [
  {
    name: "NAK & NHOI",
    description: "Cộng đồng bất ổn nhất quả đất. Share Script, Giveaway hàng ngày.",
    image: "https://media.tenor.com/P7WmnYR9pxsAAAAe/cute.png",
    link: "https://discord.gg/CJbpkPC4KJ",
  },
  {
    name: "NHÀ TRẺ SUN",
    description: "Giao lưu kết bạn bốn phương. Anh em thiện lành, vui vẻ.",
    image: "https://i.pinimg.com/736x/37/5b/e3/375be378ebe3ac5d55c98bcd3f09ab0d.jpg",
    link: "https://discord.gg/DxHFtbn6aX",
  },
  {
    name: "IOS COMMUNITY",
    description: "Hội người dùng iOS. Chia sẻ Certificate, IPA và mẹo vặt.",
    image: "https://i.pinimg.com/736x/ed/fd/99/edfd993fd0853ae4a99f9e7fce9865e6.jpg",
    link: "https://discord.gg/aMdB6nNbx3",
  },
]

export default function DiscordCommunity() {
  return (
    <>
      <HeroSection title="COMMUNITY" subtitle="Join The Gang" />
      <div className="discord-wall">
        {servers.map((server, idx) => (
          <DiscordPlate key={idx} {...server} />
        ))}
      </div>
    </>
  )
}
