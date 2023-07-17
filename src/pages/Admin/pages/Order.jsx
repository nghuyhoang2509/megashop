import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllOrder } from "../../../store/admin/admin.action";
import { numberWithCommas, formatDate } from "../../../utils";
import DataTable from "react-data-table-component";

export default function Order() {
  const columns = [
    {
      name: "Created At",
      selector: (row) => formatDate(row?.createdAt),
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (row) => row?.users?.fullName,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => `${numberWithCommas(row?.total)} VND`,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row?.address,
    },
    {
      name: "Phone",
      selector: (row) => row?.phone,
    },
  ];
  const dispatch = useDispatch();
  const { order, loading } = useSelector((state) => state.admin);
  let callApi = true;
  useEffect(() => {
    if (callApi) {
      dispatch(getAllOrder());
    }
    return () => {
      callApi = false;
    };
  }, []);
  const expandableRowsComponent = ({ data }) => (
    <div className="ml-3">
      {data?.orderproducts.map((product) => (
        <div key={product.id} className="flex flex-row items-center border-b">
          <h3 className={"mx-1"}>
            <span className="text-sm">x{product.qtyOrder}</span>
          </h3>
          <img
            className="mx-4 object-contain object-center"
            width={40}
            height={40}
            alt="error"
            src={product.orderproducts?.image?.url}
          />
          <div className="flex flex-1 flex-col ">
            <p className="py-2 text-sm font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
              {product.orderproducts.name}
            </p>
            <p className="mt-2 font-medium text-sm">
              {product.orderproducts.salesPrice == null ? (
                numberWithCommas(product.orderproducts.price)
              ) : (
                <span>
                  <span className="line-through">
                    {numberWithCommas(product.orderproducts.price)}
                  </span>
                  <span>
                    {" "}
                    {numberWithCommas(product.orderproducts.salesPrice)}
                  </span>
                </span>
              )}
              VND
            </p>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className="h-full flex flex-col items-end p-2">
      <div className="flex-1 w-full overflow-y-hidden p-2">
        <DataTable
          expandableRows
          expandableRowsComponent={expandableRowsComponent}
          className="h-full"
          striped
          fixedHeader
          columns={columns}
          data={order}
          progressPending={loading}
        ></DataTable>
      </div>
    </div>
  );
}
