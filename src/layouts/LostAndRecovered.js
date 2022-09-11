import LostAndRecoveredCard from "components/LostAndRecoveredCard";
import React from "react";

function LostAndRecovered() {
  return (
    <div>
      <div className="container">
        <div className="mb-50px">
          <h1 className="text-center font-bold text-5xl mb-8">
            LOST & RECOVERED
          </h1>
          <p className="text-center text-base font-light">
            Get a free evaluation of your recovery chances by using our wizard
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-75px">
          <LostAndRecoveredCard
            bg="bg-orange-gradient"
            heading="Total Lost in 2021"
            title="+$14"
            subtitle="BILLION USD"
          />
          <LostAndRecoveredCard
            bg="bg-blue-gradient"
            heading="Total Recovered"
            title="+$450"
            subtitle="MILLION USD"
          />
          <LostAndRecoveredCard
            bg="bg-orange-gradient"
            heading="Wallets Worldwide "
            title="+83"
            subtitle="MILLION WALLETS"
          />
          <LostAndRecoveredCard
            bg="bg-blue-gradient"
            heading="Lionsgate’s Success Rate"
            title="83%"
            subtitle="AND RISING"
          />
        </div>

        <div className="flex items-center space-x-6 justify-center">
          <a href="/" className="rounded-btn">
            Use our Wizard
          </a>
          <a href="/" className="text-base text-black uppercase">
            contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default LostAndRecovered;
