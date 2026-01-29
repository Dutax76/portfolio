'use client'

import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 150)
  }

  return (
    <header
      className={`fixed top-0 w-full z-[9999] transition-all duration-200 border-b-4 border-brutal-black ${
        isScrolled ? 'bg-brutal-white shadow-[0_4px_0_0_#0a0a0a]' : 'bg-brutal-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-4 border-brutal-black flex items-center justify-center overflow-hidden bg-brutal-white shadow-[3px_3px_0_0_#0a0a0a]">
              <img src="/img/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-brutal-black font-brutal">Thomas Guislin</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-bold text-brutal-black border-2 border-transparent hover:border-brutal-black hover:bg-brutal-black hover:text-brutal-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1eC4z0wYTpokmMaDuLat4FhZTw1f6QXjq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 brutal-btn text-sm"
            >
              CV
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 border-4 border-brutal-black bg-brutal-white shadow-[3px_3px_0_0_#0a0a0a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t-4 border-brutal-black space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleMobileMenuClick(item.href)}
                className="w-full text-left px-4 py-3 font-bold text-brutal-black hover:bg-brutal-black hover:text-brutal-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1eC4z0wYTpokmMaDuLat4FhZTw1f6QXjq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-2 px-4 py-3 brutal-btn text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
