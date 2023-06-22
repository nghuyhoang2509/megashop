import React from "react";

export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} mt-8 py-4 px-8 font-semibold text-white bg-black text-center rounded-md`}
    >
      {children}
    </button>
  );
}
