import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import UploadImage from "../../../components/uploadImage";
import Modal from "../../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteImage, getAllImage } from "../../../store/admin/admin.action";
import Loading from "../../../components/Loading";
import { CloseCircleTwoTone } from "@ant-design/icons";

export default function Album() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { album, loadingAlbum } = useSelector((state) => state.admin);
  let callApi = true;
  useEffect(() => {
    if (callApi) {
      dispatch(getAllImage());
    }
    return () => {
      callApi = false;
    };
  }, []);

  return (
    <div className="flex flex-col h-full p-2">
      <Modal open={showModal} setOpen={setShowModal}>
        <UploadImage setOpenModal={setShowModal} />
      </Modal>
      <div className="flex justify-end mr-4 mt-4 mb-8">
        <Button onClick={() => setShowModal(true)}>Thêm ảnh</Button>
      </div>
      <div className="flex flex-wrap flex-1 overflow-y-auto justify-center">
        {loadingAlbum ? (
          <Loading />
        ) : (
          album.map((img, index) => (
            <div
              key={img.id}
              className="border relative w-48 h-48 flex justify-center items-center m-2"
            >
              <CloseCircleTwoTone
                onClick={() => dispatch(deleteImage({ id: img.id, index }))}
                className="text-xl cursor-pointer absolute top-0 right-0"
              />
              <img alt="error" src={img.url} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
