import React from "react";
import { FacebookFilled, PhoneFilled } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="font-bold text-xl flex justify-center items-center p-8 bg-black text-white">
      <div className="flex-row flex items-center">
        <h1 className="">MEGASHOP</h1>
        <FacebookFilled className="ml-6" />
        <PhoneFilled className="ml-6" />
      </div>
    </div>
  );
}
