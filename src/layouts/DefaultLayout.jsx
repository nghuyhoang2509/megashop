import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className="w-screen min-h-screen h-full container mx-auto flex flex-col relative">
        <div className="max-xl:px-4">
          <Header />
        </div>
        <div className="my-4 max-md:my-2">{children}</div>
        <div className="mt-auto max-md:mb-14">
          <Footer />
        </div>
      </div>
    </>
  );
}
