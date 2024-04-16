import tokenomics from "../../../assets/img/tokenomics.svg";
import blur from "../../../assets/img/tokenomics-blur.png";
import React from "react";
import "./Tokenomics.css";
const Tokenomics = () => {
  return (
    <div>
      <section className="max-width tokenomics section-padding">
        <div className="zD">
          <div>
            <h2>Sustainable Tokenomics: $SNOVA's Blueprint</h2>
            <p className="zE">
              Designed for longevity and community growth, $SNOVA's tokenomics
              align strategic planning with market needs, ensuring a robust and
              evolving digital finance ecosystem.
            </p>
            <a
              className="bl-inline-flex bl-items-center bl-justify-center bl-transition-colors bl-relative bl-h-[55px] bl-min-w-[260px] bl-text-[26px]/none bl-bg-primary/20 bl-text-primary "
              href="/token"
            >
              Check Tokenomics{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill="none"
                  d="M3 11.938h15.813M12.875 6l6.906 5.755a.238.238 0 0 1 0 .365l-6.906 5.755"
                />
              </svg>
              <div class="bl-border-primary bl-absolute bl-h-2.5 bl-w-2.5 bl-border-l bl-border-t bl-top-0 bl-left-0"></div>
              <div class="bl-border-primary bl-absolute bl-h-2.5 bl-w-2.5 bl-border-r bl-border-b bl-right-0 bl-bottom-0"></div>
            </a>
          </div>
          <picture className="zF">
            <img
              alt="Tokenomics graph"
              loading="lazy"
              width={880}
              height={552}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src={tokenomics}
            />
          </picture>
          <img
            alt="Blurred light"
            loading="lazy"
            width={1621}
            height={1556}
            decoding="async"
            data-nimg={1}
            className="zG"
            style={{ color: "transparent" }}
            src={blur}
          />
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
