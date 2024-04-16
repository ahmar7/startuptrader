import chevron from "../../../assets/img/chevron.svg";
import React, { useState, useRef } from "react";
import "./Faq.css";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Define your array of FAQs
  const faqs = [
    {
      question: "What is Stacknova and its mission?",
      answer:
        "Stacknova AI is the first AI-driven launchpad on Bitcoin, utilizing Stacks Layer 2 technology. Our mission is to boost Bitcoin's DeFi and Web3 ecosystems, providing a secure platform for creators and investors to harness AI for smarter decision-making. We aim to merge AI's power with Stacks' robustness, revolutionizing Bitcoin DeFi and connecting innovative projects with discerning investors.",
    },
    {
      question: "How can I claim my purchased $SNOVA tokens?",
      answer:
        "Your $SNOVA tokens will appear post-TGE, which starts after the presale ends. Connect your wallet to our platform to check your balance. For assistance, our support team is always ready to help. Tokens can be claimed on the Stacks network following the TGE.",
    },
    {
      question: "What are Stacknova's presale key dates?",
      answer:
        "The Stacknova AI presale, distributed over 10 stages, kicks off in Q2 2024, emphasizing community engagement and preparations. With 100 million SNOVA tokens, the presale will run until all tokens are sold or until the July 2024 deadline. The culmination is the Token Generation Event (TGE) in Q3 2024, where we launch $SNOVA on the Stacks network, roll out our core product, and enable token claims on our platform.",
    },
    {
      question: "How does participating in the presale benefit me?",
      answer:
        "By participating in the Stacknova presale, you gain early access to $SNOVA tokens at advantageous prices, setting the stage for potential future gains as our AI-DeFi platform develops. As an integral part of a pioneering Bitcoin DeFi project, your investment contributes to community growth and grants you exclusive access to new developments, beta tests, and community events, offering a blend of immediate opportunities and sustained long-term investment value in a transformative DeFi landscape."
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="bottomContainer section-padding">
      <div className="questionWeHaveContainer max-width ">
        <div className="questionsLeft">
          <p className="faqTag">FAQs</p>
          <p className="faqHEading">Got Questions? Get Answers</p>
          <hr />
          <p className="contactUsFaq">
            Need help? Reach out to Stacknova's support on our social channels for quick assistance. To your right, find our top FAQs for immediate guidance. {/*Our team is dedicated to ensuring your seamless experience and safety.*/}
            <br />
            <a
              className="faqBtn"
              href="mailto:info@stacknova.ai?subject=Stacknova%20-%20Question%20from%20the%20website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us
            </a>
          </p>
        </div>
        <div className="questionsRight">
          <div
            className="flat-accordion aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration={800}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`flat-toggle box-text corner-box ${
                  openIndex === index ? " active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div
                  className={`h7 toggle-title ${
                    openIndex === index ? " active" : ""
                  }`}
                >
                  {faq.question}
                  <img src={chevron} alt="" />
                </div>
                <p className="toggle-content">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
