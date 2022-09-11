import React from "react";

function Title({ title, className }) {
  return (
    <h1
      className={`text-center font-bold text-xl sm:text-2xl lg:text-3xl xl:text-5xl uppercase ${className}`}
    >
      {title}
    </h1>
  );
}

export default Title;
