import React from "react";

export default function Empty() {
  return (
    <div className="flex flex-col p-8 justify-center items-center opacity-40">
      <img src="/icons8-empty-100.png" alt="" width={"80px"} height={"80px"} />
      <span className="font-bold mt-4">Empty</span>
    </div>
  );
}
