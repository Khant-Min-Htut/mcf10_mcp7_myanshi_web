import React from 'react'

const EditImg = ({img}) => {
  return (
    <>
        <img className=' w-[328px] h-[328px] object-contain rounded-lg' src={img} alt="" />
    </>
  )
}

export default EditImg