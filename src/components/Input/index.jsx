import React from "react";

export default function Input({
  placeholder,
  className,
  value,
  changeValue,
  children,
  wFull,
  ...props
}) {
  return (
    <span className={`${wFull && "w-full justify-center flex"}`}>
      <input
        {...props}
        value={value}
        onChange={changeValue ? changeValue : () => null}
        placeholder={placeholder}
        className={`${className} outline-none border rounded-md p-3`}
      />
      {children}
    </span>
  );
}
