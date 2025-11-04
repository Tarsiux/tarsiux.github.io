import React from 'react'

export default function Space({ title, id }) {
  return (
    <div className="h-70 w-full flex justify-center items-center" id={id}>
      <div className="
        max-md:w-[75%] mx-md:h-15
        max-sm:w-[80%] max-sm:h-10
        w-[65%] h-20 
        flex justify-center items-center
        bg-fondo2
        backdrop-blur-2xl
        border border-violeta
        rounded-lg
        shadow-lg
        space-y-24">

        <h2 className="
        max-md:text-3xl
        max-sm:text-2xl
        font-mars text-4xl text-blanco1 z-10">{title}</h2>
      </div>
    </div>
  )
}