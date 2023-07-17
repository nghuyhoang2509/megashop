import { useRef, useState } from "react";
import { FileImageTwoTone } from "@ant-design/icons";
import { toast } from "react-toastify";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../store/admin/admin.action";

export default function UploadImage({ setOpenModal }) {
  const dispatch = useDispatch();
  const inputFileRef = useRef(null);
  const [fileImage, setFileImage] = useState("");
  const uploadClick = () => {
    inputFileRef.current.click();
  };
  const handleChooseImage = (e) => {
    const file = e.target.files[0];
    e.target.value = null;
    if (!file.type.includes("image/")) {
      toast.error("File không đúng định dạng hình ảnh");
      return null;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
      const imageBase64 = event.target.result;
      setFileImage(imageBase64);
    };
  };
  const submitImageClick = () => {
    dispatch(uploadImage({ image: fileImage }));
    setOpenModal(false);
  };
  return (
    <div>
      <div className="flex justify-center">
        <input
          ref={inputFileRef}
          type="file"
          onChange={handleChooseImage}
          className="hidden"
        />
        {fileImage ? (
          <div className="flex flex-col items-center">
            <div className="border">
              <img
                alt="error"
                src={fileImage}
                className="object-contain object-center w-64 h-64"
              />
            </div>
            <div className={"mt-4 flex justify-evenly"}>
              <Button onClick={submitImageClick} className={"mr-4"}>
                Submit
              </Button>
              <Button outline onClick={() => setFileImage("")}>
                Delete
              </Button>
            </div>
          </div>
        ) : (
          <div
            onClick={uploadClick}
            className="w-64 h-64 cursor-pointer flex flex-col justify-center items-center bg-slate-100 border"
          >
            <FileImageTwoTone className="text-4xl" />
            <p className="text-gray mt-4">Hãy chọn ảnh</p>
          </div>
        )}
      </div>
    </div>
  );
}
