'use client'

import { useEffect, useState, useRef } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const shapesInitialized = useRef(false)
  
  const phrases = [
    'Développeur Passionné',
    'Étudiant en BUT Informatique',
    'Créateur d\'Expériences Numériques',
    'Futur Alternant'
  ]

  // Fixed positions for shapes (calculated once)
  const fixedShapes = useRef([
    // Rangée du haut
    { left: 8, top: 10, delay: 0, duration: 6, size: 'medium' },
    { left: 25, top: 8, delay: 0.3, duration: 7, size: 'small' },
    { left: 45, top: 12, delay: 0.6, duration: 8, size: 'large' },
    { left: 65, top: 9, delay: 0.9, duration: 6, size: 'medium' },
    { left: 82, top: 11, delay: 1.2, duration: 7, size: 'medium' },
    { left: 92, top: 15, delay: 1.5, duration: 8, size: 'small' },

    // Rangée milieu-haut
    { left: 5, top: 25, delay: 1.8, duration: 6, size: 'medium' },
    { left: 18, top: 28, delay: 2.1, duration: 7, size: 'medium' },
    { left: 35, top: 23, delay: 2.4, duration: 8, size: 'small' },
    { left: 55, top: 27, delay: 2.7, duration: 6, size: 'large' },
    { left: 75, top: 25, delay: 3, duration: 7, size: 'medium' },
    { left: 88, top: 29, delay: 3.3, duration: 8, size: 'medium' },

    // Rangée centre (autour du contenu principal - plus espacée)
    { left: 12, top: 45, delay: 3.6, duration: 6, size: 'small' },
    { left: 85, top: 48, delay: 3.9, duration: 7, size: 'medium' },

    // Rangée milieu-bas
    { left: 7, top: 65, delay: 4.2, duration: 8, size: 'medium' },
    { left: 22, top: 68, delay: 4.5, duration: 6, size: 'small' },
    { left: 40, top: 63, delay: 4.8, duration: 7, size: 'medium' },
    { left: 58, top: 67, delay: 5.1, duration: 8, size: 'medium' },
    { left: 78, top: 65, delay: 5.4, duration: 6, size: 'large' },
    { left: 90, top: 69, delay: 5.7, duration: 7, size: 'small' },

    // Rangée du bas
    { left: 15, top: 85, delay: 6, duration: 8, size: 'medium' },
    { left: 30, top: 88, delay: 6.3, duration: 6, size: 'medium' },
    { left: 50, top: 84, delay: 6.6, duration: 7, size: 'small' },
    { left: 70, top: 87, delay: 6.9, duration: 8, size: 'medium' },
    { left: 85, top: 85, delay: 7.2, duration: 6, size: 'medium' }
  ])

  // Function to get size classes
  const getSizeClass = (size: string) => {
    switch (size) {
      case 'small': return 'w-12 h-12'
      case 'medium': return 'w-16 h-16'
      case 'large': return 'w-20 h-20'
      default: return 'w-16 h-16'
    }
  }

  useEffect(() => {
    setIsClient(true)
    shapesInitialized.current = true
  }, [])

  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    if (isTyping) {
      if (text.length < phrases[currentPhrase].length) {
        timeout = setTimeout(() => {
          setText(phrases[currentPhrase].slice(0, text.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1))
        }, 50)
      } else {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isTyping, currentPhrase])

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Fixed floating geometric shapes - only render when client is ready */}
      {isClient && shapesInitialized.current && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {fixedShapes.current.map((shape, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${shape.left}%`,
                top: `${shape.top}%`,
                animationDelay: `${shape.delay}s`,
                animationDuration: `${shape.duration}s`
              }}
            >
              <div className={`${getSizeClass(shape.size)} border-2 border-neon-blue transform rotate-45 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 shadow-lg shadow-neon-blue/20`} />
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar/Logo */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-neon-purple p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-dark-100 flex items-center justify-center">
                <img 
                  src="/img/selfie.jpg" 
                  alt="Thomas Guislin" 
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent">
            Thomas Guislin
          </h1>

          {/* Animated subtitle */}
          <div className="text-2xl md:text-3xl font-light mb-8 h-12 flex items-center justify-center">
            <span className="text-neon-blue font-mono">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Étudiant passionné en deuxième année de BUT Informatique à Lille, 
            spécialisé dans la création d'applications web modernes et innovantes.
            <br />
            <span className="text-neon-blue font-semibold">
              Actuellement en recherche d'alternance pour septembre 2025 !
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-neon-blue/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>🚀 Voir mes projets</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-neon-blue rounded-full font-semibold text-lg hover:bg-neon-blue hover:text-dark-50 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>💬 Me contacter</span>
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 