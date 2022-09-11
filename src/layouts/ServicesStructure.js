import StructureCard from "components/StructureCard";
import React from "react";

function ServicesStructure() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center leading-[1.5] text-3xl font-bold mb-20">
          Together with our global associates and <br /> dedicated legal and
          cyber analysts, we provide <br /> clients with a tailored deal-flow.
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <StructureCard
            headerBg="bg-orange-gradient"
            title="Lionsgate services are suitable for both private and corporate clients who also experienced:"
            points={[
              "Wallet hacking",
              "Funds plunged with Celsius, Luna and others",
              "Sudden lost access to their wallet  ",
            ]}
          />
          <StructureCard
            headerBg="bg-blue-gradient"
            title="More benefits our clients find with Lionsgate are:"
            points={[
              "Navigating the rabbit hole to locate your funds anywhere ",
              "A speedy process to recovery - Premium Express ",
              "Utilizing the resources available to us, all in one place  ",
              "Legal teams in various territories to combat embezzlers on their land",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesStructure;
