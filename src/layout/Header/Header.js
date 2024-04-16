import close from "../../assets/img/close.52bbb0c0.svg";
import snovaCoin from "../../assets/img/snova-coin-white.svg";
import wallet from "../../assets/img/connect-wallet.svg";
import analytics__1 from "../../assets/img/analytics (1).png";
import affiliate__1 from "../../assets/img/affiliate (1).png";
import score__1 from "../../assets/img/score (1).png";

import stacknovaLogo from "../../assets/img/stacknova-full.png";

import ukFlag from "../../assets/img/uk-flag.svg";
import chinaFlag from "../../assets/img/china-flag.svg";
import japanFlag from "../../assets/img/japan-flag.svg";
import koreaFlag from "../../assets/img/korea-flag.svg";
import russiaFlag from "../../assets/img/russia-flag.svg";
import germanyFlag from "../../assets/img/germany-flag.svg";
import spainFlag from "../../assets/img/spain-flag.svg";
import franceFlag from "../../assets/img/france-flag.svg";
import turkeyFlag from "../../assets/img/turkey-flag.svg";
import portugalFlag from "../../assets/img/portugal-flag.svg";

import chooseLanguage from "../../assets/img/choose-language-icon.svg";

import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [modal, setmodal] = useState(false);
  const [Topbanner, setTopbanner] = useState(true);
  let hideIt = () => {
    setTopbanner(false);
  };
  let toggleModal = () => {
    if (modal === false) {
      setmodal(true);
    } else {
      setmodal(false);
    }
  };
  const [modal1, setmodal1] = useState(false);
  let toggleModal1 = () => {
    let body = document.querySelector("body");
    if (modal1 === false) {
      setmodal1(true);
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
      setmodal1(false);
    }
  };

  //
  const [nav, setNav] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [drop, setDrop] = useState(false);
  let toggleDrop = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  let navToggle = () => {
    if (nav === true) {
      setNav(false);
      return;
    } else {
      setNav(true);
    }
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
      setSticky(true);
    } else if (window.scrollY === 0) {
      setSticky(false);
    }
  });
  return (
    <>
      {Topbanner && (
        <div className="styles_banner__tQbE5 ">
          <div className="max-width top-banner">
            <div className="styles_content__n3uvo">
              <img
                alt="flame"
                loading="lazy"
                className="presale-notification"
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                src={snovaCoin}
              />
              {/*Stacknova Token Sale is Now LIVE!*/}
              Presale Launching Soon: Stay Tuned!
            </div>
            <img
              alt="close"
              loading="lazy"
              width={12}
              height={12}
              onClick={hideIt}
              decoding="async"
              data-nimg={1}
              className="styles_close__hZeAJ"
              style={{ color: "transparent" }}
              src={close}
            />
          </div>
        </div>
      )}
      <div className="desk-only alla">
        <div className="new-header ">
          <nav
            className={`${
              sticky
                ? "nav-are border-b-[1px] border-[#3a3a3a] pl-8 sican"
                : "nav-are border-b-[1px] border-[#3a3a3a] pl-8"
            } ${Topbanner ? "" : "topZero"}`}
          >
            <div className="max-width h-[85px] flex items-center justify-between">
              <Link to="/" className=" pr-[100px]">
                <img src={stacknovaLogo} className="stacknova-logo" />
              </Link>
              <div className="flex flex-row">
                <nav
                  aria-label="Main"
                  data-orientation="horizontal"
                  dir="ltr"
                  className="flex"
                >
                  <div style={{ position: "relative" }}>
                    <ul
                      data-orientation="horizontal"
                      className="flex gap-6"
                      dir="ltr"
                    >
                      <li className="relative px-4">
                        <a
                          href="https://stacknova-ai.gitbook.io/stacknova-ai/stacknova-platform"
                          target="_blank"
                          className="font-pp flex items-center gap-1 nav-link"
                        >
                          Whitepaper
                        </a>
                      </li>
                      <li className="relative px-4">
                        <button
                          id="radix-:Rj6m:-trigger-radix-:R7j6m:"
                          data-state="closed"
                          aria-expanded="false"
                          aria-controls="radix-:Rj6m:-content-radix-:R7j6m:"
                          className="font-pp flex items-center gap-1"
                          data-radix-collection-item
                        >
                          <span>Tokenomics</span>
                        </button>
                      </li>
                      <li className="relative px-4">
                        <Link
                          to="/referral"
                          id="radix-:Rj6m:-trigger-radix-:R9j6m:"
                          data-state="closed"
                          aria-expanded="false"
                          aria-controls="radix-:Rj6m:-content-radix-:R9j6m:"
                          className="font-pp flex items-center gap-1 nav-link"
                          data-radix-collection-item
                        >
                          <span className="primary-color flex items-center gap16">
                            <div className="liveDot"></div>Referral
                          </span>
                        </Link>
                      </li>
                      <li className="relative px-4">
                        <a
                          href="https://stacknova-ai.gitbook.io/stacknova-ai/getting-started/general-faqs"
                          target="_blank"
                          className="font-pp flex items-center gap-1 nav-link"
                        >
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="flex flex-row gap-6">
                <button
                  type="button"
                  onClick={toggleModal1}
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:R1r6m:"
                  data-state="closed"
                >
                  <div className="border-border hover:bg-bg-pressed flex h-10 w-10 items-center justify-center rounded border bg-[#232323] transition-all language-selector">
                    <img
                      src={chooseLanguage}
                      className="choose-language-icon"
                    />
                  </div>
                </button>
                <div className="flex flex-row border-border-landing h-full center-tj w-[230px] items-center justify-center border-l-[1px] pr-1">
                  <button
                    className="flex items-center justify-center duration-100 connect-wallet transition-colors disabled:opacity-50 active:opacity-75 disabled:cursor-not-allowed border hover:text-text-brand active:text-text-brand disabled:text-text-secondary text-sm px-2 h-10 rounded"
                    type="button"
                  >
                    <div className="flex items-center">
                      <span className="mx1">
                        <img src={wallet} className="wallet-icon" />
                        Connect Wallet
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {modal1 ? <div onClick={toggleModal1} className="modla-over"></div> : ""}
      {modal1 ? (
        <>
          <div className="heo">
            {" "}
            <div className="mya border-border bg-bg fixed left-1/2 top-1/2 z-[999] flex w-[370px] max-w-full flex-col gap-6 rounded border p-8">
              <h2 id="radix-:R1r6mH1:">
                <b>Choose Your Language</b>
              </h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <button
                  onClick={toggleModal1}
                  type="button"
                  className="hover:bg-bg-pressed cursor-pointer border leading-8 transition-all border-text-brand border-active language-choice"
                >
                  <img
                    alt="en"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={ukFlag}
                    className="language-flag"
                  ></img>
                  English
                </button>
                <button
                  onClick={toggleModal1}
                  type="button"
                  className="hover:bg-bg-pressed cursor-pointer border leading-8 transition-all border-border language-choice"
                >
                  <img
                    alt="en"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={chinaFlag}
                    className="language-flag"
                  ></img>
                  中文
                </button>
                <button
                  onClick={toggleModal1}
                  type="button"
                  className="hover:bg-bg-pressed cursor-pointer border leading-8 transition-all border-border language-choice"
                >
                  <img
                    alt="en"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={japanFlag}
                    className="language-flag"
                  ></img>
                  日本語
                </button>
                <button
                  onClick={toggleModal1}
                  type="button"
                  className="hover:bg-bg-pressed cursor-pointer border leading-8 transition-all border-border language-choice"
                >
                  <img
                    alt="en"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={koreaFlag}
                    className="language-flag"
                  ></img>
                  한국어
                </button>
                <button
                  onClick={toggleModal1}
                  type="button"
                  className="hover:bg-bg-pressed cursor-pointer border leading-8 transition-all border-border language-choice"
                >
                  <img
                    alt="en"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={russiaFlag}
                    className="language-flag"
                  ></img>
                  Русский
                </button>
                <button
                  onClick={toggleModal1}
                  type="button"
                  className="hover:bg-bg-pressed cursor-pointer border leading-8 transition-all border-border language-choice"
                >
                  <img
                    alt="en"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={germanyFlag}
                    className="language-flag"
                  ></img>
                  Deutsch
                </button>
                <button
                  onClick={toggleModal1}
                  type="button"
                  className="hover:bg-bg-pressed cursor-pointer border leading-8 transition-all border-border language-choice"
                >
                  <img
                    alt="en"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={spainFlag}
                    className="language-flag"
                  ></img>
                  Español
                </button>
                <button
                  onClick={toggleModal1}
                  type="button"
                  className="hover:bg-bg-pressed cursor-pointer border leading-8 transition-all border-border language-choice"
                >
                  <img
                    alt="en"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={franceFlag}
                    className="language-flag"
                  ></img>
                  Français
                </button>
                <button
                  onClick={toggleModal1}
                  type="button"
                  className="hover:bg-bg-pressed cursor-pointer border leading-8 transition-all border-border language-choice"
                >
                  <img
                    alt="en"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={turkeyFlag}
                    className="language-flag"
                  ></img>
                  Türkçe
                </button>
                <button
                  onClick={toggleModal1}
                  type="button"
                  className="hover:bg-bg-pressed cursor-pointer border leading-8 transition-all border-border language-choice"
                >
                  <img
                    alt="en"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={portugalFlag}
                    className="language-flag"
                  ></img>
                  Português
                </button>
              </div>
              <div className="text-text-tip text-2xs">
                Translations may contain errors. In the event of discrepancies,
                the English version shall prevail.
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="mbl-only ">
        <div
          className={
            sticky
              ? "   border-b  border-border  border-mbl sican2"
              : "   border-b  border-border border-mbl "
          }
        >
          <div className="h-16 asa max-width gap-4 items-center justify-between flex-shrink-0 flex flex-row ">
            <div className="flex flex-row h-full items-center gap-6 lg:gap-8 mbl-logo">
              <a href="/">
                <img src={stacknovaLogo} alt="logo" />
              </a>
            </div>
            <div className="flex align-center">
              <div className="flex flex-row gap-6 aasas">
                <button
                  type="button"
                  onClick={toggleModal1}
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:R1r6m:"
                  data-state="closed"
                >
                  <div className="border-border hover:bg-bg-pressed flex h-10 w-10 items-center justify-center rounded border bg-[#232323] transition-all primary-bg primary-mbl">
                    <img
                      src={chooseLanguage}
                      className="choose-language-icon"
                    />
                  </div>
                </button>
                <div className="flex flex-row border-border-landing h-full w-[230px] items-center justify-center border-l-[1px] pr-1">
                  <button
                    className="primary-bg primary-mbl flex items-center justify-center duration-100 transition-colors disabled:opacity-50 active:opacity-75 disabled:cursor-not-allowed border border-gradient-image hover:text-text-brand active:text-text-brand disabled:text-text-secondary text-sm px-2 h-10 rounded"
                    type="button"
                  >
                    <div className="flex items-center">
                      <img src={wallet} className="wallet-icon-mobile" />
                      <span className="mx-1">Connect Wallet</span>
                    </div>
                  </button>
                </div>
              </div>
              <svg
                onClick={toggleModal}
                width={20}
                height={20}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block cursor-pointer "
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        {modal ? (
          <div
            role="dialog"
            id="radix-:R2imm:"
            aria-describedby="radix-:R2immH2:"
            aria-labelledby="radix-:R2immH1:"
            data-state="open"
            className="animate-menu-show mgls bg-bg data-[state=closed]:animate-fade-out fixed top-0 z-[1000] max-h-[80%] w-full overflow-auto"
            tabIndex={-1}
            style={{ pointerEvents: "auto" }}
          >
            <div className="flex flex-row h-16 flex-shrink-0 items-center justify-between gap-4 px-6 mbl-logo3">
              <a href="/">
                <img src={stacknovaLogo} alt="logo" />
              </a>
              <svg
                onClick={toggleModal}
                width={20}
                height={20}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className="flex flex-col gap-2 p-4 pt-1"
              style={{ "font-weight": "bold" }}
            >
              <div className="flex flex-col cursor-pointer gap-2">
                <div className="flex flex-row items-center justify-between px-1 py-2">
                  <a
                    href="https://stacknova-ai.gitbook.io/stacknova-ai/stacknova-platform"
                    target="_blank"
                    className="nav-link"
                  >
                    Whitepaper
                  </a>
                </div>
              </div>
              <div className="flex flex-col cursor-pointer gap-2">
                <div className="flex flex-row items-center justify-between px-1 py-2">
                  <span>Tokenomics</span>
                </div>
              </div>
              <div className="flex flex-col cursor-pointer gap-2">
                <div className="flex flex-row items-center justify-between px-1 py-2">
                  <span className="flex items-center gap16">
                    <div className="liveDot"></div> Referral
                  </span>
                </div>
              </div>
              <div className="flex flex-col cursor-pointer gap-2">
                <div className="flex flex-row items-center justify-between px-1 py-2">
                  <a
                    href="https://stacknova-ai.gitbook.io/stacknova-ai/getting-started/general-faqs"
                    target="_blank"
                    className="nav-link"
                  >
                    FAQs
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Header;
