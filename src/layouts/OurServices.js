import { PopupButton } from "@typeform/embed-react";
import Point from "components/Point";
import Title from "components/Title";
import React from "react";

function OurServices() {
  return (
    <div>
      <div className="container">
        <div className="mb-8 md:mb-14">
          <Title title="OUR SERVICES" className="text-white" />
        </div>
      </div>

      <div className="relative mb-50px md:mb-75px">
        <div className="container">
          <div className="max-w-[22rem] mx-auto md:mx-0 md:max-w-none md:w-1/2">
            <p className="text-20px text-white font-light mb-6 md:mb-10">
              Our speciality is to hear from our clients all about their
              requirements and needs, to then create a unique roadmap to a
              successful money recovery journey via our a-z portfolio of
              services we create for each of our clients such as:
            </p>

            <div className="space-y-4 md:space-y-8">
              <Point
                point="Utilizing our cyber analysts team to discover information where the funds are. We use ethical hacking techniques to mimic the tracing of your funds. (around 30 business days)"
                textClassName="text-white"
              />
              <Point
                point="Our legal team works directly with the local law enforcement to press charges against the embezzlers on their land. (around 14 business days)"
                textClassName="text-white"
              />
              <Point
                point="Business incorporation services "
                textClassName="text-white"
              />
              <Point
                point="A Pro Bono plan for underprivileged"
                textClassName="text-white"
              />
            </div>
          </div>
        </div>
        <img
          src="images/our-services.png"
          className="md:absolute top-1/2 md:-translate-y-1/2 right-0 left-[61%] max-w-[22rem] md:max-w-none mx-auto md:mx-0 w-[90%] md:w-[44%] mt-10 md:mt-0"
          alt=""
        />
      </div>

      <div className="container">
        <div className="flex items-center space-x-6 justify-center">
          {/* <a href="/" className="rounded-btn">
            Use our Wizard
          </a> */}
          <PopupButton
            id="e8zavgJB"
            data-tf-iframe-props="title=Lionsgate Wizard"
            data-tf-medium="snippet"
            className="rounded-btn"
          >
            Use our Wizard
          </PopupButton>
          <a href="/" className="text-16px text-white uppercase">
            contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
