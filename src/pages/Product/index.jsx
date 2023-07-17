import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UnorderedListOutlined, RightOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { numberWithCommas } from "../../utils";
import Loading from "../../components/Loading";

import style from "./product.module.css";
import {
  getAllBrand,
  getAllCategory,
  getAllProduct,
} from "../../store/product/product.action";
import { addProductAndSave } from "../../store/cart/cart.action";

export default function Product() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const { products, categories, brands } = useSelector(
    (state) => state.product
  );
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  let callApi = true;
  useEffect(() => {
    if (callApi) {
      dispatch(getAllCategory());
      dispatch(getAllBrand());
    }
    return () => {
      callApi = false;
    };
  }, []);

  useEffect(() => {
    dispatch(getAllProduct(location.search || ""));
    setSearchInput("");
    const unsub = () => window.scrollTo(0, 0);
    return () => {
      unsub();
    };
  }, [location]);
  function onAddProduct(product) {
    dispatch(addProductAndSave(product));
  }
  function onFilter(option) {
    if (option.brand && option.category) {
      navigate(`?category=${option.category}&brand=${option.brand}`);
    } else if (option.brand || option.category) {
      navigate(
        `?${option.brand ? "brand" : "category"}=${
          option.brand || option.category
        }`
      );
    }
  }
  const onSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onKeyUpSearch = (e) => {
    if (e.keyCode === 13) {
      const brand = params.get("brand");
      const category = params.get("category");
      let query = "";
      if (brand && category) {
        query = `?category=${category}&brand=${brand}`;
      } else if (brand || category) {
        query = `?${brand ? "brand" : "category"}=${brand || category}`;
      }
      query = `${query || "?"}&search=${searchInput}`;
      navigate(query);
    }
  };
  return (
    <div className="flex flex-row max-md:flex-col">
      <div className="w-1/4 lg:h-full max-md:w-full max-md:mb-4">
        <div className="border">
          <Link to={"/product"}>
            <div className="p-4 text-white bg-black flex items-center">
              <UnorderedListOutlined className="mr-3" />
              All Product
            </div>
          </Link>
          <div>
            <div>
              <div className="p-4 font-bold border-b bg-white flex items-center">
                Categories
              </div>
            </div>
            {categories.data.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  onFilter({
                    category: item.id,
                    brand: params.get("brand") || null,
                  })
                }
              >
                <div className="p-4 ml-4 border-b bg-white flex items-center">
                  {item.id == params.get("category") ? (
                    <RightOutlined className="mr-3" />
                  ) : null}
                  {item.name}
                </div>
              </div>
            ))}
          </div>
          <div>
            <div>
              <div className="p-4 font-bold border-b bg-white flex items-center">
                Brands
              </div>
            </div>
            {brands.data.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  onFilter({
                    brand: item.id,
                    category: params.get("category") || null,
                  })
                }
              >
                <div className="p-4 ml-4 border-b bg-white flex items-center">
                  {item.id == params.get("brand") ? (
                    <RightOutlined className="mr-3" />
                  ) : null}
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 justify-center items-center flex flex-col">
        <div className="w-full px-8">
          {params.get("search") ? (
            <p className="font-medium text-lg">
              Kết quả tìm kiếm cho: {params.get("search")}
            </p>
          ) : null}
          <input
            value={searchInput}
            onChange={onSearchInputChange}
            onKeyDown={onKeyUpSearch}
            type="text"
            placeholder="Nhập những gì bạn muốn tìm kiếm và ấn enter"
            className="mt-3 w-full outline-none p-3 border rounded-md"
          />
        </div>
        <div className="mt-8 flex-1 justify-center flex flex-wrap md:ml-6">
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
                          src={product?.image?.url}
                        />
                      </div>
                      <div
                        onClick={() => onAddProduct(product)}
                        className="hidden max-md:block transition-all ease-in p-3 font-light absolute bottom-0 text-center left-0 right-0 text-white bg-gray-800"
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
                </span>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
