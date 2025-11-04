import React from 'react'

export default function Background() {
  return (
    <div
      className="
        absolute inset-0 -z-10 h-full w-full
        [background:radial-gradient(125%_125%_at_50%_10%,#1E1E2E_40%,#63e_100%)]
      "
    />
  )
}
