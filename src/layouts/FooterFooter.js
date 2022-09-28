import React from "react";
import { BiChevronDown } from "react-icons/bi";
import Scroll from "react-scroll";

function FooterFooter({ textColor = "text-white", arrowUpShow = false }) {
  return (
    <div
      className={`${textColor} flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-center justify-between relative`}
    >
      {arrowUpShow ? (
        <button
          className="flex mx-auto text-3xl md:text-4xl lg:text-5xl sm:absolute top-1/2 sm:-translate-y-1/2 left-1/2 sm:-translate-x-1/2 rotate-180"
          onClick={() => Scroll.scroller.scrollTo("home")}
        >
          <BiChevronDown />
        </button>
      ) : null}

      <p className="text-20px font-light">Privacy Policy</p>
      <p className="text-20px font-light">Copyright © 2022 Lionsgate</p>
    </div>
  );
}

export default FooterFooter;
