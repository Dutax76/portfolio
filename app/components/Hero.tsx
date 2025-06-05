'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [showAnimations, setShowAnimations] = useState(false)
  const animationRef = useRef<number>()
  const lastFrameTime = useRef(0)
  const textProgress = useRef(0)
  
  const phrases = [
    'Développeur Passionné',
    'Étudiant en BUT Informatique',
    'Créateur d\'Expériences Numériques',
    'Futur Alternant'
  ]

  // Réduit le nombre de shapes pour améliorer l'INP (25 → 8)
  const fixedShapes = useRef([
    { left: 15, top: 15, delay: 0, size: 'medium' },
    { left: 85, top: 20, delay: 0.5, size: 'small' },
    { left: 10, top: 45, delay: 1, size: 'small' },
    { left: 90, top: 50, delay: 1.5, size: 'medium' },
    { left: 20, top: 75, delay: 2, size: 'medium' },
    { left: 80, top: 80, delay: 2.5, size: 'small' },
    { left: 50, top: 10, delay: 3, size: 'large' },
    { left: 50, top: 90, delay: 3.5, size: 'medium' }
  ])

  const getSizeClass = useCallback((size: string) => {
    switch (size) {
      case 'small': return 'w-10 h-10'
      case 'medium': return 'w-12 h-12'
      case 'large': return 'w-16 h-16'
      default: return 'w-12 h-12'
    }
  }, [])

  // Animation optimisée avec requestAnimationFrame
  const animate = useCallback((currentTime: number) => {
    if (currentTime - lastFrameTime.current < 120) { // Limite à ~8fps pour économiser CPU
      animationRef.current = requestAnimationFrame(animate)
      return
    }
    
    lastFrameTime.current = currentTime
    const currentPhraseText = phrases[currentPhrase]
    
    if (isTyping) {
      if (textProgress.current < currentPhraseText.length) {
        textProgress.current += 1
        setText(currentPhraseText.slice(0, Math.floor(textProgress.current)))
        animationRef.current = requestAnimationFrame(animate)
      } else {
        // Pause avant suppression
        setTimeout(() => setIsTyping(false), 2000)
      }
    } else {
      if (textProgress.current > 0) {
        textProgress.current -= 0.8 // Suppression plus rapide
        setText(currentPhraseText.slice(0, Math.floor(textProgress.current)))
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        setIsTyping(true)
        animationRef.current = requestAnimationFrame(animate)
      }
    }
  }, [isTyping, currentPhrase, phrases])

  // Retarder les animations non-critiques pour optimiser LCP
  useEffect(() => {
    // Affichage immédiat du contenu critique
    const timer = setTimeout(() => {
      setShowAnimations(true)
      textProgress.current = 0
      animationRef.current = requestAnimationFrame(animate)
    }, 100) // Très court délai pour permettre le rendu du contenu critique
    
    return () => {
      clearTimeout(timer)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate])

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Shapes réduites et optimisées - retardées pour LCP */}
      {showAnimations && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {fixedShapes.current.map((shape, i) => (
            <div
              key={i}
              className="absolute opacity-15 animate-float-slow"
              style={{
                left: `${shape.left}%`,
                top: `${shape.top}%`,
                animationDelay: `${shape.delay}s`,
                contain: 'layout style paint'
              }}
            >
              <div className={`${getSizeClass(shape.size)} border border-neon-blue/30 rotate-45 bg-neon-blue/5`} />
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar - Critique pour LCP */}
          <div className="mb-8 inline-block w-32 h-32">
            <div className="w-full h-full mx-auto rounded-full bg-gradient-to-r from-neon-blue to-neon-purple p-1">
              <div className="w-full h-full rounded-full bg-dark-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="/img/selfie.jpg" 
                  alt="Thomas Guislin" 
                  className="w-28 h-28 rounded-full object-cover"
                  loading="eager"
                  width="112"
                  height="112"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          {/* Titre principal - Critique pour LCP */}
          <div className="mb-6 h-20 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent text-center">
              Thomas Guislin
            </h1>
          </div>

          {/* Texte animé - NON critique, retardé */}
          <div className="text-2xl md:text-3xl font-light mb-8 h-12 flex items-center justify-center">
            <div className="min-w-96 text-center">
              <span className="text-neon-blue font-mono">
                {showAnimations ? (
                  <span className="inline-block min-w-[320px] text-left">
                    {text}
                    <span className="animate-pulse-slow">|</span>
                  </span>
                ) : (
                  <span className="inline-block min-w-[320px] text-left text-neon-blue">
                    Développeur Passionné
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Description - CRITIQUE pour LCP - Affichage immédiat */}
          <div className="mb-12 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Étudiant passionné en deuxième année de BUT Informatique à Lille, 
              spécialisé dans la création d'applications web modernes et innovantes.
              <br />
              <span className="text-neon-blue font-semibold">
                Actuellement en recherche d'alternance pour septembre 2025 !
              </span>
            </p>
          </div>

          {/* CTA Buttons - Critiques pour LCP */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center h-20">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-200 hover:scale-105 flex items-center space-x-2"
            >
              <span>🚀 Voir mes projets</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-neon-blue rounded-full font-semibold text-lg hover:bg-neon-blue hover:text-dark-50 transition-all duration-200 hover:scale-105 flex items-center space-x-2"
            >
              <span>💬 Me contacter</span>
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Scroll indicator - Non critique */}
          {showAnimations && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center animate-bounce-slow">
                <div className="w-1 h-3 bg-neon-blue rounded-full mt-2" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Styles CSS optimisés pour LCP */}
      <style jsx>{`
        /* Animations lentes pour économiser CPU */
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }

        /* Animation float économe */
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-15px);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Media queries responsives */
        @media (max-width: 768px) {
          .min-w-96 {
            min-width: 280px;
          }
          
          .min-w-\\[320px\\] {
            min-width: 250px !important;
          }
        }

        /* Optimisation pour les devices avec peu de ressources */
        @media (max-resolution: 1.5dppx) {
          .animate-float-slow {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero 