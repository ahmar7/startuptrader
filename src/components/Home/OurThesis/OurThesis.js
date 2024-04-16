import cross from "../../../assets/img/cross.svg";
import back from "../../../assets/img/back.png";
import cardBg2 from "../../../assets/img/cardBg2.png";
import cardBg3 from "../../../assets/img/cardBg3.png";
import cardBg4 from "../../../assets/img/cardBg4.png";
import Vectors_Wrapper from "../../../assets/img/Vectors-Wrapper.svg";
import learnMore from "../../../assets/img/learn-more.svg";
import learnMoreBg from "../../../assets/img/learn-more-bg.svg";
import React, { useState } from "react";
import "./OurThesis.css";
import cardBg from "../../../assets/img/main.png";
import ReactFlipCard from "reactjs-flip-card";
import whyChoose from "../../../assets/img/WhyChooseOrderly.05658b94.svg";

const OurThesis = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleCardClick = () => {
    setIsRotated(!isRotated);
  };
  const styles = {
    card: { borderRadius: 20 },
  };
  return (
    <section className="section-2024 relative ">
      <img
        className="absolute w-[400px] left-[-180px] top-[-200px] md:w-[500px] md:left-[-150px] md:top-[-250px] lg:w-[700px] lg:left-[-100px] lg:top-[-200px] xl:w-[833px] xl:left-[-0px] xl:top-[-250px] 2xl:w-[833px] 2xl:left-[-0px] 2xl:top-[-250px]"
        src={whyChoose}
        alt="orderly-network-main-why-choose-orderly-background"
      />
      <div className="container-medium-thesis w-container max-width">
        <div
          data-w-id="5663c8a0-5d0e-0cfc-0c22-bf5f013a89a0"
          style={{
            transform:
              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            opacity: 1,
            transformStyle: "preserve-3d",
          }}
          className="inner-container"
        >
          <div className="SectionHeaderV2_sectionHeaderSubtitle__eUmZ_ mb34 text-center">
            AI-Enhanced DeFi on Bitcoin
          </div>
          {/*We envision a near-future powered by cutting-edge AI tools and blockchain security, creating a comprehensive and accessible DeFi platform on Bitcoin.*/}
          {/*We envision a future powered by AI and blockchain security, shaping an accessible, comprehensive DeFi platform on Bitcoin.*/}
          {/*Envisioning a  Unified Future: AI-Enhanced DeFi on Bitcoin's Network.*/}
        </div>

        <div className="flex-cards">
          <ReactFlipCard
            flipTrigger="onClick"
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={
              <div className="single-card">
                <div className="content-card">
                  <h3 className="area-heading">AI Tools</h3>
                  <p className="paragraph-list">
                    Advanced Analytics
                    <br />
                    Investor Insights
                    <br />
                    Risk Assessment
                    <br />
                    Market Prediction
                    <br />
                    Transparent Tracking
                  </p>
                </div>
                <div className="btn-main-card">
                  <img
                    src={learnMoreBg}
                    loading="lazy"
                    width={200}
                    height={48}
                    alt
                    className="vectors-wrapper"
                    style={{}}
                  />
                  <div className="button-text">Learn More</div>
                  <img
                    src={learnMore}
                    loading="lazy"
                    alt="Explore more"
                    className="plus-image"
                  />
                </div>
                <div className="abs-img">
                  <img src={cardBg2} alt="" />
                </div>
              </div>
            }
            backComponent={
              <div className="single-card">
                <div className="content-card">
                  <img src={cross} className="ext-btn" alt="" />
                  <img src={back} className="areas-image" alt="" />
                  <div className="focus-modal-contents">
                    <h4 className="h4-card-back">IDO Challenges:</h4>
                    <p className="paragraph-focus-card">
                      Complex project data, unpredictable market trends, and a
                      lack of investment transparency often hinder effective
                      project evaluation and risk assessment in IDOs, affecting
                      investor confidence.
                    </p>
                    <h4 className="h4-card-back">Stacknova's AI Solutions:</h4>
                    <p className="paragraph-focus-card">
                      Stacknova's AI-powered tools address these challenges with
                      enhanced due diligence, strategic forecasting, and
                      real-time risk analysis, providing transparent,
                      data-driven insights for equitable access and smarter
                      investment strategies in the Bitcoin DeFi space.
                    </p>
                  </div>
                </div>
              </div>
            }
          />
          <ReactFlipCard
            flipTrigger="onClick"
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={
              <div className="single-card">
                <div className="content-card">
                  <h3 className="area-heading">Launchpad</h3>
                  <p className="paragraph-list">
                    AI-Enhanced IDOs
                    <br />
                    Insurance Protection
                    <br />
                    Equitable Distribution
                    <br />
                    Post-Launch Stability
                    <br />
                    Rigorous Vetting
                  </p>
                </div>
                <div className="btn-main-card">
                  <img
                    src={learnMoreBg}
                    loading="lazy"
                    width={200}
                    height={48}
                    alt
                    className="vectors-wrapper"
                    style={{}}
                  />
                  <div className="button-text">Learn More</div>
                  <img
                    src={learnMore}
                    loading="lazy"
                    alt="Explore more"
                    className="plus-image"
                  />
                </div>
                <div className="abs-img">
                  <img src={cardBg2} alt="" />
                </div>
              </div>
            }
            backComponent={
              <div className="single-card">
                <div className="content-card">
                  <img src={cross} className="ext-btn" alt="" />
                  <img src={back} className="areas-image" alt="" />
                  <div className="focus-modal-contents">
                    <h4 className="h4-card-back">IDO Challenges:</h4>
                    <p className="paragraph-focus-card">
                      Traditional IDOs face challenges like unequal access, lack
                      of transparency, and post-launch volatility, deterring
                      investors and affecting project growth.
                    </p>
                    <h4 className="h4-card-back">Stacknova's IDO Solutions:</h4>
                    <p className="paragraph-focus-card">
                      Stacknova's innovative launchpad tackles these issues with
                      Fair Access, AI Insights, and Secure Investments backed by
                      insurance. Rigorous Project Vetting further ensures market
                      stability and builds investor trust, promoting equitable
                      and informed participation.
                    </p>
                  </div>
                </div>
              </div>
            }
          />
          <ReactFlipCard
            flipTrigger="onClick"
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={
              <>
                <div className="single-card">
                  <div className="content-card">
                    <h3 className="area-heading">Governance</h3>
                    <p className="paragraph-list">
                      Community-Driven
                      <br />
                      DAO Integration
                      <br />
                      Inclusive Voting
                      <br />
                      AI-Assisted Analysis
                      <br />
                      Operational Clarity
                    </p>
                  </div>
                  <div className="btn-main-card">
                    <img
                      src={learnMoreBg}
                      loading="lazy"
                      width={200}
                      height={48}
                      alt
                      className="vectors-wrapper"
                      style={{}}
                    />
                    <div className="button-text">Learn More</div>
                    <img
                      src={learnMore}
                      loading="lazy"
                      alt="Explore more"
                      className="plus-image"
                    />
                  </div>
                  <div className="abs-img">
                    <img src={cardBg2} alt="" />
                  </div>
                </div>
              </>
            }
            backComponent={
              <div className="single-card">
                <div className="content-card">
                  <img src={cross} className="ext-btn" alt="" />
                  <img src={back} className="areas-image" alt="" />
                  <div className="focus-modal-contents">
                    <h4 className="h4-card-back">Governance Challenges:</h4>
                    <p className="paragraph-focus-card">
                      Centralized governance in DeFi often leads to limited
                      community input and transparency, resulting in decisions
                      that may not align with all user interests.
                    </p>
                    <h4 className="h4-card-back">Stacknova's DAO Solution:</h4>
                    <p className="paragraph-focus-card">
                      Stacknova's DAO transforms governance by empowering every
                      member with a voice, irrespective of stake size. With AI
                      integration for informed decision-making and inclusive
                      voting, we establish a truly community-driven model,
                      enhancing transparency and aligning with user interests.
                    </p>
                  </div>
                </div>
              </div>
            }
          />
          <ReactFlipCard
            flipTrigger="onClick"
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={
              <div className="single-card">
                <div className="content-card">
                  <h3 className="area-heading">Bridge</h3>
                  <p className="paragraph-list">
                    Interoperability
                    <br />
                    Asset Transfer
                    <br />
                    Liquidity Pools
                    <br />
                    Cross-Chain
                    <br />
                    Secure Transactions
                  </p>
                </div>
                <div className="btn-main-card">
                  <img
                    src={learnMoreBg}
                    loading="lazy"
                    width={200}
                    height={48}
                    alt
                    className="vectors-wrapper"
                    style={{}}
                  />
                  <div className="button-text">Learn More</div>
                  <img
                    src={learnMore}
                    loading="lazy"
                    alt="Explore more"
                    className="plus-image"
                  />
                </div>
                <div className="abs-img">
                  <img src={cardBg2} alt="" />
                </div>
              </div>
            }
            backComponent={
              <div className="single-card">
                <div className="content-card">
                  <img src={cross} className="ext-btn" alt="" />
                  <img src={back} className="areas-image" alt="" />
                  <div className="focus-modal-contents">
                    <h4 className="h4-card-back">
                      Interoperability Challenges:
                    </h4>
                    <p className="paragraph-focus-card">
                      Blockchain networks often face liquidity fragmentation and
                      limited asset mobility, restricting DeFi potential and
                      seamless asset management across ecosystems.
                    </p>
                    <h4 className="h4-card-back">
                      Stacknova's Bridge Solution:
                    </h4>
                    <p className="paragraph-focus-card">
                      Stacknova Bridge connects Bitcoin with Ethereum, BNB
                      Chain, and Solana, boosting cross-chain connectivity and
                      liquidity. Facilitating efficient asset transfers and
                      secure transactions, it broadens market access and refines
                      investment strategies for a cohesive DeFi future.
                    </p>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default OurThesis;
