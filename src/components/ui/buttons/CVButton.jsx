import React from "react";

export default function CVButton() {
  return (
    <a href="./documents/cv.pdf" download>
      <button
        className="
          relative w-44 h-10 flex items-center justify-start
          border-2 border-amarillo
          bg-fondo1 rounded-2xl overflow-hidden cursor-pointer
          transition-all duration-300 ease-in-out
          active:translate-x-1 active:translate-y-1 active:shadow-none
          group
        ">
        <span
          className="
            text-amarillo font-semibold ml-5
            transition-all duration-300 ease-in-out group-hover:text-transparent
          ">
          Descargar CV
        </span>

        <span
          className="
            absolute right-0 top-0 h-full w-10 bg-amarillo
            flex items-center justify-center
            transition-all duration-300 ease-in-out
            group-hover:w-full
          ">
          <svg
            className="
              w-5 h-5 text-fondo1 transition-all duration-300
              group-hover:text-fondo1
            ">
            <use xlinkHref='./images/ui/sprite.svg#download' />
          </svg>
        </span>
      </button>
    </a>
  );
}
