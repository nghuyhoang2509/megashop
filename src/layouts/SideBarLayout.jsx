import React from "react";
import SideBarAdmin from "../pages/Admin/SideBarAdmin";

export default function SideBarLayout({ children }) {
  return (
    <div className="w-screen h-screen overflow-hidden relative flex flex-row">
      <SideBarAdmin />
      <div className="h-full flex-1">{children}</div>
    </div>
  );
}
