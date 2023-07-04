import React, { useState, useEffect } from "react";
import Input from "../Input";
import { useSelector, useDispatch } from "react-redux";
import { numberWithCommas } from "../../utils";
import Button from "../Button";
import { createOrder } from "../../store/cart/cart.action";
import { toast } from "react-toastify";
import Loading from "../Loading";

export default function Order({ setOpenModal }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [infoOrder, setInfoOrder] = useState({
    phone: "",
    address: "",
  });
  const { total, loading } = useSelector((state) => state.cart);

  function onClickOrder() {
    if (infoOrder.phone && infoOrder.address) {
      dispatch(
        createOrder({
          fullName: user.fullName,
          email: user.email,
          ...infoOrder,
        })
      );
      setOpenModal(false);
    } else {
      toast.error("Không được để trống ô nào");
    }
  }
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="font-bold text-xl">Đặt hàng</h2>
          <Input
            className={"w-full my-3"}
            disabled
            value={user?.fullName ?? ""}
          />
          <Input className={"w-full my-3"} disabled value={user?.email ?? ""} />
          <Input
            className={"w-full my-3"}
            value={infoOrder.phone}
            changeValue={(e) =>
              setInfoOrder({ ...infoOrder, phone: e.target.value })
            }
            placeholder={"Số điện thoại"}
          />
          <Input
            className={"w-full my-3"}
            value={infoOrder.address}
            changeValue={(e) =>
              setInfoOrder({ ...infoOrder, address: e.target.value })
            }
            placeholder={"Địa chỉ"}
          />
          <h3 className="font-bold mt-8 mb-2 text-right">
            Tổng cộng: {numberWithCommas(total)} VND
          </h3>
          <span className="flex w-full justify-end">
            <Button onClick={() => onClickOrder()} className={"mt-8"}>
              Đặt hàng
            </Button>
          </span>
        </>
      )}
    </div>
  );
}
