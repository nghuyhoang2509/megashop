import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UnorderedListOutlined, RightOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { numberWithCommas } from "../../utils";
import Loading from "../../components/Loading";

import style from "./product.module.css";
import {
  getAllCategory,
  getAllProduct,
  getProductByCategory,
} from "../../store/product/product.action";
import { addProductAndSave } from "../../store/cart/cart.action";

export default function Product() {
  const dispatch = useDispatch();
  const { products, categories } = useSelector((state) => state.product);
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  useEffect(() => {
    const categoryId = params.get("category");
    if (!categoryId) {
      dispatch(getAllProduct());
    } else {
      dispatch(getProductByCategory(categoryId));
    }
    const unsub = () => window.scrollTo(0, 0);
    return () => {
      unsub();
    };
  }, [location]);
  function onAddProduct(product) {
    dispatch(addProductAndSave(product));
  }
  return (
    <div className="flex flex-row">
      <div className="w-1/4 h-full">
        <div className="border">
          <Link to={"/product"}>
            <div className="p-4 text-white bg-black flex items-center">
              <UnorderedListOutlined className="mr-3" />
              All Product
            </div>
          </Link>
          <div>
            {categories.data.map((item) => (
              <Link key={item.id} to={`?category=${item.id}`}>
                <div className="p-4 border-b bg-white flex items-center">
                  {item.id == params.get("category") ? (
                    <RightOutlined className="mr-3" />
                  ) : null}
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-6 flex-1 flex flex-wrap flex-row">
        {products.loading ? (
          <Loading />
        ) : (
          <>
            {products.data.map((product) => (
              <span key={product.id}>
                <div className="mb-6 mx-4 flex flex-col w-64">
                  <div
                    className={`${style.cardProduct} relative cursor-pointer w-full bg-neutral-100`}
                  >
                    <div
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="p-8"
                    >
                      <img
                        alt=""
                        className="w-full h-52 object-contain object-center"
                        src={product.image}
                      />
                    </div>
                    <div
                      onClick={() => onAddProduct(product)}
                      className="hidden transition-all ease-in p-3 font-light absolute bottom-0 text-center left-0 right-0 text-white bg-gray-800"
                    >
                      ADD TO CART
                    </div>
                    {product.quantity == 0 && (
                      <span className="absolute top-2 rounded-s-lg right-0 text-white font-bold bg-red-600 py-2 px-4 shadow-md">
                        Sold out
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold mt-4 text-center">
                    {product.name}
                  </p>
                  <p className="text-sm font-bold mt-2 text-center">
                    {numberWithCommas(product.price)} VND
                  </p>
                </div>
              </span>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
