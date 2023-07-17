import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllBrand,
  getAllCategory,
  getAllProduct,
} from "../../../store/product/product.action";
import { numberWithCommas } from "../../../utils/index";
import { FileAddOutlined } from "@ant-design/icons";
import Button from "../../../components/Button";
import DataTable from "react-data-table-component";
import Modal from "../../../components/Modal";
import ProductForm from "../ProductForm";
import Loading from "../../../components/Loading";
import { deleteProduct } from "../../../store/admin/admin.action";

export default function Product() {
  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Quantity", selector: (row) => row.quantity, sortable: true },
    {
      name: "Price",
      selector: (row) => `${numberWithCommas(row.price)} VND`,
      sortable: true,
    },
    {
      name: "Sales",
      selector: (row) =>
        `${
          row.salesPrice || row.salesPrice == 0
            ? `${numberWithCommas(row.salesPrice)} VND`
            : ""
        }`,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row?.categories?.name || "Không có",
      sortable: true,
    },
  ];
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);
  const [productSelect, setProductSelect] = useState(null);
  const { data, loading } = useSelector((state) => state.product.products);
  const { loading: loadingAdmin } = useSelector((state) => state.admin);
  let callApi = true;
  useEffect(() => {
    if (callApi && !loadingAdmin) {
      dispatch(getAllProduct());
      dispatch(getAllCategory());
      dispatch(getAllBrand());
    }
    return () => {
      callApi = false;
    };
  }, [loadingAdmin]);
  const onDeleteProductClick = () => {
    const productIdArray = selectedRow.map((row) => row.id);
    dispatch(deleteProduct({ productId: productIdArray }));
  };
  const onRowClicked = (row) => {
    setShowModal(true);
    setProductSelect(row);
  };
  return (
    <div className="h-full flex flex-col items-end p-2">
      {loadingAdmin ? (
        <Loading />
      ) : (
        <>
          <Modal fullScreen open={showModal} setOpen={setShowModal}>
            <ProductForm setOpen={setShowModal} productSelect={productSelect} />
          </Modal>
          <div className="flex w-full justify-between items-center">
            {selectedRow.length ? (
              <span className="flex items-center">
                <h3 className="ml-4 p-3 border border-green-700 rounded-lg bg-red-400 text-white">
                  Bạn có muốn xóa{" "}
                  <span className="font-bold">{selectedRow.length}</span> sản
                  phẩm này không ?
                </h3>
                <Button
                  onClick={onDeleteProductClick}
                  className={"ml-3 bg-green-700"}
                >
                  Xóa
                </Button>
              </span>
            ) : null}
            <Button
              onClick={() => {
                setShowModal(true);
                setProductSelect(null);
              }}
              className="w-fit flex mb-4 items-center mr-4 ml-auto"
            >
              <FileAddOutlined className="mr-2" />
              Thêm sản phẩm
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
