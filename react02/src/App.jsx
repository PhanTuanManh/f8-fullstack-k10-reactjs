import React, { useState } from "react";
import ProductLists from "./components/ProductLists";
import ToggleButton from "./components/ToggleButton";
import DarkModeToggle from "./components/DarkMode";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="mp-fullpage-section-pad">
      <Header></Header>
      {/* Nút toggle */}
      <div className="mt-[100px] flex justify-between ">
        <ToggleButton
          isVisible={isVisible}
          toggleVisibility={toggleVisibility}
        />
        <DarkModeToggle></DarkModeToggle>
      </div>

      {/* Danh sách sản phẩm */}
      {isVisible && <ProductLists />}
      <Footer></Footer>
    </div>
  );
};

export default App;
