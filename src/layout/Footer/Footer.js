
import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer_footer__Hhmm8 swx">
      <div className="max-width">
        <div className="footer_wrapper__qdczL">
          <div className="footer_box__WbJW_">
            <p className="footer_title__QdQ4j">
              Join the Stacknova <b>community</b>
            </p>
            <div className="footer-socials_socials__85gHT">
              <a
                className="footer-socials_socials_link__QdqJI"
                href="https://t.me/stacknova"
                target="_blank"
              >
                telegram
                <div className="footer-socials_socials_wrapper__k9UV2">
                  {/* <img src={telegramIcon} /> */}
                  <span>telegram</span>
                </div>
              </a>
              <a
                className="footer-socials_socials_link__QdqJI"
                href="https://twitter.com/StacknovaBTC"
                target="_blank"
              >
                twitter
                <div className="footer-socials_socials_wrapper__k9UV2">
                  {/* <img src={twitterIcon} /> */}
                  <span>twitter</span>
                </div>
              </a>
              <a
                className="footer-socials_socials_link__QdqJI"
                href="https://medium.com/@Stacknova"
                target="_blank"
              >
                medium
                <div className="footer-socials_socials_wrapper__k9UV2">
                  {/* <img src={mediumIcon} alt /> */}
                  <span>medium</span>
                </div>
              </a>
              <a
                className="footer-socials_socials_link__QdqJI"
                href="https://github.com/"
                target="_blank"
              >
                github
                <div className="footer-socials_socials_wrapper__k9UV2">
                  {/* <img src={githubIcon} alt /> */}
                  <span>github</span>
                </div>
              </a>
              <a
                className="footer-socials_socials_link__QdqJI"
                href="https://stacknova-ai.gitbook.io/stacknova-ai/"
                target="_blank"
              >
                whitepaper
                <div className="footer-socials_socials_wrapper__k9UV2">
                  {/* <img src={gitbookIcon} alt /> */}
                  <span>whitepaper</span>
                </div>
              </a>
            </div>
            <div className="footer-nav_root__tqeWW">
              <div className="footer-nav_content__wBpDg">
                <Link to="/" className="footer-nav_title__Jf6Ag">
                  {/* <img src={stacknovaLogo} alt="logo" className="footer-logo" /> */}
                </Link>
                <p className="footer-nav_text__XNB93">
                  The World's First AI-Powered Launchpad on Bitcoin.
                </p>
                <p className="footer-nav_copyright__vzn9_ mbl-only">
                  © 2024 Taiko Labs
                </p>
              </div>
              <nav className="footer-nav_nav__92SOe">
                <ul className="footer-nav_nav_list__htZdT">
                  <li className="footer-nav_nav_item__XJ8A_">
                    <p className="footer-nav_nav_title__tBH4B">Company</p>
                    <a
                      className="footer-nav_nav_link__NagoM"
                      href="https://stacknova-ai.gitbook.io/stacknova-ai/"
                      target="_blank"
                    >
                      <span>Whitepaper</span>
                    </a>
                    <a
                      className="footer-nav_nav_link__NagoM"
                      href="https://stacknova-ai.gitbook.io/stacknova-ai/resources/brand-kit"
                      target="_blank"
                    >
                      <span>Brand Kit</span>
                    </a>
                    <a
                      className="footer-nav_nav_link__NagoM"
                      href="https://stacknova-ai.gitbook.io/stacknova-ai/getting-started/general-faqs"
                      target="_blank"
                    >
                      <span>FAQs</span>
                    </a>
                    <a
                      className="footer-nav_nav_link__NagoM"
                      href="#"
                      target="_blank"
                    >
                      <span>Links</span>
                    </a>
                  </li>
                  <li className="footer-nav_nav_item__XJ8A_">
                    <p className="footer-nav_nav_title__tBH4B">Resources</p>
                    <a
                      className="footer-nav_nav_link__NagoM"
                      href="#"
                      target="_blank"
                    >
                      <span>Terms</span>
                    </a>
                    <a
                      className="footer-nav_nav_link__NagoM"
                      href="#"
                      target="_blank"
                    >
                      <span>Privacy</span>
                    </a>
                    <a
                      className="footer-nav_nav_link__NagoM"
                      href="https://x8mxdnqdnu4.typeform.com/to/GFvsq3kr"
                      target="_blank"
                    >
                      <span>Apply</span>
                    </a>
                    <a
                      className="footer-nav_nav_link__NagoM"
                      href="https://x8mxdnqdnu4.typeform.com/to/RYjzknp7"
                      target="_blank"
                    >
                      <span>Partner</span>
                    </a>
                  </li>
                  <li className="footer-nav_nav_item__XJ8A_">
                    <p className="footer-nav_nav_title__tBH4B">Get Involved</p>
                    {/*}
                    <a
                      className="footer-nav_nav_link__NagoM"
                      href="https://bridge.katla.taiko.xyz/"
                      target="_blank"
                    >
                      <span>LinkTree</span>
                    </a>
                    */}
                    <a
                      className="footer-nav_nav_link__NagoM"
                      href="https://stacknova-ai.gitbook.io/stacknova-ai/getting-started/presale/your-guide-to-buying-usdsnova"
                      target="_blank"
                    >
                      <span>How To Buy?</span>
                    </a>
                    <Link to="/referral"
                      className="footer-nav_nav_link__NagoM"
                      href="https://github.com/taikoxyz"
                    >
                      <span>Referral</span>
                    </Link>
                    <a
                      className="footer-nav_nav_link__NagoM"
                      href="https://t.me/stacknova_news"
                      target="_blank"
                    >
                      <span>News</span>
                    </a>
                    <a
                      className="footer-nav_nav_link__NagoM"
                      href="mailto:info@stacknova.ai?subject=Stacknova%20-%20Question%20from%20the%20website"
                      target="_blank"
                    >
                      <span>Contact Us</span>
                    </a>
                  </li>
                </ul>

                <p className="footer-nav_copyright__vzn9_ desk-only">
                  © 2024 Stacknova AI
                </p>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
