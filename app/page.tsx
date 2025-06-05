'use client'

import { useState, useEffect, useRef } from 'react'
import LoadingScreen from './components/LoadingScreen'
import FloatingObjects3D from './components/FloatingObjects3D'
import AIAssistant from './components/AIAssistant'
import ClickExplosion from './components/ClickExplosion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  const [showContent, setShowContent] = useState(false)
  const [glitchEffect, setGlitchEffect] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  // Use ref for cursor to avoid re-renders
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 192}px`
        cursorRef.current.style.top = `${e.clientY - 192}px`
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  // Effet de glitch aléatoire
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% de chance
        setGlitchEffect(true)
        setTimeout(() => setGlitchEffect(false), 200)
      }
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  const handleLoadingComplete = () => {
    setShowContent(true)
  }

  if (!showContent) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <main className={`min-h-screen relative overflow-hidden ${glitchEffect ? 'animate-pulse' : ''}`}>
      {/* Cursor glow effect - OPTIMIZED */}
      <div
        ref={cursorRef}
        className="fixed w-96 h-96 pointer-events-none z-30 rounded-full opacity-30 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.4) 0%, rgba(168,85,247,0.2) 50%, transparent 70%)',
          filter: 'blur(20px)',
          willChange: 'transform' // Optimize for transforms
        }}
      />

      {/* Enhanced animated background grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,0.2) 1px, transparent 1px),
              linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 100px 100px, 100px 100px',
            animation: 'drift 20s linear infinite, pulse 4s ease-in-out infinite',
            willChange: 'transform'
          }}
        />
      </div>

      {/* Floating 3D Objects - Now isolated from re-renders */}
      <FloatingObjects3D />

      {/* Click Explosion Effect */}
      <ClickExplosion />

      {/* Main content with entrance animation */}
      <div className="animate-fadeInUp">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* AI Assistant */}
      <AIAssistant />

      {/* Enhanced styles */}
      <style jsx>{`
        @keyframes drift {
          from { transform: translate(0, 0); }
          to { transform: translate(50px, 50px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </main>
  )
} 