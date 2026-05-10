"use client"

import { useRef } from "react"
import { useTranslation } from "react-i18next"
import {
  SiNextdotjs, SiReact, SiVuedotjs, SiDotnet,
  SiNodedotjs, SiMongodb, SiPostgresql,
  SiSupabase, SiVercel, SiDocker, SiPython,
} from "react-icons/si"

const techs = [
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff", category: "frontend" },
  { icon: SiReact, name: "React", color: "#61DAFB", category: "frontend" },
  { icon: SiVuedotjs, name: "Vue", color: "#42B883", category: "frontend" },
  { icon: SiDotnet, name: "ASP.NET", color: "#512BD4", category: "frontend" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933", category: "backend" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "backend" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1", category: "backend" },
  { icon: SiPython, name: "Python", color: "#3776AB", category: "backend" },
  { icon: SiSupabase, name: "Supabase", color: "#3ECF8E", category: "backend" },
  { icon: SiVercel, name: "Vercel", color: "#ffffff", category: "devops" },
  { icon: SiDocker, name: "Docker", color: "#2496ED", category: "devops" },
]

function TechCard({ tech }: { tech: typeof techs[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const Icon = tech.icon

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -12
    const rotateY = ((x - cx) / cx) * 12
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`)
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`)
    const glow = card.querySelector('.tech-card-glow') as HTMLElement
    if (glow) glow.style.opacity = '1'
  }

  function handleMouseLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    const glow = card.querySelector('.tech-card-glow') as HTMLElement
    if (glow) glow.style.opacity = '0'
  }

  return (
    <div
      ref={cardRef}
      className="tech-card-premium"
      role="listitem"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--icon-color': tech.color, '--glow-color': tech.color } as React.CSSProperties}
    >
      <div className="tech-card-inner">
        <div className="tech-icon-wrapper">
          <Icon className="tech-icon-premium" aria-hidden="true" />
        </div>
        <span className="tech-name">{tech.name}</span>
        <span className="tech-category">{t(`tech.${tech.category}`)}</span>
      </div>
      <div className="tech-card-glow" />
    </div>
  )
}

export default function TechGrid() {
  return (
    <div className="tech-grid-premium" role="list">
      {techs.map((tech) => (
        <TechCard key={tech.name} tech={tech} />
      ))}
    </div>
  )
}