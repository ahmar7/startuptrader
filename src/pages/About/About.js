import React from "react";
import ClientLayout from "../../layout/ClientLayout/ClientLayout";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutHeroSection from "../../components/HeroSection/AboutHeroSection";

const About = () => {
  return (
    <ClientLayout>
      <AboutHeroSection
        title={"About "}
        title1={"StartupTrader"}
        para={"Learn, share and communicate with other founders"}
      />

      <div className="flex gap-8 items-center  section-width md:flex-row flex-col mt-16 px-8 lg:px-40 lg:pt-[100px]">
        <div>
          {" "}
          <img src="/images/photo.png" alt="" className="w-full" />
        </div>
        <div className="md:w-[80%]">
          <h1 className="textColor custom-text   font-sora leading-tight">
            Learn more about why I built StartupTrader
          </h1>
          <p className="text-[16px] text-[#F3F3FF] font-sora custom-ft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </ClientLayout>
  );
};

export default About;
