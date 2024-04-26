import React from 'react'
import VirtualCurrency from '../Icons/VirtualCurrency'
import {cardData} from '../Constant/index'
const HowWork = () => {
  return (
    <div className='flex justify-center items-center px-8 flex-col py-16'>
        <p className='text-xl lg:text-[42px] text-[#FFFFFF] font-sora'>How it works?</p>
        <p className='text-[14px] lg:text-[18px] pt-3 text-[#F3F3FF] font-sora'>Simple Steps to Start Your Investment Journey</p>
        <div className='flex gap-8 w-full md:flex-row flex-col my-12 px-8 lg:px-40 '>
    {cardData.map((v,i)=>  <div className=' h-auto flex flex-col w-full relative  items-center p-10 gap-4  border-gradient rounded-xl overflow-hidden'>

            <img src="/images/shadowbb.svg" alt="Hero Image" className=" absolute   -top-[30px] " />
                <v.icon />
                <p className='text-[#FFFFFF] text-[24px] font-sora '>{v.title}</p>
                <p className='text-[14px] text-[#CCCED5] w-[200px] text-center font-sora font-light'>{v.para}</p>
         
        </div>)}</div>
          
    </div>
  )
}

export default HowWork