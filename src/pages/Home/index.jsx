import { useContext } from "react";
import Slide from "../../components/Slide";
import ListCard from "../../components/ListCard";
import { ProductContext } from "../../context/ProductProvider";

export default function Home() {
  const data = useContext(ProductContext);
  return (
    <div>
      <div>
        <Slide />
      </div>
      <div className="my-12">
        <ListCard title={"category"} data={data?.category || []} />
      </div>
      <div className="my-12">
        <ListCard title={"brand"} data={data?.brand || []} />
      </div>
    </div>
  );
}
