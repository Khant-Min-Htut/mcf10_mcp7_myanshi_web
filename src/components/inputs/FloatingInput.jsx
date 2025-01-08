import React from "react";

const FloatingInput = ({
  type = "text",
  name,
  id,
  label,
  value,
  onChange,
  required = false,
  isTextarea = false,
  ...props
}) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor={id}
        className=" uppercase text-neutral-600 text-bodyLarge max-[400px]:text-bodySmall max-[843px]:text-bodyDefault "
      >
        {label}
      </label>

      {isTextarea ? (
        <textarea
          rows="3"
          className="block py-2.5 px-0 w-full  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-stroke-2-color appearance-none focus:outline-none focus:ring-0 focus:border-primary-color peer"
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={`block py-2.5 px-0 w-full  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-stroke-2-color appearance-none focus:outline-none focus:ring-0 focus:border-primary-color peer  `}
          placeholder=" "
          required={required}
          {...props}
        />
      )}
    </div>
  );
};

export default FloatingInput;
