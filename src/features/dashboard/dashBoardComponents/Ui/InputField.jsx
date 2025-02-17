import React from "react";

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  label,
  name,
  options,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor={name}
        className="uppercase text-[#09090B] text-[16px] font-satoshi"
      >
        {label}
      </label>
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`w-[414px] h-[40px] border rounded px-4 mb-6text-[14px] font-satoshi mb-4 ${className}`}
        >
          <option value="" className=" text-[14px] font-satoshi">
            Select {label}
          </option>
          {options?.map((option, index) => (
            <option
              key={index}
              value={option}
              className=" text-[14px] font-satoshi"
            >
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-[414px] h-[40px] border rounded px-4 mb-4 text-[14px] font-satoshi ${className}`}
        />
      )}
    </div>
  );
};

export default InputField;
