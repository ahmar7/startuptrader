import React from "react";
import "./WhyBtcoin.css";
import Img4 from "../../../assets/img/Img4_98bb5a1223.jpg";
import Img3 from "../../../assets/img/Img3_c7e1451189.jpg";
import Img2 from "../../../assets/img/Img2_56dde98d0a.jpg";
import Img1 from "../../../assets/img/Img1_e0914663ad.jpg";
const WhyBtcoin = () => {
  return (
    <div className="section-padding whyus">
      <div className="SectionHeaderV2_SectionHeaderV2__UELE4 home_sectionHeader__suL52 max-width">
        <div className="SectionHeaderV2_sectionHeaderSubtitle__eUmZ_ mb34 text-center">
          Choosing Bitcoin: A Foundation for the Future
        </div>
      </div>

      <div className="max-width relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="dark:bg-pgray-800 border border-pgray-200 dark:border-pgray-600 rounded-xl h-[400px] md:h-[500px] overflow-hidden relative sm:col-span-2">
            <div className="shiny_effect z-[25]" />
            <div className="text-center absolute w-full bottom-0 z-[12] p-10">
              <div className="text-3xl font-medium text-pgray-800 dark:text-pwhite mb-2">
                Unmatched Security
              </div>
              <div className="text-xl font-medium text-pgray-600/70 dark:text-pwhite/70">
                Leveraging Bitcoin's proven security to provide a stable and resilient foundation for our DeFi platform.
              </div>
            </div>
            <div
              className="bg-contain bg-no-repeat md:bg-cover bg-top md:bg-center h-full"
              style={{
                backgroundImage: `url(${Img1})`,
              }}
            />
          </div>
          <div className="dark:bg-pgray-800 border border-pgray-200 dark:border-pgray-600 rounded-xl h-[400px] md:h-[500px] overflow-hidden relative">
            <div className="shiny_effect z-[25]" />
            <div className="text-center absolute w-full bottom-0 z-[12] p-10">
              <div className="text-3xl font-medium text-pgray-800 dark:text-pwhite mb-2">
                Legacy of Trust
              </div>
              <div className="text-xl font-medium text-pgray-600/70 dark:text-pwhite/70">
                Building on Bitcoin's trusted legacy
              </div>
            </div>
            <div
              className="bg-contain bg-no-repeat md:bg-cover bg-top md:bg-center h-full"
              style={{
                backgroundImage: `url(${Img2})`,
              }}
            />
          </div>
          <div className="dark:bg-pgray-800 border border-pgray-200 dark:border-pgray-600 rounded-xl h-[400px] md:h-[500px] overflow-hidden relative">
            <div className="shiny_effect z-[25]" />
            <div className="text-center absolute w-full bottom-0 z-[12] p-10">
              <div className="text-3xl font-medium text-pgray-800 dark:text-pwhite mb-2">
                Decentralized Foundation
              </div>
              <div className="text-xl font-medium text-pgray-600/70 dark:text-pwhite/70">
                Embracing Bitcoin's decentralized ethos
              </div>
            </div>
            <div
              className="bg-contain bg-no-repeat md:bg-cover bg-top md:bg-center h-full"
              style={{
                backgroundImage: `url(${Img3})`,
              }}
            />
          </div>
          <div className="dark:bg-pgray-800 border border-pgray-200 dark:border-pgray-600 rounded-xl h-[400px] md:h-[500px] overflow-hidden relative sm:col-span-2">
            <div className="shiny_effect z-[25]" />
            <div className="text-center absolute w-full bottom-0 z-[12] p-10">
              <div className="text-3xl font-medium text-pgray-800 dark:text-pwhite mb-2">
                Innovative Integration
              </div>
              <div className="text-xl font-medium text-pgray-600/70 dark:text-pwhite/70">
                Utilizing Stacks Layer 2 to bring smart contract functionality to Bitcoin, enhancing its DeFi capabilities without compromising its core strengths.
              </div>
            </div>
            <div
              className="bg-contain bg-no-repeat md:bg-cover bg-top md:bg-center h-full"
              style={{
                backgroundImage: `url(${Img4})`,
              }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-16 left-0 w-full lg:w-full bg-gradient-to-t from-pgray-200 dark:from-pgray-800 h-192 z-0" />
      <div className="absolute bottom-0 left-0 w-full lg:w-full bg-pgray-200 dark:bg-pgray-800 h-16 z-0" />
    </div>
  );
};

export default WhyBtcoin;
