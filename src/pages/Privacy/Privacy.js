import React from "react";
import ClientLayout from "../../layout/ClientLayout/ClientLayout";
import TextComponet from "../../components/Text/TextComponet";
import NavbarClient from "../../components/Navbar/NavbarClient";
import Footer from "../../components/Footer/Footer";

const Privacy = () => {
  return (
    <div className="privacy-pg">
      <NavbarClient />
      <div className="bg-[#171F38]">
        <div className=" lg:pt-[150px] sm:pt-[100px] section-width">
          <div className="flex  w-full  flex-col justify-center items-center pb-10    ">
            <p className="text-[#FFFFFF] text-[32px]  font-manrope font-bold text-center">
              EditPage, LLC
            </p>
            <p className="text-[#FFFFFF] text-[32px]  font-manrope font-bold text-center">
              ONLINE PRIVACY POLICY AGREEMENT
            </p>
          </div>
          <div className="flex  w-full  flex-col justify-center items-center   ">
            <p className="text-[#CCCED5] text-[16px] font-manrope">
              EditPage, LLC, (EditPage), is committed to keeping any and all
              personal information collected of those individuals that visit our
              website and make use of our online facilities and services
              accurate, confidential, secure and private. Our privacy policy has
              been designed and created to ensure those affiliated with
              EditPage,LLC of our commitment and realization of our obligation
              not only to meet but to exceed most existing privacy
              standards.THEREFORE, this Privacy Policy Agreement shall apply to
              EditPage, LLC, and thus it shall govern any and all data
              collection and usage thereof. Through the use of www.editpage.com
              you are herein consenting to the following data procedures
              expressed within this agreement. It is highly recommended and
              suggested that you review the privacy policies and statements of
              any website you choose to use or frequent as a means to better
              understand the way in which other websites garner, make use of and
              share information collected.
            </p>

            <TextComponet
              title={"Collection of Information"}
              para={
                "This website collects various types of information, such as:- Voluntarily provided information which may include your name, address, email address, billing and/or credit card information etc., which may be used when you purchase products and/or services and to deliver the services you have requested.- Information automatically collected when visiting our website, which may include cookies, third party tracking technologies and server logs.Please rest assured that this site shall only collect personal information that you knowingly and willingly provide by way of surveys, completed membership forms, and emails. It is the intent of this site to use personal information only for the purpose for which it was requested and any additional uses specifically provided on this site.EditPage, LLC may have the occasion to collect non-personal anonymous demographic information, such as age, gender, household income, political affiliation, race and religion, as well as the type of browser you are using, IP address, type of operating system, at a later time, that will assist us in providing and maintaining superior quality service."
              }
            />
            <p className="text-[#CCCED5] text-[16px] font-manrope">
              {" "}
              EditPage, LLC does not now, nor will it in the future, sell, rent
              or lease any of its customer lists and/or names to any third
              parties. EditPage, LLC may deem it necessary to follow websites
              and/or pages that their users may frequent in an effort to gleam
              what types of services and/or products may be the most popular to
              customers or the general public.EditPage, LLC may disclose your
              personal information, without any prior notice to you, unless
              required to do in accordance to applicable laws and/or in a good
              faith belief that such action is deemed necessary or required in
              an effort to: - Remain in conformance with any decrees, laws
              and/or statutes or in an effort to comply with any process which
              may be served upon EditPage, LLC and/or its website;{" "}
            </p>
            <p className="text-[#CCCED5] text-[16px] font-manrope">
              - Maintain, safeguard and/or preserve all the rights and/or
              property of EditPage, LLC; and- Perform under demanding conditions
              in an effort to safeguard the personal safety of users of
              www.editpage.com and/or the general public. Non-Marketing
              PurposesEditPage, LLC greatly respects your privacy. We do
              maintain and reserve the right to contact you if needed for
              non-marketing purposes (such as bug alerts, security breaches,
              account issues, and/or changes in EditPage,LLC products and
              services). In certain circumstances, we may use our website,
              newspapers, or other public means to post a notice.
            </p>
            <TextComponet
              title={"Use of Information Collected"}
              para={
                "EditPage, LLC may collect and may make use of personal information to assist in the operation of our website and to ensure delivery of the services you need and request. At times, we may find it necessary to use personally identifiable information as a means to keep you informed of other possible products and/or services that may be available to you from www.editpage.com. EditPage,LLC may also be in contact with you with regards to completing surveys and/or research questionnaires related to your opinion of current or potential future services that may be offered."
              }
            />
            <TextComponet
              title={"Children Under Age of 13"}
              para={
                "EditPage, LLC does not knowingly collect personal identifiable information from children under the age of thirteen (13) without verifiable parental consent. If it is determined that such information has been inadvertently collected on anyone under the age of thirteen (13), we shall immediately take the necessary steps to ensure that such information is deleted from our system's database. Anyone under the age of thirteen (13) must seek and obtain parent or guardian permission to use this website."
              }
            />
            <TextComponet
              title={"Unsubscribe or Opt-Out"}
              para={
                "All users and/or visitors to our website have the option to discontinue receiving communication from us and/or reserve the right to discontinue receiving communications by way of email or newsletters. To discontinue or unsubscribe to our website please send an email that you wish to unsubscribe to Info@editpage.co. If you wish to unsubscribe or opt-out from any third party websites, you must go to that specific website to unsubscribe and/or opt-out. EditPage,LLC will continue to adhere to the privacy policy described herein with respect to any personal information previously collected."
              }
            />
            <TextComponet
              title={"Links to Other Web Sites"}
              para={
                "Our website does contain links to affiliate and other websites. EditPage,LLC does not claim nor accept responsibility for any privacy policies, practices and/or procedures of other such websites. Therefore, we encourage all users and visitors to be aware when they leave our website and to read the privacy statements of each and every website that collects personally identifiable information. The aforementioned Privacy Policy Agreement applies only and solely to the information collected by our website."
              }
            />
            <TextComponet
              title={"How to Contact Us"}
              para={
                "If you have any questions or concerns regarding the Privacy Policy Agreement related to our website, please feel free to contact us at the following email, telephone number or mailing address."
              }
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
