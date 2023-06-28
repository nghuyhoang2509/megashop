import React from "react";
import Input from "../Input";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../utils";
import Button from "../Button";

export default function Order() {
  const { user } = useSelector((state) => state.auth);
  const { total } = useSelector((state) => state.cart);
  return (
    <div>
      <h2 className="font-bold text-xl">Đặt hàng</h2>
      <Input className={"w-full my-3"} disabled value={user.fullName} />
      <Input className={"w-full my-3"} disabled value={user.email} />
      <Input className={"w-full my-3"} placeholder={"Số điện thoại"} />
      <Input className={"w-full my-3"} placeholder={"Địa chỉ"} />
      <h3 className="font-bold mt-8 mb-2 text-right">
        Tổng cộng: {numberWithCommas(total)} VND
      </h3>
      <span className="flex w-full justify-end">
        <Button className={""}>Đặt hàng</Button>
      </span>
    </div>
  );
}
