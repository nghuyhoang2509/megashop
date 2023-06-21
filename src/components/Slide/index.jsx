import React from "react";

export default function Slide() {
  return (
    <div className="flex flex-row">
      <div className="w-4/6 mr-6">
        <img
          className="object-cover object-center h-full"
          alt=""
          src="/slide/iphone-13-he-lo-nhieu-diem-dac-biet-thumbnail.jpg"
        />
      </div>
      <div className="w-2/6 flex flex-col">
        <div className="mb-4">
          <img
            alt=""
            src="/slide/iphone-13-he-lo-nhieu-diem-dac-biet-thumbnail.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            src="/slide/iphone-13-he-lo-nhieu-diem-dac-biet-thumbnail.jpg"
          />
        </div>
      </div>
    </div>
  );
}
