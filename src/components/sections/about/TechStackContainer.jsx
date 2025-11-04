import React from 'react';

const TechStackContainer = ({ title = "Mi Stack Tecnológico", children }) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 font-nasalization text-violeta tracking-wide">
        {title}
      </h2>

      {/* Grid centrado */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 w-full">
        {children}
      </div>
    </div>
  );
};

export default TechStackContainer;
