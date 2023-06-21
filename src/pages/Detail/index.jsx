import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductProvider";
import { numberWithCommas } from "../../utils";

export default function Detail() {
  const { product } = useContext(ProductContext);
  const params = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    setItem(product.find((a) => a.id == params.id));
  }, [params.id]);

  return (
    <div className="flex flex-row mt-8">
      <div className="w-1/4 ">
        <div className="shadow-2xl p-6">
          <img
            className="w-full h-72 object-contain object-center"
            alt=""
            src="/category/white-headphones-c437821bd3393cd6aa8f3b75237553ec.png"
          />
        </div>
      </div>
      <div className="ml-8 flex-1">
        <h2 className="font-semibold text-2xl">{item?.name}</h2>
        <p className="mt-2 font-light italic text-md">Còn {item?.qty}</p>
        <p className="font-bold mt-4 text-xl">
          {numberWithCommas(item?.price || 0)}
        </p>
        <p className="font-medium mt-4 text-lg">{item?.desc}</p>
        <p className="font-medium mt-4 text-lg">{item?.content}</p>
        <button className="mt-8 py-4 px-8 font-semibold text-white bg-black text-center rounded-md">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
