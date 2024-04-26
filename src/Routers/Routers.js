import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Exchange from "../pages/Exchange/Exchange";
import Portfolio from "../pages/Portfolio/Portfolio";
import BrowserStartup from "../pages/BrowserStartup/BrowserStartup";
import TopStartUp from "../pages/TopStartup/TopStartUp";
import Dashboard from "../pages/Dashbaord/Dashboard";
import ExchangeInfo from "../pages/ExchangeInfo/ExchangeInfo";
import Market from "../pages/Market/Market";
import Entrepreneur from "../pages/Entrepreneur/Entrepreneur";
import Insight from "../pages/Insight/Insight";
import About from "../pages/About/About";
import Privacy from "../pages/Privacy/Privacy";
import TermPolicy from "../pages/TermPolicy/TermPolicy";
import Press from "../pages/Press/Press";
import Conatct from "../pages/Contact/Conatct";
import Support from "../pages/Support/Support";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/forgotPasword";

const Routers = () => {
  return (
    <BrowserRouter>
      {/* <Top /> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/exchangeInfo" element={<ExchangeInfo />} />
        <Route index path="/market" element={<Market />} />
        <Route index path="/entrepreneur" element={<Entrepreneur />} />
        <Route index path="/insights" element={<Insight />} />
        <Route index path="/about" element={<About />} />
        {/* User login/signup */}
        <Route index path="/login" element={<LogIn />} />
        <Route index path="/signup" element={<SignUp />} />
        <Route index path="/forgot-password" element={<ForgotPassword />} />

        {/* dashbard */}
        <Route index path="/dashboard" element={<Dashboard />} />
        <Route index path="/top-startup" element={<TopStartUp />} />
        <Route index path="/browse-startup" element={<BrowserStartup />} />
        <Route index path="/portfolio" element={<Portfolio />} />
        <Route index path="/exchange" element={<Exchange />} />
        {/* term policy pages */}
        <Route index path="/privacy" element={<Privacy />} />
        <Route index path="/Policy" element={<TermPolicy />} />
        <Route index path="/press" element={<Press />} />
        <Route index path="/contact" element={<Conatct />} />
        <Route index path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
