import React from "react";

export default function Input({
  placeholder,
  className,
  value,
  changeValue,
  children,
  ...props
}) {
  return (
    <span className="relative">
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
