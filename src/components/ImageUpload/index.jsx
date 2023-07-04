import { useState } from "react";
import Button from "../Button";
import { toast } from "react-toastify";
import { uploadImage, deleteImage } from "../../store/admin/admin.api";
import { DeleteOutlined } from "@ant-design/icons";

export default function ImageUpload({ setImageUrl, imageUrl }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChooseImage = (e) => {
    const file = e.target.files[0];
    if (!file.type.includes("image/")) {
      toast.error("File không đúng định dạng hình ảnh");
      e.target.value = null;
      return null;
    }
    setFile(file);
  };
  const onUploadClick = async () => {
    try {
      if (imageUrl) {
        throw new Error("Xin mời xóa ảnh cũ để up ảnh mới");
      }
      setLoading(true);
      if (!file) {
        throw new Error("Xin mời chọn file");
      }
      const result = await uploadImage(file);
      setImageUrl(result);
    } catch (error) {
      toast.error(error.message || "Có lỗi xảy ra");
    } finally {
      setFile(null);
      setLoading(false);
    }
  };
  const onDeleteClick = async () => {
    try {
      setLoading(true);
      /* const result = await deleteImage(imageUrl); */
      setImageUrl("");
    } catch (error) {
      toast.error(error.message || "Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col">
      {loading ? (
        <h2 className="mt-2">Uploading ...</h2>
      ) : (
        <>
          {imageUrl ? (
            <div className="flex">
              <img
                className="shadow-xl"
                width={"400px"}
                height={"400px"}
                src={imageUrl}
                alt="error"
              />
              <DeleteOutlined
                onClick={onDeleteClick}
                className="text-2xl ml-3 cursor-pointer "
              />
            </div>
          ) : (
            <>
              <input
                className="my-2 mt-4"
                type="file"
                onChange={handleChooseImage}
              />
              <Button onClick={onUploadClick} className={"my-2 w-32"}>
                Upload
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
}
