import React from 'react'

const SecondaryHeader = ({children , className}) => {
  return (
    <h1 className={` text-heading1 max-sm:text-heading3_500 font-notoSerifJp text-neutral-800 ${className}`}>
      {children}
    </h1>
  )
}

export default SecondaryHeader