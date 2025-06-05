'use client'

import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'entering' | 'diving' | 'materializing' | 'complete'>('entering')
  const [showVortex, setShowVortex] = useState(false)
  const [particlesReady, setParticlesReady] = useState(false)

  const phases = {
    entering: "Chargement...",
    diving: "Connexion au Portofolio...",
    materializing: "Matérialisation en cours...",
    complete: "Bienvenue ✨"
  }

  useEffect(() => {
    // Démarrage immédiat des effets visuels
    setTimeout(() => setShowVortex(true), 100)
    setTimeout(() => setParticlesReady(true), 500)

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setPhase('complete')
          setTimeout(() => {
            onComplete()
          }, 2500)
          return 100
        }
        
        const newProgress = prev + Math.random() * 12 + 3
        
        // Changement de phases selon le progrès
        if (newProgress < 30) {
          setPhase('entering')
        } else if (newProgress < 70) {
          setPhase('diving')
        } else if (newProgress < 100) {
          setPhase('materializing')
        }
        
        return Math.min(newProgress, 100)
      })
    }, 200)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Vortex de l'hyperespace */}
      {showVortex && (
        <div className="absolute inset-0">
          {/* Anneaux concentriques du vortex */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`ring-${i}`}
              className="absolute rounded-full border-2 border-neon-blue opacity-20"
              style={{
                width: `${(i + 1) * 200}px`,
                height: `${(i + 1) * 200}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `vortexRing ${3 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
                borderColor: i % 2 === 0 ? '#00d4ff' : '#ff00ff'
              }}
            />
          ))}
          
          {/* Vortex central */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full bg-gradient-radial from-neon-blue/30 via-neon-purple/20 to-transparent animate-pulse" 
                 style={{ 
                   background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, rgba(147,51,234,0.2) 50%, transparent 70%)',
                   animation: 'breathe 2s ease-in-out infinite'
                 }} 
            />
          </div>
        </div>
      )}

      {/* Champ d'étoiles et particules */}
      {particlesReady && (
        <div className="absolute inset-0">
          {/* Étoiles filantes */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `starTrail ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Particules dimensionnelles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className={`absolute w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-neon-blue' : i % 3 === 1 ? 'bg-neon-purple' : 'bg-neon-green'
              } opacity-60`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particleDrift ${4 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Interface de plongée dimensionnelle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center relative z-10 max-w-2xl px-8">
          
          {/* Logo/Avatar flottant */}
          <div className="relative mb-12 inline-block">
            <div className="w-40 h-40 mx-auto relative">
              
              {/* Aura énergétique */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-30 animate-ping" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-neon-green to-neon-pink opacity-20 animate-pulse" 
                   style={{ animationDelay: '0.5s' }} />
              
              {/* Cercles orbitaux */}
              <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`orbit-${i}`}
                    className="absolute inset-0 rounded-full border border-neon-blue/40"
                    style={{
                      animation: `orbit ${8 + i * 2}s linear infinite`,
                      transform: `scale(${1 + i * 0.3})`
                    }}
                  >
                    <div className="absolute w-3 h-3 bg-neon-green rounded-full -top-1.5 left-1/2 transform -translate-x-1/2" />
                  </div>
                ))}
              </div>
              
              {/* Image centrale */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple p-1 z-10">
                <div className="w-full h-full rounded-full bg-dark-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/img/selfie.jpg" 
                    alt="Thomas" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Effet de matérialisation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neon-blue/40 via-transparent to-neon-purple/40 animate-pulse" />
            </div>
          </div>

          {/* Message de phase */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 dimensional-text">
              {phases[phase]}
            </h1>
            
            {/* Barre de progression dimensionnelle */}
            <div className="relative w-full max-w-md mx-auto h-3 bg-dark-200/50 rounded-full overflow-hidden mb-8 backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green transition-all duration-500 relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                {/* Effet de flux énergétique */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-ping" />
              </div>
              
              {/* Particules sur la barre */}
              <div className="absolute top-1/2 transform -translate-y-1/2" 
                   style={{ left: `${progress}%` }}>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" />
              </div>
            </div>

            {/* Pourcentage flottant */}
            <div className="text-3xl font-bold text-neon-blue font-mono floating-text">
              {Math.floor(progress)}%
            </div>
          </div>

          {/* Messages contextuels */}
          <div className="text-lg text-gray-300 mb-8 font-light">
            {phase === 'entering' && "🌌 Initialisation du voyage interdimensionnel..."}
            {phase === 'diving' && "🚀 Traversée des couches de réalité..."}
            {phase === 'materializing' && "✨ Reconstruction de l'interface..."}
            {phase === 'complete' && "🎉 Voyage terminé ! Préparez-vous à l'expérience..."}
          </div>

          {/* Indicateurs de progression */}
          <div className="flex justify-center space-x-4">
            {['entering', 'diving', 'materializing', 'complete'].map((p, index) => (
              <div
                key={p}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  Object.keys(phases).indexOf(phase) >= index
                    ? 'bg-neon-green scale-125 shadow-lg shadow-neon-green/50'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes vortexRing {
          0% { 
            transform: translate(-50%, -50%) scale(0.1) rotate(0deg);
            opacity: 0;
          }
          50% { 
            opacity: 0.6;
          }
          100% { 
            transform: translate(-50%, -50%) scale(1.5) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes starTrail {
          0% {
            transform: translateX(-100px) translateY(-100px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes particleDrift {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-30px) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-25px) rotate(270deg);
            opacity: 1;
          }
        }
        
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }
        
        .dimensional-text {
          text-shadow: 0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(147, 51, 234, 0.3);
          animation: textGlow 2s ease-in-out infinite alternate;
        }
        
        @keyframes textGlow {
          from {
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(147, 51, 234, 0.3);
          }
          to {
            text-shadow: 0 0 30px rgba(0, 212, 255, 0.8), 0 0 60px rgba(147, 51, 234, 0.6);
          }
        }
        
        .floating-text {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen 