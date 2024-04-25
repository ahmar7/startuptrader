import React from 'react'
import TextComponet from '../../components/Text/TextComponet'
import ClientLayout from '../../layout/ClientLayout/ClientLayout'

const Press = () => {
  return (
    <ClientLayout>
    <div className='flex  w-full  flex-col justify-center items-center py-16 px-8 lg:px-40 '>
<p className='text-[#FFFFFF] text-[32px]  font-manrope font-bold'>StartupTrader Press</p>
<p className='text-[#666D81] text-[16px] font-manrope'>Press materials</p>
</div>
<div className='flex  w-full  flex-col   px-8 lg:px-40 '>

   
        
<div className='py-5'>
        <p className='text-[#FFFFFF] text-[24px] font-bold font-manrope'>Press materials</p>
        <p className='text-[#CCCED5] lg:w-[600px] pt-4 text-[16px] font-manrope'>StartupTrader delivers a simple interface that makes building a website easy.In just three clicks, you can have a beautiful website thats ready to publish.</p>
    </div>
    



<div className='py-5'>
        <p className='text-[#FFFFFF] text-[24px] font-bold font-manrope'>Want to talk to us?</p>
        <p className='text-[#CCCED5] lg:w-[600px] pt-4 text-[16px] font-manrope'>Please contact us if you have any questions.</p>
        <p className='text-[#CCCED5] text-[16px] font-manrope'>You can also find us on <a href="https://www.facebook.com/yourFacebookPage" target="_blank" className='text-blue-500 hover:underline' rel="noopener noreferrer">Facebook</a> and <a href="https://www.twitter.com/yourTwitterHandle" target="_blank" className='text-blue-500 hover:underline'  rel="noopener noreferrer">Twitter</a>.</p>
    </div>




</div>
   </ClientLayout>
  )
}

export default Press