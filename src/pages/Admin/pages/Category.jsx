import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../../store/product/product.action";
import { FileAddOutlined } from "@ant-design/icons";
import Button from "../../../components/Button";
import DataTable from "react-data-table-component";
import Modal from "../../../components/Modal";
import Loading from "../../../components/Loading";
import Input from "../../../components/Input";
import ImageSelect from "../../../components/ImageSelect";
import {
  createCategory,
  deleteCategory,
  editCategory,
} from "../../../store/admin/admin.action";

export default function Category() {
  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    {
      name: "Image",
      selector: (row) => (
        <div className="h-full flex justify-center items-center p-2">
          {row?.image?.url ? (
            <img src={row?.image?.url} width={60} height={60} alt="error" />
          ) : (
            <p>Chưa có hình ảnh</p>
          )}
        </div>
      ),
    },
  ];
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editingMode, setEditingMode] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);
  const [categorySelect, setCategorySelect] = useState({
    name: "",
    imageId: null,
  });
  const { data, loading } = useSelector((state) => state.product.categories);
  const { loading: loadingAdmin } = useSelector((state) => state.admin);
  let callApi = true;
  useEffect(() => {
    if (callApi && !loadingAdmin) {
      dispatch(getAllCategory());
    }
    return () => {
      callApi = false;
    };
  }, [loadingAdmin]);
  const onDeleteCategoryClick = () => {
    const categoryIdArray = selectedRow.map((row) => row.id);
    dispatch(deleteCategory({ categoryId: categoryIdArray }));
  };
  const onRowClicked = (row) => {
    setEditingMode(true);
    setShowModal(true);
    setCategorySelect(row);
  };
  const onSaveButtonClick = () => {
    if (editingMode) {
      dispatch(editCategory(categorySelect));
    } else {
      dispatch(createCategory(categorySelect));
    }
    setShowModal(false);
  };
  return (
    <div className="h-full flex flex-col items-end p-2">
      {loadingAdmin ? (
        <Loading />
      ) : (
        <>
          <Modal fullScreen open={showModal} setOpen={setShowModal}>
            <div>
              <div>
                <h4>Name:</h4>
                <Input
                  className={"w-full mt-3"}
                  changeValue={(e) =>
                    setCategorySelect({
                      ...categorySelect,
                      name: e.target.value,
                    })
                  }
                  value={categorySelect?.name}
                  placeholder={"Nhập name của category"}
                />
                <h4 className=" mt-4 mb-4">Image:</h4>
                <div className="w-64 h-64 flex justify-center items-center border">
                  {categorySelect?.image?.url ? (
                    <img src={categorySelect?.image?.url} alt="error" />
                  ) : (
                    <p>Chưa có hình ảnh</p>
                  )}
                </div>
                <ImageSelect
                  setImage={(imageId, image) =>
                    setCategorySelect({
                      ...categorySelect,
                      imageId: imageId,
                      image,
                    })
                  }
                />
              </div>
              <div className="flex justify-end mt-8">
                <Button onClick={onSaveButtonClick}>Save</Button>
              </div>
            </div>
          </Modal>
          <div className="flex w-full justify-between items-center">
            {selectedRow.length ? (
              <span className="flex items-center">
                <h3 className="ml-4 p-3 border border-green-700 rounded-lg bg-red-400 text-white">
                  Bạn có muốn xóa{" "}
                  <span className="font-bold">{selectedRow.length}</span> mục
                  này không ?
                </h3>
                <Button
                  onClick={onDeleteCategoryClick}
                  className={"ml-3 bg-green-700"}
                >
                  Xóa
                </Button>
              </span>
            ) : null}
            <Button
              onClick={() => {
                setShowModal(true);
                setCategorySelect({
                  name: "",
                  imageId: null,
                });
                setEditingMode(false);
              }}
              className="w-fit flex mb-4 items-center mr-4 ml-auto"
            >
              <FileAddOutlined className="mr-2" />
              Thêm category
            </Button>
          </div>
          <div className="flex-1 overflow-y-hidden w-full p-2">
            <DataTable
              onRowClicked={onRowClicked}
              pointerOnHover
              highlightOnHover
              onSelectedRowsChange={(state) =>
                setSelectedRow(state.selectedRows)
              }
              className="h-full"
              columns={columns}
              data={data}
              striped
              selectableRows
              fixedHeader
              progressPending={loading}
            ></DataTable>
          </div>
        </>
      )}
    </div>
  );
}
