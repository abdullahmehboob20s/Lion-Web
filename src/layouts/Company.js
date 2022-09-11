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

      <div className="container flex items-center justify-between">
        <div className="w-[40%]">
          <p className="text-xl text-white font-light mb-10">
            We’re reinventing funds recovery from the inside out
          </p>
          <p className="text-xl text-white font-medium mb-10">
            Led by an experienced and visionary team, we are on a mission to
            help people and organizations discover how to retrieve their lost
            funds within a professional environment that accelerates their trust
            in a highly delicate process.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src="images/company.png" className="w-[100%]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Company;
