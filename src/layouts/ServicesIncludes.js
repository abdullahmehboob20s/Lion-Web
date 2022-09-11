import Title from "components/Title";
import React from "react";

const Point = ({ point }) => {
  return (
    <div className="flex items-start space-x-4">
      <img src="images/checkbox-icon.svg" className="mt-[.36em]" alt="" />
      <p className="text-xl font-medium text-black">{point}</p>
    </div>
  );
};

function ServicesIncludes() {
  return (
    <div>
      <div className="container">
        <div className="mb-12">
          <Title title="Lionsgate’s services include " />
        </div>

        <div className="flex items-center justify-center space-x-10">
          <img src="images/laptop.png" className="w-1/2" alt="" />

          <div className="space-y-6">
            <Point point="The use of ethical cyber tools by our team of analysts" />
            <Point point="Investigate transactions and trace flow of funds" />
            <Point point="Filling an official complaint with local authorities " />
            <Point point="Submitting a demand claim to the holder of your funds" />
            <Point point="Getting you the best settlement" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesIncludes;
