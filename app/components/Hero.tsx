'use client'

import { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [showAnimations, setShowAnimations] = useState(false)

  const phrases = [
    'Développeur Passionné',
    'Étudiant en BUT Informatique',
    'Créateur d\'Expériences Numériques',
    'Futur Alternant'
  ]

  useEffect(() => {
    const t = setTimeout(() => setShowAnimations(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!showAnimations) return
    let timeout: NodeJS.Timeout | undefined
    if (isTyping) {
      if (text.length < phrases[currentPhrase].length) {
        timeout = setTimeout(() => setText(phrases[currentPhrase].slice(0, text.length + 1)), 100)
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 50)
      } else {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        setIsTyping(true)
      }
    }
    return () => { if (timeout) clearTimeout(timeout) }
  }, [text, isTyping, currentPhrase, showAnimations, phrases])

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24 pb-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full border-4 border-brutal-black shadow-[6px_6px_0_0_#0a0a0a] overflow-hidden bg-brutal-white">
              <img
                src="/img/selfie.jpg?v=2"
                alt="Thomas Guislin"
                className="w-full h-full object-cover"
                loading="eager"
                width={128}
                height={128}
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Titre */}
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-brutal-black mb-6 font-brutal tracking-tight break-words max-w-full">
            Thomas Guislin
          </h1>

          {/* Texte animé */}
          <div className="text-xl md:text-2xl font-medium mb-8 min-h-[2.5rem] flex items-center justify-center">
            <span className="text-brutal-black border-b-4 border-brutal-accent pb-1">
              {showAnimations ? (
                <span className="inline-block min-w-[280px] md:min-w-[320px] text-left">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              ) : (
                'Développeur Passionné'
              )}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-12">
            Étudiant en 3e année de BUT Informatique à Lille, spécialisé dans la création d'applications web.
            <br />
            <span className="font-bold text-brutal-accent">Recherche d'alternance pour septembre 2026.</span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="brutal-btn px-8 py-4 text-lg inline-flex items-center gap-2"
            >
              Voir mes projets
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="brutal-btn-outline px-8 py-4 text-lg inline-flex items-center gap-2"
            >
              Me contacter
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
