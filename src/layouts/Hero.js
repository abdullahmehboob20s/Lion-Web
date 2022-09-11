import React from "react";
import { BiChevronDown } from "react-icons/bi";

function Hero() {
  return (
    <div className="relative z-10">
      <div className="container pt-8 lg:pt-50px xl:pt-75px">
        <div className="max-w-[400px] md:max-w-[500px] lg:max-w-[620px] xl:max-w-[826px] mx-auto w-full">
          <div className="mb-8 md:mb-10 xl:mb-50px">
            <h1
              className="text-center uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 xl:mb-8"
              style={{ lineHeight: 1.3 }}
            >
              RECOVERY SERVICE <br /> FOR YOUR LOST FUNDS
            </h1>

            <p className="text-center max-w-[22em] mx-auto md:max-w-none md:mx-0 text-white font-light text-16px tracking-widest mb-8">
              Get a free evaluation of your recovery chances by using our wizard
            </p>

            <a href="/" className="rounded-btn w-fit mx-auto">
              Use our Wizard
            </a>
          </div>

          <img src="images/laptop.png" className="w-full mb-25px" alt="" />

          <button className="flex mx-auto text-3xl md:text-4xl xl:text-5xl">
            <BiChevronDown />
          </button>
        </div>
      </div>

      <img
        src="images/curved.svg"
        className="absolute left-0 bottom-0 w-full -z-50"
        alt=""
      />
    </div>
  );
}

export default Hero;
