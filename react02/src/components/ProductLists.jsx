import React, { useState } from "react";
import { datas } from "../data";

const ProductLists = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-5 gap-7">
        {datas.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="flex flex-col text-center">
            <img src={item.image} alt="" />
            <div className="flex flex-col p-5 gap-2">
              <h2 className="text-xl truncate line-clamp-1 w-full">
                {item.name}
              </h2>
              <h3 className="font-semibold text-2xl">
                {formatPrice(item.final_price)}
              </h3>
              <p>{item.content}</p>
              <div className="flex justify-between text-sm">
                <span>Stock: {item.stock}</span>
                <span>{item.sku}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nút "See More" */}
      {visibleCount < datas.length && (
        <div className="text-center mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={handleSeeMore}
          >
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductLists;
