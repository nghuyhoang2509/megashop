import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
  return (
    <div className="text-3xl font-semibold flex items-center">
      <LoadingOutlined className="mr-3" />
      Loading
    </div>
  );
}
