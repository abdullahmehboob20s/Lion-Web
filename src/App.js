import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";
import TrustedCompanies from "./layouts/TrustedCompanies";

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
    </div>
  );
}

export default App;
