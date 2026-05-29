'use client'

import { useState } from 'react'
import Header from '../components/Header'
import { bilanData } from '../data/bilanData'

type TabType = 'positionnement' | 'experiences' | 'hardskills' | 'softskills' | 'reflexion'

export default function BilanBut3() {
  const [activeTab, setActiveTab] = useState<TabType>('positionnement')

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'positionnement', label: 'Positionnement', icon: '🎯' },
    { id: 'experiences', label: 'Expériences Pro', icon: '💼' },
    { id: 'hardskills', label: 'Hard Skills', icon: '⚡' },
    { id: 'softskills', label: 'Soft Skills', icon: '🧠' },
    { id: 'reflexion', label: 'Analyse Réflexive', icon: '🧘' },
  ]

  return (
    <main className="min-h-screen relative bg-brutal-white overflow-x-hidden min-w-0 pb-20">
      <Header />

      {/* Hero Header Section */}
      <section className="pt-32 pb-10 bg-brutal-white border-b-4 border-brutal-black">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="px-3.5 py-1.5 bg-brutal-accent text-brutal-white border-2 border-brutal-black text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[2px_2px_0_0_#0a0a0a] inline-block mb-4">
              Semestre 6 — BUT Informatique
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-brutal-black mb-4 font-brutal tracking-tight break-words">
              Bilan d'Évaluation de Communication
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-medium max-w-2xl mx-auto">
              Rapport d'analyse réflexive, d'expériences en entreprise et de bilan de compétences comportementales.
            </p>
          </div>
        </div>
      </section>

      {/* Main Tabbed Content Area */}
      <div className="container mx-auto px-4 sm:px-6 mt-8 sm:mt-12 max-w-7xl w-full min-w-0 overflow-hidden">
        <div className="grid lg:grid-cols-4 gap-6 sm:gap-8 items-start w-full min-w-0">
          
          {/* Left Navigation Menu (Desktop: Sticky Sidebar, Mobile: Horizontal Swipe) */}
          <div className="lg:col-span-1 lg:sticky lg:top-28 z-20 bg-brutal-white py-2 lg:py-0 min-w-0 w-full">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest px-2 mb-2 hidden lg:block">
              Sommaire
            </p>
            
            {/* Tab Container - Grid on Mobile/Tablet, Vertical Flex on Desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2.5 w-full">
              {tabs.map((tab, idx) => {
                const isActive = activeTab === tab.id
                // Le 5ème élément s'étend sur 2 colonnes sur mobile (car impair) et reprend 1 colonne sur tablette (sm)
                const isLast = idx === tabs.length - 1
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-3.5 font-bold border-4 border-brutal-black transition-all flex items-center justify-center lg:justify-start gap-2.5 text-center lg:text-left ${
                      isActive
                        ? 'bg-brutal-accent text-brutal-white shadow-[4px_4px_0_0_#0a0a0a] -translate-x-0.5 -translate-y-0.5'
                        : 'bg-brutal-white text-brutal-black hover:bg-neutral-100'
                    } ${isLast ? 'col-span-2 sm:col-span-1' : ''}`}
                  >
                    <span className="text-lg sm:text-xl shrink-0">{tab.icon}</span>
                    <span className="text-xs sm:text-sm lg:text-base leading-tight">{tab.label}</span>
                  </button>
                )
              })}
            </div>

            
            <a
              href="/"
              className="hidden lg:flex w-full mt-6 brutal-btn-outline px-4 py-3 text-center font-bold text-sm items-center justify-center gap-2"
            >
              ← Retour à l'accueil
            </a>
          </div>

          {/* Right Detailed Panel */}
          <div className="lg:col-span-3 min-w-0 w-full">

            {/* Mobile-only back button */}
            <div className="lg:hidden mb-6">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-brutal-black font-bold text-sm bg-brutal-white hover:bg-neutral-100 shadow-[2px_2px_0_0_#0a0a0a]"
              >
                ← Retour à l'accueil
              </a>
            </div>

            <div className="brutal-card bg-brutal-white p-5 sm:p-8 lg:p-10 border-4 border-brutal-black shadow-[8px_8px_0_0_#0a0a0a] min-h-[450px]">
              
              {/* === TAB 1: POSITIONNEMENT PROFESSIONNEL === */}
              {activeTab === 'positionnement' && (
                <div className="space-y-6 sm:space-y-8 animate-fadeIn">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brutal-black border-b-4 border-brutal-accent pb-2 inline-block">
                      {bilanData.introduction.title}
                    </h2>
                    <h3 className="text-lg sm:text-xl font-bold text-brutal-accent mt-4">
                      {bilanData.introduction.subTitle}
                    </h3>
                  </div>

                  <div className="space-y-6 text-base sm:text-lg leading-relaxed text-neutral-600">
                    <div className="border-l-4 border-l-brutal-accent pl-4 py-1">
                      <p className="font-medium text-brutal-black italic">
                        "{bilanData.introduction.bio}"
                      </p>
                    </div>

                    <div className="p-5 sm:p-6 bg-neutral-50 border-2 border-brutal-black">
                      <h4 className="font-extrabold text-brutal-black text-lg sm:text-xl mb-3 flex items-center gap-2">
                        📈 Évolution de Posture (Semestre 4 ➔ Semestre 6)
                      </h4>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        {bilanData.introduction.s4vsS6}
                      </p>
                    </div>

                    <div className="p-5 sm:p-6 bg-neutral-50 border-2 border-brutal-black border-dashed">
                      <h4 className="font-extrabold text-brutal-black text-lg sm:text-xl mb-3 flex items-center gap-2">
                        🚀 Mon projet professionnel à court et moyen terme
                      </h4>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        {bilanData.introduction.shortTermProject}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* === TAB 2: EXPÉRIENCES PROFESSIONNELLES === */}
              {activeTab === 'experiences' && (
                <div className="space-y-8 sm:space-y-10 animate-fadeIn">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brutal-black border-b-4 border-brutal-accent pb-2 inline-block">
                      Missions & Rôles en Entreprise
                    </h2>
                    <p className="text-sm sm:text-base text-neutral-500 mt-2">
                      Analyse détaillée de mes missions en contexte professionnel et de ma posture en situation réelle.
                    </p>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    {bilanData.experiences.map((exp, idx) => (
                      <div key={idx} className="p-5 sm:p-8 bg-neutral-50 border-4 border-brutal-black shadow-[6px_6px_0_0_#0a0a0a]">
                        
                        {/* Title Section (Responsively stacks on mobile, goes row on md) */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 border-b-2 border-brutal-black pb-4 mb-6">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-brutal-black">
                              {exp.company}
                              {exp.client && <span className="text-base sm:text-lg font-medium text-neutral-500 font-sans"> (pour {exp.client})</span>}
                            </h3>
                            <p className="text-base sm:text-lg font-bold text-brutal-accent mt-1">{exp.role}</p>
                          </div>
                          <div className="text-left md:text-right shrink-0">
                            <span className="px-3 py-1 bg-brutal-black text-brutal-white font-bold text-xs sm:text-sm border-2 border-brutal-black inline-block">
                              {exp.period}
                            </span>
                            <p className="text-xs text-neutral-500 font-bold mt-1">📍 {exp.location}</p>
                          </div>
                        </div>

                        <div className="space-y-6 text-sm sm:text-base text-neutral-600 leading-relaxed">
                          <div>
                            <h4 className="font-extrabold text-brutal-black mb-2 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider">
                              🔍 Contexte de l'organisation
                            </h4>
                            <p>{exp.context}</p>
                          </div>

                          <div>
                            <h4 className="font-extrabold text-brutal-black mb-2 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider">
                              🛠️ Missions confiées
                            </h4>
                            <ul className="space-y-2">
                              {exp.tasks.map((task, tIdx) => (
                                <li key={tIdx} className="flex items-start gap-2.5">
                                  <span className="w-2 h-2 bg-brutal-accent shrink-0 mt-2" />
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Autonomy & Interactions Grid */}
                          <div className="grid md:grid-cols-2 gap-6 pt-4 border-t-2 border-brutal-black/10">
                            <div>
                              <h4 className="font-extrabold text-brutal-black mb-2 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider">
                                🔑 Degré d'autonomie
                              </h4>
                              <p className="text-xs sm:text-sm bg-brutal-white p-3.5 border-2 border-brutal-black leading-relaxed">
                                {exp.autonomy}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-extrabold text-brutal-black mb-2 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider">
                                🤝 Interactions & Collectif
                              </h4>
                              <p className="text-xs sm:text-sm bg-brutal-white p-3.5 border-2 border-brutal-black leading-relaxed">
                                {exp.interactions}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* === TAB 3: HARD SKILLS CONTEXTUALISÉES === */}
              {activeTab === 'hardskills' && (
                <div className="space-y-6 sm:space-y-8 animate-fadeIn">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brutal-black border-b-4 border-brutal-accent pb-2 inline-block">
                      Compétences Techniques & Contextes
                    </h2>
                    <p className="text-sm sm:text-base text-neutral-500 mt-2">
                      Analyse concrète de mes compétences techniques, situées dans leur cadre d'utilisation professionnel ou académique.
                    </p>
                  </div>

                  <div className="grid gap-6">
                    {bilanData.hardSkills.map((skill, idx) => (
                      <div key={idx} className="p-5 bg-neutral-50 border-2 border-brutal-black hover:border-brutal-accent transition-colors">
                        
                        {/* Skill Header (Responsive Stack on Mobile) */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl">{skill.icon}</span>
                            <h3 className="text-lg sm:text-xl font-extrabold text-brutal-black">{skill.name}</h3>
                          </div>
                          <span className="self-start sm:self-auto px-3 py-1 bg-brutal-accent text-brutal-white border-2 border-brutal-black text-xs font-bold shadow-[2px_2px_0_0_#0a0a0a]">
                            Niveau : {skill.level}
                          </span>
                        </div>
                        
                        <div className="space-y-2 text-xs sm:text-sm">
                          <p className="text-neutral-500">
                            <strong className="text-brutal-black">Contexte :</strong> {skill.context}
                          </p>
                          <p className="text-neutral-600 leading-relaxed">
                            <strong className="text-brutal-black">Ce que je sais faire concrètement :</strong> {skill.concrete}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* === TAB 4: COMPÉTENCES COMPORTEMENTALES (SOFT SKILLS) === */}
              {activeTab === 'softskills' && (
                <div className="space-y-8 animate-fadeIn">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brutal-black border-b-4 border-brutal-accent pb-2 inline-block">
                      Analyse des Compétences Comportementales
                    </h2>
                    <p className="text-sm sm:text-base text-neutral-500 mt-2">
                      Application des référentiels de communication de BUT3 (méthode d'analyse réflexive illustrée par des faits).
                    </p>
                  </div>

                  <div className="space-y-12">
                    {/* 1. Manière d'être */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-brutal-white bg-brutal-black px-4 py-2 inline-block mb-6 uppercase tracking-wider border-2 border-brutal-black shadow-[4px_4px_0_0_#dc2626]">
                        🔹 Manière d'être
                      </h3>
                      <div className="grid gap-6">
                        {bilanData.softSkills.being.map((skill, idx) => (
                          <SoftSkillCard key={idx} skill={skill} />
                        ))}
                      </div>
                    </div>

                    {/* 2. Manière de communiquer */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-brutal-white bg-brutal-black px-4 py-2 inline-block mb-6 uppercase tracking-wider border-2 border-brutal-black shadow-[4px_4px_0_0_#dc2626]">
                        🔹 Manière de communiquer
                      </h3>
                      <div className="grid gap-6">
                        {bilanData.softSkills.communicating.map((skill, idx) => (
                          <SoftSkillCard key={idx} skill={skill} />
                        ))}
                      </div>
                    </div>

                    {/* 3. Manière de travailler avec les autres */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-brutal-white bg-brutal-black px-4 py-2 inline-block mb-6 uppercase tracking-wider border-2 border-brutal-black shadow-[4px_4px_0_0_#dc2626]">
                        🔹 Manière de travailler avec les autres
                      </h3>
                      <div className="grid gap-6">
                        {bilanData.softSkills.workingWithOthers.map((skill, idx) => (
                          <SoftSkillCard key={idx} skill={skill} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* === TAB 5: ANALYSE RÉFLEXIVE === */}
              {activeTab === 'reflexion' && (
                <div className="space-y-6 sm:space-y-8 animate-fadeIn">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brutal-black border-b-4 border-brutal-accent pb-2 inline-block">
                      Analyse Réflexive & Conscience de Soi
                    </h2>
                    <p className="text-sm sm:text-base text-neutral-500 mt-2">
                      Recul sur mon fonctionnement personnel, forces et axes d'amélioration en situation réelle.
                    </p>
                  </div>

                  <div className="space-y-6 sm:space-y-8 text-sm sm:text-base leading-relaxed text-neutral-600">
                    <div className="p-5 sm:p-6 bg-neutral-50 border-4 border-brutal-black">
                      <h3 className="text-lg sm:text-xl font-extrabold text-brutal-black mb-3 flex items-center gap-2">
                        🧠 Ce que le milieu professionnel m'a appris sur moi-même
                      </h3>
                      <p>{bilanData.reflexion.selfAwareness}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-5 sm:p-6 bg-green-50 border-2 border-brutal-black">
                        <h3 className="text-base sm:text-lg font-extrabold text-green-800 mb-4 flex items-center gap-2">
                          💪 Points forts identifiés en situation réelle
                        </h3>
                        <ul className="space-y-3">
                          {bilanData.reflexion.strengths.map((str, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-neutral-700 text-xs sm:text-sm">
                              <span className="text-green-600 font-extrabold">✓</span>
                              <span>{str}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5 sm:p-6 bg-amber-50 border-2 border-brutal-black">
                        <h3 className="text-base sm:text-lg font-extrabold text-amber-800 mb-4 flex items-center gap-2">
                          ⚙️ Axes de progrès identifiés
                        </h3>
                        <ul className="space-y-3">
                          {bilanData.reflexion.improvements.map((imp, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-neutral-700 text-xs sm:text-sm">
                              <span className="text-amber-600 font-extrabold">→</span>
                              <span>{imp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 bg-neutral-50 border-2 border-brutal-black border-dashed">
                      <h3 className="text-lg sm:text-xl font-extrabold text-brutal-black mb-3 flex items-center gap-2">
                        🎓 Besoins d'évolution pour continuer à grandir
                      </h3>
                      <p>{bilanData.reflexion.evolutionNeeds}</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

function SoftSkillCard({ skill }: { skill: typeof bilanData.softSkills.being[0] }) {
  return (
    <div className="p-5 sm:p-6 lg:p-8 bg-neutral-50 border-2 border-brutal-black shadow-[4px_4px_0_0_#0a0a0a]">
      <div className="flex items-center gap-3 border-b border-neutral-300 pb-3 mb-4">
        <span className="text-2xl sm:text-3xl">{skill.icon}</span>
        <div>
          <h4 className="text-lg sm:text-xl font-extrabold text-brutal-black">{skill.title}</h4>
          <p className="text-[10px] sm:text-xs text-neutral-500 font-medium mt-0.5">{skill.definition}</p>
        </div>
      </div>
      <div className="space-y-4 text-xs sm:text-sm text-neutral-600">
        <div>
          <strong className="text-brutal-black block mb-1">🎭 Situation professionnelle concrète (Faits) :</strong>
          <p className="italic bg-brutal-white p-3 border border-neutral-300 text-neutral-600 leading-relaxed">
            "{skill.situation}"
          </p>
        </div>
        <div>
          <strong className="text-brutal-black block mb-1">🧠 Analyse réflexive & Fonctionnement personnel :</strong>
          <p className="leading-relaxed">
            {skill.analysis}
          </p>
        </div>
      </div>
    </div>
  )
}
