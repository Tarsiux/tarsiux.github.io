import React, { useState } from 'react'

export default function ButtonMoreProject({ 
  texto = "Ver Más Proyectos", 
  onClick,
  className = "" 
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1000)
    if (onClick) onClick()
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden group
        bg-linear-gradient-to-r from-violeta via-cyan to-violeta
        bg-size-200 bg-pos-0
        hover:bg-pos-100
        transition-all duration-500 ease-out
        font-mars font-bold text-blanco1
        px-8 py-4 rounded-2xl
        shadow-2xl hover:shadow-cyan/40
        transform hover:scale-105
        border-2 border-cyan/30
        ${className}
        ${isAnimating ? 'animate-pulse' : ''}
      `}
      style={{
        backgroundSize: '200% 100%',
      }}
    >
      {/* Efecto de brillo */}
      <div className="absolute inset-0 bg-linear-gradient-to-r from-transparent via-blanco1/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Partículas animadas */}
      {isHovered && (
        <>
          <div className="absolute w-2 h-2 bg-cyan rounded-full top-1/4 left-1/4 animate-ping" />
          <div className="absolute w-1 h-1 bg-violeta rounded-full top-3/4 right-1/4 animate-ping" style={{ animationDelay: '0.3s' }} />
        </>
      )}

      {/* Texto con efecto */}
      <span className="relative z-10 flex items-center gap-2">
        {texto}
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>

      {/* Efecto de click */}
      {isAnimating && (
        <div className="absolute inset-0 bg-cyan rounded-2xl animate-ping opacity-40" />
      )}
    </button>
  )
}