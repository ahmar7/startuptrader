import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Exchange from '../pages/Exchange/Exchange';
import Portfolio from '../pages/Portfolio/Portfolio';
import BrowserStartup from '../pages/BrowserStartup/BrowserStartup';
import TopStartUp from '../pages/TopStartup/TopStartUp';
import Dashboard from '../pages/Dashbaord/Dashboard';
const Routers = () => {
  return (
    <BrowserRouter>
        {/* <Top /> */}
        <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route index path="/top-startup" element={<TopStartUp />} />
        <Route index path="/browse-startup" element={<BrowserStartup />} />
        <Route index path="/portfolio" element={<Portfolio />} />
        <Route index path="/exchange" element={<Exchange />} />
         

         
        </Routes>
      </BrowserRouter>
  )
}

export default Routers