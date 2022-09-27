import React from "react";

function Footer2({ textColor = "text-black" }) {
  return (
    <div
      className={`${textColor} container flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-between`}
    >
      <a href="#" className="text-base lg:text-lg xl:text-xl font-light">
        Privacy Policy{" "}
      </a>

      <p className="text-base lg:text-lg xl:text-xl font-light">
        Copyright © 2022 Lionsgate
      </p>
    </div>
  );
}

export default Footer2;
