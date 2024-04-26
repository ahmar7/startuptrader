import React from 'react'
import ClientLayout from '../../layout/ClientLayout/ClientLayout'
import HeroSection from '../../components/HeroSection/HeroSection'
import VirtualCurrency from '../../components/Icons/VirtualCurrency'
import Question from '../../components/Home/Question'
import Section from '../../components/Section/Section'
import {cardData} from '../../components/Constant/index'

const ExchangeInfo = () => {
  return (
    <ClientLayout>
<HeroSection title={"Built with strong economic principles"} para={"Built with strong economic principles"}/>

<div className='flex gap-8 w-full md:flex-row flex-col mb-12 px-8 lg:px-40 '>
    {cardData.map((v,i)=>  <div className=' h-auto flex flex-col w-full relative  items-center p-10 gap-4  border-gradient rounded-xl overflow-hidden'>

            <img src="/images/shadowbb.svg" alt="Hero Image" className=" absolute   -top-[30px] " />
                <v.icon />
                <p className='text-[#FFFFFF] text-[24px] font-sora '>{v.title}</p>
                <p className='text-[14px] text-[#CCCED5] w-[200px] text-center font-sora font-light'>{v.para}</p>
         
        </div>)}</div>
        <Section img={"/images/bro1.svg"} shadow={true} title={'Real Time trades based on real world information'}/>
        <Section img={"/images/bro2.svg"} shadow={false} title={'Become better than any other investor'}/>
        <Question />
    </ClientLayout>
  )
}

export default ExchangeInfo