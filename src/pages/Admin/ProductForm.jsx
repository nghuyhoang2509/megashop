import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createProduct, updateProduct } from "../../store/admin/admin.action";
import ImageSelect from "../../components/ImageSelect";

export default function ProductForm({ setOpen, productSelect }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(
    productSelect || { name: "", desc: "", salesPrice: null }
  );
  console.log(product);
  const { data: categories } = useSelector((state) => state.product.categories);
  const { data: brands } = useSelector((state) => state.product.brands);
  function setImageProduct(imageId, image) {
    setProduct({ ...product, imageId, image });
  }
  const onCreateClick = () => {
    if (!product?.name?.trim().length) {
      return toast.error("không được bỏ trống name");
    }
    if (!product?.desc?.trim().length) {
      return toast.error("không được bỏ trống description");
    }
    if (product?.quantity <= 0 || !product?.quantity) {
      return toast.error("Quantity không hợp lệ phải lớn hơn 0");
    }
    if (!product?.price || product?.price < 0) {
      return toast.error("Price không hợp lệ");
    }
    if (product?.salesPrice < 0 && product?.salesPrice) {
      return toast.error("Sales không hợp lệ");
    }
    if (!product?.image) {
      return toast.error("Image không hợp lệ");
    }
    if (
      !product?.categoryId &&
      product?.categoryId != 0 &&
      product?.categoryId !== null
    ) {
      return toast.error("Category không hợp lệ");
    }
    if (
      !product?.brandId &&
      product?.brandId != 0 &&
      product?.brandId !== null
    ) {
      return toast.error("Category không hợp lệ");
    }
    if (productSelect?.name) {
      dispatch(updateProduct(product));
    } else {
      dispatch(createProduct(product));
    }
    setOpen(false);
  };
  return (
    <div className="">
      <h2 className="font-bold text-xl">Thêm sản phẩm</h2>
      <div className="my-8 mx-2">
        <div className="my-4 flex flex-col">
          <h3 className="text-gray-600">Name:</h3>
          <Input
            value={product?.name || ""}
            changeValue={(e) =>
              setProduct({ ...product, name: e.target.value })
            }
            className={"w-full mt-2"}
            placeholder={"Pin sạc dự phòng Xiaomi Redmi"}
          />
        </div>
        <div className="my-4 flex flex-col">
          <h3 className="text-gray-600">Description:</h3>
          <textarea
            value={product.desc || ""}
            onChange={(e) => setProduct({ ...product, desc: e.target.value })}
            placeholder="Mới, đầy đủ phụ kiện từ nhà sản xuất Củ sạc, Cáp sạc, Sách hướng dẫn Pin dự phòng Xiaomi Redmi 20000mAh..."
            className="mt-2 h-32 max-h-32 border outline-none rounded-md p-2 leading-5"
          ></textarea>
        </div>
        <div className="flex my-4">
          <div className="flex flex-col flex-1">
            <h3 className="text-gray-600">Quantity:</h3>
            <Input
              value={product?.quantity || null}
              changeValue={(e) =>
                setProduct({ ...product, quantity: e.target.value })
              }
              placeholder={200}
              className={"mt-2 flex-1"}
              type="number"
            />
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-gray-600">Price:</h3>
            <div>
              <Input
                value={product?.price || null}
                changeValue={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                placeholder={"100000000"}
                className={"mt-2 mr-2 "}
                type="number"
              />
              VND
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <span className="flex flex-row">
              <input
                type="checkbox"
                onChange={(e) => {
                  setProduct({
                    ...product,
                    salesPrice: e.target.checked ? 0 : null,
                  });
                }}
                checked={product?.salesPrice === null ? false : true}
                className="mr-2"
              ></input>
              <h3 className="text-gray-600">Sales price:</h3>
            </span>
            <div>
              {product?.salesPrice !== null && (
                <span className="">
                  <Input
                    value={product?.salesPrice || null}
                    changeValue={(e) =>
                      setProduct({ ...product, salesPrice: e.target.value })
                    }
                    placeholder={"100000000"}
                    className={` mt-2 mr-2`}
                    type="number"
                  />
                  VND
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="my-4 flex flex-col items-start">
          <h3 className="text-gray-600 mb-4">Category:</h3>
          <div className="my-2 ml-2">
            <input
              type="radio"
              id={"category-null"}
              value={null}
              defaultChecked={product?.categoryId === null}
              onChange={(e) => setProduct({ ...product, categoryId: null })}
              name="category"
            />
            <label htmlFor={"category-null"} className="ml-2">
              None
            </label>
          </div>
          {categories.map((category) => (
            <div className="my-2 ml-2" key={category.id}>
              <input
                type="radio"
                id={category.name}
                value={category.id}
                defaultChecked={category.id == product?.categoryId}
                onChange={(e) =>
                  setProduct({ ...product, categoryId: e.target.value })
                }
                name="category"
              />
              <label htmlFor={category.name} className="ml-2">
                {category.name}
              </label>
            </div>
          ))}
        </div>
        <div className="my-4 flex flex-col items-start">
          <h3 className="text-gray-600 mb-4">Brand:</h3>
          <div className="my-2 ml-2">
            <input
              type="radio"
              id={"brand-null"}
              value={null}
              defaultChecked={product?.brandId === null}
              onChange={(e) => setProduct({ ...product, brandId: null })}
              name="brand"
            />
            <label htmlFor={"brand-null"} className="ml-2">
              None
            </label>
          </div>
          {brands.map((brand) => (
            <div className="my-2 ml-2" key={brand.id}>
              <input
                type="radio"
                id={brand.name}
                value={brand.id}
                defaultChecked={brand.id == product?.brandId}
                onChange={(e) =>
                  setProduct({ ...product, brandId: e.target.value })
                }
                name="brand"
              />
              <label htmlFor={brand.name} className="ml-2">
                {brand.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="my-4 flex flex-col items-start">
        <h3 className="text-gray-600 mb-4">Image:</h3>
        <div className="w-64 h-64 flex justify-center items-center border">
          {product?.image?.url ? (
            <img src={product?.image?.url} alt="error" />
          ) : (
            <p>Chưa có hình ảnh</p>
          )}
        </div>
        <ImageSelect setImage={setImageProduct} />
      </div>
      <div className="flex justify-end">
        <Button onClick={onCreateClick}>SAVE</Button>
      </div>
    </div>
  );
}
