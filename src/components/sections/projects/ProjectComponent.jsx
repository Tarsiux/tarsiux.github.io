import React from "react";

export default function ProjectComponent({
  titulo,
  descripcion,
  imagen,
  tecnologias = [],
  githubUrl,
  infoUrl,
  destacado = false,
}) {
  return (
    <div className="group relative flex flex-col h-auto min-h-[320px] sm:h-[330px] overflow-hidden rounded-2xl border border-violeta/30 bg-fondo2/70 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-violeta/60 hover:shadow-lg hover:shadow-violeta/10">

      {/* Imagen */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={imagen}
          alt={titulo}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-gradient-to-t from-fondo2/80 via-fondo2/30 to-transparent" />

        {destacado && (
          <div className="absolute top-2 right-2 rounded-full bg-violeta/90 px-2.5 py-1 shadow-md sm:top-3 sm:right-3 sm:px-3">
            <span className="font-mars text-[11px] font-semibold text-blanco1 sm:text-xs">⭐ Destacado</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="font-mars text-sm sm:text-base md:text-lg font-bold text-blanco1 mb-1">
          {titulo}
        </h3>

        <p className="font-nasalization text-[11px] sm:text-xs text-blanco2 mb-3 flex-1 leading-relaxed line-clamp-3">
          {descripcion}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {tecnologias.map((tech, i) => (
            <span
              key={i}
              className="rounded-full border border-violeta/40 bg-violeta/15 px-2.5 py-0.5 text-[11px] font-semibold text-blanco1 font-nasalization"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex flex-col xs:flex-row gap-2 mt-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg border border-violeta/40 bg-violeta/20 px-3 py-1.5 text-xs font-mars text-blanco1 transition-all duration-200 hover:bg-violeta/50"
            >
              <svg className="w-3.5 h-3.5">
                <use xlinkHref="./images/ui/sprite.svg#github" />
              </svg>
              Código
            </a>
          )}
          {infoUrl && (
            <a
              href={infoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg border border-violeta/60 bg-violeta/70 px-3 py-1.5 text-xs font-mars font-bold text-blanco1 transition-all duration-200 hover:bg-violeta/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9.75h1.5M12 15.75v-3M12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5z" />
              </svg>
              Ver más
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
