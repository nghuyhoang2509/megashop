import React from "react";

export default function Button({
  children,
  onClick,
  className,
  small,
  outline,
}) {
  return (
    <button
      onClick={onClick}
      className={`${!small && "py-4 px-8"} ${
        outline
          ? "bg-white text-black border-black border"
          : "bg-black text-white "
      } font-semibold text-center rounded-md ${className}`}
    >
      {children}
    </button>
  );
}
