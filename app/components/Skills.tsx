'use client'

const Skills = () => {
  const skills = [
    { name: 'Java', icon: '☕', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'TypeScript', icon: '🔷', level: 85, color: 'from-blue-500 to-indigo-500' },
    { name: 'React/Next.js', icon: '⚛️', level: 88, color: 'from-cyan-500 to-blue-500' },
    { name: 'Angular', icon: '🅰️', level: 82, color: 'from-red-500 to-pink-500' },
    { name: 'Node.js', icon: '🟢', level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'PostgreSQL', icon: '🐘', level: 85, color: 'from-blue-600 to-indigo-600' },
    { name: 'Docker', icon: '🐳', level: 75, color: 'from-blue-400 to-cyan-400' },
    { name: 'Git/GitLab', icon: '🦊', level: 90, color: 'from-orange-600 to-red-600' },
  ]

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Docker', icon: '📮' },
    { name: 'IntelliJ', icon: '🧠' },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <span>💪</span>
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-neon-blue">🚀 Technologies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6 floating-card group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg font-semibold text-white">{skill.name}</span>
                    </div>
                    <span className="text-neon-blue font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-3 bg-dark-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-${index * 100}`}
                      style={{ width: `${skill.level}%` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-neon-green">🛠️ Outils</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6 text-center floating-card group hover:bg-gradient-to-r hover:from-neon-green/10 hover:to-neon-blue/10 transition-all duration-300">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <p className="text-lg font-semibold text-white">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-neon-pink">✨ Qualités</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Créativité', icon: '🎯', description: 'Approche innovante des problèmes' },
                { title: 'Apprentissage', icon: '📚', description: 'Soif constante de nouvelles connaissances' },
                { title: 'Collaboration', icon: '🤝', description: 'Travail d\'équipe et communication' },
              ].map((quality, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8 text-center floating-card hover:bg-gradient-to-r hover:from-neon-pink/10 hover:to-neon-purple/10 transition-all duration-300">
                  <div className="text-4xl mb-4">{quality.icon}</div>
                  <h4 className="text-xl font-bold text-neon-pink mb-3">{quality.title}</h4>
                  <p className="text-gray-300">{quality.description}</p>
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