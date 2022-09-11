import Title from "components/Title";
import React from "react";

function RecoverWithUs() {
  return (
    <div>
      <div className="container">
        <div className="mb-8 md:mb-12">
          <Title title="RECOVER WITH US " className="text-white" />
        </div>
      </div>

      <div className="container flex flex-col md:flex-row items-center justify-between md:space-x-10 lg:space-x-0">
        <div className="flex-1 lg:w-[40%] text-center md:text-left">
          <p className="text-20px text-white font-light mb-6 md:mb-10">
            In collaborating with our partners in legal, cybersecurity and local
            authorities in various countries, we are confident in our joint
            success to recover lost funds.
          </p>
          <p className="text-20px text-white font-medium mb-10">
            We enable our clients to enter into a recovery process that ensures
            their funds are not neglected and while rapidly scaling up RSR
            (recovery success rate) with the full support of our
            multidisciplinary teams. Together our chances to recover your funds
            and reach a settlement is greater than ever before.
          </p>
        </div>
        <div className="flex-1 max-w-[22rem] md:max-w-none md:w-full w-full lg:w-1/2 flex justify-end lg:justify-center items-center">
          <img
            src="images/recover-with-us.png"
            className="w-full lg:w-[70%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default RecoverWithUs;
