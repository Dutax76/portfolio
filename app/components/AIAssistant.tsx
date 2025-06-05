'use client'

import { useState, useEffect, useRef } from 'react'

interface AssistantAction {
  icon: string
  label: string
  action: () => void
}

const AIAssistant = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSection, setCurrentSection] = useState('hero')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [showActions, setShowActions] = useState(false)
  const [visitedSections, setVisitedSections] = useState<string[]>([])
  const typingTimeoutRef = useRef<NodeJS.Timeout>()

  // Messages contextuels selon la section
  const contextualMessages: Record<string, string[]> = {
    hero: [
      "👋 Bienvenue sur le portfolio de Thomas !",
      "🚀 Étudiant BUT Informatique passionné",
      "💼 En recherche d'alternance pour septembre 2025",
      "📱 Naviguez pour découvrir ses projets !"
    ],
    about: [
      "🎓 Découvrez le parcours de Thomas",
      "💡 Une passion pour l'innovation depuis le lycée",
      "🌟 Spécialisé en développement web moderne",
      "📚 Formation solide en informatique à Lille"
    ],
    skills: [
      "💻 Compétences techniques impressionnantes !",
      "⚛️ React, TypeScript, Angular... maîtrisés !",
      "🔧 Du frontend au backend, polyvalent",
      "📊 Visualisez son niveau dans chaque technologie"
    ],
    projects: [
      "🚀 Projets innovants et créatifs !",
      "🎮 Du gaming aux applications pratiques",
      "🌐 Technologies modernes et UX soignée",
      "💡 Cliquez pour voir les détails techniques"
    ],
    contact: [
      "📧 Prêt à recruter Thomas ?",
      "💬 Contactez-le pour votre alternance !",
      "📱 Toutes ses coordonnées sont là",
      "✨ Un profil qui correspond à vos besoins ?"
    ]
  }

  // Actions contextuelles
  const getContextualActions = (): AssistantAction[] => {
    switch (currentSection) {
      case 'hero':
        return [
          { icon: '🚀', label: 'Voir projets', action: () => scrollToSection('projects') },
          { icon: '📧', label: 'Contact direct', action: () => scrollToSection('contact') },
          { icon: '💼', label: 'Télécharger CV', action: downloadCV }
        ]
      case 'about':
        return [
          { icon: '🎓', label: 'Voir compétences', action: () => scrollToSection('skills') },
          { icon: '🚀', label: 'Ses projets', action: () => scrollToSection('projects') },
          { icon: '📧', label: 'Le contacter', action: () => scrollToSection('contact') }
        ]
      case 'skills':
        return [
          { icon: '💡', label: 'Voir en action', action: () => scrollToSection('projects') },
          { icon: '📧', label: 'Recruter Thomas', action: () => scrollToSection('contact') },
          { icon: '👤', label: 'Son parcours', action: () => scrollToSection('about') }
        ]
      case 'projects':
        return [
          { icon: '💻', label: 'Ses compétences', action: () => scrollToSection('skills') },
          { icon: '📧', label: 'Discuter projets', action: () => scrollToSection('contact') },
          { icon: '💼', label: 'CV complet', action: downloadCV }
        ]
      case 'contact':
        return [
          { icon: '💼', label: 'Télécharger CV', action: downloadCV },
          { icon: '🚀', label: 'Revoir projets', action: () => scrollToSection('projects') },
          { icon: '💻', label: 'Ses compétences', action: () => scrollToSection('skills') }
        ]
      default:
        return [
          { icon: '🏠', label: 'Accueil', action: () => scrollToSection('hero') },
          { icon: '📧', label: 'Contact', action: () => scrollToSection('contact') }
        ]
    }
  }

  // Fonctions utilitaires
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsExpanded(false)
  }

  const downloadCV = () => {
    // Simuler le téléchargement du CV
    const link = document.createElement('a')
    link.href = '/cv-thomas-guislin.pdf' // Le fichier devra être ajouté dans public/
    link.download = 'CV-Thomas-Guislin.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setIsExpanded(false)
  }

  // Détection de la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            if (section !== currentSection) {
              setCurrentSection(section)
              if (!visitedSections.includes(section)) {
                setVisitedSections(prev => [...prev, section])
              }
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentSection, visitedSections])

  // Apparition de l'assistant
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Animation de typing contextuelle
  useEffect(() => {
    if (isVisible && contextualMessages[currentSection]) {
      const messages = contextualMessages[currentSection]
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]
      
      setIsTyping(true)
      setDisplayText('')
      
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
      
      let charIndex = 0
      const typeInterval = setInterval(() => {
        if (charIndex < randomMessage.length) {
          setDisplayText(prev => prev + randomMessage[charIndex])
          charIndex++
        } else {
          setIsTyping(false)
          clearInterval(typeInterval)
          
          // Auto-hide après un moment
          typingTimeoutRef.current = setTimeout(() => {
            setDisplayText('')
          }, 5000)
        }
      }, 50)

      return () => {
        clearInterval(typeInterval)
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current)
        }
      }
    }
  }, [currentSection, isVisible])

  if (!isVisible) return null

  const currentActions = getContextualActions()

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden md:block">
      {/* Assistant Avatar */}
      <div className="relative">
        {/* Status indicator ring */}
        <div className={`absolute -inset-4 rounded-full border-2 animate-ping opacity-30 ${
          isExpanded ? 'border-neon-green' : 'border-neon-blue'
        }`} />
        <div className="absolute -inset-2 rounded-full border border-neon-purple animate-pulse opacity-50" />
        
        {/* Main Avatar */}
        <div 
          className={`w-16 h-16 bg-gradient-to-r rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group relative ${
            isExpanded 
              ? 'from-neon-green to-neon-blue scale-110' 
              : 'from-neon-blue to-neon-purple hover:scale-110'
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* AI Icon with context indicator */}
          <div className="text-2xl group-hover:scale-110 transition-transform relative">
            🤖
            {/* Activity dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green rounded-full animate-pulse" />
          </div>
          
          {/* Scanning effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neon-blue/20 to-transparent animate-pulse" />
        </div>

        {/* Speech Bubble */}
        {displayText && (
          <div className="absolute bottom-20 right-0 max-w-xl animate-in fade-in slide-in-from-bottom-2">
            <div className="bg-black/95 backdrop-blur-md border border-neon-blue/50 rounded-2xl p-6 relative shadow-lg shadow-neon-blue/20">
              {/* Arrow */}
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-black/95 border-r border-b border-neon-blue/50 transform rotate-45" />
              
              {/* Message */}
              <div className="text-white text-base leading-relaxed min-h-[1.5rem]">
                {displayText}
                {isTyping && <span className="animate-pulse text-neon-blue">|</span>}
              </div>
              
              {/* Context indicator */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-neon-blue/30">
                <span className="text-neon-blue text-sm font-mono">
                  ARIA • Section: {currentSection}
                </span>
                <div className="text-sm text-gray-400">
                  {visitedSections.length}/5 explorées
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Panel */}
        {isExpanded && (
          <div className="absolute bottom-20 right-0 animate-in fade-in slide-in-from-bottom-2">
            <div className="bg-black/95 backdrop-blur-md border border-neon-green/50 rounded-2xl p-6 min-w-80 shadow-lg shadow-neon-green/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-neon-green/30">
                <span className="text-neon-green font-semibold text-lg">Actions suggérées</span>
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  ✕
                </button>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                {currentActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="w-full flex items-center space-x-4 p-4 rounded-lg bg-dark-50/50 hover:bg-neon-green/10 border border-transparent hover:border-neon-green/30 transition-all duration-200 group"
                  >
                    <span className="text-2xl">{action.icon}</span>
                    <span className="text-white group-hover:text-neon-green transition-colors text-base flex-1 text-left">
                      {action.label}
                    </span>
                    <svg className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-5 pt-4 border-t border-neon-green/30">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Progression du portfolio</span>
                  <span className="text-neon-green font-semibold">{visitedSections.length}/5 sections</span>
                </div>
                <div className="mt-3 w-full bg-dark-50 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-neon-green to-neon-blue h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(visitedSections.length / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating data particles around assistant */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-60 ${
              isExpanded ? 'bg-neon-green' : 'bg-neon-blue'
            }`}
            style={{
              left: `${30 + Math.cos(i * 45 * Math.PI / 180) * (isExpanded ? 50 : 40)}px`,
              top: `${30 + Math.sin(i * 45 * Math.PI / 180) * (isExpanded ? 50 : 40)}px`,
              animation: `orbit ${isExpanded ? '2s' : '3s'} linear infinite`,
              animationDelay: `${i * 0.25}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(25px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(25px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default AIAssistant 