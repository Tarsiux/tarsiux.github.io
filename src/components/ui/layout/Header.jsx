import React from "react";
import CVButton from "../buttons/CVButton";
import SocialButton from "../buttons/SocialButton";
import Label from "../common/Label";

export default function Header() {
  return (
    <header
      className="
        w-screen h-screen 
        flex justify-center items-center
        relative overflow-hidden
      "
      id="inicio"
    >
      {/* Contenedor principal */}
      <div
        className="
          max-lg:w-[80%] max-lg:h-[50%]
          max-md:w-[80%] max-md:h-[60%]
          max-sm:w-[95%] max-sm:h-[60%]
          w-[65%] h-[50%]
          bg-fondo2 rounded-4xl  
          flex justify-center items-center      
          border-[rgba(255,255,255,0.08)] backdrop-blur-md 
          shadow-[inset_1px_1px_2px_rgba(255,255,255,0.05),inset_-2px_-2px_5px_rgba(0,0,0,0.4),0_4px_20px_rgba(0,0,0,0.4)]
          animate-fade-in
        ">

          {/* Contenedor interior */}
        <div
          className="
            max-lg:w-[95%] max-lg:h-[90%]
            max-md:w-[92%] max-md:h-[88%]
            max-sm:w-[90%] max-sm:h-[89%]
            w-[95%] h-[90%]
            bg-fondo2 rounded-2xl 
            shadow-[inset_5px_5px_0px_#222231,inset_-5px_-5px_0px_#323247]
            flex justify-center items-center flex-row
          ">
          {/* Sección izquierda */}
          <section
            className="
              max-md:gap-5 max-md:items-center
              flex flex-col items-start m-10 p-5 
              animate-slide-in-left
            ">
            <h3 className="
            max-md:text-1xl
            max-sm:text-xl
            font-mars text-2xl text-blanco1 pb-1 opacity-0 animate-fade-up animation-delay-100">
              Hola, soy
            </h3>

            <h1 className="
            max-md:text-5xl max-md:-ml-2
            max-sm:text-4xl
            font-mars text-8xl text-blanco1 -ml-4 pb-1 opacity-0 animate-fade-up animation-delay-200">
              Tarsiux
            </h1>

            <h2 className="
            max-md:1xl max-md:text-center
            max-sm:text-xl
            font-nasalization text-2xl text-amarillo pb-1 opacity-0 animate-fade-up animation-delay-300">
              Desarrollador de Aplicaciones Multiplataforma | Junior
            </h2>

            <div
              className="
                mt-4 flex flex-col md:flex-row items-center justify-center gap-4
                opacity-0 animate-fade-up animation-delay-400
              ">
              <div className="flex flex-row items-center gap-4">
                <CVButton />
                <SocialButton href={'https://github.com/Tarsiux'} iconId={'github'} />
                <SocialButton href={'https://www.linkedin.com/in/sergio-trujillo-jerez-09b55b378/'} iconId={'linkedin'} />
              </div>
              <Label />
            </div>
          </section>

        </div>
      </div>

      {/* Flecha animada */}
      <div
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          size-10
          rounded-full border border-fondo2
          bg-fondo2 backdrop-blur-md
          flex items-center justify-center
          shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_1px_1px_2px_rgba(255,255,255,0.1)]
          opacity-0 animate-fade-up animation-delay-700
        "
      >
        <svg className="size-8 text-white animate-float">
          <use xlinkHref="./images/ui/sprite.svg#arrow-down" />
        </svg>
      </div>
    </header>
  );
}
