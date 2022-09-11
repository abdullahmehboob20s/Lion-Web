import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import TrustedCompanies from "layouts/TrustedCompanies";
import LostAndRecovered from "layouts/LostAndRecovered";
import GettingStarted from "layouts/GettingStarted";
import ServicesIncludes from "layouts/ServicesIncludes";
import ServicesStructure from "layouts/ServicesStructure";
import OurServices from "layouts/OurServices";
import RecoverWithUs from "layouts/RecoverWithUs";
import Company from "layouts/Company";
import DrivenByExperts from "layouts/DrivenByExperts";
import Footer from "layouts/Footer";

function App() {
  return (
    <div>
      <div className="bg-blue mb-50px sm:mb-75px lg:mb-100px">
        <Navbar />
        <Hero />
      </div>
      <div className="mb-75px sm:mb-100px lg:mb-150px">
        <TrustedCompanies />
      </div>
      <div className="mb-75px lg:mb-100px">
        <LostAndRecovered />
      </div>
      <div className="mb-75px lg:mb-100px">
        <GettingStarted />
      </div>
      <div className="mb-75px lg:mb-100px">
        <ServicesIncludes />
      </div>
      <div>
        <ServicesStructure />
      </div>

      <div className="mb-50px md:mb-75px lg:mb-100px xl:mb-150px">
        <div className="bg-blue">
          <img src="images/curved-down.svg" alt="" />
          <div className="py-50px md:py-100px xl:py-150px pb-0 z-20 relative">
            <div className="mb-75px sm:mb-100px lg:mb-150px">
              <OurServices />
            </div>
            <div className="mb-75px sm:mb-100px lg:mb-150px">
              <RecoverWithUs />
            </div>
            <div className="mb-75px sm:mb-100px lg:mb-150px">
              <Company />
            </div>
            <DrivenByExperts />
          </div>
        </div>
        <img
          src="images/curved-blue-down.svg"
          className="-z-50 w-full mt-[-6%]"
          alt=""
        />
      </div>

      <div className="mb-50px md:mb-75px lg:mb-100px xl:mb-150px">
        <div className="container">
          <h2 className="text-center text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold max-w-[26em] leading-[1.5] uppercase w-full mx-auto">
            With Lionsgate Recovery Wizard, you can begin recovering your funds,
            starting today.
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
