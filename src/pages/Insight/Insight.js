import React from 'react'
import ClientLayout from '../../layout/ClientLayout/ClientLayout'
import HeroSection from '../../components/HeroSection/HeroSection'
import Section from '../../components/Section/Section'

const Insight = () => {
  return (
    <ClientLayout>
    <HeroSection title={"Investors can test their strategies"} para={"Learn from your competition, get feedback from other founders"}/>
    
   
            <Section img={"/images/bro6.svg"} shadow={false} title={'You can list all the companies that you have bet on'}/>
            <Section img={"/images/bro7.svg"} shadow={true} title={'Become better than any other investor'}/>
          
        </ClientLayout>
  )
}

export default Insight