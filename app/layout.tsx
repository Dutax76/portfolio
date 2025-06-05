import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thomas Guislin - Portfolio',
  description: 'Étudiant passionné en BUT Informatique, spécialisé dans le développement web moderne. En recherche d\'alternance pour septembre 2025.',
  keywords: 'Thomas Guislin, développeur, BUT informatique, alternance, web development, portfolio',
  authors: [{ name: 'Thomas Guislin' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00d4ff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Préchargement des polices critiques */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Préchargement des images critiques */}
        <link
          rel="preload"
          href="/img/selfie.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/img/logo.png"
          as="image"
          type="image/png"
        />

        {/* Optimisations pour les performances */}
        <meta name="robots" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-dark-50 text-white overflow-x-hidden">
        {/* Background de base stylé pour le layout */}
        <div className="min-h-screen relative bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
          {/* Texture de base */}
          <div className="fixed inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-slate-900/10 pointer-events-none" />
          
          {/* Content principal */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
} 