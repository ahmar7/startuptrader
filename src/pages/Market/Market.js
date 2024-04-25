import React from 'react'
import Section from '../../components/Section/Section'
import ClientLayout from '../../layout/ClientLayout/ClientLayout'
import HeroSection from '../../components/HeroSection/HeroSection'

const Market = () => {
  return (
    <ClientLayout>
    <HeroSection title={"Companies love using StartupTrader"} para={"Learn from your competition, get feedback from other founders"}/>
    
   
            <Section img={"/images/bro3.svg"} shadow={false} title={'Easy information that helps investors know what you do'}/>
            <Section img={"/images/bro4.svg"} shadow={true} title={'Easy to sign up and become validated'}/>
          
        </ClientLayout>
  )
}

export default Market