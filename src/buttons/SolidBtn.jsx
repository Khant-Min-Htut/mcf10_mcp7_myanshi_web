import React from 'react'

const SolidBtn = ({text,className   }) => {
  return (
    <button className={`bg-primary-color h-[72px] max-[400px]:h-[54px] w-[170px] gap-[10px] transition duration-300 hover:bg-[rgba(184,26,0,1)] ${className}`}>
    <span className="text-[16px] leading-[21.6px] font-[700] text-white font-satoshi w-[85px] h-[22px] uppercase">
      {text}
    </span>
  </button>
  )
}

export default SolidBtn