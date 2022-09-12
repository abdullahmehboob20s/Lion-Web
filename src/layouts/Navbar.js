import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setIsSidebarOpen(false));

  return (
    <div>
      <div className="container py-5 xl:py-6 flex items-center justify-between">
        <img
          src="images/logo.png"
          className="w-32 md:w-36 lg:w-40 xl:w-52"
          alt=""
        />

        <button
          className="flex md:hidden text-xl text-white"
          onClick={() => setIsSidebarOpen((val) => !val)}
        >
          <FiMenu />
        </button>

        <div
          ref={sidebarRef}
          className={`w-[300px] p-10 md:p-0 md:w-auto flex flex-col md:flex-row md:items-center md:space-x-50px lg:space-x-[150px] fixed md:static top-0 right-0 bg-blue md:bg-transparent h-screen md:h-auto z-[140] space-y-6 md:space-y-0 transition-all duration-[.3s]  ${
            isSidebarOpen
              ? "translate-x-[0px]"
              : "translate-x-[300px] md:translate-x-0"
          }`}
        >
          <button
            className="flex md:hidden text-white text-2xl"
            onClick={() => setIsSidebarOpen((val) => !val)}
          >
            <IoClose />
          </button>

          <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <ScrollLink
              to="Company"
              offset={-100}
              onClick={() => setIsSidebarOpen(false)}
              className="text-white uppercase text-16px cursor-pointer"
            >
              Company
            </ScrollLink>
            <ScrollLink
              to="Services"
              offset={-100}
              onClick={() => setIsSidebarOpen(false)}
              className="text-white uppercase text-16px cursor-pointer"
            >
              Services
            </ScrollLink>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-9">
            <ScrollLink
              to="Contact"
              offset={-100}
              onClick={() => setIsSidebarOpen(false)}
              className="text-white uppercase text-16px cursor-pointer"
            >
              Contact
            </ScrollLink>
            <a href="/" className="rounded-btn text-center md:text-left">
              Use our Wizard
            </a>
          </div>
        </div>
      </div>

      <div className={`black-screen ${isSidebarOpen ? "show" : ""}`}></div>
    </div>
  );
}

export default Navbar;
