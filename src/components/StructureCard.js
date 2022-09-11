import React from "react";
import Point from "./Point";

function StructureCard({ title, headerBg, points }) {
  return (
    <div className="bg-white rounded-30px overflow-hidden">
      <div
        className={`py-6 px-14 rounded-30px text-white leading-[1.4] text-2xl font-bold ${headerBg}`}
      >
        {title}
      </div>

      <div className="px-14 flex flex-col justify-center space-y-5 h-[218px]">
        {points &&
          points.map((point, index) => (
            <Point point={point} fontSize="text-sm" />
          ))}
      </div>
    </div>
  );
}

export default StructureCard;
