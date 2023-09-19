import { useState, useEffect } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Button from "../Button";
import Input from "../Input";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../../store/auth/auth.action";
import Loading from "../Loading";

export default function Login_Register({ hideRegister, classButton }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const [statusLogin, setStatusLogin] = useState(true);
  const [infoUser, setInfoUser] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const resetState = () => {
    setInfoUser({
      email: "",
      password: "",
      fullName: "",
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
      dispatch(login(infoUser));
      resetState();
    }
  };
  const onRegister = (e) => {
    const errorFullNameEmpty =
      !infoUser.fullName.trim().length && "Không được để trống tên";
    const errorFullNameLength =
      !(infoUser.fullName.length >= 8 && infoUser.fullName.length <= 80) &&
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
      errorFullNameEmpty ||
      errorFullNameLength
    ) {
      toast.error(
        errorFullNameEmpty ||
          errorFullNameLength ||
          errorEmail ||
          errorPasswordEmpty ||
          errorPasswordSpace ||
          errorPasswordLength
      );
    } else {
      dispatch(register(infoUser));
      resetState();
    }
  };
  const onChangeEmail = (e) => {
    setInfoUser({ ...infoUser, email: e.target.value });
  };
  const onChangeFullName = (e) => {
    setInfoUser({ ...infoUser, fullName: e.target.value });
  };
  const onChangePassword = (e) => {
    setInfoUser({ ...infoUser, password: e.target.value });
  };
  useEffect(() => {
    resetState();
  }, [statusLogin]);
  return (
    <>
      <div className="flex flex-col relative">
        {loading && <Loading />}
        <h2 className="mb-6 text-xl font-semibold">
          {statusLogin ? "LOGIN" : "REGISTER"}
        </h2>
        {!statusLogin ? (
          <>
            <Input
              className={"mb-3 w-full"}
              type="text"
              autoComplete="name"
              value={infoUser.fullName}
              placeholder="Full name"
              changeValue={onChangeFullName}
            />
          </>
        ) : null}
        <Input
          className={"mb-3 w-full"}
          type="text"
          autoComplete="email"
          value={infoUser.email}
          placeholder="Email"
          changeValue={onChangeEmail}
        />
        <span className="relative">
          <Input
            className={"w-full"}
            type={showPassword ? "text" : "password"}
            value={infoUser.password}
            autoComplete="password"
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
        </span>
        <h3
          onClick={() => setStatusLogin(!statusLogin)}
          className="text-center my-3 cursor-pointer text-blue-600 underline text-sm"
        >
          {statusLogin ? !hideRegister && "Don't have account" : "Go to login"}
        </h3>
        {statusLogin ? (
          <Button onClick={onLogin} className={`w-full ${classButton} mt-8`}>
            Login
          </Button>
        ) : (
          <Button onClick={onRegister} className={`w-full ${classButton} mt-8`}>
            Register
          </Button>
        )}
      </div>
    </>
  );
}
