import React from 'react'
import ClientLayout from '../../layout/ClientLayout/ClientLayout'
import HeroSection from '../../components/HeroSection/HeroSection'
import Section from '../../components/Section/Section'

const Entrepreneur = () => {
  return (
    <ClientLayout>
    <HeroSection title={"Built for Founders"} para={"Learn from other founders and submit information to earn cred"}/>
    
   
            <Section img={"/images/bro5.svg"} shadow={false} title={'You can list all the companies that you have bet on'}/>
            <Section img={"/images/bro4.svg"} shadow={true} title={'Easy signup'}/>
          
        </ClientLayout>
  )
}

export default Entrepreneur