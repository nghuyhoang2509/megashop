import React from "react";
import {
  CopyrightCircleOutlined,
  FacebookFilled,
  PhoneFilled,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="max-md:invisible font-bold flex flex-col items-center p-8">
      <div className="flex-row w-full justify-between items-start flex flex-1">
        <div className="flex-col flex items-center justify-start">
          <h1 className="mb-2 font-extrabold text-3xl">MEGASHOP</h1>
          <div>
            <FacebookFilled className="text-xl" />
            <PhoneFilled className="ml-6 text-xl" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex-col items-end flex mr-12">
            <h3>Hỗ trợ khách hàng</h3>
            <p className="text-sm font-medium my-1">Hotline: 1900-6035</p>
            <p className="text-sm font-medium my-1">Các câu hỏi thường gặp</p>
            <p className="text-sm font-medium my-1">Gửi yêu cầu hỗ trợ</p>
            <p className="text-sm font-medium my-1">Hướng dẫn đặt hàng</p>
            <p className="text-sm font-medium my-1">Phương thức vận chuyển</p>
            <p className="text-sm font-medium my-1">Chính sách đổi trả</p>
            <p className="text-sm font-medium my-1">Hướng dẫn trả góp</p>
          </div>
          <div className="flex-col items-end flex">
            <h3>Hỗ trợ khách hàng</h3>
            <p className="text-sm font-medium my-1">Hotline: 1900-6035</p>
            <p className="text-sm font-medium my-1">Các câu hỏi thường gặp</p>
            <p className="text-sm font-medium my-1">Gửi yêu cầu hỗ trợ</p>
            <p className="text-sm font-medium my-1">Hướng dẫn đặt hàng</p>
            <p className="text-sm font-medium my-1">Phương thức vận chuyển</p>
            <p className="text-sm font-medium my-1">Chính sách đổi trả</p>
            <p className="text-sm font-medium my-1">Hướng dẫn trả góp</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-between items-center w-full mt-8">
        <div>
          <h2 className="mb-4">Mua hàng dễ dàng nhanh chóng với Megashop</h2>
          <p className="text-xs">
            Cung cấp đầy đủ các sản phẩm chất lượng hàng đâu trong lĩnh vực công
            nghệ
          </p>
        </div>
        <div className="text-sm flex items-center text-gray-500 font-medium">
          <CopyrightCircleOutlined className="mr-2" /> 2023 All rights reserved.
        </div>
      </div>
    </div>
  );
}
