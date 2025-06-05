'use client'

import { useState } from 'react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'CampusTalk',
      category: 'web',
      description: 'Application web permettant aux étudiants et enseignants de communiquer efficacement.',
      image: '/img/projets/CampusTalk.png',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL'],
      features: ['Chat en temps réel', 'Gestion des groupes', 'Interface moderne'],
      status: 'Terminé',
      year: '2024'
    },
    {
      id: 2,
      title: 'Bagar.io',
      category: 'game',
      description: 'Jeu en ligne multijoueur inspiré d\'Agar.io avec des mécaniques innovantes.',
      image: '/img/projets/Bagar.io.png',
      technologies: ['JavaScript', 'Socket.io', 'Canvas API', 'Node.js'],
      features: ['Multijoueur', 'Physique réaliste', 'Interface intuitive'],
      status: 'Terminé',
      year: '2024'
    },
    {
      id: 3,
      title: 'Classification App',
      category: 'desktop',
      description: 'Application JavaFX pour classifier des données CSV avec visualisation graphique.',
      image: '/img/projets/classification.png',
      technologies: ['Java', 'JavaFX', 'ML Algorithms'],
      features: ['Import CSV', 'Algorithmes de tri', 'Graphiques interactifs'],
      status: 'Terminé',
      year: '2023'
    },
    {
      id: 4,
      title: 'QIkémon',
      category: 'game',
      description: 'Jeu éducatif inspiré de Pokémon pour apprendre différentes matières.',
      image: '/img/projets/QIkemon.png',
      technologies: ['Java', 'Terminal UI', 'OOP'],
      features: ['Système de combat', 'Quiz éducatifs', 'Progression'],
      status: 'Terminé',
      year: '2023'
    },
    {
      id: 5,
      title: 'CocoVoit',
      category: 'web',
      description: 'Plateforme de covoiturage moderne avec géolocalisation.',
      image: '/img/projets/Cocovoit.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Maps API'],
      features: ['Géolocalisation', 'Système de réservation', 'Profils utilisateurs'],
      status: 'Terminé',
      year: '2023'
    },
    {
      id: 6,
      title: 'Itinéraires SNCF',
      category: 'desktop',
      description: 'Application pour trouver le meilleur chemin entre deux villes.',
      image: '/img/projets/Itineraires.png',
      technologies: ['Java', 'JavaFX', 'Algorithmes de graphes'],
      features: ['Calcul d\'itinéraires', 'Interface graphique', 'Optimisation'],
      status: 'Terminé',
      year: '2023'
    }
  ]

  const categories = [
    { id: 'all', name: 'Tous', icon: '🌟' },
    { id: 'web', name: 'Web', icon: '🌐' },
    { id: 'game', name: 'Jeux', icon: '🎮' },
    { id: 'desktop', name: 'Desktop', icon: '💻' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
            🚀 Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto rounded-full" />
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-full p-2 flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="glass-effect rounded-2xl overflow-hidden floating-card group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-50/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-neon-green text-dark-50 rounded-full text-sm font-semibold">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-neon-blue/20 text-neon-blue rounded text-xs">
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-neon-purple text-xs rounded-full border border-neon-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neon-green mb-2">Fonctionnalités :</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <span className="w-1 h-1 bg-neon-green rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 py-2 px-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 hover:scale-105">
                    Voir le projet
                  </button>
                  <button className="py-2 px-4 border border-neon-green text-neon-green rounded-lg text-sm font-medium hover:bg-neon-green hover:text-dark-50 transition-all duration-300">
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 