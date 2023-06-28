import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/Button";
import { numberWithCommas } from "../../utils";
import Modal from "../../components/Modal";
import Order from "../../components/Order";
import {
  deleteProductAndSave,
  reduceProductAndSave,
  addProductAndSave,
} from "../../store/cart/cart.action";
import { toast } from "react-toastify";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart, length, total } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [openModalPay, setOpenModalPay] = useState(false);

  function onProductPaymentClick() {
    if (user?.email) {
      setOpenModalPay(true);
    } else {
      toast.error("Cần đăng nhập để có thể đặt hàng");
    }
  }
  return (
    <div className="flex mt-4 flex-row h-full relative max-md:flex-col ">
      <Modal open={openModalPay} setOpen={setOpenModalPay}>
        <Order />
      </Modal>
      <div className="flex-1 mr-10 h-full overflow-y-auto">
        {Object.values(cart).map((product) => (
          <div key={product.id} className="my-4">
            <div className="flex items-center flex-row max-md:flex-col max-md:items-start">
              <div className="flex flex-row justify-center ml-6">
                <Button
                  onClick={() => dispatch(deleteProductAndSave(product))}
                  small
                  className={"px-3 py-2 mr-2"}
                >
                  xóa
                </Button>
                <Button
                  small
                  outline
                  onClick={() => dispatch(reduceProductAndSave(product))}
                >
                  <span className="px-3 py-2 text-lg">-</span>
                </Button>
                <Button small outline className={"mx-1"}>
                  <span className="px-4 py-2 text-xs">{product.qtyOrder}</span>
                </Button>
                <Button
                  small
                  outline
                  onClick={() => dispatch(addProductAndSave(product))}
                >
                  <span className="px-3 py-2 text-lg">+</span>
                </Button>
              </div>
              <div className="flex flex-row">
                <img
                  className="mx-4 object-contain object-center"
                  width={40}
                  height={40}
                  alt="error"
                  src={product.image}
                />
                <div className="flex flex-1 flex-col ">
                  <p className="py-2 font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
                    {product.name}
                  </p>
                  <p className="mt-2 font-medium">
                    {product.salesPrice == null ? (
                      numberWithCommas(product.price)
                    ) : (
                      <span>
                        <span className="line-through">
                          {numberWithCommas(product.price)}
                        </span>
                        <span> {numberWithCommas(product.salesPrice)}</span>
                      </span>
                    )}
                    VND
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/4 max-md:w-full max-md:p-10 flex flex-col items-end">
        <p className="font-normal text-sm text-gray-700">x{length} products</p>
        <p className="mt-4 font-semibold text-lg">
          {numberWithCommas(total)} VND
        </p>
        <Button onClick={() => onProductPaymentClick()} className={""}>
          Product Payment
        </Button>
      </div>
    </div>
  );
}
