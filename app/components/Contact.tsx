'use client'

import { useState } from 'react'

const Contact = () => {
  const [copiedDiscord, setCopiedDiscord] = useState(false)

  const copyDiscordUsername = async (username: string) => {
    try {
      await navigator.clipboard.writeText(username)
      setCopiedDiscord(true)
      setTimeout(() => setCopiedDiscord(false), 2000)
    } catch (err) {
      console.error('Erreur lors de la copie:', err)
    }
  }

  const socialLinks = [
    { name: 'Email', icon: '📧', href: 'mailto:thomas.guislin@gmail.com', description: 'thomas.guislin@gmail.com', shortDescription: 'Écrivez-moi !' },
    { name: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/thomas-guislin-a23508329/', description: 'Connectons-nous !' },
    { name: 'GitHub', icon: '🐱', href: 'https://github.com/Dutax76', description: 'Voir mes projets' },
    { name: 'Discord', icon: '🎮', href: '', description: 'Discutons de tech !', isDiscord: true, discordUsername: 'dutax' },
  ]

  return (
    <section id="contact" className="py-20 bg-brutal-white border-t-4 border-brutal-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            <span className="accent-underline inline-block">Me Contacter</span>
          </h2>
          <p className="text-xl text-neutral-600 mt-6 max-w-2xl mx-auto">
            Un projet, une opportunité d'alternance ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="brutal-card rounded-none p-8">
            <h3 className="text-2xl font-bold text-brutal-black mb-6">Informations</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-4 border-brutal-black bg-brutal-accent text-brutal-white flex items-center justify-center font-bold shrink-0">
                  🎓
                </div>
                <div>
                  <p className="font-bold text-brutal-black">Étudiant BUT Informatique</p>
                  <p className="text-neutral-600">Université de Lille</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-4 border-brutal-black bg-brutal-white flex items-center justify-center font-bold shrink-0">
                  📍
                </div>
                <div>
                  <p className="font-bold text-brutal-black">Lille, Rouen</p>
                  <p className="text-neutral-600">Ouvert à la mobilité</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-4 border-brutal-black bg-brutal-accent text-brutal-white flex items-center justify-center font-bold shrink-0">
                  🚀
                </div>
                <div>
                  <p className="font-bold text-brutal-black">Recherche d'alternance</p>
                  <p className="text-neutral-600">Septembre 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-4 border-brutal-black bg-brutal-white flex items-center justify-center font-bold shrink-0">
                  💼
                </div>
                <div>
                  <p className="font-bold text-brutal-black">CV disponible</p>
                  <a
                    href="/cv-thomas-guislin.pdf"
                    download
                    className="text-brutal-accent font-bold underline hover:no-underline"
                  >
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="brutal-card rounded-none p-8">
            <h3 className="text-2xl font-bold text-brutal-black mb-6">Réseaux & Contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => {
                if ((link as { isDiscord?: boolean }).isDiscord) {
                  const l = link as { discordUsername: string }
                  return (
                    <button
                      key={index}
                      onClick={() => copyDiscordUsername(l.discordUsername)}
                      className="brutal-card rounded-none p-4 text-center hover:bg-brutal-accent hover:text-brutal-white transition-colors group"
                    >
                      <div className="text-3xl mb-2">{link.icon}</div>
                      <h4 className="font-bold text-brutal-black group-hover:text-brutal-white">{link.name}</h4>
                      <p className="text-sm text-neutral-600 group-hover:text-brutal-white">
                        {copiedDiscord ? 'Copié !' : `@${l.discordUsername}`}
                      </p>
                    </button>
                  )
                }
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-card rounded-none p-4 text-center hover:bg-brutal-accent hover:text-brutal-white transition-colors group"
                  >
                    <div className="text-3xl mb-2">{link.icon}</div>
                    <h4 className="font-bold text-brutal-black group-hover:text-brutal-white">{link.name}</h4>
                    <p className="text-sm text-neutral-600 group-hover:text-brutal-white">
                      {(link as { shortDescription?: string }).shortDescription || link.description}
                    </p>
                  </a>
                )
              })}
            </div>
            <div className="mt-8 pt-6 border-t-4 border-brutal-black">
              <p className="text-center text-neutral-600 mb-4">Contact direct</p>
              <a
                href="mailto:thomas.guislin@gmail.com"
                className="brutal-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3"
              >
                thomas.guislin@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
