import Title from "components/Title";
import React from "react";
import Form from "./Form";
import FooterFooter from "./FooterFooter";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <>
      <img
        src="images/curved-blue.svg"
        className="-z-50 w-full mb-[-13%]"
        alt=""
      />
      <div className="mt-25px md:pt-0 pb-50px md:py-100px bg-blue relative">
        <div className="container">
          <div className="mb-50px sm:mb-100px xl:mb-150px">
            <div className="mb-50px sm:mb-75px xl:mb-100px">
              <Form />
            </div>

            <div className="mb-25px xl:mb-50px">
              <Title title="contact us" className="text-white" />
            </div>

            <SocialIcons />
          </div>

          <FooterFooter arrowUpShow={true} />
        </div>
      </div>
    </>
  );
}

export default Footer;
