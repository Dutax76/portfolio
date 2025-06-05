'use client'

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: '📧',
      href: 'mailto:thomas.guislin@gmail.com',
      color: 'from-red-500 to-pink-500',
      description: 'thomas.guislin@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      href: 'https://linkedin.com/in/thomas-guislin',
      color: 'from-blue-600 to-blue-800',
      description: 'Connectons-nous !'
    },
    {
      name: 'GitHub',
      icon: '🐱',
      href: 'https://github.com/thomas-guislin',
      color: 'from-gray-700 to-gray-900',
      description: 'Voir mes projets'
    },
    {
      name: 'Discord',
      icon: '🎮',
      href: '#',
      color: 'from-indigo-500 to-purple-600',
      description: 'Discutons de tech !'
    }
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
            ✉️ Me Contacter
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto rounded-full" />
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Une opportunité d'alternance ? 
            N'hésitez pas à me contacter ! 🚀
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-neon-green">🌟 Informations</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                  🎓
                </div>
                <div>
                  <p className="text-white font-medium">Étudiant BUT Informatique</p>
                  <p className="text-gray-400">Université de Lille</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="text-white font-medium">Lille, France</p>
                  <p className="text-gray-400">Ouvert à la mobilité</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center">
                  🚀
                </div>
                <div>
                  <p className="text-white font-medium">Recherche d'alternance</p>
                  <p className="text-gray-400">Septembre 2025</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center">
                  💼
                </div>
                <div>
                  <p className="text-white font-medium">CV disponible</p>
                  <a 
                    href="/cv-thomas-guislin.pdf" 
                    download
                    className="text-neon-blue hover:text-neon-green transition-colors underline"
                  >
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-neon-purple">🔗 Réseaux & Contact</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-r from-dark-200 to-dark-100 rounded-xl hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${link.color} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                      {link.icon}
                    </div>
                    <h4 className="font-semibold text-white mb-1">{link.name}</h4>
                    <p className="text-xs text-gray-400">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact direct */}
            <div className="mt-8 pt-6 border-t border-neon-purple/30">
              <div className="text-center">
                <p className="text-gray-300 mb-4">💬 Contact direct :</p>
                <a
                  href="mailto:thomas.guislin@gmail.com"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300 hover:scale-105"
                >
                  <span>📧</span>
                  <span>thomas.guislin@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 