import analytics_full_white from "../../../assets/img/analytics-full-white.png";
import marketing_funnel_2 from "../../../assets/img/marketing-funnel-2.png";
import airdrop_shield_2 from "../../../assets/img/airdrop-shield-2.png";
import onchain_analytics_2 from "../../../assets/img/onchain-analytics-2.png";
import website_analytics_2 from "../../../assets/img/website-analytics-2.png";
import ads_targeting_2 from "../../../assets/img/ads-targeting-2.png";
import affiliate_full_dark from "../../../assets/img/affiliate-full-dark.png";
import kyberswap from "../../../assets/img/kyberswap.png";
import mantle from "../../../assets/img/mantle.png";
import woo from "../../../assets/img/woo.png";
import polkastarter from "../../../assets/img/polkastarter.png";
import linea from "../../../assets/img/linea.png";
import gameswift from "../../../assets/img/gameswift.png";
import dodo from "../../../assets/img/dodo.png";
import eesee from "../../../assets/img/eesee.png";
import insomnia from "../../../assets/img/insomnia.png";
import affiliate_full_color_white from "../../../assets/img/affiliate-full-color-white.png";
import score_full_color_white from "../../../assets/img/score-full-color-white.png";
import React from "react";
import whyChoose from "../../../assets/img/WhyChooseOrderly.05658b94.svg";
import "./Platforms.css";
const Platforms = () => {
  return (
    <section id="platforms" className="mt-16 scroll-my-32 lg:mt-32 relative">
      <img
        className="absolute w-[400px] left-[-180px] top-[-200px] md:w-[500px] md:left-[-150px] md:top-[-250px] lg:w-[700px] lg:left-[-100px] lg:top-[-200px] xl:w-[833px] xl:left-[-0px] xl:top-[-250px] 2xl:w-[833px] 2xl:left-[-0px] 2xl:top-[-250px]"
        src={whyChoose}
        alt="orderly-network-main-why-choose-orderly-background"
      />

      <div
        style={{
          willChange: "transform, opacity",
          opacity: 1,
          transform: "translateY(20px) translateZ(0)",
        }}
      ></div>
      <div className="relative mx-auto max-w-content px-0 lg:px-4 xl:px-0">
        <div>
          <div className="section mx-auto my-32 max-w-content lg:mt-64 lg:hidden"></div>
          <div className="max-width">
            <div className="technology max-widh">
              <div className="innerTechnolodyDiv">
                <p className="technologyTag">Token Utility</p>
                <p className="technologyMainHeading">
                  Unlock Bitcoin DeFi with $SNOVA
                </p>
                <p className="technologySubHeading">
                  Step into the future with $SNOVA, accessing AI insights, DAO
                  governance, and diverse DeFi benefits. It's your ticket to a
                  secure, AI-enhanced DeFi experience on Bitcoin, featuring
                  launchpad access, staking rewards, early feature entry, and
                  airdrops.
                </p>
                <div className="mt-4">
                  <a
                    href="https://stacknova-ai.gitbook.io/stacknova-ai"
                    target="_blank"
                    class="bl-inline-flex bl-items-center bl-justify-center bl-transition-colors bl-relative bl-h-[55px] bl-min-w-[260px] bl-text-[26px]/none bl-bg-primary/20 bl-text-primary"
                  >
                    <span>View Docs</span>
                    <div class="bl-border-primary bl-absolute bl-h-2.5 bl-w-2.5 bl-border-l bl-border-t bl-top-0 bl-left-0"></div>
                    <div class="bl-border-primary bl-absolute bl-h-2.5 bl-w-2.5 bl-border-r bl-border-b bl-right-0 bl-bottom-0"></div>
                  </a>
                  <a
                    href="https://stacknova-ai.gitbook.io/stacknova-ai"
                    target="_blank"
                    class="bl-inline-flex t-version bl-items-center cornet bl-justify-center bl-transition-colors bl-relative bl-h-[55px] bl-min-w-[260px] bl-text-[26px]/none bl-bg-primary/20 bl-text-primary"
                  >
                    <div class="bl-border-primary bl-absolute bl-h-2.5 bl-w-2.5 bl-border-r bl-border-t bl-top-0 bl-right-0"></div>
                    <div class="bl-border-primary bl-absolute bl-h-2.5 bl-w-2.5 bl-border-l bl-border-b bl-bottom-0 bots bl-left-0"></div>
                    <span>View Docs</span>
                    <div class="bl-border-primary bl-absolute bl-h-2.5 bl-w-2.5 bl-border-l bl-border-t bl-top-0 bl-left-0"></div>
                    <div class="bl-border-primary bl-absolute bl-h-2.5 bl-w-2.5 bl-border-r bl-border-b bl-right-0 bl-bottom-0"></div>
                  </a>
                  {/* <a className="technologyLearnMore" href="./institutions">
                    Learn more
                  </a> */}
                  {/* <a
                    className="technologyViewDocs"
                    href="https://docs.velvet.capital"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Docs
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
