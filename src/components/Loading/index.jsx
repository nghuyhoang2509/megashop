import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
  return (
    <div className="text-2xl z-loading absolute left-0 right-0 bottom-0 top-0 bg-white bg-opacity-70 font-semibold justify-center flex items-center">
      <LoadingOutlined className="mr-3" />
      Loading
    </div>
  );
}
