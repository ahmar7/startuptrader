import React from 'react'

const DashboardProfileCard = () => {
  return (
    <div className='bg-[#1C2642] lg:justify-between flex lg:flex-row flex-col rounded-lg w-full p-5 '>
            <div className='flex md:flex-row flex-col items-center  space-x-6'>
        <img src='/images/profile.png'  alt='' className='' />
        <div className='font-manrope'>
            <p className='font-bold text-lg text-white'>John Doe</p>
            <div className='flex'>  <p className='text-[#CCCED5]'>Rank:</p>
            <p className='text-white font-semibold'>1st Tier Investor</p></div>
          <div className='flex'>
          <p className='text-[#CCCED5]'> Member since:</p>
            <p className='text-white font-semibold'>June 2023</p>
          </div>
           <button className='text-[#CCCED5] px-4 py-1 mt-3 rounded-full border border-[#CCCED5]'>Watch</button>
        </div>
        </div>

        <div className='border font-manrope mt-5 md:flex-row lg:w-[50%] gap-4 flex-col w-full flex p-5 text-[#CCCED5] border-[#333C57] rounded-lg '>
            <div className=' flex w-full border-b md:border-none border-[#333C57] pb-5 md:pb-0 justify-center items-center flex-col'>
            <p className='text-sm'>Net Worth</p>
            <p className='font-bold text-2xl'>$120.5</p>
            </div>
            <div className='md:border-x md:border-[#333C57] border-b md:border-b-0 border-[#333C57] pb-5 md:pb-0 w-full px-8 flex flex-col justify-center items-center '>
            <p className='text-sm'>Total Investments</p>
            <p className='font-bold text-2xl'>$764,43</p>
            </div>
            <div className=' flex justify-center w-full items-center flex-col'>
            <p className='text-sm'>Avarage Share price</p>
            <p className='font-bold text-2xl'>$120.5</p>
            </div>
        </div>
        </div>
  )
}

export default DashboardProfileCard