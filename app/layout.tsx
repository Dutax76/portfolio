import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thomas Guislin - Portfolio',
  description: 'Portfolio de Thomas Guislin, étudiant en BUT Informatique à Lille. Développeur passionné spécialisé dans les applications web modernes.',
  keywords: 'Thomas Guislin, portfolio, développeur, BUT Informatique, Lille, alternance, web developer',
  authors: [{ name: 'Thomas Guislin' }],
  creator: 'Thomas Guislin',
  publisher: 'Thomas Guislin',
  openGraph: {
    title: 'Thomas Guislin - Portfolio',
    description: 'Portfolio de Thomas Guislin, étudiant en BUT Informatique',
    type: 'website',
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
        {/* Préchargement critique des fonts pour LCP */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
        </noscript>
        
        {/* Préchargement critique des images LCP */}
        <link
          rel="preload"
          href="/img/selfie.jpg"
          as="image"
          type="image/jpeg"
          fetchPriority="high"
        />
        
        {/* Préchargement du logo */}
        <link
          rel="preload"
          href="/img/logo.png"
          as="image"
          type="image/png"
          fetchPriority="low"
        />

        {/* Optimisations pour les performances critiques */}
        <meta name="robots" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Inline critique CSS pour éliminer le render-blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* CSS critique inline pour LCP */
            body { 
              font-family: system-ui, -apple-system, sans-serif; 
              margin: 0;
              background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
              color: white;
              min-height: 100vh;
            }
            
            /* Éviter FOUC */
            .container { max-width: 1200px; margin: 0 auto; }
            .text-center { text-align: center; }
            .relative { position: relative; }
            .absolute { position: absolute; }
            .fixed { position: fixed; }
            .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
            .z-10 { z-index: 10; }
            .min-h-screen { min-height: 100vh; }
            .flex { display: flex; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .mb-8 { margin-bottom: 2rem; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mb-12 { margin-bottom: 3rem; }
            .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
            .pt-20 { padding-top: 5rem; }
            .text-5xl { font-size: 3rem; line-height: 1; }
            .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
            .font-bold { font-weight: 700; }
            .text-gray-300 { color: rgb(209 213 219); }
            .leading-relaxed { line-height: 1.625; }
            
            @media (min-width: 768px) {
              .md\\:text-7xl { font-size: 4.5rem; line-height: 1; }
              .md\\:text-xl { font-size: 1.25rem; line-height: 1.75rem; }
            }
          `
        }} />
      </head>
      <body className="bg-dark-50 text-white overflow-x-hidden">
        {/* Background optimisé pour LCP */}
        <div className="min-h-screen relative bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
          {/* Texture de base - critique */}
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