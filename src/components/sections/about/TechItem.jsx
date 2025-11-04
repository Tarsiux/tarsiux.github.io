import React from 'react';

const TechItem = ({ 
  name, 
  icon, 
  color = 'violeta',
  className = '',
  onClick 
}) => {
  const colorClasses = {
    violeta: 'text-violeta hover:bg-violeta/10 border-violeta/30 hover:border-violeta/60',
    carne: 'text-carne hover:bg-carne/10 border-carne/30 hover:border-carne/60',
    cyan: 'text-cyan hover:bg-cyan/10 border-cyan/30 hover:border-cyan/60',
    amarillo: 'text-amarillo hover:bg-amarillo/10 border-amarillo/30 hover:border-amarillo/60',
    coral: 'text-coral hover:bg-coral/10 border-coral/30 hover:border-coral/60',
    verde: 'text-verde hover:bg-verde/10 border-verde/30 hover:border-verde/60',
    gris: 'text-gris hover:bg-gris/10 border-gris/30 hover:border-gris/60'
  };

  return (
    <div
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center text-center
        w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
        rounded-xl border bg-fondo/60 backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-md cursor-pointer
        ${colorClasses[color]} ${className}
      `}
    >
      {/* Icono */}
      <svg className="w-9 h-9 sm:w-10 sm:h-10 mb-2 shrink-0">
        <use xlinkHref={`./images/ui/sprite.svg#${icon}`} />
      </svg>

      {/* Nombre */}
      <span className="text-[11px] sm:text-sm md:text-base font-medium font-nasalization leading-tight text-center warp-break-words max-w-[90%]">
        {name}
      </span>
    </div>
  );
};

export default TechItem;
