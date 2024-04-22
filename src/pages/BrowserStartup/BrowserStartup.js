import React from 'react';
import DashboardLayout from '../../layout/DashboardLayout/DashboardLayout';
import { SearchIcon } from '../../components/Icons/SearchIcon';
import DownColorIcon from '../../components/Icons/DownColorIcon';
import StarIcon from '../../components/Icons/StarIcon';
import UpValueIcon from '../../components/Icons/UpValueIcon';

const BrowserStartup = () => {
  return (
    <DashboardLayout>
      <div className='p-5 h-screen  font-manrope overflow-y-auto'>
        <p className='text-white text-lg font-bold'>Browse Startups</p>
        <div className='flex flex-wrap justify-between items-center mt-6'>
          <div className='flex items-center border border-[#4C546C] rounded-full w-full md:w-96 p-1 my-2'>
            <SearchIcon />
            <input 
              type='text' 
              placeholder='Search by company name or keywords'  
              className='bg-transparent placeholder:text-[#CCCED5] focus:outline-none w-full text-sm p-2'
            />
          </div>
          <div className='flex gap-2 items-center my-2'>
            <p className='text-[#637381] text-sm font-semibold'>Sort by:</p>
            <p className='text-[#0062FF] text-sm font-bold '>Popular</p>
            <DownColorIcon />
          </div>
        </div>
        <div className='mt-5'>
          <div className='border-b border-[#4C546C] pb-2'>
            <div className='flex justify-between'>
              {["Name", "Total Value", "Watch"].map((v, index) => (
                <p key={index} className="text-[#CCCED5] text-sm font-normal">{v}</p>
              ))}
            </div>
          </div>
          <div className=''>
            {[...Array(6)].map((_, i) => (
              <div key={i} className='flex flex-row items-center justify-between py-3 border-b border-[#333C57]'>
                <div className='flex gap-2 items-center'>
                  <img src={`/images/c${i}.png`} alt='' className='w-8 h-8 rounded-full' />
                  <div>
                    <p className='text-white text-sm font-bold'>Company name</p>
                    <p className='text-[#CCCED5] text-xs'>Industry type</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center my-2'>
                  <p className='text-white text-sm'>$23,447.64</p>
                  <div className='flex items-center'>
                    <UpValueIcon />
                    <p className='text-[#3DCC43] text-sm pl-1'>2.56%</p>
                  </div>
                </div>
                <div className='flex items-center gap-2 rounded-full border border-[#4C546C] px-3 py-1 justify-center my-2'>
                  <StarIcon />
                  <p className='text-[#E5E7EA] text-xs font-semibold'>Add to Watchlist</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default BrowserStartup;
