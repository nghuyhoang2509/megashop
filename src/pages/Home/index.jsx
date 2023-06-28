import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slide from "../../components/Slide";
import ListCard from "../../components/ListCard";
import { getAllCategory } from "../../store/product/product.action";

export default function Home() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.product.categories);
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <div>
      <div>
        <Slide />
      </div>
      <div className="my-12">
        <ListCard title={"category"} data={data || []} loading={loading} />
      </div>
    </div>
  );
}
