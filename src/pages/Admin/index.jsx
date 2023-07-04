import React from "react";
import role from "../../constant/role";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth/auth.action";
import { UserOutlined } from "@ant-design/icons";
import Login_Register from "../../components/Login_Register";
import Button from "../../components/Button";
import SideBarLayOut from "../../layouts/SideBarLayout";
import DashBoard from "./pages/DashBoard";
import Category from "./pages/Category";
import Product from "./pages/Product";
import User from "./pages/User";
import Order from "./pages/Order";

export default function Admin() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {user?.role == role.admin || user?.role == role.manager ? (
        <SideBarLayOut>
          <div className="h-full p-2">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              {/*  <Route path="/category" element={<Category />} /> */}
              <Route path="/product" element={<Product />} />
              <Route path="/order" element={<Order />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
        </SideBarLayOut>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          {user?.email ? (
            <span className="flex flex-col text-xl font-medium items-center justify-center max-md:text-xs">
              <UserOutlined className="text-2xl my-1" />
              <span className="my-1">{user.fullName}</span>
              <span className="mt-1 mb-3">{user.email}</span>
              <span className="font-semibold">
                Tài khoản này không có quyền truy cập
              </span>
              <Button
                className={"text-lg mt-8"}
                onClick={() => dispatch(logout())}
              >
                Log out
              </Button>
            </span>
          ) : (
            <div className="w-80">
              <Login_Register hideRegister />
            </div>
          )}
        </div>
      )}
    </>
  );
}
