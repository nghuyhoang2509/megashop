import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slide from "../../components/Slide";
import ListCard from "../../components/ListCard";
import {
  getAllBrand,
  getAllCategory,
} from "../../store/product/product.action";

export default function Home() {
  const dispatch = useDispatch();
  const { data: categories, loadingCate } = useSelector(
    (state) => state.product.categories
  );
  const { data: brands, loadingBra } = useSelector(
    (state) => state.product.brands
  );
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

  return (
    <div>
      <div>
        <Slide />
      </div>
      <div className="my-12">
        <ListCard
          title={"category"}
          data={categories || []}
          loading={loadingCate}
        />
        <ListCard title={"brand"} data={brands || []} loading={loadingBra} />
      </div>
    </div>
  );
}
