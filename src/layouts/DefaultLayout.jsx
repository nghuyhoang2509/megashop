import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="w-screen min-h-screen px-20 flex flex-col relative">
      <div>
        <Header />
      </div>
      <div className="my-4">{children}</div>
      <div className="mt-auto -mx-20">
        <Footer />
      </div>
    </div>
  );
}
