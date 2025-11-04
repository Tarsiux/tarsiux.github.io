import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-6 left-1/2 -translate-x-1/2
        w-[90%] md:w-auto
        px-8 py-1 rounded-2xl
        bg-[rgba(255,255,255,0.08)]
        border border-[rgba(255,255,255,0.15)]
        backdrop-blur-lg
        shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.4)]
        transition-all duration-300
        z-20
        flex items-center justify-between md:justify-center
      "
    >
      {/* Logo o Título (Opcional, visible en móvil) */}
      <div className="text-violeta font-mars text-lg md:hidden">
        <a href="#inicio" onClick={() => setIsOpen(false)}>Tarsiux</a>
      </div>

      {/* Contenedor de enlaces */}
      <div
        className={`
          md:flex md:items-center md:gap-8
          ${
            isOpen
              ? "flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-fondo2/95 gap-12"
              : "hidden"
          }
        `}
      >
        <a href="#inicio" onClick={() => setIsOpen(false)} className="text-white font-nasalization text-sm md:text-sm tracking-wide hover:text-amarillo transition-colors text-2xl">Inicio</a>
        <a href="#experiencia" onClick={() => setIsOpen(false)} className="text-white font-nasalization text-sm md:text-sm tracking-wide hover:text-amarillo transition-colors text-2xl">Experiencia</a>
        <a href="#proyectos" onClick={() => setIsOpen(false)} className="text-white font-nasalization text-sm md:text-sm tracking-wide hover:text-amarillo transition-colors text-2xl">Proyectos</a>
        <a href="#sobre-mi" onClick={() => setIsOpen(false)} className="text-white font-nasalization text-sm md:text-sm tracking-wide hover:text-amarillo transition-colors text-2xl">Sobre mí</a>
      </div>

      {/* Botón de Hamburguesa */}
      <div className="md:hidden z-20">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? (
            // Icono de 'X' para cerrar
            <svg className="w-8 h-8 text-violeta" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            // Icono de hamburguesa
            <svg className="w-8 h-8 text-violeta" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
