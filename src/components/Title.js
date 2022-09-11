import React from "react";

function Title({ title, className }) {
  return (
    <h1 className={`text-center font-bold text-5xl uppercase ${className}`}>
      {title}
    </h1>
  );
}

export default Title;
