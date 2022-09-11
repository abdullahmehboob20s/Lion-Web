import SocialIcon from "components/SocialIcon";
import Title from "components/Title";
import React from "react";
import Form from "./Form";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";

function Footer() {
  return (
    <>
      <img
        src="images/curved-blue.svg"
        className="-z-50 w-full mb-[-13%]"
        alt=""
      />
      <div className="pt-0 py-100px bg-blue relative">
        <div className="container">
          <div className="mb-150px">
            <div className="mb-100px">
              <Form />
            </div>

            <div className="mb-50px">
              <Title title="contact us" className="text-white" />
            </div>

            <div className="flex items-center space-x-10 justify-center">
              <SocialIcon
                href="/"
                Icon={() => <FaFacebook className="text-2xl text-blue" />}
              />
              <SocialIcon
                href="/"
                Icon={() => <FaTwitter className="text-xl text-blue" />}
              />
              <SocialIcon
                href="/"
                Icon={() => <FaLinkedinIn className="text-2xl text-blue" />}
              />
              <SocialIcon
                href="/"
                Icon={() => <FaMediumM className="text-2xl text-blue" />}
              />
              <SocialIcon
                href="/"
                Icon={() => <HiMail className="text-2xl text-blue" />}
              />
            </div>
          </div>

          <div className="flex items-center justify-between relative">
            <p className="text-xl text-white font-light">Privacy Policy</p>
            <p className="text-xl text-white font-light">
              Copyright © 2022 Lionsgate
            </p>

            <button className="flex mx-auto text-5xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white rotate-180">
              <BiChevronDown />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
