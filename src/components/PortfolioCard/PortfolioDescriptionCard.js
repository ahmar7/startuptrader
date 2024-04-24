import React from 'react'
import Tooltip from '../Tooltip/Tooltip'

const PortfolioDescriptionCard = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 '>
      <div className='bg-[#1C2642] flex-grow md:w-[70%] rounded-2xl  mt-5 p-5'>
        <p className='text-lg font-manrope font-bold text-white'>Description</p>
        <p className='text-sm py-5 font-manrope text-[#CCCED5]'>
          Company, based in Austin, Texas, is a leading force in electric vehicles and renewable energy. The company's Automotive segment specializes in electric cars, services, and charging infrastructure. In the Energy Generation and Storage sector, Tesla offers solar products, energy storage solutions, and related services for homes, businesses, and utilities. Established as Tesla Motors in 2003, the company now leads the way in sustainable transportation and renewable energy advancements.
        </p>
        <p className='text-sm py-5 font-manrope text-[#CCCED5]'>Team Members:</p>
        <div className='flex gap-4'>
          {[...Array(4)].map((_, i) => <div><Tooltip tip={"John Davidson"}><img key={i} src={`/images/pro${i}.png`} alt='' className='w-12 h-12 rounded-full' /></Tooltip></div>)}
        </div>
      </div>
      <div className='bg-[#1C2642] rounded-2xl  flex-grow md:w-[30%] mt-5 p-5'>
        <div className='flex justify-center items-center'>
          {["Buy/Sell", "Short"].map((v, i) => (
            <p key={i} className={`w-full flex text-[#FFFFFF]  justify-center items-center border-b pb-3 ${v === "Buy/Sell" ? "border-[#439CFF]" : ""}`}>
              {v}
            </p>
          ))}
        </div>
        <div className='flex flex-col items-center gap-8 my-8'>
          <input type='text' placeholder='Shares' className='h-10 border border-[#4C546C] bg-transparent outline-none focus:outline-none pl-4 text-white placeholder:text-sm rounded-full w-full placeholder:text-[#CCCED5]' />
          <input type='text' placeholder='Stock Price' className='h-10 border border-[#4C546C] bg-transparent outline-none focus:outline-none pl-4 text-white placeholder:text-sm rounded-full w-full placeholder:text-[#CCCED5]' />
        </div>
        <div className='flex justify-between'>
          <p className='text-[#CCCED5] text-sm font-manrope'>Total:</p>
          <p className='text-lg font-manrope font-semibold text-white'>$330.00</p>
        </div>
        <div className='flex gap-4 w-full mt-4'>
          <button className="bg-red-600 font-manrope text-white text-sm h-[32px] px-4 rounded-full w-full shadow-md transition-all duration-300 ease-in-out">
            Sell 
          </button>
          <button className="bg-blue-500 font-manrope text-white text-sm h-[32px] px-4 rounded-full w-full shadow-md transition-all duration-300 ease-in-out">
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDescriptionCard
