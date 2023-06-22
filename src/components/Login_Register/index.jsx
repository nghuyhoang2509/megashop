import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Button from "../Button";
import Input from "../Input";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Login_Register() {
  const [statusLogin, setStatusLogin] = useState(true);
  const [infoUser, setInfoUser] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const resetState = () => {
    setInfoUser({
      email: "",
      password: "",
      fullname: "",
    });
  };
  const onLogin = (e) => {
    const errorEmail =
      !infoUser.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
      "Email không đúng định dạng";
    const errorPasswordEmpty =
      !infoUser.password.trim().length && "Không được để trống mật khẩu";
    const errorPasswordSpace =
      infoUser.password.includes(" ") && "Mật khẩu có khoảng trắng";
    if (errorEmail || errorPasswordEmpty || errorPasswordSpace) {
      toast.error(errorEmail || errorPasswordEmpty || errorPasswordSpace);
    } else {
      console.log(infoUser);
    }
  };
  const onRegister = (e) => {
    const errorFullnameEmpty =
      !infoUser.fullname.trim().length && "Không được để trống tên";
    const errorFullnameLength =
      !(infoUser.fullname.length >= 8 && infoUser.fullname.length <= 80) &&
      "Tên phải từ 8 kí tự tới 80 kí tự";
    const errorEmail =
      !infoUser.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
      "Email không đúng định dạng";
    const errorPasswordEmpty =
      !infoUser.password.trim().length && "Không được để trống mật khẩu";
    const errorPasswordSpace =
      infoUser.password.includes(" ") && "Mật khẩu có khoảng trắng";
    const errorPasswordLength =
      !(infoUser.password.length >= 8 && infoUser.password.length <= 24) &&
      "Mật khẩu phải từ 8 kí tự tới 24 kí tự";
    if (
      errorEmail ||
      errorPasswordEmpty ||
      errorPasswordSpace ||
      errorPasswordLength ||
      errorFullnameEmpty ||
      errorFullnameLength
    ) {
      toast.error(
        errorFullnameEmpty ||
          errorFullnameLength ||
          errorEmail ||
          errorPasswordEmpty ||
          errorPasswordSpace ||
          errorPasswordLength
      );
    } else {
      console.log(infoUser);
    }
  };
  const onChangeEmail = (e) => {
    setInfoUser({ ...infoUser, email: e.target.value });
  };
  const onChangeFullname = (e) => {
    setInfoUser({ ...infoUser, fullname: e.target.value });
  };
  const onChangePassword = (e) => {
    setInfoUser({ ...infoUser, password: e.target.value });
  };
  useEffect(() => {
    resetState();
  }, [statusLogin]);
  return (
    <div className="flex flex-col">
      <h2 className="mb-6 text-xl font-semibold">
        {statusLogin ? "LOGIN" : "REGISTER"}
      </h2>
      {!statusLogin ? (
        <>
          <Input
            className={"mb-3 w-full"}
            type="text"
            value={infoUser.fullname}
            placeholder="Full name"
            changeValue={onChangeFullname}
          />
        </>
      ) : null}
      <Input
        className={"mb-3 w-full"}
        type="text"
        value={infoUser.email}
        placeholder="Email"
        changeValue={onChangeEmail}
      />
      <Input
        className={"w-full"}
        type={showPassword ? "text" : "password"}
        value={infoUser.password}
        placeholder="Password"
        changeValue={onChangePassword}
      >
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-1/2 text-gray-600 -translate-y-1/2 cursor-pointer right-2"
        >
          {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        </span>
      </Input>
      <h3
        onClick={() => setStatusLogin(!statusLogin)}
        className="text-center my-3 cursor-pointer text-blue-600 underline text-sm"
      >
        {statusLogin ? "Don't have account" : "Go to login"}
      </h3>
      {statusLogin ? (
        <Button onClick={onLogin} className={"w-full"}>
          Login
        </Button>
      ) : (
        <Button onClick={onRegister} className={"w-full"}>
          Register
        </Button>
      )}
    </div>
  );
}
