import Title from "components/Title";
import React from "react";

function GettingStarted() {
  return (
    <div>
      <div className="container">
        <div className="mb-6 md:mb-8">
          <Title title="Getting started is easy" />
        </div>
        <p className="text-xs md:text-20px text-black leading-[1.6] font-light text-center w-full max-w-[40em] mx-auto">
          Tell us a little about your case and we'll tell you your chances of
          getting your money back. The majority of cases can be resolved. In the
          event that your chances exceed 75% with our Wizard, a Lionsgate expert
          will contact you to provide more information about the service. An
          absolute commitment to confidentiality.
        </p>
      </div>
    </div>
  );
}

export default GettingStarted;
