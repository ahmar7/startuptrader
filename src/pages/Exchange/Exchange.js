import React from 'react'
import DashboardLayout from '../../layout/DashboardLayout/DashboardLayout'

import ExchangeStartUp from '../../components/ExchangeCard/ExchangeStartUp'
import ExchangeChart from '../../components/ExchangeCard/ExchangeChart'

const Exchange = () => {
  return (
    <DashboardLayout>
        <div className='p-5'>
    <ExchangeStartUp />
    <ExchangeChart />
    </div>
    </DashboardLayout>
  )
}

export default Exchange



