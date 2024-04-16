import chart__2 from "../../../assets/img/chart (2).png";
import chart from "../../../assets/img/chart.png";
import user from "../../../assets/img/user.png";
import rocket from "../../../assets/img/rocket.png";
import check from "../../../assets/img/check.png";
import coin from "../../../assets/img/coin.png";
import openAi from "../../../assets/img/openai-logo.svg";
import bitcoin from "../../../assets/img/bitcoin-logo.svg";
import stacks from "../../../assets/img/full-stacks-logo.png";
import aws from "../../../assets/img/aws-logo.svg";
import Marquee from "react-fast-marquee";

import metamask from "../../../assets/img/MetaMask.svg";
import trustwallet from "../../../assets/img/trustwallet-logo.png";
import walletconnect from "../../../assets/img/walletconnect-logo.png";

import unisat from "../../../assets/img/unisat.png";
import okx from "../../../assets/img/okx-wallet.svg";
import leather from "../../../assets/img/leather-logo.svg";
import xverse from "../../../assets/img/xverse.png";

import Coin from "../../../assets/img/coin.svg";
import twitterIcon from "../../../assets/img/twitter-icon.svg";
import discordIcon from "../../../assets/img/discord-icon.svg";
import telegramIcon from "../../../assets/img/telegram-icon.svg";
import barIcon from "../../../assets/img/bar-icon.svg";
import wallet from "../../../assets/img/connect-wallet.svg";

import Eth from "../../../assets/img/eth-icon.png";
import Plg from "../../../assets/img/plg-icon.png";
import Avax from "../../../assets/img/avax-icon.png";
import Bnb from "../../../assets/img/bnb-icon.png";
import Arbi from "../../../assets/img/arbitrum-icon.png";
import Opt from "../../../assets/img/optimism-icon.png";
import Base from "../../../assets/img/base-icon.png";

import UsdC from "../../../assets/img/usdc-symbol.webp";
import EthSymbol from "../../../assets/img/eth-symbol.webp";
import Tether from "../../../assets/img/tether-icon.webp";
import stacknovaLogo from "../../../assets/img/stacknova-full.png";
import logoIcon from "../../../assets/img/logo-icon-dark.png";
import heading from "../../../assets/img/stacknova-heading.png";

import snovaCoin from "../../../assets/img/snova-coin-white.svg";
import snovaCoinTrans from "../../../assets/img/snova-coin-transparent.svg";
import questionHelp from "../../../assets/img/question-help.svg";

import React, { useState } from "react";

