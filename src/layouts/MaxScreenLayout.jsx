import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MaxScreenLayout({ children }) {
  return (
    <>
      <div className="pb-6 w-screen h-screen max-xl:px-3 overflow-hidden container mx-auto flex flex-col relative">
        <div>
          <Header />
        </div>
        <div className="my-4 flex-1 overflow-hidden">{children}</div>
      </div>
    </>
  );
}
