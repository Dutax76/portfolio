import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Thomas Guislin - Portfolio',
  description: 'Portfolio de Thomas Guislin, développeur passionné',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/img/logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/img/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-50 text-white overflow-x-hidden">
        <div className="min-h-screen relative">
          {/* Particle background */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-50 via-dark-100 to-primary-900 opacity-90" />
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-neon-blue rounded-full animate-particle opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
} 