import React from 'react'
import Language from '../Icons/Language'
import NotificationIcon from '../Icons/NotificationIcon'
import BuyMoreModal from '../Model/BuyMoreModal'

const Navbar = () => {
  return (
    <div className='bg-[#171f38] h-20 flex border-b-[1px] border-b-[#333C57] justify-between items-center px-8 py-5'>
    
        <img src='/images/dark.png'  alt='' className='' />
        <div className='flex gap-2 md:gap-8 items-center '>
            <div className='flex '> <p className='text-[#CCCED5] hidden md:block font-manrope text-sm'>Availlable Funds:</p>
            <p className='text-[#439CFF] hidden md:block text-sm font-manrope'>$6,074.00</p></div>
           
         
<BuyMoreModal />
            <NotificationIcon />
            <Language />
            <img src='/images/Avatar.png'  alt='' className='' />
        </div>
        </div>
  )
}

export default Navbar