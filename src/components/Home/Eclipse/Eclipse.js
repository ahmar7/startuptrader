import React from "react";
import "./Eclipse.css";
import Circle from "../../../assets/video/circles-rotation.webm";
const Eclipse = () => {
  return (
    <div className="eclipse-main">
      {/* Desktop Version */}
      <div className="desk-only section-3_container__Rbmzm ">
        <div className="flex inner-pad flex-col items-center absolute w-full text-center z-10">
          <h1>Innovate, Secure &amp; Empower:</h1>
          <h1>
            <span className="text-[#E2CD6C]">Stacknova Launchpad</span>
          </h1>
        </div>
        <div className="panel-1">
          <div className="ellipses">
            <video autoPlay muted loop>
              <source type="video/webm" src={Circle} />
            </video>
          </div>
          <div>
            <div className="section-3_acceleratorIcon___t779">
              <span className="section-3_acceleratorText__6QKzJ">AI</span>
              <div className="section-3_popup__q_f81">
                <h6 className="section-3_h6__eii5y">AI Innovation</h6>
                <div className="section-3_body2__NoQ5Q">
                  Dive into our AI-powered launchpad, the heart of our mission
                  to revolutionize the Bitcoin DeFi ecosystem, offering project
                  creators and investors a platform enriched with advanced AI
                  tools for superior decision-making and project evaluation.
                </div>
              </div>
            </div>
            <div className="section-3_launchpadIcon__RsDk7">
              <span className="section-3_launchpadText__GU3Zb">Bitcoin</span>
              <div className="section-3_popup__q_f81">
                <h6 className="section-3_h6__eii5y">Bitcoin Security</h6>
                <div className="section-3_body2__NoQ5Q">
                  Experience the robustness of the Bitcoin network with Stacks
                  Layer 2 technology, providing a secure and reliable foundation
                  for our AI-powered launchpad and ensuring a trusted
                  environment for all your DeFi engagements.
                </div>
              </div>
            </div>
            <div className="section-3_growthAgencyIcon__baZ47">
              <span className="section-3_growthAgencyText__7_0T0">
                Community
              </span>
              <div className="section-3_popup__q_f81">
                <h6 className="section-3_h6__eii5y">Community Power</h6>
                <div className="section-3_body2__NoQ5Q">
                  Engage with Stacknova's Community Power through $SNOVA, your
                  key to governance and exclusive AI tools. Influence our
                  future, enjoy early product access, and benefit from exclusive
                  airdrops, making you a vital part of our evolving ecosystem.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className="flex flex-col items-center panel-2 mt-96 relative">
          <div className="section-3_line__t6gF0" />
          <div class="section-3_acceleratorIcon2__112og"></div>
        </div>{" "}
        */}
      </div>
      {/* Mobile version */}
      <div className="mbl-only mt-5as">
        <div className="section-3-mobile_container__vXiWF">
          <div className="panel-1" />
          <div className="flex flex-col items-center absolute w-full text-center z-10">
            <h1>Innovate, Secure &amp; Empower:</h1>
            <h1>
              <span className="text-[#E2CD6C]">Stacknova Launchpad</span>
            </h1>
          </div>
          <div className="flex flex-col items-center panel-2 mt-96 relative">
            <div className="section-3-mobile_popup__YpZUj">
              <div className="w-full flex flex-col items-center">
                <div className="section-3-mobile_launchpadIcon__5MIFC" />
              </div>
              <h6 className="section-3-mobile_h6__tvakd">AI Innovation</h6>
              <div className="section-3-mobile_body2__BWU13">
                Dive into our AI-powered launchpad, the heart of our mission to
                revolutionize the Bitcoin DeFi ecosystem, offering project
                creators and investors a platform enriched with advanced AI
                tools for superior decision-making and project evaluation.
              </div>
            </div>
            <div className="section-3-mobile_popup__YpZUj">
              <div className="w-full flex flex-col items-center">
                <div className="section-3-mobile_growthAgencyIcon__NLI0d" />
              </div>
              <h6 className="section-3-mobile_h6__tvakd">Bitcoin Security</h6>
              <div className="section-3-mobile_body2__BWU13">
                Experience the robustness of the Bitcoin network with Stacks
                Layer 2 technology, providing a secure and reliable foundation
                for our AI-powered launchpad and ensuring a trusted environment
                for all your DeFi engagements.
              </div>
            </div>
            <div className="section-3-mobile_popup__YpZUj">
              <div className="w-full flex flex-col items-center">
                <div className="section-3-mobile_acceleratorIcon__DHFAg" />
              </div>
              <h6 className="section-3-mobile_h6__tvakd">Community Power</h6>
              <div className="section-3-mobile_body2__BWU13">
                Engage with Stacknova's Community Power through $SNOVA, your key
                to governance and exclusive AI tools. Influence our future,
                enjoy early product access, and benefit from exclusive airdrops,
                making you a vital part of our evolving ecosystem.
              </div>
            </div>
            {/*
            <div className="section-3-mobile_line__Em3Ui" />
            <div className="section-3-mobile_acceleratorIcon2__NvFUR" />
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eclipse;
