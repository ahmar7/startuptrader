import React from "react";
import "./Tiers.css";

import silverTier from "../../../assets/img/silver-tier.svg";
import goldTier from "../../../assets/img/gold-tier.svg";
import sapphireTier from "../../../assets/img/sapphire-tier.svg";
import emeraldTier from "../../../assets/img/emerald-tier.svg";
import rubyTier from "../../../assets/img/ruby-tier.svg";
import diamondTier from "../../../assets/img/diamond-tier.svg";

const Tiers = () => {
  return (
    <div className="section-padding">
      <div className="SectionHeaderV2_SectionHeaderV2__UELE4 home_sectionHeader__suL52 max-width">
        <div className="SectionHeaderV2_sectionHeaderSubtitle__eUmZ_ mb34 text-center launchpad-tiers-heading">
          Launchpad Tiers
        </div>
      </div>
      <div className="section svelte-16vqnfu max-width">
        <div className="header svelte-bi7erv">
          <div className="sub-header svelte-bi7erv">
            <p
              style={{}}
              className="weight-normal line-height-default align-center size-base text-size-base variant-subtle with-icon-space svelte-17v69ua"
            />
          </div>
        </div>

        <div className="wrapper svelte-1j0scf9">
          <div
            className="slider-wrapper scrollX hide-scrollbar svelte-1j0scf9"
            style={{ gridAutoColumns: "calc(26%)" }}
          >
            <div className="card-wrapper svelte-baey6h">
              <div className="card-header svelte-baey6h">
                <div className="card-header-icon svelte-baey6h">
                  <img src={silverTier} />
                </div>

                <div className="card-header-line svelte-baey6h" />
              </div>

              <div className="card svelte-baey6h" style={{}}>
                <div
                  className="card-label svelte-baey6h"
                  style={{ backgroundColor: "#bfbfbf" }}
                >
                  <span
                    style={{}}
                    className="weight-normal line-height-default align-left size-default text-size-default variant-contrast with-icon-space svelte-17v69ua"
                  >
                    Silver
                  </span>
                </div>

                <div className="card-amount svelte-baey6h">
                  <span
                    style={{}}
                    className="weight-semibold line-height-none align-left size-2xl text-size-2xl variant-highlighted with-icon-space svelte-17v69ua"
                  >
                    $SNOVA Required: >2,000+
                  </span>

                  <span
                    style={{}}
                    className="weight-normal line-height-none align-left size-default text-size-default variant-subtle with-icon-space svelte-17v69ua"
                  >
                    1 Lottery Ticket
                  </span>
                </div>

                <ul className="card-bonus-list svelte-baey6h">
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "rgb(191, 191, 191)" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      1x Allocation Multiplier
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "rgb(191, 191, 191)" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Refund Eligibility
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "rgb(191, 191, 191)" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Vote in DAO Proposals
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-wrapper svelte-baey6h">
              <div className="card-header svelte-baey6h">
                <div className="card-header-icon svelte-baey6h">
                  <img src={goldTier} />
                </div>

                <div className="card-header-line svelte-baey6h" />
              </div>

              <div className="card svelte-baey6h" style={{}}>
                <div
                  className="card-label svelte-baey6h"
                  style={{ backgroundColor: "#ffc35c" }}
                >
                  <span
                    style={{}}
                    className="weight-normal line-height-default align-left size-default text-size-default variant-contrast with-icon-space svelte-17v69ua"
                  >
                    Gold
                  </span>
                </div>

                <div className="card-amount svelte-baey6h">
                  <span
                    style={{}}
                    className="weight-semibold line-height-none align-left size-2xl text-size-2xl variant-highlighted with-icon-space svelte-17v69ua"
                  >
                    $SNOVA Required: >15,000+
                  </span>

                  <span
                    style={{}}
                    className="weight-normal line-height-none align-left size-default text-size-default variant-subtle with-icon-space svelte-17v69ua"
                  >
                    10 Lottery Tickets
                  </span>
                </div>

                <ul className="card-bonus-list svelte-baey6h">
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#ffb640" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      3x Allocation Multiplier
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#ffb640" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Refund Eligibility
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#ffb640" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Vote in DAO Proposals
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-wrapper svelte-baey6h">
              <div className="card-header svelte-baey6h">
                <div className="card-header-icon svelte-baey6h">
                  <img src={sapphireTier} />
                </div>

                <div className="card-header-line svelte-baey6h" />
              </div>

              <div className="card svelte-baey6h" style={{}}>
                <div
                  className="card-label svelte-baey6h"
                  style={{ backgroundColor: "#674ab5" }}
                >
                  <span
                    style={{}}
                    className="weight-normal line-height-default align-left size-default text-size-default variant-contrast with-icon-space svelte-17v69ua"
                  >
                    Sapphire
                  </span>
                </div>

                <div className="card-amount svelte-baey6h">
                  <span
                    style={{}}
                    className="weight-semibold line-height-none align-left size-2xl text-size-2xl variant-highlighted with-icon-space svelte-17v69ua"
                  >
                    $SNOVA Required: >40,000+
                  </span>

                  <span
                    style={{}}
                    className="weight-normal line-height-none align-left size-default text-size-default variant-subtle with-icon-space svelte-17v69ua"
                  >
                    25 Lottery Tickets
                  </span>
                </div>

                <ul className="card-bonus-list svelte-baey6h">
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#674ab5" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      7x Allocation Multiplier
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#674ab5" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Refund Eligibility
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#674ab5" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Vote in DAO Proposals
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#674ab5" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Basic Access to AI Tools
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-wrapper svelte-baey6h">
              <div className="card-header svelte-baey6h">
                <div className="card-header-icon svelte-baey6h">
                  <img src={emeraldTier} />
                </div>

                <div className="card-header-line svelte-baey6h" />
              </div>

              <div className="card svelte-baey6h" style={{}}>
                <div
                  className="card-label svelte-baey6h"
                  style={{ backgroundColor: "#9ee65c" }}
                >
                  <span
                    style={{}}
                    className="weight-normal line-height-default align-left size-default text-size-default variant-contrast with-icon-space svelte-17v69ua"
                  >
                    Emerald
                  </span>
                </div>

                <div className="card-amount svelte-baey6h">
                  <span
                    style={{}}
                    className="weight-semibold line-height-none align-left size-2xl text-size-2xl variant-highlighted with-icon-space svelte-17v69ua"
                  >
                    $SNOVA Required: >85,000+
                  </span>

                  <span
                    style={{}}
                    className="weight-normal line-height-none align-left size-default text-size-default variant-subtle with-icon-space svelte-17v69ua"
                  >
                    Guaranteed Allocation
                  </span>
                </div>

                <ul className="card-bonus-list svelte-baey6h">
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#59b347" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      20x Allocation Multiplier
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#59b347" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Refund Eligibility
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#59b347" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Vote in DAO Proposals
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#59b347" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Intermediate Access to AI Tools
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-wrapper svelte-baey6h">
              <div className="card-header svelte-baey6h">
                <div className="card-header-icon svelte-baey6h">
                  <img src={rubyTier} />
                </div>

                <div className="card-header-line svelte-baey6h" />
              </div>

              <div className="card svelte-baey6h" style={{}}>
                <div
                  className="card-label svelte-baey6h"
                  style={{ backgroundColor: "#c52b54" }}
                >
                  <span
                    style={{}}
                    className="weight-normal line-height-default align-left size-default text-size-default variant-contrast with-icon-space svelte-17v69ua"
                  >
                    Ruby
                  </span>
                </div>

                <div className="card-amount svelte-baey6h">
                  <span
                    style={{}}
                    className="weight-semibold line-height-none align-left size-2xl text-size-2xl variant-highlighted with-icon-space svelte-17v69ua"
                  >
                    $SNOVA Required: >150,000+
                  </span>

                  <span
                    style={{}}
                    className="weight-normal line-height-none align-left size-default text-size-default variant-subtle with-icon-space svelte-17v69ua"
                  >
                    Guaranteed Allocation + Bonus
                  </span>
                </div>

                <ul className="card-bonus-list svelte-baey6h">
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#c52b54" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      40x Allocation Multiplier
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#c52b54" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Refund Eligibility
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#c52b54" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Vote in DAO Proposals
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#c52b54" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Advanced Access to AI Tools
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#c52b54" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Create DAO Proposals
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#c52b54" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Incubation Airdrops
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#c52b54" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Early Access to Stacknova Products
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-wrapper svelte-baey6h">
              <div className="card-header svelte-baey6h">
                <div className="card-header-icon svelte-baey6h">
                  <img src={diamondTier} />
                </div>

                <div className="card-header-line svelte-baey6h" />
              </div>

              <div className="card svelte-baey6h" style={{}}>
                <div
                  className="card-label svelte-baey6h"
                  style={{ backgroundColor: "#3ca1d7" }}
                >
                  <span
                    style={{}}
                    className="weight-normal line-height-default align-left size-default text-size-default variant-contrast with-icon-space svelte-17v69ua"
                  >
                    Diamond
                  </span>
                </div>

                <div className="card-amount svelte-baey6h">
                  <span
                    style={{}}
                    className="weight-semibold line-height-none align-left size-2xl text-size-2xl variant-highlighted with-icon-space svelte-17v69ua"
                  >
                    $SNOVA Required: >250,000+
                  </span>

                  <span
                    style={{}}
                    className="weight-normal line-height-none align-left size-default text-size-default variant-subtle with-icon-space svelte-17v69ua"
                  >
                    Guaranteed Allocation + Premium
                  </span>
                </div>

                <ul className="card-bonus-list svelte-baey6h">
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#3ca1d7" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      60x Allocation Multiplier
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#3ca1d7" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Refund Eligibility
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#3ca1d7" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Vote in DAO Proposals
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#3ca1d7" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Expert Access to AI Tools
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#3ca1d7" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Create DAO Proposals
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#3ca1d7" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Incubation Airdrops
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#3ca1d7" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Early Access to Stacknova Products
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#3ca1d7" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Launchpad Royalties
                    </span>
                  </li>
                  <li className="bonus svelte-baey6h">
                    <div
                      className="bonus-icon svelte-baey6h"
                      style={{ backgroundColor: "#3ca1d7" }}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="svg-icon"
                        style={{ color: "var(--grey-700)" }}
                      >
                        <title />

                        <path d="M26.922 50.04 8.147 32.014l7.175-7.174 11.6 10.906L48.708 13.96l7.145 7.146L26.922 50.04Z" />
                      </svg>
                    </div>

                    <span
                      style={{}}
                      className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted with-icon-space svelte-17v69ua"
                    >
                      Private Deal Flows
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiers;
