"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AdminCards from "@/components/admin-cards"
import ScriptHub from "@/components/script-hub"
import DiscordCommunity from "@/components/discord-community"
import ParticleCanvas from "@/components/particle-canvas"
import { useState } from "react"
import "./globals.css"

export default function Home() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="bg-container">
      <ParticleCanvas />
      <div className="fixed-bg"></div>
      <div className="grid-overlay"></div>

      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="container">
        {activeTab === "home" && (
          <section className="section active">
            <HeroSection title="TRANG CHU" subtitle="VI VUA KHONG BAO BAT TAI" />
            <AdminCards />
          </section>
        )}

        {activeTab === "scripts" && (
          <section className="section active">
            <ScriptHub />
          </section>
        )}

        {activeTab === "discord" && (
          <section className="section active">
            <DiscordCommunity />
          </section>
        )}
      </div>

      <div id="toast-container"></div>
    </div>
  )
}
