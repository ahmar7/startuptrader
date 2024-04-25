import React from "react";
import Header from "../layout/Header/Header";
import Banner from "../components/Home/Banner/Banner";
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
   <div className="bg-[#050511]">
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
