import React from "react";

const ToggleButton = ({ isVisible, toggleVisibility }) => {
  return (
    <button
      className="bg-gray-500 text-white px-4 py-2 rounded mb-4"
      onClick={toggleVisibility}
    >
      {isVisible ? "Ẩn danh sách sản phẩm" : "Hiện danh sách sản phẩm"}
    </button>
  );
};

export default ToggleButton;
