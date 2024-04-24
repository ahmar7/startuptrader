import React, { useState } from 'react'
import { PortfolioChart } from '../Chart/PortfolioChart'
import UpValueIcon from '../Icons/UpValueIcon'
import HeartIcon from '../Icons/HeartIcon'
import ChatIcon from '../Icons/ChatIcon'
import MessageIcon from '../Icons/MessageIcon'
import ShairIcon from '../Icons/ShairIcon'
import ReplyIcon from '../Icons/ReplyIcon'
import SendIcon from '../Icons/SendIcon'
import UserIcon from '../Icons/UserIcon'

const ExchangeChart = () => {
    const [searchDay,setSearchDay]=useState("24H")
  return (
    <div className='flex md:flex-row flex-col gap-4 '>
    <div className=' md:w-[70%]    '>
    <div className='bg-[#1C2642]    rounded-2xl  p-5 mt-5 '>
    <div className='flex md:flex-row md:gap-0 gap-4 flex-col md:items-center md:justify-between'>
      
            <p className='font-bold text-[32px]  text-[#FFFFFF]'>$12.5</p>
           
            <div className='flex h-5 justify-center items-center mb-5 md:mb-0 md:gap-2'>
            {["24H","5D","1M","YTP","1Y","2Y","5Y","ALL"].map((v)=><p onClick={()=>setSearchDay(v)} className={` text-sm  px-2 py-1 cursor-pointer ${searchDay==v?"text-[#439CFF] border border-[#439CFF] rounded-full  text-center  ":"text-[#CCCED5]"}`}>{v}</p>)}
            </div>
        </div>
        <div className='flex items-center'>
            
                  <UpValueIcon />
      <p className='text-[#3DCC43] pl-1 text-sm font-normal'>2.56%</p>
      
      
      
    
      
      </div>
      <PortfolioChart />
    </div>
        <div className='bg-[#1C2642]    rounded-2xl  p-5 mt-5 '>
        <p className='text-[18] font-manrope font-bold text-[#FFFFFF]'>Live feed</p>
<div className='flex justify-between items-center'>
        <div className='flex gap-3 pt-5'>
        <img src='/images/Avatar.png'  alt='' className='' />
        <div>
            <p className='text-[#FFFFFF] text-[14px] font-semibold font-manrope'>John Doe</p>
            <div className='flex gap-2 '><p className='text-[#FF4045] text-[12px] font-medium font-manrope'>SELL</p><p className='text-[#FFFFFF] text-[12px] font-manrope'>HQ at 125.00</p></div>
        </div>
        </div>
        <p className='text-[10px] font-manrope text-[#FFFFFF]'>8:17 AM</p>
        </div>
        <div className='flex justify-between items-center'>
        <div className='flex gap-3 pt-4'>
            <div className='flex gap-1 items-center'>
            <HeartIcon />
            <p className='text-[10] font-manrope  text-[#CCCED5]'>1221</p>
            </div>
            <div className='flex gap-1 items-center'>
            <MessageIcon />
            <p className='text-[10] font-manrope  text-[#CCCED5]'>12</p>
            </div>
        </div>
        <ShairIcon />
        </div>
        <div className='h-[300px] overflow-y-auto'>
        {[...Array(5)].map((_,i)=>  <div className='flex gap-3 border-b py-3'>
            <div className='flex gap-2 items-center'>
                <div className='w-10'>
            <ReplyIcon />
            </div>
            <img src='/images/Avatar.png'  alt='' className='' />
            </div>
        <div className='flex gap-3 pt-5'>
    
        <div>
            <div className='flex justify-between'>
            <p className='text-[#FFFFFF] text-[14px] font-semibold font-manrope'>John Doe</p>
            <p className='text-[10px] font-manrope text-[#FFFFFF]'>8:17 AM</p>
            </div>
<p className='text-[#FFFFFF] text-[12px] font-manrope'>Apple stocks seem to be holding steady despite the market fluctuations. Their recent product launches might have a positive impact on the stock performance.</p>
        </div>
      

        </div>
        </div>)}</div>
        <div className='flex gap-3 pt-5 '>
        <input type='text' placeholder='Add Post' className='h-10 border border-[#4C546C] bg-transparent outline-none focus:outline-none pl-4 text-white placeholder:text-[12px] rounded-full w-full placeholder:text-[#CCCED5] placeholder:font-manrope ' />
        <button  className="bg-gradient-to-r from-blue-600 to-blue-400  font-manrope text-white text-sm h-10 w-12 flex justify-center items-center rounded-full shadow-md transition-all duration-300 ease-in-out">
        <SendIcon />
        </button>
        </div>
        </div>

       
    </div>
    <div className=' md:w-[30%] flex flex-col h-full '>
    <div className='bg-[#1C2642]   rounded-2xl   p-5 mt-5 '>
        <div className='flex justify-center items-center'>
        {["Buy/Sell","Short"].map((v,i)=> <p className={`w-[50%] flex font-manrope text-[#FFFFFF] font-semibold text-[12px] justify-center items-center border-b pb-3 ${"Buy/Sell"==v?"border-[#439CFF]":""}`}>{v}</p>)}
       
    </div>
    <div className='flex flex-col justify-center items-center w-full gap-8 my-8'>
    <input type='text' placeholder='Shares' className='h-10 border border-[#4C546C] bg-transparent outline-none focus:outline-none pl-4 text-white placeholder:text-[12px] rounded-full w-full placeholder:text-[#CCCED5] placeholder:font-manrope ' />
    <input type='text' placeholder='Stock Price' className='h-10 border border-[#4C546C] bg-transparent outline-none focus:outline-none pl-4 text-white placeholder:text-[12px] rounded-full w-full placeholder:text-[#CCCED5] placeholder:font-manrope ' />
  
    </div>
    <div className='flex justify-between'>
        <p className='text-[#CCCED5] text-[14px] font-manrope'>Total:</p>
            <p className='text-[18px] font-manrope font-semibold text-[#FFFFFF]'>$330.00</p>
    </div>
    <div className='flex gap-4 w-full mt-4'>
    <button style={{ backgroundImage: "linear-gradient(273.67deg, #F02D16 1.4%, #C81803 94.13%)" }}  className="  font-manrope text-white text-sm h-[32px]  px-1 rounded-full w-full shadow-md transition-all duration-300 ease-in-out">
Sell 
</button>
    <button  className="bg-gradient-to-r from-blue-600 to-blue-400  font-manrope text-white text-sm h-[32px]  px-1 rounded-full w-full shadow-md transition-all duration-300 ease-in-out">
Buy
</button>
    </div>
    </div>
    <div className='bg-[#1C2642]   rounded-2xl   p-5 mt-5 '>
        <div className='flex justify-between items-center'>
    <p className='text-[18] font-manrope font-bold text-[#FFFFFF] pb-5'>Live feed</p>
    <div className='flex gap-1 items-center'>
    <UserIcon />
        <p className='text-[#439CFF] text-[14px] font-manrope'>173</p>
        </div>
        </div>
        <div className='overflow-y-auto h-[630px]'>
        {[...Array(12)].map((_,i)=>
<div className='border-b py-3'>
        <div className='flex justify-between items-center'>
        <div className='flex gap-3 pt-5'>
        <img src='/images/Avatar.png'  alt='' className='' />
        <div>
            <p className='text-[#FFFFFF] text-[14px] font-semibold font-manrope'>John Doe</p>
            <div className='flex gap-2 '><p className='text-[#FF4045] text-[12px] font-medium font-manrope'>SELL</p><p className='text-[#FFFFFF] text-[12px] font-manrope'>HQ at 125.00</p></div>
        </div>
        </div>
        <p className='text-[10px] font-manrope text-[#FFFFFF]'>8:17 AM</p>
        </div>



        <div className='flex justify-between items-center'>
        <div className='flex gap-3 pt-4'>
            <div className='flex gap-1 items-center'>
            <HeartIcon />
            <p className='text-[10] font-manrope  text-[#CCCED5]'>1221</p>
            </div>
            <div className='flex gap-1 items-center'>
            <MessageIcon />
            <p className='text-[10] font-manrope  text-[#CCCED5]'>12</p>
            </div>
        </div>
        <ShairIcon />
        </div>
        </div>)}
        </div>


    </div>
<div>
    
</div>

        </div>
        </div>
  )
}

export default ExchangeChart