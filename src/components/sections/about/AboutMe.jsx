import React from 'react';
import CVButton from '../../ui/buttons/CVButton';
import SocialButton from '../../ui/buttons/SocialButton';

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Encabezado con efecto especial */}
        <div className="text-center mb-20 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-violeta/10 rounded-full blur-3xl"></div>
          <h2 className="text-5xl md:text-6xl font-bold font-nasalization text-violeta  relative">
            SOBRE <span className="text-cyan">MÍ</span>
          </h2>
          <div className="w-32 h-1 bg-linear-gradient-to-r from-violeta to-cyan mx-auto rounded-full shadow-lg shadow-cyan/30"></div>
        </div>

        {/* Contenido Principal */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
          
          {/* Sección de Imagen Mejorada */}
          <div className="shrink-0 w-full max-w-xs md:max-w-sm lg:w-1/3 relative">
            <div className="relative group perspective-1000">
              {/* Efecto de fondo animado */}
              <div className="absolute -inset-6 bg-linear-gradient-to-br from-violeta/30 via-cyan/20 to-amarillo/10 rounded-3xl opacity-60 group-hover:opacity-80 transition-all duration-500 blur-xl animate-pulse-slow"></div>
              
              {/* Marco con gradiente */}
              <div className="relative rounded-3xl transform group-hover:rotate-y-12 transition-transform duration-700">
                <div className="relative bg-violeta rounded-2xl p-1 overflow-hidden">
                  <img
                    src="./images/profile/perfil.jpg"
                    alt="Foto de perfil - Desarrollador"
                    className="w-full h-auto rounded-2xl object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay con efecto de partículas */}
                  <div className="absolute inset-0  via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Efecto de brillo en esquinas */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-cyan/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-violeta/20 rounded-full blur-2xl translate-x-1/2 translate-y-1/2"></div>
                </div>
              </div>

              {/* Elementos decorativos flotantes */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amarillo rounded-full animate-bounce delay-300"></div>
            </div>
          </div>

          {/* Sección de Texto */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-8">
              
              {/* Título principal con badge */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                <h3 className="text-3xl md:text-4xl font-bold font-nasalization text-amarillo leading-tight">
                  Desarrollador de Aplicaciones Multiplataforma Junior
                </h3>
              </div>

              {/* Contenido de texto con jerarquía */}
              <div className="space-y-6 text-gris/90 text-base md:text-lg leading-relaxed">
                
                <div className="relative pl-6 border-l-2 border-cyan/30">
                  <p className="text-gris">
                    <span className="text-cyan font-semibold">¡Hola 👋</span>, soy Sergio! Terminé mis estudios como Desarrollador de
                    Aplicaciones Multiplataforma <span className="text-cyan font-semibold">(DAM)</span>. Me encanta utilizar mis
                    conocimientos para resolver problemas reales del día a día.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-violeta/30">
                  <p>
                    Entre mis éxitos destaco que durante el Grado Superior, ayudé a mis
                    compañeros a aprender sobre Patrones de Diseño. También destacar el
                    Proyecto de Fin de Grado.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-amarillo/30">
                  <p>
                    Además, mantengo mis habilidades siempre afiladas a través de la
                    participación en Hackatones y Bootcamps, donde disfruto poniendo a
                    prueba mis habilidades y conocimientos para resolver problemas y
                    enfrentarme a nuevos retos.
                  </p>
                </div>
              </div>

              {/* Botones */}
              <div className="flex items-center justify-start gap-6 pt-8">
                
                  <CVButton />
                <SocialButton 
                    href={'https://github.com/Tarsiux'} 
                    iconId={'github'} 
                    className="transform hover:scale-110 hover:shadow-lg transition-all duration-300"
                />
                <SocialButton 
                    href={'https://www.linkedin.com/in/sergio-trujillo-jerez-09b55b378/'} 
                    iconId={'linkedin'} 
                    className="transform hover:scale-110 hover:shadow-lg transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;