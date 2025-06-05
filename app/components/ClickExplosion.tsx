'use client'

import { useState, useEffect } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  color: string
}

const ClickExplosion = () => {
  const [particles, setParticles] = useState<Particle[]>([])

  const createExplosion = (x: number, y: number) => {
    const colors = ['#00d4ff', '#a855f7', '#ec4899', '#10b981']
    const newParticles: Particle[] = []
    
    for (let i = 0; i < 20; i++) {
      const angle = (Math.PI * 2 * i) / 20
      const speed = Math.random() * 5 + 2
      
      newParticles.push({
        id: Date.now() + i,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    
    setParticles(prev => [...prev, ...newParticles])
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createExplosion(e.clientX, e.clientY)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.1, // gravity
            life: particle.life - 0.02
          }))
          .filter(particle => particle.life > 0)
      )
    }, 16)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
            backgroundColor: particle.color,
            opacity: particle.life,
            boxShadow: `0 0 10px ${particle.color}`,
            transform: `scale(${particle.life})`
          }}
        />
      ))}
    </div>
  )
}

export default ClickExplosion 