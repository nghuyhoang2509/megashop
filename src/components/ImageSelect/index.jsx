import { useState, useEffect } from "react";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getAllImage } from "../../store/admin/admin.action";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

export default function ImageSelect({ setImage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showImageSelect, setShowImageSelect] = useState(false);
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
    <div className="flex flex-col h-full">
      <Button
        onClick={() => setShowImageSelect(!showImageSelect)}
        className={"mt-4 w-96"}
      >
        {!showImageSelect ? "Show list image" : "Close list image"}
      </Button>
      <p
        onClick={() => navigate("/admin/album")}
        className="mt-3 cursor-pointer text-blue-600 underline"
      >
        Click vào đây để tới thư viện ảnh
      </p>
      {showImageSelect ? (
        <div className="mt-4 flex flex-wrap max-h-100 overflow-y-auto justify-center">
          {loadingAlbum ? (
            <Loading />
          ) : (
            album.map((img) => (
              <div
                onClick={() => setImage(img.id, img)}
                key={img.id}
                className="border relative w-48 h-48 flex justify-center items-center m-2"
              >
                <img alt="error" src={img.url} />
              </div>
            ))
          )}
        </div>
      ) : null}
    </div>
  );
}
