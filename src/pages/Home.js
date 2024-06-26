import React from "react";
import NavbarClient from "../components/Navbar/NavbarClient";
import HeroSection from "../components/Home/HeroSection";
import HowWork from "../components/Home/HowWork";
import TopTrading from "../components/Home/TopTrading";
import Question from "../components/Home/Question";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <NavbarClient />
      <div className="new-linear">
        <HeroSection />
        <HowWork />
        <TopTrading />
        <Question />
        <Footer />
      </div>
    </>
  );
};

export default Home;
