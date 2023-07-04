import { CloseOutlined } from "@ant-design/icons";

export default function Modal({ children, open, setOpen, fullScreen }) {
  return (
    <>
      {open ? (
        <div
          className={`fixed transition-all ease-linear  bg-opacity-40 bg-black top-0 -right-full -left-full flex items-center justify-center h-screen z-modal`}
        >
          <div
            className={`bg-white ${
              fullScreen ? "w-screen h-screen overflow-y-auto" : "w-112"
            } max-sm:w-screen relative px-2 flex flex-col rounded-md shadow-md`}
          >
            <div className="w-full flex justify-end">
              <CloseOutlined
                className="text-xl"
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="py-4 px-8 ">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
