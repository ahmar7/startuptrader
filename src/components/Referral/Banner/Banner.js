import done from "../../../assets/img/done.svg";
import copy from "../../../assets/img/copy.svg";
import React, { useState } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((error) => console.error("Error copying text: ", error));
  };
  return (
    <>
      <Link
        className="_btn_dcpj6_1 inline-flex items-center self-start gap-[10px] p-[8px]"
        to="/"
        style={{ background: "rgba(17, 15, 22, 0.64)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={12}
          viewBox="0 0 14 12"
          fill="none"
        >
          <path
            d="M13 6L1.51741 6M5.93379 11L1.2587 6.58925C0.913764 6.26382 0.913764 5.73618 1.2587 5.41074L5.93379 1"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
        <span className="font-[500] text-[white]">
          Presale Starts Soon!
          {/*Presale is LIVE!*/}
        </span>
      </Link>

      <div className="flex justify-center mt-[24px]">
        <div className="laptop:max-w-[504px]">
          <div className="mb-[12px] relative">
            <svg
              className="absolute left-[50px] bottom-[20px]"
              xmlns="http://www.w3.org/2000/svg"
              width={29}
              height={28}
              viewBox="0 0 29 28"
              fill="none"
            >
              <path
                d="M0.220459 14L9.99602 10.7007L14.2205 -1.37526e-06L18.4449 10.7007L28.2205 14L18.4449 17.2993L14.2205 28L9.99602 17.2993L0.220459 14Z"
                fill="#E78D24"
              />
            </svg>
            <h1 className="mb-[12px] text-defaultOrange text-[42px] laptop:text-[64px] laptop:text-center font-[500]">
              Earn 20%
            </h1>
            <svg
              className="absolute right-[40px] top-[0]"
              width={42}
              height={38}
              viewBox="0 0 42 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.220459 8.5155L6.16644 6.50873L8.73595 1.18773e-06L11.3055 6.50873L17.2514 8.5155L11.3055 10.5223L8.73595 17.031L6.16644 10.5223L0.220459 8.5155Z"
                fill="#E78D24"
              />
              <path
                d="M17.7361 25.5372L26.1303 22.7042L29.7578 13.5155L33.3853 22.7042L41.7796 25.5372L33.3853 28.3703L29.7578 37.559L26.1303 28.3703L17.7361 25.5372Z"
                fill="#E78D24"
              />
            </svg>
          </div>
          <p className="laptop:text-center text-[#D6D6D6] text-[16px]">
            Invite others using your unique referral link and earn a 20% commission from each presale investment. Claim your rewards instantly after their participation.
          </p>
          <div className="flex flex-col mt-[24px]">
            <h4 className="text-center font-[500] text-[#F5F5F4] text-[20px]">
              Your Referral Link
            </h4>
            <div
              className="relative mt-[12px]"
              style={{ background: "rgba(109, 65, 14, 0.32)" }}
            >
              <div
                className="_copyWrapper_1fjrj_1"
                aria-label="Copied to clipboard"
              >
                <span className="_copyText_1fjrj_12">
                  https://stacknova.ai/?ref=stxnova-UmtG1QJT
                </span>
                {copied ? (
                  <div className="_copyBtn_1fjrj_20">
                    <img src={done} alt="Copy" />
                  </div>
                ) : (
                  <div
                    className="_copyBtn_1fjrj_20"
                    onClick={() =>
                      handleCopy("https://stacknova.ai/?ref=stdex-UmtG1QJT")
                    }
                  >
                    <img src={copy} alt="Copy" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
