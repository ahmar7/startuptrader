import React from 'react'

const TopTrading = () => {
  return (
    <div className='flex justify-center flex-col text-center items-center px-8   py-16'>
        
    <p className='text-xl lg:text-[42px] text-[#FFFFFF] font-sora'>Top trading startups</p>
    <p className='text-[14px] md:w-[500px] lg:text-[18px] pt-3 text-[#F3F3FF] font-sora'>Explore innovative trading startups revolutionizing investments for tomorrow</p>
    <div className=" flex justify-center relative items-center py-16 ">
    <img src="/images/shadowtop.svg" alt="Hero Image" className=" absolute -left-40  -top-[30px] " />
 <img src="/images/top.svg" alt="Hero Image" className="w-auto max-w-full mx-auto  h-auto" />
 </div>
      
</div>
  )
}

export default TopTrading
