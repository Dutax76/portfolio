'use client'

const About = () => {
  return (
    <section id="about" className="py-20 bg-brutal-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            <span className="accent-underline inline-block">À propos</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="brutal-card rounded-none p-8">
              <h3 className="text-2xl font-bold text-brutal-black mb-4">Bonjour</h3>
              <p className="text-lg leading-relaxed text-neutral-600 mb-6">
                Je m'appelle Thomas Guislin. J'ai 20 ans et suis originaire de Rouen.
                Actuellement à Lille pour mes études, je suis en troisième année de BUT Informatique
                à l'Université Technologique de Lille (Villeneuve d'Ascq).
              </p>
              <p className="text-lg leading-relaxed text-neutral-600">
                Passionné d'informatique depuis toujours, je veux évoluer dans ce domaine.
              </p>
            </div>

            <div className="brutal-card rounded-none p-8 border-l-4 border-l-brutal-accent">
              <h3 className="text-xl font-bold text-brutal-accent mb-4">Recherche d'alternance</h3>
              <p className="text-lg leading-relaxed text-neutral-600 mb-4">
                Je cherche une <strong className="text-brutal-black">alternance à partir de septembre 2026</strong>,
                pour une durée de <strong className="text-brutal-black">2 ans</strong>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brutal-black">Parcours</h3>

            <div className="brutal-card rounded-none p-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 border-4 border-brutal-black bg-brutal-accent text-brutal-white flex items-center justify-center font-bold shrink-0">
                  🎓
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brutal-black mb-2">BUT Informatique</h4>
                  <p className="text-neutral-600 mb-2">09/2023 — Aujourd'hui</p>
                  <p className="text-neutral-600">
                    Université Technologique de Lille · Parcours Réalisation d'applications
                  </p>
                </div>
              </div>
            </div>

            <div className="brutal-card rounded-none p-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 border-4 border-brutal-black bg-brutal-white flex items-center justify-center font-bold shrink-0">
                  🏫
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brutal-black mb-2">Lycée Institution Rey</h4>
                  <p className="text-neutral-600 mb-2">09/2020 — 07/2023</p>
                  <p className="text-neutral-600">
                    Baccalauréat Général · Spécialités NSI et Mathématiques
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
