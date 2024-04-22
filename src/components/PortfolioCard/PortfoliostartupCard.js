import React from 'react'
import StarIcon from '../Icons/StarIcon'

const PortfoliostartupCard = () => {
  return (
  
    <div className='bg-[#1C2642] lg:justify-between flex lg:flex-row flex-col rounded-lg w-full p-5 '>
        <div className='flex gap-4'>
        <div>
            <img src='/images/google.png'  alt='' className='' />
            
        </div>
        <div className='flex flex-col gap-4'>
        <p className='text-[24px] font-bold font-manrope text-[#FFFFFF]'>Startup Name</p>
        <div>
        <div className='flex '><p className='text-[#CCCED5] font-manrope text-[12px]'>Sector(s):</p><p className='text-[#FFFFFF] font-manrope font-semibold text-[12px]'>Consumer Cyclical</p></div>
        <div className='flex '><p className='text-[#CCCED5] font-manrope text-[12px]'>Industry:</p><p className='text-[#FFFFFF] font-manrope font-semibold text-[12px]'>Auto Manufacturers</p></div>
        <div className='flex '><p className='text-[#CCCED5] font-manrope  text-[12px]'>Location:</p><p className='text-[#FFFFFF] font-manrope font-semibold text-[12px]'>United States</p></div>
        </div>
        <p className='text-[#439CFF] font-manrope font-semibold text-[14px]'>https://www.website.com</p>
        <p className='text-[#FF4045] font-manrope font-semibold text-[12px]'>Claim Company</p>
        </div>
        </div>
        <div className='flex flex-col md:justify-between items-center md:items-end'>
    <div className='flex items-center gap-2 rounded-full mb-5 md:mb-0 border border-[#4C546C] px-3 py-1 w-[150px] h-12 justify-center'><StarIcon /><p className='text-[#E5E7EA] text-[12px] font-manrope font-semibold'>Add to Watchlist</p></div>
    <div className='flex md:flex-row flex-col gap-6'>
        {[...Array(3)].map((_,i)=> <div className='flex gap-6'>
        <div className='flex flex-col border-b  pb-3 md:pb-0 md:border-none gap-4'>
            <p className='text-[#CCCED5] text-[14px] font-manrope'>Market Capitalization</p>
            <p className='text-[#FFFFFF] font-manrope text-[24px] font-bold'>9,000.00</p>
        </div>
        {i!==2 &&  <div className='border-l-2 hidden md:block border-[#FFFFFF]' />}
       
        </div>)}
       
      
    </div>
    </div>
       </div>

  )
}

export default PortfoliostartupCard