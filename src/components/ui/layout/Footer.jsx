import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-fondo2 to-fondo border-t border-cyan/10">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violeta via-cyan to-amarillo"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          
          {/* Lado izquierdo - Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-gris font-mars text-lg mb-2">
              <span className="text-cyan font-semibold">Sergio Trujillo Jerez</span>
            </p>
            <p className="text-gris/70 text-sm">
              Desarrollando el futuro...
            </p>
          </div>

          {/* Centro - Mensaje especial */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 bg-fondo/80 px-6 py-3 rounded-2xl border border-violeta/30 shadow-lg">
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <span className="text-coral text-xl animate-bounce">💖</span>
                <span className="text-carne font-mars font-semibold">
                  Hecho con 
                  <span className="text-cyan ml-1">amor </span> 
                  y 
                  <span className="text-amarillo ml-1">café</span>
                </span>
                <span className="text-xl">☕</span>
              </div>
            </div>
            
            {/* Estado */}
            <div className="flex items-center gap-2 mt-3 text-gris/60 text-xs">
              <div className="w-1.5 h-1.5 bg-verde rounded-full animate-pulse"></div>
              <span className="font-mars">Disponible para nuevos proyectos</span>
            </div>
          </div>

          {/*Tecnología */}
          <div className="text-center lg:text-right">
            <p className="text-gris/70 text-sm font-mars mb-1">
              Construido con React & Tailwind
            </p>
            <p className="text-cyan/80 text-xs">
              Última actualización: 03/11/2025
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;