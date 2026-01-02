"use client"
import { Volume2 } from "lucide-react"

interface HeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const navItems = [
    { id: "home", label: "TRANG CHU", icon: "🏠" },
    { id: "scripts", label: "SCRIPTS", icon: "💻" },
    { id: "discord", label: "DISCORD", icon: "🎮" },
  ]

  return (
    <header className="sticky-header">
      <div className="brand-container">
        <div className="logo-icon">🏔️</div>
        <div className="brand-text">
          <h1>NAK HUB</h1>
          <span>LONELY</span>
        </div>
      </div>

      <nav className="nav-wrapper">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="music-control-mini">
        <canvas id="audio-viz" className="visualizer-canvas"></canvas>
        <Volume2 size={20} color="#a29bfe" />
      </div>
    </header>
  )
}