import "./banner.css";
const Banner = () => {
  const [dropInner, setdropInner] = useState(false);
  const [modal2, setmodal2] = useState(false);
  let toggleInner = () => {
    setdropInner(!dropInner);
  };
  let toggleModal2 = () => {
    setmodal2(!modal2);
  };
  return (
    <>
      {dropInner && <div onClick={toggleInner} className="in-overlay"></div>}
      {modal2 && <div onClick={toggleModal2} className="in-overlay"></div>}
      <div className="relative  pt-5  banner-sd bg-black">
        {/*  */}
        <div
          className="opacity-0 h-baner animate-[hero-enter_2s_ease-out_0.5s_forwards] absolute top-[216px] ai-dt:top-[184px] w-[1459px] h-[1461px]"
          style={{ left: "50%", transform: "translate(-50%, 0%)" }}
        >
          <div
            className="w-[100%] banner-globe height-ati h-[100%] relative"
            style={{
              transform: "rotate(180deg)",
              zIndex: 4,
              flexShrink: 0,
              borderRadius: "100%",
              opacity: "0.4",
              mixBlendMode: "luminosity",
              rotate: "180deg",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={1459}
              viewBox="0 0 1459 1461"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M0.499936 730.5C0.499901 1133.67 326.885 1460.5 729.5 1460.5C1132.11 1460.5 1458.5 1133.67 1458.5 730.5C1458.5 327.331 1132.11 0.499971 729.5 0.499936C326.885 0.499901 0.499971 327.331 0.499936 730.5Z"
                stroke="transparent"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3113_17586"
                  x1="729.5"
                  y1="-6.37749e-05"
                  x2="729.5"
                  y2={1461}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset={1} stopColor="white" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="main-bane max-width">
          <div className="styles_hero_wrapper__YKVi1 ">
            <div className="styles_heading__G8N8m text-banner">
              <div className="_initial_401a9_1 _show_401a9_24 head-txt">
                <h1 className="text-white text-[32px] desktop:text-[56px] font-[500] max-w-[588px] tracking-[-2.8px] leading-[1.1] _title_1r323_13">
                  <img src={heading} style={{ "margin-bottom": "15px" }} />
                  The First AI-Powered Bitcoin Launchpad
                </h1>
              </div>
              <div
                className="_initial_401a9_1 _show_401a9_24 mb-676"
                style={{ transitionDelay: "0.1s" }}
              >
                {/*
                <p className="mt-[20px] desktop:mt-[32px] max-w-[556px] text-[#D6D6D6] leading-[1.5] text-[16px] desktop:text-[18px]">
                  Stacknova AI emerges as the world's first AI-driven Launchpad
                  built atop Bitcoin's unparalleled security through Stacks
                  Layer 2 technology. Experience the robustness of Bitcoin
                  combined with advanced AI analytics, revolutionizing your
                  investment decisions with unparalleled insight and security
                  like never before.
                </p>
                */}
              </div>

              <div className="flex">
                <a
                  target="_blank"
                  href="https://twitter.com/StacknovaBTC"
                  className="styles_social_link__Vhvdy"
                >
                  <img
                    alt="twitter"
                    loading="lazy"
                    width={90}
                    height={51}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src={twitterIcon}
                  />
                </a>

                <a
                  target="_blank"
                  href="https://t.me/stacknova"
                  className="styles_social_link__Vhvdy"
                >
                  <img
                    alt="telegram"
                    loading="lazy"
                    width={90}
                    height={51}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent", "margin-left": "20px" }}
                    src={telegramIcon}
                  />
                </a>
              </div>
            </div>
            <div id="presaleForm" className="styles_form__bJr2K ">
              <div
                data-is-root-theme="true"
                data-accent-color="indigo"
                data-gray-color="slate"
                data-has-background="false"
                data-panel-background="translucent"
                data-radius="medium"
                data-scaling="100%"
                className="radix-themes"
              >
                <div className="sc-jiaSqj bjKEmb ant-flex css-dev-only-do-not-override-1q8nizr ant-flex-align-stretch ant-flex-vertical">
                  <div
                    className="ant-space css-dev-only-do-not-override-1q8nizr ant-space-vertical ant-space-gap-row-large ant-space-gap-col-large"
                    style={{ width: "100%" }}
                  >
                    <div className="ant-space-item">
                      <div className="ant-flex css-dev-only-do-not-override-1q8nizr ant-flex-align-end ant-flex-justify-space-between">
                        <h2
                          className="sc-hVcFVo dliLav css-dev-only-do-not-override-1q8nizr buy-token-heading"
                          style={{ fontWeight: 600, textAlign: "left" }}
                        >
                          Buy SNOVA Token
                        </h2>
                        <div className="ant-flex css-dev-only-do-not-override-1q8nizr ant-flex-align-center ant-flex-gap-small">
                          <span
                            className="css-dev-only-do-not-override-1q8nizr buy-token-heading buy-token-stage"
                            style={{ fontWeight: 600 }}
                          >
                            <a
                              href="https://stacknova-ai.gitbook.io/stacknova-ai/getting-started/presale"
                              target="_blank"
                            >
                              <img src={questionHelp} className="help-icon" />{" "}
                              Stage 1 / 10
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ant-space-item">
                      <div
                        className="ant-space css-dev-only-do-not-override-1q8nizr ant-space-vertical ant-space-gap-row-large ant-space-gap-col-large"
                        style={{ width: "100%" }}
                      >
                        <div className="ant-space-item">
                          <div className="ant-card css-dev-only-do-not-override-1q8nizr">
                            <div className="ant-card-body">
                              <div className="sc-kiTBBF fXrYYN ant-flex css-dev-only-do-not-override-1q8nizr ant-flex-align-center ant-flex-justify-space-between">
                                <div
                                  className="ant-space css-dev-only-do-not-override-1q8nizr ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small"
                                  style={{ marginBottom: 0 }}
                                >
                                  <div className="ant-space-item">
                                    <img
                                      src={snovaCoin}
                                      alt="SNOVA"
                                      width={30}
                                    />
                                  </div>
                                  <div className="ant-space-item">
                                    <h5
                                      className="ant-typography css-dev-only-do-not-override-1q8nizr"
                                      style={{
                                        fontWeight: 600,
                                        "font-size": 16,
                                      }}
                                    >
                                      1 $SNOVA ={" "}
                                      <span
                                        className="ant-typography ant-typography-secondary css-dev-only-do-not-override-1q8nizr"
                                        style={{ fontSize: 18 }}
                                      >
                                        $0.016
                                      </span>
                                    </h5>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    fontSize: 16,
                                    textAlign: "end",
                                    textWrap: "balance",
                                  }}
                                >
                                  Next Stage Price ={" "}
                                  <span
                                    className="ant-typography ant-typography-secondary css-dev-only-do-not-override-1q8nizr"
                                    style={{ fontSize: 18 }}
                                  >
                                    $0.024
                                  </span>
                                </div>
                              </div>
                              <div
                                className="ant-divider css-dev-only-do-not-override-1q8nizr ant-divider-horizontal"
                                role="separator"
                              />
                              <div className="ant-row css-dev-only-do-not-override-1q8nizr">
                                <div
                                  className="ant-col ant-col-12 css-dev-only-do-not-override-1q8nizr"
                                  style={{ marginBottom: 0 }}
                                >
                                  <h5
                                    className="ant-typography css-dev-only-do-not-override-1q8nizr"
                                    style={{
                                      fontWeight: 700,
                                      color: "rgb(145, 143, 165)",
                                      marginBottom: 10,
                                    }}
                                  >
                                    Total USD raised
                                  </h5>
                                  <div
                                    className="ant-flex css-dev-only-do-not-override-1q8nizr ant-flex-align-end"
                                    style={{ gap: 5 }}
                                  >
                                    <span className="sc-dQmiwx gauvWo">$0</span>
                                    <span className="sc-bCvmQg ilRECC">
                                      <span className="inal">/</span> $4,735,200
                                    </span>
                                  </div>
                                </div>
                                <div className="ant-col ant-col-12 css-dev-only-do-not-override-1q8nizr">
                                  <h5
                                    className="ant-typography css-dev-only-do-not-override-1q8nizr"
                                    style={{
                                      fontWeight: 700,
                                      color: "rgb(145, 143, 165)",
                                      marginBottom: 10,
                                    }}
                                  >
                                    Tokens sold
                                  </h5>
                                  <div
                                    className="ant-flex css-dev-only-do-not-override-1q8nizr ant-flex-align-end ant-flex-justify-flex-start"
                                    style={{ gap: 5 }}
                                  >
                                    <span className="sc-dQmiwx igeQtI">0</span>
                                    <span className="sc-bCvmQg ilRECC">
                                      <span className="inal">/</span>{" "}
                                      100,000,000
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="ant-space css-dev-only-do-not-override-1q8nizr ant-space-vertical ant-space-gap-row-small ant-space-gap-col-small"
                                style={{ width: "100%", paddingTop: 24 }}
                              >
                                <div className="ant-space-item">
                                  <div className="ant-flex css-dev-only-do-not-override-1q8nizr ant-flex-justify-space-between">
                                    <span className="sc-cPtzlb bsexPo">
                                      STAGE 1: 0%
                                    </span>
                                    <span className="sc-BCDEK gPcpgG">
                                      $0 / $27,200
                                    </span>
                                  </div>
                                </div>
                                <div className="ant-space-item">
                                  <div
                                    className="sc-jMbVJB lnHNEZ"
                                    style={{
                                      backgroundColor: "rgb(128, 128, 128)",
                                    }}
                                  >
                                    <div
                                      role="progressbar progress-striped"
                                      className="sc-dQmiwx ccBJdJ"
                                      style={{
                                        width: "0%",
                                        backgroundColor: "rgb(252 100 50)",
                                      }}
                                    />
                                    <div
                                      className="_coin_1gl9j_48 _coin_anim_full_1gl9j_54"
                                      style={{ left: "0" }}
                                    >
                                      <img src={Coin} alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ant-space-item">
                      <div
                        className="ant-space css-dev-only-do-not-override-1q8nizr ant-space-vertical ant-space-gap-row-large ant-space-gap-col-large"
                        style={{ width: "100%" }}
                      >
                        <div className="css-xqm7c5">
                          <div className="bl-inline-flex  bl-items-center bl-justify-center bl-transition-colors bl-relative bl-h-[55px] bl-min-w-[260px] bl-text-[26px]/none   bl-text-primary h-[40px] laptop:h-[44px] bg-[#44403C] flex justify-center gap-[8px] items-center">
                            <img
                              width="20px"
                              height="20px"
                              src={Eth}
                              alt="ETH"
                              style={{ borderRadius: "50%" }}
                            />
                            <p className="MuiTypography-root MuiTypography-body1 css-qa4mxb">
                              ETH
                            </p>
                            <div class="bl-border-primary bl-absolute bl-h-2.5 bl-w-2.5 bl-border-l bl-border-t bl-top-0 bl-left-0"></div>
                            <div class="bl-border-primary bl-absolute bl-h-2.5 bl-w-2.5 bl-border-r bl-border-b bl-right-0 bl-bottom-0"></div>
                          </div>
                          {/*  */}
                          {/* <a
                            href="https://stacknova-ai.gitbook.io/stacknova-ai"
                            target="_blank"
                            class="bl-inline-flex bl-items-center bl-justify-center bl-transition-colors bl-relative bl-h-[55px] bl-min-w-[260px] bl-text-[26px]/none bl-bg-primary/20 bl-text-primary"
                          >
                            <span>View Docs</span>
                            <div class="bl-border-primary bl-absolute bl-h-2.5 bl-w-2.5 bl-border-l bl-border-t bl-top-0 bl-left-0"></div>
                            <div class="bl-border-primary bl-absolute bl-h-2.5 bl-w-2.5 bl-border-r bl-border-b bl-right-0 bl-bottom-0"></div>
                          </a> */}
                          {/*  */}
                          <button
                            onClick={toggleModal2}
                            className="h-[40px] laptop:h-[44px] border border-solid border-[#57534E] relative"
                          >
                            <div className="border-solid gap15 border-[#57534E] flex justify-center">
                              <div
                                className="flex relative w-[44px] h-[20px]"
                                style={{ width: 95 }}
                              >
                                <img
                                  className="absolute"
                                  width="20px"
                                  height="20px"
                                  src={Eth}
                                  alt="ETH"
                                  style={{ borderRadius: "50%", left: 0 }}
                                />
                                <img
                                  className="absolute"
                                  width="20px"
                                  height="20px"
                                  src={Bnb}
                                  alt="BSC"
                                  style={{ borderRadius: "50%", left: 15 }}
                                />
                                <img
                                  className="absolute"
                                  width="20px"
                                  height="20px"
                                  src={Plg}
                                  alt="PLG"
                                  style={{ borderRadius: "50%", left: 30 }}
                                />
                                <img
                                  className="absolute"
                                  width="20px"
                                  height="20px"
                                  src={Arbi}
                                  alt="ARB"
                                  style={{ borderRadius: "50%", left: 45 }}
                                />
                                <img
                                  className="absolute"
                                  width="20px"
                                  height="20px"
                                  src={Avax}
                                  alt="AVAX"
                                  style={{ borderRadius: "50%", left: 60 }}
                                />
                                <img
                                  className="absolute"
                                  width="20px"
                                  height="20px"
                                  src={Opt}
                                  alt="BASE"
                                  style={{ borderRadius: "50%", left: 75 }}
                                />
                                <img
                                  className="absolute"
                                  width="20px"
                                  height="20px"
                                  src={Base}
                                  alt="BASE"
                                  style={{ borderRadius: "50%", left: 90 }}
                                />
                              </div>
                              <div
                                style={
                                  modal2
                                    ? {
                                        transform: "rotate(180deg)",
                                        transition: "all 0.3s ease",
                                      }
                                    : {
                                        transform: "rotate(0deg)",
                                        transition: "all 0.3s ease",
                                      }
                                }
                              >
                                <svg
                                  width={25}
                                  height={25}
                                  viewBox="0 0 25 25"
                                  fill="#79716B"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="flex relative h-[20px]"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.9625 10.0171L12.0825 13.8971L8.2025 10.0171C7.8125 9.62711 7.1825 9.62711 6.7925 10.0171C6.4025 10.4071 6.4025 11.0371 6.7925 11.4271L11.3825 16.0171C11.7725 16.4071 12.4025 16.4071 12.7925 16.0171L17.3825 11.4271C17.7725 11.0371 17.7725 10.4071 17.3825 10.0171C16.9925 9.63711 16.3525 9.62711 15.9625 10.0171Z"
                                    fill="#79716B"
                                  />
                                </svg>
                              </div>
                            </div>
                            {modal2 && (
                              <div className="border-solid border-[#57534E] absolute float-it">
                                <div className="h-[40px]   flex justify-start main-hep gap-[8px] items-center hover-tab">
                                  <img
                                    width="20px"
                                    height="20px"
                                    src="data:image/png;base64,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"
                                    alt="ETH"
                                    style={{ borderRadius: "50%" }}
                                  />
                                  <p className="MuiTypography-root MuiTypography-body1 css-qa4mxb">
                                    ETH
                                  </p>
                                </div>
                                <div className="h-[40px]   flex justify-start main-hep gap-[8px] items-center hover-tab">
                                  <img
                                    width="20px"
                                    height="20px"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFMklEQVR4XtVbvW4TQRhMSWwipYYngCeACsp0pEsJFZTp8gapaXgD6F0gETsIWaRIARIopAAJJAcJCgq4s5M4/zE3l6y1nv253fXe2R5plOR2787f7PfN7u05c3MVIGksLiYbNx92W/XnaavWSFv1TrpZT7Kfg5xXv3fQhj7oi3P4OjOD7ub8ahZUexjguGzW271W/THfZ+qAkYsauMJaI3mzsMz3nThG0rky1jr8OSpHPuJ57fKHq4q1zkRKI9moP5nMqJtYoRBwZ/UDTAdLnzmma9RNLMkb8rRXbjadjF4OfINZIccRhFkaeebYmZCWNMV1390enOy9GAgc7j5T+kRkwnE5oUy3vzxLh8ELXPR/Kv1i0Xt2KCPte1t3OWYtyhLCqxzSyKl//GNdO+omQIQSysKtFGKO/tm/LY5tBEff1wenf17z4REcZ17B1w0llu4cr4I0wuizyelw9ndr2P+iv8fNI4iXDQWLpDRC8KApoMuzZND/uqb0Fzz59ZJPGSJiJphLQdM5mP3dpxxDlhm3lH7M3vs7fNpg/8OS0m8cctw5ktbCMnd0YT9LT8Dk3giIj4EHH5eGAeqEwXm64ygvAcws3O5CrRdc79UpnW1kkzvv7Th9KPYHV9c/+ramzCZBpdGst0eC93V+Dpyxv31POQfEqNrq3OYPmDFsOMxKjs+xsducXx0K4LuPZxKgyOQEdSbpMpI28XwFGMkCpbGALMB5d0c76vAHpCwWQrp6xqgeflpRju9v38/vgTWCrqRgsFwK3gK0JDPkhiKyAEdZgNxHNjnAZJJM2eQEdCJwFgULkLT9H3psAmCki6ALiAXTQe4fQ4D8Iel6Z1dptPEoq3MZsgAuDz3IBlxDnMOCmiB/BlkA/G6abm3Mp8Or11VqowsPPq/kN/cVIBTyvXFfmKLOW1yJ2IPmfyZMSfxelQCnWfD8ObzZrDWC1v+oVz4mWJUAMmGcOl8pZvZwFLLVjZrFqo+Pgy4mGAq+lyCmxBATTPFgpDlYSNm0TNOb7qEmBFhc8bVBni4DBRiMLQCgWweAwiRDgdWhyeSQgTLCBQgsARkmAQSLngEYLsGwsC7naJiXQEfTYKVNAJiR6ckOu0BFwPKYzxM7TPKxOALABAOmwSIBBE5+vxpxZ90mCUO+D2Yb+V5yWxQBMA2GLIRcBQBkk/QVgCG3xRAgXwiFLIV9BABE27QJsL9540H0h6FZEmD4xogbimgTAMTUJe/giOOhAug2RWMIEG0/AGbHfUAx9Ym/fQXAIkg3KyDL4m6IRNoSY9dn+grAxKwAU9XBWwB5Syz/YiN3sNAkgIBp9TaOANgms8FXAOVlqW8WgEUwZQPXLyC/KpOJrXAbcC0+p5CY/xkh06HLEtfkD7JJ6kwOPO9+ka6kQucPLuy9rT3i+HNwRx/a0pv7utIEk2Cu5LiHCHkwkmnKBtGOOjaVBcgbLQyku2+tq6zgDTGyQa5z+fhVIKOvwuQvUMjXEYA/hGx6qiwIHgjxAhMFxN9cJsgG8XJVgM8PMjkDFec3YdxSMJEF0IHPiUeH0RfwfVnqykkK4Dz6AiEPSS607RWaFlDj0vtrcgJlloJskjA53cvVOPRIfR3KKgfQ9C2QWPROexP4wrNCjmMslJkJsRlt5BlphEVS6dy0fA0uBsqaHWIw2O19cV0OHf4AE2M26qWlvQ2TF6LWyXd2J410EiKUXeshwEZDyJsmZzbr7akY8SJc/2NlWwkglFng2Lfk+8wM4M4YuW7T4d/nsz7oW5Wj/wdXGukMTSgLegAAAABJRU5ErkJggg=="
                                    alt="BSC"
                                  />
                                  <p className="MuiTypography-root MuiTypography-body1 css-qa4mxb">
                                    BSC
                                  </p>
                                </div>
                                <div className="h-[40px]   flex justify-start main-hep gap-[8px] items-center hover-tab">
                                  <img
                                    width="20px"
                                    height="20px"
                                    src={Plg}
                                    alt="PLG"
                                  />

                                  <p className="MuiTypography-root MuiTypography-body1 css-qa4mxb">
                                    PLG
                                  </p>
                                </div>
                                <div className="h-[40px]   flex justify-start main-hep gap-[8px] items-center hover-tab">
                                  <img
                                    width="20px"
                                    height="20px"
                                    src={Arbi}
                                    alt="ARB"
                                  />

                                  <p className="MuiTypography-root MuiTypography-body1 css-qa4mxb">
                                    ARB
                                  </p>
                                </div>
                                <div className="h-[40px]   flex justify-start main-hep gap-[8px] items-center hover-tab">
                                  <img
                                    width="20px"
                                    height="20px"
                                    src={Avax}
                                    alt="AVAX"
                                  />

                                  <p className="MuiTypography-root MuiTypography-body1 css-qa4mxb">
                                    AVAX
                                  </p>
                                </div>
                                <div className="h-[40px] flex justify-start main-hep gap-[8px] items-center">
                                  <img
                                    width="20px"
                                    height="20px"
                                    src={Opt}
                                    alt="OPT"
                                  />

                                  <p className="MuiTypography-root MuiTypography-body1 css-qa4mxb">
                                    OP
                                  </p>
                                </div>
                                <div className="h-[40px] flex justify-start main-hep gap-[8px] items-center">
                                  <img
                                    width="20px"
                                    height="20px"
                                    src={Base}
                                    alt="BASE"
                                  />

                                  <p className="MuiTypography-root MuiTypography-body1 css-qa4mxb">
                                    BASE
                                  </p>
                                </div>
                              </div>
                            )}
                          </button>
                        </div>

                        <div className="ant-space-item">
                          <div style={{ position: "relative" }}>
                            <div className="css-11pg2he">
                              <div className="css-1lekzkb">
                                <div className="css-1p1m4ay">
                                  <p className="MuiTypography-root MuiTypography-body1 text-[14px] css-6hkpqo">
                                    Balance:
                                  </p>
                                  <p className="MuiTypography-root MuiTypography-body1 css-1enqu04">
                                    Connect your wallet
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col laptop:flex-row justify-between gap-[4px] relative mt-[12px]">
                                <div className="css-1c5id9a">
                                  <div
                                    onClick={toggleInner}
                                    className="css-70qvj9"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <img
                                      src={EthSymbol}
                                      alt="Ethereum"
                                      className="css-vqypjx"
                                    />
                                    <p className="text-[14px] text-[#F5F5F4] mx-[8px] font-[500]">
                                      ETH
                                    </p>
                                    <div
                                      className="_arrow_1oajo_1"
                                      style={
                                        dropInner
                                          ? {
                                              transform: "rotate(180deg)",
                                              transition: "all 0.3s ease",
                                            }
                                          : {
                                              transform: "rotate(0deg)",
                                              transition: "all 0.3s ease",
                                            }
                                      }
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8 10L12 5.73613L4 5.73613L8 10Z"
                                          fill="#A9A29D"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  {dropInner && (
                                    <div className=" css-1r69ko0">
                                      <div className="send__asset-select css-f6epcl">
                                        <div className="w-full grid grid-cols-[1fr_0.5fr_0.8fr] items-center">
                                          <div
                                            className="css-70qvj9"
                                            onClick={toggleInner}
                                          >
                                            <div
                                              className="css-1o3uuyz"
                                              style={{
                                                margin: "0px 8px 0px 0px",
                                              }}
                                            >
                                              <img src={EthSymbol} alt="ETH" />
                                              <div className="css-1bjgnzy" />
                                            </div>
                                            <div className="css-cgq59l">
                                              <p className="text-[#F5F5F4] text-[14px]">
                                                Ethereum
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="send__asset-select css-12qhip2"
                                        onClick={toggleInner}
                                      >
                                        <div className="w-full grid grid-cols-[1fr_0.5fr_0.8fr] items-center">
                                          <div className="css-70qvj9">
                                            <div
                                              className="css-1o3uuyz"
                                              style={{
                                                margin: "0px 8px 0px 0px",
                                              }}
                                            >
                                              <img src={Tether} alt="USDT" />
                                            </div>
                                            <div className="css-cgq59l">
                                              <p className="text-[#F5F5F4] text-[14px]">
                                                USDT
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="send__asset-select css-12qhip2"
                                        onClick={toggleInner}
                                      >
                                        <div className="w-full grid grid-cols-[1fr_0.5fr_0.8fr] items-center">
                                          <div className="css-70qvj9">
                                            <div
                                              className="css-1o3uuyz"
                                              style={{
                                                margin: "0px 8px 0px 0px",
                                              }}
                                            >
                                              <img src={UsdC} alt="USDC" />
                                            </div>
                                            <div className="css-cgq59l">
                                              <p className="text-[#F5F5F4] text-[14px]">
                                                USDC
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  <input
                                    type="text"
                                    placeholder={0}
                                    className="css-kxgh99"
                                  />
                                </div>
                                <div className="css-1c5id9a">
                                  <div className="css-70qvj9">
                                    {/*
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M23.7499 7.35313L16.6479 0.250056L16.3979 0H7.60319L7.35313 0.250056L0.250056 7.35313L0 7.60319V16.3968L0.250056 16.6469L7.35313 23.7499L7.60319 24H16.3968L16.6469 23.7499L23.7499 16.6469L24 16.3968V7.60319L23.7499 7.35313ZM7.95797 0.854891H11.6222V6.09217H12.3778V0.854891H16.042C17.1042 1.91709 16.8531 1.66597 17.9078 2.72069V6.09217H18.4154L19.8046 7.48137C18.1611 7.48137 16.0891 7.48137 14.4477 7.48137V6.09217H16.5176V3.29561L15.466 2.24409H13.7659V10.233H15.8903V11.6222H12.3767V7.4803C11.4459 7.4803 8.97101 7.4803 8.1781 7.4803V6.0911H10.2309V2.24409H8.53075C7.38626 3.38857 6.48862 4.28621 5.38902 5.38581H3.42491C3.96776 4.84296 7.46213 1.34859 7.95583 0.854891H7.95797ZM5.38581 20.574C4.84296 20.0312 1.34859 16.5368 0.854891 16.0431V12.3788H6.09217V11.6233H0.854891V7.95797C1.91602 6.89577 1.66597 7.14689 2.72069 6.09217H6.09217V5.58458L7.48137 4.19538V9.55234H6.09217V7.48243H3.29561L2.24409 8.53395V10.2341H10.233V8.10971H11.6222V11.6233H7.48137V15.8219H6.09217V13.7691H2.24409V15.4693C3.38857 16.6137 4.28621 17.5114 5.38581 18.611V20.5751V20.574ZM16.0431 23.1462H12.3788V17.9089H11.6233V23.1462H7.95904C6.89684 22.085 7.14796 22.3351 6.09324 21.2804V17.9089H5.58565L4.19645 16.5197C5.83998 16.5197 7.91202 16.5197 9.55341 16.5197V17.9089H7.4835V20.7044L8.53502 21.757H10.2352V13.768H8.11078V12.3788H11.6244V16.5208C12.5551 16.5208 15.0301 16.5208 15.823 16.5208V17.91H13.7702V21.758H15.4703C16.6148 20.6136 17.5124 19.7159 18.612 18.6163H20.5762C20.0333 19.1592 16.5389 22.6535 16.0452 23.1472L16.0431 23.1462ZM23.1462 11.6233H17.9089V12.3788H23.1462V16.0431C22.085 17.1053 22.3351 16.8542 21.2804 17.9089H17.9089V18.4165L16.5197 19.8057V14.4487H17.9089V16.5186H20.7044L21.7559 15.466V13.7659H13.767V15.8903H12.3778V12.3767H16.5186V8.1781H17.9078V10.2309H21.7559V8.53075C20.6114 7.38626 19.7138 6.48862 18.6142 5.38902V3.42491C19.157 3.96776 22.6514 7.46213 23.1451 7.95583V11.6212L23.1462 11.6233Z"
                                        fill="#E78D24"
                                      />
                                    </svg>
                                    */}
                                    <img
                                      src={logoIcon}
                                      className="buy-snova-icon"
                                    />
                                    <p className="MuiTypography-root MuiTypography-body1 css-eikm1t">
                                      SNOVA
                                    </p>
                                  </div>
                                  <input
                                    type="text"
                                    placeholder={0}
                                    className="css-kxgh99"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="unconnected css-1f35gka"
                              style={{ justifyContent: "start" }}
                            >
                              <div
                                className="css-1p1m4ay"
                                style={{ flexWrap: "wrap" }}
                              >
                                <p className="text-[14px] text-[#79716B] mr-[8px]">
                                  Use
                                </p>
                                <div className="css-70qvj9">
                                  <div className="css-759u60">
                                    <img
                                      src={EthSymbol}
                                      width="20px"
                                      height="20px"
                                      alt="ETH"
                                      style={{
                                        borderRadius: "50%",
                                        width: 20,
                                        height: 20,
                                        objectFit: "cover",
                                      }}
                                    />
                                    <p className="text-[14px] text-[#F5F5F4] ml-[4px]">
                                      ETH
                                    </p>
                                  </div>
                                </div>
                                <div className="css-70qvj9">
                                  <p className="text-[14px] ml-[8px] mr-[8px] text-[#79716B]">
                                    or
                                  </p>
                                  <div className="css-759u60">
                                    <img
                                      src={Tether}
                                      width="20px"
                                      height="20px"
                                      alt="USDT"
                                      style={{
                                        borderRadius: "50%",
                                        width: 20,
                                        height: 20,
                                        objectFit: "cover",
                                      }}
                                    />
                                    <p className="text-[14px] text-[#F5F5F4] ml-[4px]">
                                      USDT
                                    </p>
                                  </div>
                                </div>
                                <div className="css-70qvj9">
                                  <p className="text-[14px] ml-[8px] mr-[8px] text-[#79716B]">
                                    or
                                  </p>
                                  <div className="css-759u60">
                                    <img
                                      src={UsdC}
                                      width="20px"
                                      height="20px"
                                      alt="USDC"
                                      style={{
                                        borderRadius: "50%",
                                        width: 20,
                                        height: 20,
                                        objectFit: "cover",
                                      }}
                                    />
                                    <p className="text-[14px] text-[#F5F5F4] ml-[4px]">
                                      USDC
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="ant-flex css-dev-only-do-not-override-1q8nizr ant-flex-align-stretch ant-flex-gap-large ant-flex-vertical"
                              style={{}}
                            >
                              <button
                                type="button"
                                className="ant-btn css-dev-only-do-not-override-1q8nizr ant-btn-primary"
                                style={{
                                  width: "100%",
                                  backgroundColor: "#fc6432",
                                  color: "rgb(255, 255, 255)",
                                  border: "1px solid rgb(246 220 202 / 0.4)",
                                }}
                              >
                                <img src={wallet} className="wallet-icon" />
                                <span className="btn-buy-token">Connect</span>
                              </button>
                              <a
                                className="ant-typography css-dev-only-do-not-override-1q8nizr"
                                href="https://stacknova-ai.gitbook.io/stacknova-ai/getting-started/presale/your-guide-to-buying-usdsnova"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "rgb(141, 141, 141)",
                                  fontSize: 20,
                                  textAlign: "center",
                                }}
                              >
                                How To Buy?
                              </a>
                            </div>
                            <p className="text-center text-[#79716B] text-[10px] font-[500] mt-[12px] laptop:mt-[20px]">
                              By proceeding with this purchase, you acknowledge
                              and agree that you have read, understood, and
                              accept the Terms and Conditions, along with all
                              related documents. You also confirm that you are
                              over 18 years old and not a resident of any
                              restricted jurisdictions.
                            </p>
                          </div>
                        </div>
                        <div className="ant-space-item" />
                        <div className="ant-space-item" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="styles_launch_wrapper__RMuag">
              {/*<p className="styles_banner_caption__OiBYq">DATAFORTRESS NAME:</p>*/}
              <div className="styles_launch__piPr_">
                <a
                  target="_blank"
                  href="https://stacknova-ai.gitbook.io/stacknova-ai/"
                >
                  <div className="styles_banner__ib2vN styles_custom_banner__Zjm0K">
                    <div className="styles_banner_button__jpdlt">
                      <div className="styles_wrapper__rvxNW">
                        <img
                          alt="logo"
                          loading="lazy"
                          decoding="async"
                          data-nimg={1}
                          className="styles_wrapper_image__Rr9s_"
                          style={{ color: "transparent" }}
                          src={stacknovaLogo}
                        />
                      </div>
                      <span className="styles_wrapper_underline_text__JiPO7">
                        DOCUMENTATION
                      </span>
                    </div>
                    <img
                      alt="underline"
                      loading="lazy"
                      width={164}
                      height={9}
                      decoding="async"
                      data-nimg={1}
                      className="styles_banner_underline__dt2qf"
                      style={{ color: "transparent" }}
                      src={barIcon}
                    />
                  </div>
                </a>
                {/*
                <a
                  target="_blank"
                  href="#"
                >
                  <img
                    alt="banner"
                    loading="lazy"
                    width={312}
                    height={132}
                    decoding="async"
                    data-nimg={1}
                    className="styles_banner__ib2vN"
                    style={{ color: "transparent" }}
                    src="#"
                  />
                </a>
                <a
                  target="_blank"
                  href="#"
                >
                  <img
                    alt="banner"
                    loading="lazy"
                    width={341}
                    height={142}
                    decoding="async"
                    data-nimg={1}
                    className="styles_assure_banner__rSOkm"
                    style={{ color: "transparent" }}
                    src="#"
                  />
                </a>
                */}
              </div>
            </div>
          </div>
        </div>
        <div className=" mt34 AppContainer_AppContainer__zMOpX max-width  PartnerSection_PartnerSection__QX3xC">
          <div className="SectionHeader_SectionHeader__mzGAY PartnerSection_sectionHeader__QYsEV">
            <div className="SectionHeaderV2_sectionHeaderSubtitle__eUmZ_">
              Powered By
            </div>
          </div>

          <Marquee direction="right">
            <div className="icon-container-alt">
              <a
                href="#"
                target="_blank"
                className="logos__link w-inline-block"
              >
                <img
                  src={openAi}
                  loading="lazy"
                  alt="Binance Labs Logo"
                  className="logotype"
                />
              </a>
            </div>

            <div className="icon-container-alt">
              <a
                href="#"
                target="_blank"
                className="logos__link w-inline-block"
              >
                <img
                  src={stacks}
                  loading="lazy"
                  alt="web3 foundation"
                  className="logotype"
                />
              </a>
            </div>

            <div className="icon-container-alt">
              <a
                href="#"
                target="_blank"
                className="logos__link w-inline-block"
              >
                <img src={bitcoin} loading="lazy" alt className="logotype" />
              </a>
            </div>

            <div className="icon-container-alt">
              <a target="_blank" className="logos__link w-inline-block">
                <img src={aws} loading="lazy" alt className="logotype" />
              </a>
            </div>

            <div className="icon-container-alt">
              <a
                href="#"
                target="_blank"
                className="logos__link w-inline-block"
              >
                <img src={metamask} loading="lazy" alt className="logotype" />
              </a>
            </div>

            <div className="icon-container-alt">
              <a
                href="#"
                target="_blank"
                className="logos__link w-inline-block"
              >
                <img src={trustwallet} loading="lazy" className="logotype" />
              </a>
            </div>

            <div className="icon-container-alt">
              <a
                href="#"
                target="_blank"
                className="logos__link w-inline-block"
              >
                <img
                  src={walletconnect}
                  loading="lazy"
                  alt
                  className="logotype"
                />
              </a>
            </div>

            <div className="icon-container-alt">
              <a
                href="#"
                target="_blank"
                className="logos__link w-inline-block"
              >
                <img
                  src={unisat}
                  loading="lazy"
                  alt="Binance Labs Logo"
                  className="logotype"
                />
              </a>
            </div>

            <div className="icon-container-alt">
              <a
                href="#"
                target="_blank"
                className="logos__link w-inline-block"
              >
                <img
                  src={okx}
                  loading="lazy"
                  alt="web3 foundation"
                  className="logotype"
                />
              </a>
            </div>

            <div className="icon-container-alt">
              <a
                href="#"
                target="_blank"
                className="logos__link w-inline-block"
              >
                <img src={leather} loading="lazy" alt className="logotype" />
              </a>
            </div>

            <div className="icon-container-alt">
              <a
                href="#"
                target="_blank"
                className="logos__link w-inline-block"
              >
                <img src={xverse} loading="lazy" alt className="logotype" />
              </a>
            </div>
          </Marquee>
        </div>

        {/*  */}

        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "22%",
            bottom: "59%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "242s, 9s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "135%",
            bottom: "84%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "130s, 6s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "11%",
            bottom: "3%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "341s, 10s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "104%",
            bottom: "30%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "346s, 5s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "17%",
            bottom: "55%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "302s, 8s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "109%",
            bottom: "9%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "161s, 12s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "23%",
            bottom: "76%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "267s, 13s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "61%",
            bottom: "47%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "180s, 12s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "2%",
            bottom: "72%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "199s, 12s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "135%",
            bottom: "55%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "213s, 5s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "16%",
            bottom: "51%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "272s, 10s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "74%",
            bottom: "91%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "126s, 6s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "24%",
            bottom: "32%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "136s, 4s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "111%",
            bottom: "23%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "213s, 4s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "6%",
            bottom: "98%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "225s, 9s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "86%",
            bottom: "12%",
            width: 18,
            height: 18,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "211s, 10s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "3%",
            bottom: "40%",
            width: 24,
            height: 24,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "318s, 9s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "111%",
            bottom: "60%",
            width: 24,
            height: 24,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "306s, 11s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "20%",
            bottom: "74%",
            width: 24,
            height: 24,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "344s, 7s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "65%",
            bottom: "82%",
            width: 24,
            height: 24,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "234s, 4s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "5%",
            bottom: "69%",
            width: 24,
            height: 24,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "210s, 4s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "133%",
            bottom: "88%",
            width: 24,
            height: 24,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "141s, 4s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "10%",
            bottom: "11%",
            width: 24,
            height: 24,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "279s, 13s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "77%",
            bottom: "14%",
            width: 24,
            height: 24,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "312s, 11s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "5%",
            bottom: "57%",
            width: 30,
            height: 30,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "262s, 5s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "67%",
            bottom: "80%",
            width: 30,
            height: 30,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "284s, 8s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "21%",
            bottom: "53%",
            width: 30,
            height: 30,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "134s, 7s",
            zIndex: 90,
          }}
        />
        <img
          className="star absolute hero-star"
          src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png"
          style={{
            left: "107%",
            bottom: "88%",
            width: 30,
            height: 30,
            animationName: "star-move, star-loop",
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, linear",
            animationDuration: "178s, 12s",
            zIndex: 90,
          }}
        />

        {/*  */}
      </div>
    </>
  );
};

export default Banner;
