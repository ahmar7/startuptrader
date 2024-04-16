import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Referral from "../pages/SignUp";
import Top from "../components/top";
import Signup from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Forgot from "../pages/forgotPasword";

export default function Router() {
  return (
    <BrowserRouter>
      <Top />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/signup" element={<Signup />} />
        <Route index path="/login" element={<LogIn />} />
        <Route index path="/forgot-password" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
}
