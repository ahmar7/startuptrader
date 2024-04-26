import React from "react";
import ClientLayout from "../../layout/ClientLayout/ClientLayout";
import { SearchIcon } from "../../components/Icons/SearchIcon";
import SupportDisclosure from "../../components/Disclosure/SupportDisclosure";
import NavbarClient from "../../components/Navbar/NavbarClient";
import Footer from "../../components/Footer/Footer";
const Support = () => {
  return (
    <div className="privacy-pg min-e">
      <NavbarClient />
      <div className="bg-[#171F38]">
        <div className=" lg:pt-[150px] sm:pt-[100px] section-width">
          <div className="flex  w-full  flex-col justify-center items-center  ">
            <p className="text-[#FFFFFF] text-[32px]  font-manrope font-bold">
              Support
            </p>
            <p className="text-[#666D81] text-[16px] font-manrope">
              Hey, how can we help you?
            </p>
            <div className="flex items-center border my-5 border-[#4C546C] pl-3 rounded-full w-full md:w-96 p-1 ">
              <SearchIcon />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent placeholder:text-[#666D81] pl-3 placeholder:pl-3 text-white focus:outline-none w-full text-sm p-2"
              />
            </div>
            <div className="flex gap-4 my-5">
              {["General Questions", "Product Support", "Email Support"].map(
                (v) => (
                  <div className="flex items-center border text-[#CCCED5] text-[14px] font-manrope px-3 py-2 rounded-full border-[#4C546C] ">
                    {v}
                  </div>
                )
              )}
            </div>
            <div className="flex gap-4 mb-5">
              {[
                "Domain Name Support",
                "Boost Traffic Support",
                "Contact us",
              ].map((v) => (
                <div className="flex items-center border text-[#CCCED5] text-[14px] font-manrope px-3 py-2 rounded-full border-[#4C546C] ">
                  {v}
                </div>
              ))}
            </div>
          </div>
          <div className="flex  w-full  flex-col  py-16   ">
            <div>
              <p className="text-[32px] font-manrope font-bold text-[#FFFFFF] py-5">
                General Questions
              </p>
              <SupportDisclosure title={"What is StartupTrader?"} />
              <SupportDisclosure title={"How does StartupTrader work?"} />
              <SupportDisclosure
                title={
                  "What makes StartupTrader different from other platforms?"
                }
              />
              <SupportDisclosure
                title={"Can I use StartupTrader on mobile devices?"}
              />
              <SupportDisclosure
                title={
                  "Are there any restrictions on who can join StartupTrader?"
                }
              />
            </div>

            <div className="mt-16">
              <p className="text-[32px] font-manrope font-bold text-[#FFFFFF] py-5">
                Getting started
              </p>
              <SupportDisclosure title={"Creating an Account"} />
              <SupportDisclosure title={"Setting up Your Profile"} />
              <SupportDisclosure title={"Navigating the Dashboard"} />
              <SupportDisclosure title={"How do I verify my account?"} />
              <SupportDisclosure
                title={
                  "What information is required during the registration process?"
                }
              />
            </div>

            <div className="mt-16">
              <p className="text-[32px] font-manrope font-bold text-[#FFFFFF] py-5">
                Troubleshooting
              </p>
              <SupportDisclosure title={"Common Issues and Solutions"} />
              <SupportDisclosure title={"Contacting Support"} />
              <SupportDisclosure
                title={"What should I do if I forget my password?"}
              />
              <SupportDisclosure
                title={"Why is my account locked, and how can I unlock it?"}
              />
              <SupportDisclosure
                title={
                  "How can I troubleshoot connectivity issues on StartupTrader?"
                }
              />
            </div>

            <div className="my-16">
              <p className="text-[32px] font-manrope font-bold text-[#FFFFFF] py-5">
                Privacy and Security
              </p>
              <SupportDisclosure title={"Data Protection on StartupTrader"} />
              <SupportDisclosure title={"Privacy Settings"} />
              <SupportDisclosure
                title={"Can I make my profile completely private?"}
              />
              <SupportDisclosure
                title={"Why is my account locked, and how can I unlock it?"}
              />
              <SupportDisclosure
                title={
                  "What security measures are in place to prevent unauthorized access?"
                }
              />
            </div>
          </div>
          <div className="flex  w-full  flex-col     ">
            <p className="text-[32px] font-manrope font-bold text-[#FFFFFF]">
              Contact us
            </p>
            <p className="text-[16px] font-manrope py-5  text-[#637381]">
              Please send us a message if you need more help.
            </p>
            <p className="text-[16px] font-manrope   text-[#439CFF]">
              Contact us form
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Support;
