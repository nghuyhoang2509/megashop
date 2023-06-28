import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className="w-screen min-h-screen h-full container mx-auto flex flex-col relative">
        <div>
          <Header />
        </div>
        <div className="my-4">{children}</div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}
