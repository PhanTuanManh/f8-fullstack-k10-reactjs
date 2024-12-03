import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import LaptopPage from "./pages/LaptopPage";
import DashBoardPage from "./pages/admin/DashBoardPage";
import ProductManagementPage from "./pages/admin/ProductManagementPage";
import ProductForm from "./pages/admin/ProductForm";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/details/:id"} element={<DetailPage />} />
        <Route path="/laptop" element={<LaptopPage />} />

        {/* Admin */}
        <Route path="/admin" element={<DashBoardPage />}>
          <Route path="/admin/products" element={<ProductManagementPage />} />
          <Route path="/admin/products/add" element={<ProductForm />} />
          <Route path="/admin/products/update/:id" element={<ProductForm />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
