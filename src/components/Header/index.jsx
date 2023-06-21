import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <div className="flex py-6 flex-row justify-between items-center sticky top-0 left-0 right-0">
      <div>
        <Link to={"/"}>
          <h1 className="text-3xl font-bold">MEGASHOP</h1>
        </Link>
      </div>
      <div className="text-lg font-medium">
        <Link
          to={"/"}
          className={`${
            location.pathname == "/"
              ? "border-b-2 border-gray-600"
              : "hover:border-b-2 hover:border-gray-300 hover:text-gray-400"
          } transition-all ease-linear  mx-2 `}
        >
          Home
        </Link>
        <Link
          to={"/product"}
          className={`${
            location.pathname == "/product"
              ? "border-b-2 border-gray-600"
              : "hover:border-b-2 hover:border-gray-300 hover:text-gray-400"
          } transition-all ease-linear  mx-2 `}
        >
          Product
        </Link>
        <Link className="transition-all ease-linear mx-2 hover:border-b-2 hover:border-gray-300 hover:text-gray-400">
          Contact
        </Link>
      </div>
      <div className="flex items-center text-sm text-gray-500 cursor-pointer">
        <h3>
          <UserOutlined className="text-xl mr-3" />
          <span className="mr-2">Login</span>/
          <span className="ml-2">Register</span>
          <span className="hover:bg-gray-200 hover:text-gray-500 w-8 h-8 transition-all ease-linear inline-flex items-center justify-center p-2 rounded-full ml-4 text-black">
            <ShoppingCartOutlined className="text-xl" />
          </span>
        </h3>
      </div>
    </div>
  );
}
