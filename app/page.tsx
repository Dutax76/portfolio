'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  const [glitchEffect, setGlitchEffect] = useState(false)

  // Effet de glitch aléatoire optimisé
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.05) {
        setGlitchEffect(true)
        setTimeout(() => setGlitchEffect(false), 100)
      }
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <main className={`min-h-screen relative overflow-hidden ${glitchEffect ? 'animate-pulse' : ''}`}>
      {/* Background stylé mais optimisé */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient de base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />
        
        {/* Overlay avec texture */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20" />
        
        {/* Grille cyber */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,0.2) 1px, transparent 1px),
              linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 100px 100px, 100px 100px'
          }}
        />
        
        {/* Points lumineux statiques */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-30"
              style={{
                left: `${15 + (i * 7) % 70}%`,
                top: `${10 + (i * 11) % 80}%`,
                boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
              }}
            />
          ))}
        </div>
        
        {/* Lignes de circuit subtiles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-green to-transparent" />
          <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-pink to-transparent" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* Styles optimisés */}
      <style jsx>{`
        /* Animation glitch simplifiée */
        .animate-pulse {
          animation: pulse 1s ease-in-out 1;
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
          }
          50% { 
            opacity: 0.95; 
          }
        }
        
        /* Subtle glow pour les points */
        .w-1.h-1.bg-neon-blue {
          animation: glow 3s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from {
            opacity: 0.3;
            transform: scale(1);
          }
          to {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
      `}</style>
    </main>
  )
} 