'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background stylé mais optimisé pour INP */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient de base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />
        
        {/* Overlay avec texture */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20" />
        
        {/* Grille cyber statique (plus de mouvement) */}
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
        
        {/* Points lumineux réduits et statiques (12 → 6) */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-25"
              style={{
                left: `${20 + (i * 12) % 60}%`,
                top: `${15 + (i * 17) % 70}%`,
                boxShadow: '0 0 8px rgba(0, 212, 255, 0.4)',
                contain: 'layout style paint'
              }}
            />
          ))}
        </div>
        
        {/* Lignes de circuit subtiles et statiques */}
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

      {/* Styles simplifiés - suppression de toutes les animations coûteuses */}
      <style jsx>{`
        /* Plus d'animations pour économiser l'INP */
        
        /* Media queries pour les performances */
        @media (max-resolution: 1.5dppx) {
          .bg-neon-blue {
            box-shadow: none;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  )
} 