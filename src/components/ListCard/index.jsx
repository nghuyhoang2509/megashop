import { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function ListCard({ title, data, key }) {
  const listRef = useRef(null);
  function onRightArrowClick() {
    const scrollPosition = listRef.current.children[0].clientWidth;
    listRef.current.scrollLeft += scrollPosition;
  }
  function onLeftArrowClick() {
    const scrollPosition = listRef.current.children[0].clientWidth;
    listRef.current.scrollLeft -= scrollPosition;
  }
  return (
    <>
      {data.length ? (
        <div className="flex flex-col relative mt-4">
          <h2 className="mb-4 ml-2 font-bold text-gray-700 text-xl uppercase">
            {title}:
          </h2>
          <span
            onClick={() => onLeftArrowClick()}
            className=" absolute p-2 bg-white z-50 cursor-pointer top-1/2 left-2 w-10 h-10 flex items-center justify-center rounded-full "
          >
            <LeftOutlined />
          </span>
          <span
            onClick={() => onRightArrowClick()}
            className="text-white absolute p-2 bg-black z-50 cursor-pointer top-1/2 right-2 w-10 h-10 flex items-center justify-center rounded-full "
          >
            <RightOutlined />
          </span>
          <div
            ref={listRef}
            className="flex select-none transition-all ease-linear flex-row overflow-x-hidden overflow-y-hidden"
          >
            {data.map((item) => (
              <Link to={`/product?${title}=${item.id}`} key={item.id}>
                <div className="max-md:p-2 hover:scale-105 transition-all ease-linear mx-3 bg-neutral-100 p-4 flex flex-col justify-center items-center">
                  <img
                    className="object-contain max-md:h-16 max-md:w-16 h-36 w-36 object-center"
                    alt=""
                    src={item?.image?.url}
                  />
                  <p className="mt-3 font-semibold">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
