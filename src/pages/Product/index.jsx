import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/ProductProvider";
import { UnorderedListOutlined, RightOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { numberWithCommas } from "../../utils";

import style from "./product.module.css";

export default function Product() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const data = useContext(ProductContext);
  const [products, setProducts] = useState([...data.product]);
  useEffect(() => {
    const unsub = () => window.scrollTo(0, 0);
    return () => {
      unsub();
    };
  });
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
            {data.category.map((item) => (
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
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            {product.category_id == params.get("category") ||
            params.get("category") == null ? (
              <div className="mb-6 mx-4 flex flex-col w-64">
                <div
                  className={`${style.cardProduct} relative cursor-pointer w-full h-72 p-8 bg-neutral-100`}
                >
                  <img
                    alt=""
                    className="w-full object-contain object-center"
                    src="/category/white-headphones-c437821bd3393cd6aa8f3b75237553ec.png"
                  />
                  <div className="hidden transition-all ease-in p-3 font-light absolute bottom-0 text-center left-0 right-0 text-white bg-gray-800">
                    ADD TO CART
                  </div>
                </div>
                <p className="text-sm font-semibold mt-4 text-center">
                  {product.name}
                </p>
                <p className="text-sm font-bold mt-2 text-center">
                  {numberWithCommas(product.price)} VND
                </p>
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
