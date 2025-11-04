import React from "react";

export default function SocialButton({ href, iconId }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center justify-center
        w-10 h-10 rounded-full border-2 border-amarillo
        bg-fondo1 text-amarillo
        transition-all duration-200 ease-in-out
        active:translate-x-1 active:translate-y-1 active:shadow-none
      "
    >
      <svg className="w-5 h-5">
        <use xlinkHref={`./images/ui/sprite.svg#${iconId}`} />
      </svg>
    </a>
  );
}
