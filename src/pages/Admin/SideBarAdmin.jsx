import { CaretRightOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth/auth.action";
import CONSTANT_ROLE from "../../constant/role";
import Button from "../../components/Button";

export default function SideBarAdmin() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
        <div className={`bg-gray-950 w-1/4 h-full p-2 flex flex-col`}>
          <h2 className="text-white flex items-center font-bold text-2xl">
            <span>Admin Panel</span>
            <UnorderedListOutlined
              onClick={() => setShow(!show)}
              className="ml-auto cursor-pointer font-extrabold"
            />
          </h2>
          <div className="text-white mt-20 flex-1 ml-3 flex flex-col justify-start">
            <Link to={""} className="my-3 flex items-center">
              {location.pathname == "/admin" && <CaretRightOutlined />}
              Tổng quan
            </Link>
            {/* <Link to={"category"} className="my-3 flex items-center">
              {location.pathname == "/admin/category" && <CaretRightOutlined />}
              Phân loại
            </Link> */}
            <Link to={"product"} className="my-3 flex items-center">
              {location.pathname == "/admin/product" && <CaretRightOutlined />}
              Sản phẩm
            </Link>
            <Link to={"order"} className="my-3 flex items-center">
              {location.pathname == "/admin/order" && <CaretRightOutlined />}
              Đơn hàng
            </Link>
            <Link to={"user"} className="my-3 flex items-center">
              {location.pathname == "/admin/user" && <CaretRightOutlined />}
              Người dùng
            </Link>
          </div>
          <div className="text-white flex flex-col">
            <span>
              <span>{CONSTANT_ROLE[user.role]}</span>/
              <span className="">{user.fullName}</span>
            </span>
            <Button
              onClick={() => dispatch(logout())}
              className="font-bold mt-4"
              outline={true}
            >
              Log out
            </Button>
          </div>
        </div>
      ) : (
        <div className={`bg-gray-950  h-full p-2`}>
          <h2 className="text-white flex items-center font-bold text-2xl">
            <UnorderedListOutlined
              onClick={() => setShow(!show)}
              className="ml-auto cursor-pointer font-extrabold"
            />
          </h2>
        </div>
      )}
    </>
  );
}
