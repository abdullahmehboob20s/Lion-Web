import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import TrustedCompanies from "layouts/TrustedCompanies";
import LostAndRecovered from "layouts/LostAndRecovered";

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
      <div className="mb-150px">
        <LostAndRecovered />
      </div>
    </div>
  );
}

export default App;
