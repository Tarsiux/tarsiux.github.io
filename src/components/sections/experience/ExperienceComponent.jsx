import React from 'react'

export default function Site({ 
  titulo, 
  empresa, 
  periodo, 
  descripcion, 
  tecnologias = [], 
  imagen 
}) {
  return (
    <div className="
    w-full bg-fondo2/50 backdrop-blur-lg border border-violeta/20 rounded-2xl p-4 sm:p-6 mb-6 hover:border-violeta/40 transition-all duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
        {imagen && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-fondo2 border border-violeta/30 flex items-center justify-center shrink-0">
            <img 
              src={imagen} 
              alt={empresa}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg"
            />
          </div>
        )}
        
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-baseline gap-x-3 gap-y-2 mb-2">
            <h3 className="font-nasalization text-lg sm:text-xl text-blanco1 font-bold">
              {titulo}
            </h3>
            <span className="font-nasalization text-cyan text-xs sm:text-sm bg-cyan/10 px-2 py-1 rounded-full">
              {periodo}
            </span>
          </div>
          <p className="font-nasalization text-base sm:text-lg text-violeta">
            {empresa}
          </p>
        </div>
      </div>

      {/* Descripción */}
      <p className="font-nasalization text-sm sm:text-base text-blanco2 mb-4 leading-relaxed text-center sm:text-left">
        {descripcion}
      </p>

      {/* Tecnologías */}
      {tecnologias.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {tecnologias.map((tech, index) => (
            <span 
              key={index}
              className="font-mars text-blanco1 bg-violeta/10 border border-violeta/30 px-3 py-1 rounded-full text-sm hover:bg-violeta/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}