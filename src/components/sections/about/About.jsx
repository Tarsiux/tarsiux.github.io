import React, { useState } from 'react'
import TechItem from './TechItem'
import AboutMe from './AboutMe'

export default function About() {
  const [activeTab, setActiveTab] = useState('web')

  const stacks = {
    java: [
      { name: 'Java', icon: 'java-logo' },
      { name: 'JavaFx', icon: 'java-logo' },
      { name: 'JPA', icon: 'java-logo' },
      { name: 'Spring Boot', icon: 'spring-boot' }
    ],
    mobile: [
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Jetpack Compose', icon: 'jetpackcompose' }
    ],
    web: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TailwindCSS', icon: 'tailwindcss' },
      { name: 'React', icon: 'react' }
    ],
    db: [
      { name: 'SQL', icon: 'sql' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'MariaDB', icon: 'mariadb' },
      { name: 'MySQL', icon: 'mysql' },
    ],
    others: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github-2' },
      { name: 'Docker', icon: 'docker' }
    ]
  }

  const tabs = [
    { id: 'java', label: 'Java' },
    { id: 'mobile', label: 'Móvil' },
    { id: 'web', label: 'Web' },
    { id: 'db', label: 'DB' },
    { id: 'others', label: 'Otros' }
  ]

  return (
    <section className="w-full flex flex-col items-center">
      {/* Título principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-violeta font-nasalization mb-10 text-center">
        Mi Stack Tecnológico
      </h2>

      {/* Tabs de categorías */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 rounded-full font-mars text-sm md:text-base transition-all duration-300 border
              ${
                activeTab === tab.id
                  ? 'bg-violeta text-fondo border-violeta shadow-md'
                  : 'border-violeta/40 text-violeta hover:bg-violeta/10 hover:shadow-sm'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid dinámico y compacto */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 w-[90%] md:w-[65%]">
        {stacks[activeTab].map((tech, idx) => (
          <TechItem
            key={idx}
            name={tech.name}
            icon={tech.icon}
            color="violeta"
          />
        ))}
      </div>

      {/* Sección Sobre Mí */}
      <AboutMe />
    </section>
  )
}
