import React from "react";
import "./AuditSecton.css";
import aiFeaturesBg from "../../../assets/img/ai-features-glow.webp";
import aiFeaturesBg2 from "../../../assets/img/ai-features-glow-2.png";
import BrandFade from "../../../assets/img/Brand.cd68de9c.svg";

const AuditSecton = () => {
  return (
    <div className="relative">
      <img
        className="absolute w-[487px] right-0 h-[362px] right-[-100px] top-[-100px] md:w-[487px] md:h-[362px] md:right-[-100px] md:top-[-100px] lg:w-[650px] lg:h-[483px] lg:right-[-100px] lg:top-[-200px] xl:w-[813px] xl:h-[604px] xl:right-[-100px] xl:top-[-250px] 2xl:w-[813px] 2xl:h-[604px] 2xl:right-[-100px] 2xl:top-[-250px]"
        src={BrandFade}
        alt="orderly-network-main-brand-background"
      />
      <div className="max-width padding-block  ">
        <div className="   SectionHeaderV2_SectionHeaderV2__UELE4 home_sectionHeader__suL52">
          <div className="mb-5 text-center SectionHeaderV2_sectionHeaderSubtitle__eUmZ_">
            Intelligent Investing Unleashed
          </div>
        </div>
        <div
          id="cards-grid"
          className="cardgrid-wrapper section-padding relative"
        >
          <div className="graphic-wrapper">
            <div className="graphic-inner">
              <svg
                className="circle-section"
                width={604}
                height={604}
                fill="none"
                viewBox="0 0 604 604"
              >
                <circle
                  className="circle"
                  cy={302}
                  r={300}
                  strokeDasharray="0.1 20"
                  cx={302}
                  stroke="url(#strokegradient)"
                  strokeWidth={3}
                  strokeLinecap="round"
                  id="dottedcircle"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transformOrigin: "0px 0px",
                  }}
                  data-svg-origin="302 302"
                  transform="matrix(0.90437,0.42675,-0.42675,0.90437,157.75876,-99.99824)"
                />
                <circle
                  className="circle"
                  cy={280}
                  r={280}
                  cx={280}
                  stroke="url(#strokegradient2)"
                  strokeLinecap="round"
                  transform="matrix(0.90437,0.42675,0.42675,-0.90437,-70.7136,435.7336)"
                  id="solidcircle"
                  style={{
                    strokeDashoffset: 0,
                    strokeDasharray: "1696.74px, 62.6526px",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transformOrigin: "0px 0px",
                  }}
                  data-svg-origin="280 280"
                />
                <defs>
                  <linearGradient id="strokegradient">
                    <stop stopColor="#D7A7FF" />
                    <stop stopColor="#D7A7FF" offset={1} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="div-block-150">
                <img
                  src={aiFeaturesBg}
                  loading="lazy"
                  srcSet={aiFeaturesBg}
                  alt
                  sizes="(max-width: 479px) 100vw, 604px"
                  className="graphic_glow"
                />
              </div>
            </div>
          </div>
          <div className="cardgrid_glow-wrapper">
            <img
              src={aiFeaturesBg}
              loading="lazy"
              sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 881px) 90vw, 793px"
              srcSet={aiFeaturesBg}
              alt
              className="image-30"
            />
          </div>
          <div className="cardgrid">
            <div className="cardgrid-row">
              <div className="cardgrid-item">
                <div className="card-regular">
                  <div className="icon-1x1-medium w-embed">
                    <svg
                      width={23}
                      height={23}
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.44336 2.46875C5.57737 2.46875 2.44336 5.60276 2.44336 9.46875C2.44336 13.3347 5.57737 16.4688 9.44336 16.4688C13.3094 16.4688 16.4434 13.3347 16.4434 9.46875C16.4434 5.60276 13.3094 2.46875 9.44336 2.46875ZM0.443359 9.46875C0.443359 4.49819 4.4728 0.46875 9.44336 0.46875C14.4139 0.46875 18.4434 4.49819 18.4434 9.46875C18.4434 14.4393 14.4139 18.4688 9.44336 18.4688C4.4728 18.4688 0.443359 14.4393 0.443359 9.46875ZM9.44336 6.46875C8.64771 6.46875 7.88465 6.78482 7.32204 7.34743C6.75943 7.91004 6.44336 8.6731 6.44336 9.46875H4.44336C4.44336 8.14267 4.97014 6.8709 5.90783 5.93322C6.84551 4.99553 8.11728 4.46875 9.44336 4.46875V6.46875ZM17.4434 16.0545L22.8576 21.4688L21.4434 22.883L16.0291 17.4688L17.4434 16.0545Z"
                        fill="#fc6432"
                        style={{
                          fill: "#fc6432",
                          fillOpacity: 1,
                        }}
                      />
                    </svg>
                  </div>
                  <h4 className="text-color-primary">AI Wallet Tracker</h4>
                  <div className="text-size-regular text-color-secondary">
                    Track project funds with AI precision, ensuring launchpad
                    investments are secure.
                  </div>
                </div>
              </div>
              <div className="cardgrid-item">
                <div className="card-regular">
                  <div className="icon-1x1-medium w-embed">
                    <svg
                      width={24}
                      height={25}
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.4434 2.46875C13.2342 2.46875 11.4434 4.25961 11.4434 6.46875C11.4434 8.67789 13.2342 10.4688 15.4434 10.4688C17.6525 10.4688 19.4434 8.67789 19.4434 6.46875C19.4434 4.25961 17.6525 2.46875 15.4434 2.46875ZM9.44336 6.46875C9.44336 3.15504 12.1297 0.46875 15.4434 0.46875C18.7571 0.46875 21.4434 3.15504 21.4434 6.46875C21.4434 9.78246 18.7571 12.4688 15.4434 12.4688C12.1297 12.4688 9.44336 9.78246 9.44336 6.46875ZM16.4434 4.46875V8.46875H14.4434V4.46875H16.4434ZM0.443359 11.4688H2.44336C3.09417 11.4688 4.17142 11.5928 5.24578 11.9285C6.1437 12.2091 7.17475 12.6794 7.91526 13.4688H10.4434C11.7694 13.4688 13.0412 13.9955 13.9789 14.9332C14.9166 15.8709 15.4434 17.1427 15.4434 18.4688V19.4688H7.44336V17.4688H13.2718C13.124 17.0508 12.8841 16.6668 12.5647 16.3474C12.0021 15.7848 11.239 15.4688 10.4434 15.4688H6.92287L6.62428 15.0424C6.26713 14.5325 5.55039 14.1191 4.64919 13.8375C3.7733 13.5637 2.89755 13.4688 2.44336 13.4688V18.8507L8.45752 21.8573C9.1474 22.2024 9.94391 22.2686 10.6812 22.042V22.042L21.1712 18.814C21.0364 18.4251 20.7849 18.087 20.4507 17.8462C20.1102 17.6008 19.7011 17.4687 19.2814 17.4688H16.4434V15.4688H19.2814C20.1208 15.4687 20.939 15.7328 21.62 16.2236C22.3011 16.7144 22.8105 17.4071 23.076 18.2034L23.7154 20.1236L11.2695 23.9535C10.0406 24.3313 8.71308 24.2213 7.5632 23.6462V23.6462L0.443359 20.0868V11.4688Z"
                        fill="#fc6432"
                        style={{
                          fill: "#fc6432",
                          fillOpacity: 1,
                        }}
                      />
                    </svg>
                  </div>
                  <h4 className="text-color-primary">AI Insight Analyzer</h4>
                  <div className="text-size-regular text-color-secondary">
                    Deep, AI-driven insights on launchpad projects for smarter,
                    strategic investment choices.
                  </div>
                </div>
              </div>
            </div>
            <div className="cardgrid-row">
              <div className="card-highlight">
                <div className="glow-wraper">
                  <img
                    src={aiFeaturesBg2}
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 90vw, 40vw"
                    alt
                    className="image-26"
                  />
                </div>
                <div className="card-highlight_content">
                  <h4 className="text-color-primary-invert margin-none">
                    AI Market Predictor
                  </h4>
                  <div className="text-size-regular text-color-primary-invert">
                    Harness AI to forecast market trends, shaping your launchpad
                    investment strategy.
                  </div>
                  <a
                    href="https://stacknova-ai.gitbook.io/stacknova-ai/stacknova-ecosystem/five-pillars-of-ai"
                    target="_blank"
                    className="button_primary w-inline-block"
                  >
                    <div>Learn More</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="cardgrid-row">
              <div className="cardgrid-item">
                <div className="card-regular">
                  <div className="icon-1x1-medium w-embed">
                    <svg
                      width={25}
                      height={23}
                      viewBox="0 0 25 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.443359 12.4688C0.443359 5.84147 5.81607 0.46875 12.4434 0.46875C19.0706 0.46875 24.4434 5.84147 24.4434 12.4688C24.4434 16.7932 22.1492 20.5687 18.7273 22.6789L17.6775 20.9766C20.5375 19.2128 22.4434 16.0663 22.4434 12.4688C22.4434 6.94603 17.9661 2.46875 12.4434 2.46875C6.92064 2.46875 2.44336 6.94603 2.44336 12.4688C2.44336 16.0663 4.34919 19.2128 7.20926 20.9766L6.15946 22.6789C2.73753 20.5687 0.443359 16.7932 0.443359 12.4688ZM5.44336 12.4688C5.44336 8.60247 8.57707 5.46875 12.4434 5.46875C16.3096 5.46875 19.4434 8.60247 19.4434 12.4688C19.4434 14.9924 18.103 17.1947 16.1095 18.4248L15.0592 16.7227C16.4917 15.8388 17.4434 14.2651 17.4434 12.4688C17.4434 9.70704 15.2051 7.46875 12.4434 7.46875C9.68164 7.46875 7.44336 9.70704 7.44336 12.4688C7.44336 14.2651 8.39502 15.8388 9.82748 16.7227L8.77724 18.4248C6.7837 17.1947 5.44336 14.9924 5.44336 12.4688ZM10.4434 12.4688C10.4434 11.3642 11.3388 10.4688 12.4434 10.4688C13.5479 10.4688 14.4434 11.3642 14.4434 12.4688C14.4434 13.5733 13.5479 14.4688 12.4434 14.4688C11.3388 14.4688 10.4434 13.5733 10.4434 12.4688Z"
                        fill="#fc6432"
                        style={{
                          fill: "#fc6432",
                          fillOpacity: 1,
                        }}
                      />
                    </svg>
                  </div>
                  <h4 className="text-color-primary">AI FAQ Assistant</h4>
                  <div className="text-size-regular text-color-secondary">
                    Instant, accurate launchpad info at your fingertips with our
                    AI FAQ system.
                  </div>
                </div>
              </div>
              <div className="cardgrid-item">
                <div className="card-regular">
                  <div className="icon-1x1-medium w-embed">
                    <svg
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.0124 0.516929C11.3075 0.451059 11.6136 0.452752 11.908 0.521881L11.9145 0.523408C12.8359 0.746292 13.7384 1.21538 14.4073 2.0452C15.0797 2.87944 15.4434 3.98818 15.4434 5.35539V8.3554H21.4434C21.9126 8.35577 22.376 8.46622 22.7948 8.67785C23.2136 8.88948 23.5769 9.1964 23.8556 9.57395C24.1342 9.9515 24.3204 10.3891 24.3992 10.8517C24.4779 11.3143 24.4471 11.7889 24.3092 12.2374L21.5402 21.2374V21.2374C21.3515 21.8507 20.9711 22.3875 20.4549 22.7687C19.9388 23.1498 19.314 23.3555 18.6724 23.3554V23.3554H8.44336V21.3554H18.6724C18.8863 21.3554 19.0947 21.2869 19.2668 21.1598C19.4389 21.0327 19.5657 20.8538 19.6286 20.6494L22.3976 11.6494V11.6494C22.4435 11.4999 22.4538 11.3417 22.4276 11.1875C22.4013 11.0333 22.3392 10.8874 22.2464 10.7616C22.1535 10.6357 22.0324 10.5334 21.8928 10.4629C21.7532 10.3923 21.599 10.3555 21.4426 10.3554H13.4434V5.35539C13.4434 4.34961 13.1815 3.71136 12.8502 3.30034C12.516 2.88577 12.0378 2.61161 11.4479 2.46825L11.4442 2.46736L11.6794 1.4954L11.4507 2.46891L11.4479 2.46825L11.4456 2.47005L11.444 2.47214L11.4434 2.47475V6.71745L6.44336 12.7174V23.3554H0.443359V9.3554H6.44336V9.59335L9.44336 5.99335V2.4744C9.44347 2.17203 9.51192 1.87325 9.64361 1.60107C9.7753 1.32889 9.96681 1.09 10.2038 0.902264C10.4409 0.714526 10.7173 0.582798 11.0124 0.516929ZM4.44336 11.3554H2.44336V21.3554H4.44336V11.3554Z"
                        fill="#fc6432"
                        style={{
                          fill: "#fc6432",
                          fillOpacity: 1,
                        }}
                      />
                    </svg>
                  </div>
                  <h4 className="text-color-primary">AI Tokenomics Scanner</h4>
                  <div className="text-size-regular text-color-secondary">
                    Leverage AI-powered analysis of project tokenomics for
                    informed, confident investing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditSecton;
