import SocialIcon from "components/SocialIcon";
import Title from "components/Title";
import React from "react";
import Form from "./Form";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import Scroll from "react-scroll";

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

            <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-10 justify-center">
              <SocialIcon
                href="/"
                Icon={() => (
                  <FaFacebook className="text-base lg:text-xl xl:text-2xl text-blue" />
                )}
              />
              <SocialIcon
                href="/"
                Icon={() => <FaTwitter className="text-20px text-blue" />}
              />
              <SocialIcon
                href="/"
                Icon={() => (
                  <FaLinkedinIn className="text-base lg:text-xl xl:text-2xl text-blue" />
                )}
              />
              <SocialIcon
                href="/"
                Icon={() => (
                  <FaMediumM className="text-base lg:text-xl xl:text-2xl text-blue" />
                )}
              />
              <SocialIcon
                href="/"
                Icon={() => (
                  <HiMail className="text-base lg:text-xl xl:text-2xl text-blue" />
                )}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-center justify-between relative">
            <button
              className="flex mx-auto text-3xl md:text-4xl lg:text-5xl sm:absolute top-1/2 sm:-translate-y-1/2 left-1/2 sm:-translate-x-1/2 text-white rotate-180"
              onClick={() => Scroll.scroller.scrollTo("home")}
            >
              <BiChevronDown />
            </button>

            <p className="text-20px text-white font-light">Privacy Policy</p>
            <p className="text-20px text-white font-light">
              Copyright © 2022 Lionsgate
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
