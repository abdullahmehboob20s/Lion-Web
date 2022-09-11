import React from "react";
import { BiChevronDown } from "react-icons/bi";

function Hero() {
  return (
    <div className="relative z-10">
      <div className="container pt-75px">
        <div className="max-w-[826px] mx-auto w-full">
          <div className="mb-50px">
            <h1 className="text-center uppercase text-5xl font-bold text-white leading-[1.3] mb-8">
              RECOVERY SERVICE <br /> FOR YOUR LOST FUNDS
            </h1>

            <p className="text-center text-white font-light text-base tracking-widest mb-8">
              Get a free evaluation of your recovery chances by using our wizard
            </p>

            <a href="/" className="rounded-btn w-fit mx-auto">
              Use our Wizard
            </a>
          </div>

          <img src="images/laptop.png" className="w-full mb-25px" alt="" />

          <button className="flex mx-auto text-5xl">
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
