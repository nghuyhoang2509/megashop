import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  UserOutlined,
  GiftOutlined,
  DropboxOutlined,
  ShoppingOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import {
  getAllBrand,
  getAllCategory,
  getAllProduct,
} from "../../../store/product/product.action";
import { getAllOrder, getAllUser } from "../../../store/admin/admin.action";
import CanvasJSReact from "@canvasjs/react-charts";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function DashBoard() {
  const dispatch = useDispatch();
  const { products, categories, brands } = useSelector(
    (state) => state.product
  );
  const { user, order } = useSelector((state) => state.admin);
  let callApi = true;
  useEffect(() => {
    if (callApi) {
      dispatch(getAllUser());
      dispatch(getAllProduct());
      dispatch(getAllBrand());
      dispatch(getAllCategory());
      dispatch(getAllOrder());
    }

    return () => {
      callApi = false;
    };
  }, []);

  const navigate = useNavigate();

  const optionChart = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "",
    },
    axisX: {
      title: "Sản phẩm",
      reversed: true,
    },
    axisY: {
      title: "Số lượng",
      includeZero: true,
      labelFormatter: addSymbols,
    },
    data: [
      {
        type: "bar",
        dataPoints: products.data
          .map((product) => {
            return { y: product.quantity, label: product.name.slice(0, 10) };
          })
          .sort((a, b) => b.y - a.y),
      },
    ],
  };
  function addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(
      Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)),
      0
    );
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
  return (
    <div className="bg-slate-200 w-full h-full flex flex-col p-2">
      <div className="flex flex-row w-full">
        <div
          onClick={() => navigate("user")}
          className="flex justify-between flex-1 bg-white cursor-pointer p-4 shadow-lg rounded-lg m-3"
        >
          <div className="bg-pink-600 w-11 rounded-lg text-white font-bold justify-center items-center flex shadow-md">
            <UserOutlined />
          </div>
          <div className="text-right">
            <p className="text-gray-500 font-medium">Người dùng</p>
            <p className="mt-3 font-bold">{user.length}</p>
          </div>
        </div>
        <div
          onClick={() => navigate("product")}
          className="flex justify-between flex-1 bg-white cursor-pointer p-4 shadow-lg rounded-lg m-3"
        >
          <div className="bg-green-600 w-11 rounded-lg text-white font-bold justify-center items-center flex shadow-md">
            <GiftOutlined />
          </div>
          <div className="text-right">
            <p className="text-gray-500 font-medium">Sản phẩm</p>
            <p className="mt-3 font-bold">{products.data.length}</p>
          </div>
        </div>

        <div
          onClick={() => navigate("order")}
          className="flex justify-between flex-1 bg-white cursor-pointer p-4 shadow-lg rounded-lg m-3"
        >
          <div className="bg-gray-800 w-11 rounded-lg text-white font-bold justify-center items-center flex shadow-md">
            <CreditCardOutlined />
          </div>
          <div className="text-right">
            <p className="text-gray-500 font-medium">Đơn hàng</p>
            <p className="mt-3 font-bold">{order.length}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div
          onClick={() => navigate("category")}
          className="flex justify-between flex-1 bg-white cursor-pointer p-4 shadow-lg rounded-lg m-3"
        >
          <div className="bg-blue-600 w-11 rounded-lg text-white font-bold justify-center items-center flex shadow-md">
            <DropboxOutlined />
          </div>
          <div className="text-right">
            <p className="text-gray-500 font-medium">Phân loại</p>
            <p className="mt-3 font-bold">{categories.data.length}</p>
          </div>
        </div>
        <div
          onClick={() => navigate("brand")}
          className="flex justify-between flex-1 bg-white cursor-pointer p-4 shadow-lg rounded-lg m-3"
        >
          <div className="bg-yellow-600 w-11 rounded-lg text-white font-bold justify-center items-center flex shadow-md">
            <ShoppingOutlined />
          </div>
          <div className="text-right">
            <p className="text-gray-500 font-medium">Thương hiệu</p>
            <p className="mt-3 font-bold">{brands.data.length}</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center mb-2">
        <CanvasJSChart options={optionChart} />
      </div>
    </div>
  );
}
