import React from 'react'
import DashboardLayout from '../../layout/DashboardLayout/DashboardLayout'
import StarIcon from '../../components/Icons/StarIcon'
import PortfoliostartupCard from '../../components/PortfolioCard/PortfoliostartupCard'
import PortfolioDescriptionCard from '../../components/PortfolioCard/PortfolioDescriptionCard'
import PortfolioChartData from '../../components/PortfolioCard/PortfolioChartData'

const Portfolio = () => {
  return (
    <DashboardLayout>
        <div className='p-5 w-full '>

        
    <PortfoliostartupCard />
   
    <PortfolioDescriptionCard />

    <PortfolioChartData />
    </div>


    </DashboardLayout>
  )
}

export default Portfolio