import React, { useRef, useState, useEffect } from 'react'
import ProjectComponent from './ProjectComponent'

export default function Projects() {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const proyectos = [
    {
      titulo: "NyxShade",
      descripcion: "NyxShade es una aplicación para crear copias de seguridad en un RAID 1 con dos USBs. Sincroniza carpetas y archivos de manera automática y segura mediante cifrado. Permitiendo la recuperación completa o parcial de los datos.",
      imagen: "./images/ui/fondo.svg",
      tecnologias: ["Python", "PyQt5"],
      githubUrl: "https://www.google.es",
      infoUrl: "https://www.google.es",
      destacado: true,
    },
  ];

  useEffect(() => {
    setShowArrows(proyectos.length > 1);
  }, [proyectos.length]);

  const scroll = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prev) => (prev === 0 ? proyectos.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === proyectos.length - 1 ? 0 : prev + 1));
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    // Para evitar el scroll vertical de la página mientras se desliza horizontalmente
    if (Math.abs(diff) > 10) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const endTouch = e.changedTouches[0].clientX;
    const diff = touchStart - endTouch;

    if (diff > 50) { // Swipe a la izquierda
      scroll('right');
    } else if (diff < -50) { // Swipe a la derecha
      scroll('left');
    }
    setTouchStart(null);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <section 
        className="max-sm:w-full w-[75%] lg:w-[65%] flex justify-center items-center relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        {/* Flecha izquierda */}
        {showArrows && (
          <button
            onClick={() => scroll('left')}
            className="hidden sm:block absolute left-6 md:left-8 bg-fondo2/90 hover:bg-fondo2 border border-violeta/50 text-violeta p-1.5 sm:p-2.5 rounded-full shadow-lg hover:shadow-violeta/30 transition-all z-10 top-1/2 -translate-y-1/2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Contenedor de tarjetas */}
        <div
          ref={scrollRef}
          className="relative w-full flex justify-center items-center transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] w-full">
            {proyectos.map((p, i) => (
              <div
                key={i}
                className="shrink-0 w-full flex justify-center items-center"
              >
                <div className="w-[80%] sm:w-[70%] md:w-[55%] lg:w-[50%]">
                  <ProjectComponent {...p} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flecha derecha */}
        {showArrows && (
          <button
            onClick={() => scroll('right')}
            className="hidden sm:block absolute right-6 md:right-8 bg-fondo2/90 hover:bg-fondo2 border border-violeta/50 text-violeta p-1.5 sm:p-2.5 rounded-full shadow-lg hover:shadow-violeta/30 transition-all z-10 top-1/2 -translate-y-1/2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </section>

      {/* Puntos de navegación para móvil */}
      <div className="sm:hidden flex justify-center gap-3 mt-6">
        {proyectos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out ${
              currentIndex === i ? 'bg-violeta scale-125 shadow-md shadow-violeta/50' : 'bg-violeta/30'
            }`}
            aria-label={`Ir al proyecto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
