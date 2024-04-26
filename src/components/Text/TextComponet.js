import React from 'react'

const TextComponet = ({title,para}) => {
  return (
    <div className='py-5'>
        <p className='text-[#FFFFFF] text-[24px] font-bold font-manrope'>{title}</p>
        <p className='text-[#CCCED5] pt-4 text-[16px] font-manrope'>{para}</p>
    </div>
  )
}

export default TextComponet