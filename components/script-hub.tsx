"use client"

import { useState } from "react"
import HeroSection from "./hero-section"
import ScriptTerminal from "./script-terminal"
import { Search } from "lucide-react"

const scripts = [
  {
    name: "quantum hub",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/flazhy/QuantumOnyx/refs/heads/main/QuantumOnyx.lua"))()',
  },
  {
    name: "Redz Hub Campuchia V4",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/vinh129150/hack/refs/heads/main/Bloxfruits.lua"))()',
  },
  {
    name: "Hiru Hub",
    code: 'repeat wait() until game:IsLoaded() and game.Players.LocalPlayer\ngetgenv().Settings = {\nJoinTeam = true,\nTeam = "Marines"\n}\nloadstring(game:HttpGet("https://raw.githubusercontent.com/KiddoHiru/BloxFruits/main/Source.lua"))()',
  },
  {
    name: "Andepzai Hub",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/trongdeptraihucscript/Adz-Hub/refs/heads/main/Adz-Hub.lua"))()',
  },
  {
    name: "Teddy Hub",
    code: 'loadstring(game:HttpGet("https://pandadevelopment.net/virtual/file/ea696e8e7439ba51"))()',
  },
  {
    name: "Ok hub",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/fakekuri/Okhubhere/refs/heads/main/MainBloxFruit.lua"))()',
  },
  {
    name: "BlueX Hub",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Dev-BlueX/BlueX-Hub/refs/heads/main/Main.lua"))()',
  },
  {
    name: "Gravity Hub",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Dev-GravityHub/BloxFruit/refs/heads/main/Main.lua"))()',
  },
]

export default function ScriptHub() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredScripts = scripts.filter((script) => script.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <HeroSection title="SCRIPT HUB" subtitle="Auto Farm" />

      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Tìm kiếm Script (VD: HoHo, Redz...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="search-icon" size={20} />
      </div>

      <div className="script-list">
        {filteredScripts.map((script, idx) => (
          <ScriptTerminal key={idx} title={script.name} code={script.code} />
        ))}
      </div>
    </>
  )
}
