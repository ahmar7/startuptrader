import React from 'react';
import  {LineChart } from '../Chart/LineChart';
import { useEffect } from 'react';

const PerformanceChart = () => {
    
  return (
    <div className='bg-[#1C2642] flex flex-col lg:flex-row mt-5 font-manrope p-5 rounded-lg w-full gap-4'>
        <div className='flex-1 lg:w-3/4'>
            <p className='font-bold text-lg text-white'>Top/worst performers</p>
            <div className='flex gap-3 pt-3'>
                <div className='flex items-center gap-1'>
                    <div className='bg-[#3DCC43] w-3 h-3 rounded-full' />
                    <p className='text-sm text-[#CCCED5]'>Top Performers</p>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='bg-[#FF4045] w-3 h-3 rounded-full' />
                    <p className='text-sm text-[#CCCED5]'>Worst Performers</p>
                </div>
            </div>
            <LineChart />
        </div>
        <div className='w-full lg:w-1/4 flex flex-col gap-5'>
        <div  className='border p-5 rounded-lg border-[#4C546C]'>
                    <div className='flex items-center gap-1'>
                        <div className='bg-[#3DCC43] w-3 h-3 rounded-full' />
                        <p className='text-base font-bold text-[#CCCED5]'>Top Performers</p>
                    </div>
                    <div className='flex text-[10px] text-[#CCCED5] py-2 border-b justify-between items-end'>
                        <p>Startup Name</p>
                        <p>%</p>
                    </div>
                    {[...Array(3)].map((v, i) => (
                        <div key={i} className='flex justify-between items-center border-b-[#333C57] border-b py-2'>
                            <img src={`/images/pp${i}.png`} alt='' className='w-8' />
                            <p className='font-medium text-[#FFFFFF] text-[12px]'>Company name</p>
                            <p className='font-medium text-[#3DCC43] text-[12px]'>2%</p>
                        </div>
                    ))}
                </div>


                <div  className='border p-5 rounded-lg border-[#4C546C]'>
                    <div className='flex items-center gap-1'>
                        <div className='bg-[#FF4045] w-3 h-3 rounded-full' />
                        <p className='text-base font-bold text-[#CCCED5]'>Worst Performers</p>
                    </div>
                    <div className='flex text-[10px] text-[#CCCED5] py-2 border-b justify-between items-end'>
                        <p>Startup Name</p>
                        <p>%</p>
                    </div>
                    {[...Array(3)].map((v, i) => (
                        <div key={i} className='flex justify-between items-center border-b-[#333C57] border-b py-2'>
                            <img src={`/images/pp1${i}.png`} alt='' className='w-8' />
                            <p className='font-medium text-[#FFFFFF] text-[12px]'>Company name</p>
                            <p className='font-medium text-[#3DCC43] text-[12px]'>2%</p>
                        </div>
                    ))}
                </div>
        </div>
    </div>
  );
}

export default PerformanceChart;
