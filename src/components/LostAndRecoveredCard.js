import React from "react";

function LostAndRecoveredCard({ heading, title, subtitle, bg }) {
  return (
    <div
      className={`rounded-30px py-6 px-9 flex flex-col items-center text-center ${bg}`}
    >
      <p className="text-center text-white uppercase text-shadow-1 mb-4">
        {heading}
      </p>

      <h1 className="text-center text-white text-6xl font-bold mb-2">
        {title}
      </h1>
      <h4 className="text-center uppercase font-bold text-2xl text-white">
        {subtitle}
      </h4>
    </div>
  );
}

export default LostAndRecoveredCard;
