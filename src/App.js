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

function App() {
  return (
    <div>
      <div className="bg-blue mb-100px">
        <Navbar />
        <Hero />
      </div>
      <div className="mb-150px">
        <TrustedCompanies />
      </div>
      <div className="mb-100px">
        <LostAndRecovered />
      </div>
      <div className="mb-100px">
        <GettingStarted />
      </div>
      <div className="mb-100px">
        <ServicesIncludes />
      </div>
      <div className="mb-100px">
        <ServicesStructure />
      </div>
      <div className="bg-blue py-150px">
        <div className="mb-150px">
          <OurServices />
        </div>
        <div className="mb-150px">
          <RecoverWithUs />
        </div>
        <div className="mb-150px">
          <Company />
        </div>
        <DrivenByExperts />
      </div>
    </div>
  );
}

export default App;
