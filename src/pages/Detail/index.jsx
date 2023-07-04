import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { numberWithCommas } from "../../utils";
import Button from "../../components/Button";
import { getProduct } from "../../store/product/product.action";
import { addProductToCart } from "../../store/cart/cart.action";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

export default function Detail() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const params = useParams();
  useEffect(() => {
    dispatch(getProduct(params.id));
  }, [params.id]);

  return (
    <div className="flex flex-col">
      <div className="text-blue-600 max-md:ml-2 font-semibold text-md cursor-pointer">
        <Link to={"/product"} className="mr-3 underline">
          All
        </Link>
        /
        <Link
          to={`/product?category=${product?.data?.categoryId}`}
          className="ml-3 underline"
        >
          {product?.data?.categories?.name}
        </Link>
      </div>
      <div className="flex flex-row max-md:flex-col mt-8">
        {product?.loading ? (
          <Loading />
        ) : (
          <>
            {product?.data?.id ? (
              <>
                <div className="w-1/4 max-md:w-full">
                  <div className="shadow-2xl p-6">
                    <img
                      className="w-full h-72 object-contain object-center"
                      alt=""
                      src={product?.data?.image}
                    />
                  </div>
                </div>
                <div className="md:ml-8 max-md:mt-8 max-md:p-1 flex-1">
                  <h2 className="font-semibold text-2xl">
                    {product?.data?.name}
                  </h2>
                  <p className="mt-2 font-light italic text-md">
                    {product?.data?.quantity == 0 ? (
                      <span className="font-bold text-red-700">Sold out</span>
                    ) : (
                      <>Còn {product?.data?.quantity}</>
                    )}
                  </p>
                  <p className="font-bold mt-4 text-xl">
                    {product?.data?.salesPrice == null ? (
                      numberWithCommas(product?.data?.price)
                    ) : (
                      <span>
                        <span className="line-through">
                          {numberWithCommas(product?.data?.price)}
                        </span>
                        <span>
                          {" "}
                          {numberWithCommas(product?.data?.salesPrice)}
                        </span>
                      </span>
                    )}
                    VND
                  </p>
                  <Button
                    className={"max-md:w-full mt-8"}
                    onClick={() => dispatch(addProductToCart(product.data))}
                  >
                    <span>ADD TO CART</span>
                  </Button>
                  <p className="font-medium mt-4 text-lg">
                    {product?.data?.desc}
                  </p>
                </div>
              </>
            ) : (
              "Có lỗi xảy ra"
            )}
          </>
        )}
      </div>
    </div>
  );
}
