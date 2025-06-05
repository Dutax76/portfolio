'use client'

import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: '📍 À propos', icon: '👨‍💻' },
    { href: '#skills', label: '💪 Compétences', icon: '⚡' },
    { href: '#projects', label: '🚀 Projets', icon: '💻' },
    { href: '#contact', label: '✉️ Contact', icon: '📧' },
  ]

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false)
    // Petit délai pour fermer le menu avant de naviguer
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  const toggleMobileMenu = () => {
    console.log('Menu hamburger cliqué, état actuel:', isMobileMenuOpen)
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${
      isScrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-r from-neon-blue to-neon-purple p-1">
              <img 
                src="/img/logo.png" 
                alt="Logo Thomas Guislin" 
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Thomas Guislin
            </span>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-neon-blue group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
            ))}
            
            {/* CV Button */}
            <a
              href="https://drive.google.com/file/d/1jBrT3sucMA-YcAHQvEHNh9P7xfs7gU-e/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-medium hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 hover:scale-105"
            >
              📄 CV
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden relative z-[10000] p-3 rounded-lg bg-white/10 backdrop-blur-md transition-colors duration-300 hover:bg-white/20 border border-white/20 active:bg-white/30 touch-manipulation"
            aria-label="Menu"
            type="button"
            style={{ 
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 pointer-events-none ${isMobileMenuOpen ? 'rotate-45' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 space-y-2 bg-black/20 backdrop-blur-md rounded-lg mt-4 border border-white/10">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMobileMenuClick(item.href)}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-neon-blue flex items-center space-x-3 touch-manipulation"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            
            {/* CV Button Mobile */}
            <a
              href="https://drive.google.com/file/d/1jBrT3sucMA-YcAHQvEHNh9P7xfs7gU-e/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-4 px-4 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-medium text-center hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              📄 CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 