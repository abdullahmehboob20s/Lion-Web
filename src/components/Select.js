import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";

function Select({ id, name, options, placeholder }) {
  const selectRef = useRef();
  const [value, setValue] = useState(placeholder);

  useEffect(() => {
    if (value === placeholder) {
      selectRef.current.style.color = "rgba(0,0,0,.5)";
    } else {
      selectRef.current.style.color = "inherit";
    }
  }, [value]);

  return (
    <div className="relative">
      <select
        onChange={(e) => setValue(e.target.value)}
        ref={selectRef}
        name={name}
        className="form-input hide-icon cursor-pointer"
        placeholder="select"
        id={id}
        // value={placeholder}
      >
        <option
          className="font-medium text-xs lg:text-sm"
          value={placeholder}
          disabled
          hidden
          selected
        >
          {placeholder}
        </option>

        {options &&
          options.map((option, index) => {
            return (
              <option
                className="font-medium text-xs lg:text-sm"
                key={index}
                value={option.title}
              >
                {option.title}
              </option>
            );
          })}
      </select>

      <button className="w-[1.8em] h-[1.8em] flex items-center justify-center text-[8px] xl:text-xs text-white rounded-full bg-blue absolute top-1/2 -translate-y-1/2 right-5 pointer-events-none">
        <AiFillCaretDown />
      </button>
    </div>
  );
}

export default Select;
