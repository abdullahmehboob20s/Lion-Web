import Title from "components/Title";
import React from "react";

function RecoverWithUs() {
  return (
    <div>
      <div className="container">
        <div className="mb-12">
          <Title title="RECOVER WITH US " className="text-white" />
        </div>
      </div>

      <div className="container flex items-center justify-between">
        <div className="w-[40%]">
          <p className="text-xl text-white font-light mb-10">
            In collaborating with our partners in legal, cybersecurity and local
            authorities in various countries, we are confident in our joint
            success to recover lost funds.
          </p>
          <p className="text-xl text-white font-medium mb-10">
            We enable our clients to enter into a recovery process that ensures
            their funds are not neglected and while rapidly scaling up RSR
            (recovery success rate) with the full support of our
            multidisciplinary teams. Together our chances to recover your funds
            and reach a settlement is greater than ever before.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src="images/recover-with-us.png" className="w-[70%]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default RecoverWithUs;
