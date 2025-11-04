import React from 'react'
import Space from '../common/Space'
import Experience from '../../sections/experience/Experience'
import Projects from '../../sections/projects/Projects'
import About from '../../sections/about/About'


export default function Main() {
  return (
    <main>
        <Space title="Experiencia" id="experiencia"/>
        <Experience/>
        <Space title="Proyectos" id="proyectos"/>
        <Projects />
        <Space title="Sobre mi" id="sobre-mi"/>
        <About />

    </main>
  )
}
