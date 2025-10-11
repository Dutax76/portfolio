'use client'

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <span>📍</span>
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">À propos de moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-8 floating-card">
              <h3 className="text-2xl font-bold mb-4 text-neon-blue">Bonjour ! 👋</h3>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Je m'appelle Thomas Guislin. J'ai 20 ans et suis originaire de Rouen. 
                Actuellement à Lille pour mes études supérieures, je suis en troisième année 
                de mon BUT-Informatique, situé à l'Université Technologique de Lille 
                (site de Villeneuve d'Ascq).
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Depuis tout petit, je suis passionné d'informatique : j'ai toujours voulu 
                évoluer dans ce domaine !
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 floating-card bg-gradient-to-r from-neon-green/10 to-neon-blue/10">
              <h3 className="text-xl font-bold mb-4 text-neon-green">🚀 Recherche de Stage</h3>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                Je suis actuellement en pleine <strong className="text-neon-green">recherche pour un Stage</strong> à partir de mi-mars 2025.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Sur une période de<strong className="text-neon-blue"> 4 mois</strong>.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-center text-neon-purple">📚 Mon Parcours</h3>
            
            {/* Current Education */}
            <div className="relative">
              <div className="glass-effect rounded-2xl p-8 floating-card hover:bg-gradient-to-r hover:from-neon-blue/10 hover:to-neon-purple/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-neon-blue mb-2">BUT Informatique</h4>
                    <p className="text-gray-400 mb-2">09/2023 - Aujourd'hui</p>
                    <p className="text-gray-300">
                      Université Technologique de Lille
                      <br />
                      <span className="text-neon-purple">Parcours : Réalisation d'applications</span>
                    </p>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Previous Education */}
            <div className="glass-effect rounded-2xl p-8 floating-card hover:bg-gradient-to-r hover:from-neon-purple/10 hover:to-neon-pink/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center text-2xl">
                  🏫
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-neon-purple mb-2">Lycée Institution Rey</h4>
                  <p className="text-gray-400 mb-2">09/2020 - 07/2023</p>
                  <p className="text-gray-300">
                    Baccalauréat Général
                    <br />
                    <span className="text-neon-pink">Spécialités : NSI et Mathématiques</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 