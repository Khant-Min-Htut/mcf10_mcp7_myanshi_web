import React from 'react'

const SecondaryHeader = ({children}) => {
  return (
    <h1 className=" text-heading1 max-[400px]:text-heading3_500 font-notoSerifJp text-neutral-800">
      {children}
    </h1>
  )
}

export default SecondaryHeader