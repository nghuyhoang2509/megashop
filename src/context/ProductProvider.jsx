import { createContext, useEffect, useState } from "react";
import {
  getAllProduct,
  getAllBrandProduct,
  getAllCategoryProduct,
} from "../api";
import Loading from "../components/Loading";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsub = async () => {
      let product = [];
      let brand = [];
      let category = [];
      try {
        product = (await getAllProduct()).data.data;
        brand = (await getAllBrandProduct()).data.data;
        category = (await getAllCategoryProduct()).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        setData({ product, brand, category });
        setLoading(false);
      }
    };
    return () => {
      if (loading) {
        unsub();
      }
    };
  });
  return (
    <ProductContext.Provider value={data}>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        children
      )}
    </ProductContext.Provider>
  );
}
