"use client"

import { useEffect } from "react"

export default function ParticleCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("particle-canvas") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function initParticles() {
      particles = []
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    function updateParticles() {
      particles.forEach((p) => {
        p.y += p.speedY
        p.x += p.speedX
        if (p.y > canvas.height) p.y = 0
        if (p.x > canvas.width) p.x = 0
        if (p.x < 0) p.x = canvas.width
      })
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    function animate() {
      updateParticles()
      drawParticles()
      requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return <canvas id="particle-canvas" className="particle-canvas"></canvas>
}
