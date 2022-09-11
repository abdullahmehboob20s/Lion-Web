import React from "react";

function Navbar() {
  return (
    <div>
      <div className="container py-6 flex items-center justify-between">
        <img src="images/logo.png" className="w-52" alt="" />

        <div className="flex items-center space-x-[150px]">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-white uppercase text-base">
              Company
            </a>
            <a href="/" className="text-white uppercase text-base">
              Services
            </a>
          </div>
          <div className="flex items-center space-x-9">
            <a href="/" className="text-white uppercase text-base">
              Company
            </a>
            <a
              href="/"
              className="text-white uppercase text-base bg-green-to-blue block font-bold py-2 px-7 rounded-full"
            >
              Use our Wizard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
