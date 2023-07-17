import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import { changeRole, getAllUser } from "../../../store/admin/admin.action";
import CONSTANT_ROLE from "../../../constant/role";

export default function User() {
  const dispatch = useDispatch();

  function onChangeRole(row) {
    dispatch(changeRole({ userId: row.id, role: row.role }));
  }
  const { user, loading, loadingChangeRole } = useSelector(
    (state) => state.admin
  );
  let callApi = true;
  useEffect(() => {
    if (callApi && !loadingChangeRole) {
      dispatch(getAllUser());
    }
    return () => {
      callApi = false;
    };
  }, [loadingChangeRole]);
  const columns = [
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (row) => row.fullName,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => CONSTANT_ROLE[row.role],
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) =>
        row.role != CONSTANT_ROLE.admin && (
          <h3
            onClick={() => onChangeRole(row)}
            className="cursor-pointer underline text-blue-700"
          >
            Change
          </h3>
        ),
    },
  ];
  return (
    <div className="h-full flex flex-col items-end p-2">
      <ul className="mb-4 bg-green-300 py-2 px-4 rounded-lg border border-red-700 text-red-700 font-medium list-disc">
        <li className="my-2 ml-3">Admin có tất cả quyền</li>
        <li className="my-2 ml-3">Manager không thể phân quyền user</li>
        <li className="my-2 ml-3">Customer không thể vào admin panel</li>
      </ul>
      <div className="flex-1 w-full overflow-y-hidden p-2">
        <DataTable
          className="h-full"
          striped
          fixedHeader
          columns={columns}
          data={user || []}
          progressPending={loading || loadingChangeRole}
        ></DataTable>
      </div>
    </div>
  );
}
