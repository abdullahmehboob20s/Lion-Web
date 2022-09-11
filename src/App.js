import React from "react";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div>
      <div className="bg-blue mb-100px">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
