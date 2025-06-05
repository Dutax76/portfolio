'use client'

import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center font-bold text-lg">
              TG
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Thomas Guislin
            </span>
          </div>

          {/* Navigation */}
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
          <button className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header 