'use client'

const Skills = () => {
  const skills = [
    { name: 'Java', icon: '☕', level: 90 },
    { name: 'TypeScript', icon: '🔷', level: 88 },
    { name: 'React / Next.js', icon: '⚛️', level: 88 },
    { name: 'Angular', icon: '🅰️', level: 82 },
    { name: 'Node.js', icon: '🟢', level: 85 },
    { name: 'Spring Boot', icon: '🍃', level: 85 },
    { name: 'Rust', icon: '🦀', level: 78 },
    { name: 'PostgreSQL', icon: '🐘', level: 85 },
    { name: 'Tailwind CSS', icon: '🎨', level: 88 },
    { name: 'React Native', icon: '📱', level: 80 },
    { name: 'Docker', icon: '🐳', level: 78 },
    { name: 'Git / GitLab', icon: '🦊', level: 90 },
  ]

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Maven', icon: '📦' },
    { name: 'Docker', icon: '🐳' },
    { name: 'IntelliJ', icon: '🧠' },
    { name: 'Supabase', icon: '🗄️' },
    { name: 'Vercel', icon: '▲' },
  ]

  return (
    <section id="skills" className="py-20 bg-brutal-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-2xl sm:text-3xl md:text-5xl mb-4">
            <span className="accent-underline inline-block">Compétences</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-brutal-black">Technologies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="brutal-card rounded-none p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg font-bold text-brutal-black">{skill.name}</span>
                    </div>
                    <span className="font-bold text-brutal-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 border-2 border-brutal-black bg-brutal-white overflow-hidden">
                    <div
                      className="h-full bg-brutal-accent"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-brutal-black">Outils</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="brutal-card rounded-none p-6 text-center hover:bg-brutal-accent transition-colors group"
                >
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <p className="font-bold text-brutal-black group-hover:text-brutal-white">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-brutal-black">Qualités</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Créativité', icon: '🎯', description: 'Approche innovante des problèmes' },
                { title: 'Apprentissage', icon: '📚', description: 'Soif constante de nouvelles connaissances' },
                { title: 'Collaboration', icon: '🤝', description: 'Travail d\'équipe et communication' },
              ].map((quality, index) => (
                <div key={index} className="brutal-card rounded-none p-8 text-center">
                  <div className="text-4xl mb-4">{quality.icon}</div>
                  <h4 className="text-xl font-bold text-brutal-accent mb-3">{quality.title}</h4>
                  <p className="text-neutral-600">{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
