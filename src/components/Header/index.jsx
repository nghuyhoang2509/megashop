import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  ShoppingCartOutlined,
  HomeTwoTone,
  AppstoreTwoTone,
  MailTwoTone,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import Modal from "../Modal";
import Login_Register from "../Login_Register";
import { getCartFromLocalStorage } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/auth.action";
import { useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { length } = useSelector((state) => state.cart);

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex max-md:py-2 py-6 flex-row justify-between items-center">
      {user ? (
        <></>
      ) : (
        <Modal open={openModal} setOpen={setOpenModal}>
          <Login_Register />
        </Modal>
      )}
      <div className="max-md:hidden">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold">MEGASHOP</h1>
        </Link>
      </div>
      <div className="text-lg max-md:z-navigateBar max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:p-2 max-md:bg-white max-md:fixed max-md:flex max-md:flex-row font-medium items-center justify-center">
        <Link
          to={"/"}
          className={`${
            location.pathname == "/"
              ? "md:border-b-2 border-gray-600"
              : "hover:border-b-2 hover:border-gray-300 hover:text-gray-400"
          } transition-all ease-linear  mx-2 `}
        >
          <span className="max-md:hidden">Home</span>
          <span className="hidden max-md:block mx-4 text-2xl">
            <HomeTwoTone />
          </span>
        </Link>
        <Link
          to={"/product"}
          className={`${
            location.pathname == "/product"
              ? "md:border-b-2 border-gray-600"
              : "hover:border-b-2 hover:border-gray-300 hover:text-gray-400"
          } transition-all ease-linear mx-2 `}
        >
          <span className="max-md:hidden">Product</span>
          <span className="hidden max-md:block mx-4 text-2xl">
            <AppstoreTwoTone />
          </span>
        </Link>
        <Link className="transition-all ease-linear mx-2 hover:border-b-2 hover:border-gray-300 hover:text-gray-400">
          <span className="max-md:hidden">Contact</span>
          <span className="hidden max-md:block mx-4 text-2xl">
            <MailTwoTone />
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-end max-md:w-full text-sm text-gray-500 cursor-pointer">
        <h3>
          <span className=" max-md:text-xs">
            <UserOutlined className="text-xl mr-3" />
            {user ? (
              <>
                <span className="mr-2">{user.fullName}</span>/
                <span onClick={() => dispatch(logout())} className="ml-2">
                  Log out
                </span>
              </>
            ) : (
              <span onClick={() => setOpenModal(true)}>
                <span className="mr-2">Login</span>/
                <span className="ml-2">Register</span>
              </span>
            )}
          </span>
          <Link
            to={"/cart"}
            className="hover:bg-gray-200 mr-3 relative hover:text-gray-500 w-8 h-8 transition-all ease-linear inline-flex items-center justify-center p-2 rounded-full ml-4 text-black"
          >
            <ShoppingCartOutlined className="text-xl" />
            <span className="text-xs absolute top-0 -right-2 p-1 bg-black text-white font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {length > 99 ? "99+" : length}
            </span>
          </Link>
        </h3>
      </div>
    </div>
  );
}
