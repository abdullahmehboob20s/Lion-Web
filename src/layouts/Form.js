import React from "react";

function Form() {
  return (
    <form className="w-full max-w-[240px] lg:max-w-[300px] xl:max-w-[345px] mx-auto">
      <div className="space-y-3 mb-5">
        <input
          type="text"
          className="w-full h-8 lg:h-10 xl:h-12 rounded-full bg-white px-6 outline-none text-xs lg:text-sm"
          placeholder="Name"
        />
        <input
          type="email"
          className="w-full h-8 lg:h-10 xl:h-12 rounded-full bg-white px-6 outline-none text-xs lg:text-sm"
          placeholder="Email"
        />
        <input
          type="number"
          className="w-full h-8 lg:h-10 xl:h-12 rounded-full bg-white px-6 outline-none text-xs lg:text-sm"
          placeholder="Mobile Phone Number"
        />
      </div>

      <button type="submit" className="rounded-btn w-1/2 mx-auto">
        SUMBIT
      </button>
    </form>
  );
}

export default Form;
