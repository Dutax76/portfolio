'use client'

import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { projects, categories, type Project, type ProjectCategory } from '@/app/data/projectsData'

const categoryEmoji: Record<string, string> = {
  web: '🌐',
  game: '🎮',
  desktop: '💻',
  mobile: '📱',
  system: '⚙️',
}

const ProjectCard = ({
  project,
  index,
  onSelect,
}: {
  project: Project
  index: number
  onSelect: () => void
}) => {
  const emoji = categoryEmoji[project.category] ?? '🚀'
  const hasImage = project.image != null && project.image.length > 0

  return (
    <button
      type="button"
      onClick={onSelect}
      className="brutal-card rounded-none overflow-hidden text-left w-full focus:outline-none focus-visible:ring-4 focus-visible:ring-brutal-accent border-4 border-brutal-black"
      aria-label={`Voir les détails du projet ${project.title}`}
    >
      <div className="relative h-48 overflow-hidden border-b-4 border-brutal-black">
        {hasImage ? (
          <img
            src={project.image!}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center bg-neutral-200"
            aria-hidden
          >
            <span className="text-6xl" role="img">{emoji}</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-brutal-accent text-brutal-white border-2 border-brutal-black text-sm font-bold">
            {project.year}
          </span>
        </div>
      </div>
      <div className="p-6 bg-brutal-white">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-brutal-black pr-2">
            {project.title}
          </h3>
          <span className="px-2 py-1 border-2 border-brutal-black text-brutal-black text-xs font-bold shrink-0">
            {project.status}
          </span>
        </div>
        <p className="text-neutral-600 mb-4 text-sm leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 border-2 border-brutal-black text-brutal-black text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 text-neutral-500 text-xs">+{project.technologies.length - 5}</span>
          )}
        </div>
        <p className="mt-3 text-brutal-accent text-sm font-bold">
          Voir les détails →
        </p>
      </div>
    </button>
  )
}

const ProjectDetailModal = ({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const emoji = categoryEmoji[project.category] ?? '🚀'
  const hasImage = project.image != null && project.image.length > 0

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 animate-fadeIn"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
    >
      <div
        className="bg-brutal-white border-4 border-brutal-black shadow-[8px_8px_0_0_#0a0a0a] max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-40 shrink-0 overflow-hidden border-b-4 border-brutal-black">
          {hasImage ? (
            <img src={project.image!} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-neutral-200">
              <span className="text-7xl" role="img">{emoji}</span>
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 w-10 h-10 border-4 border-brutal-black bg-brutal-white font-bold text-xl hover:bg-brutal-black hover:text-brutal-white transition-colors"
            aria-label="Fermer"
          >
            ×
          </button>
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 flex-wrap">
            <span className="px-3 py-1 bg-brutal-accent text-brutal-white border-2 border-brutal-black text-sm font-bold">
              {project.year}
            </span>
            <span className="px-3 py-1 bg-brutal-black text-brutal-white text-sm font-bold">
              {project.status}
            </span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          <div>
            <h2 id="project-detail-title" className="text-2xl font-bold text-brutal-black mb-1">
              {project.title}
            </h2>
            {project.context && (
              <p className="text-brutal-accent text-sm font-bold">{project.context}</p>
            )}
            {project.authors && project.authors.length > 0 && (
              <p className="text-neutral-600 text-sm mt-1">Avec : {project.authors.join(', ')}</p>
            )}
          </div>
          {project.longDescription && (
            <div>
              <h3 className="text-sm font-bold text-brutal-black mb-2 uppercase tracking-wide border-b-2 border-brutal-accent pb-1">
                Présentation
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>
          )}
          <div>
            <h3 className="text-sm font-bold text-brutal-black mb-2 uppercase tracking-wide border-b-2 border-brutal-accent pb-1">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 border-2 border-brutal-black text-brutal-black text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-brutal-black mb-2 uppercase tracking-wide border-b-2 border-brutal-accent pb-1">
              Fonctionnalités
            </h3>
            <ul className="text-neutral-600 text-sm space-y-1">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brutal-accent shrink-0 mt-1.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-brutal-black mb-2 uppercase tracking-wide border-b-2 border-brutal-accent pb-1">
                Points forts
              </h3>
              <ul className="text-neutral-600 text-sm space-y-1">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brutal-accent">★</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-brutal-black mb-2 uppercase tracking-wide border-b-2 border-brutal-accent pb-1">
                Défis relevés
              </h3>
              <ul className="text-neutral-600 text-sm space-y-1">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brutal-accent">→</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.links && project.links.length > 0 && (
            <div className="pt-2">
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn px-4 py-2 text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  if (!mounted) return null

  return createPortal(modalContent, document.body)
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = (
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)
  ).sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <section id="projects" className="py-20 bg-brutal-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            <span className="accent-underline inline-block">Mes Projets</span>
          </h2>
        </div>

        <div className="flex justify-center mb-12 px-4">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 font-bold text-sm sm:text-base whitespace-nowrap border-4 border-brutal-black transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-brutal-accent text-brutal-white shadow-[4px_4px_0_0_#0a0a0a]'
                    : 'bg-brutal-white text-brutal-black hover:bg-neutral-100'
                }`}
              >
                <span>{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal de détail */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects
