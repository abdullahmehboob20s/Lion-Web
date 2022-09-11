import Title from "components/Title";
import React from "react";

function Company() {
  return (
    <div>
      <div className="container">
        <div className="mb-6">
          <Title title="COMPANY" className="text-white" />
        </div>
      </div>

      <div className="container flex flex-col md:flex-row items-center md:space-x-7 lg:space-x-0 justify-between">
        <div className="md:w-1/2 lg:w-[40%] text-center md:text-left">
          <p className="text-20px text-white font-light mb-4 md:mb-6 lg:mb-10">
            We’re reinventing funds recovery from the inside out
          </p>
          <p className="text-20px text-white font-medium mb-10">
            Led by an experienced and visionary team, we are on a mission to
            help people and organizations discover how to retrieve their lost
            funds within a professional environment that accelerates their trust
            in a highly delicate process.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="images/company.png"
            className="max-w-[28rem] md:max-w-none w-[100%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Company;
