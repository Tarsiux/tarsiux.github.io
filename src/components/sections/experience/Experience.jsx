import React from 'react'
import ExperienceComponent from './ExperienceComponent'

export default function Experience() {
  return (
    <div className='w-full flex justify-center items-center'>
    <section className='
    max-md:w-[75%]
    w-[65%] gap-1'>
      <ExperienceComponent
          titulo="Practicas"
          empresa="Unidad Técnica - Universidad de Granada"
          periodo="Marzo 2025 - Junio 2025"
          descripcion="Desarrollé interfaces intuitivas para la gestión de incidencias. 
          Gestioné la actualización y creación de activos. 
          Mantenimiento y optimización de Base de datos. Purga de datos históricos masivos para mejorar rendimiento y eficiencia."
          tecnologias={[]}
          imagen="./images/experience/ugr.jpg"
      /> 

    </section>
    </div>
  )
} 
