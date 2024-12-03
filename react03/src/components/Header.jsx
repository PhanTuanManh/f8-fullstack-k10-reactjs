import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("accessToken");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");

    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-[50]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-[20px]">
          <nav>
            <ul className="flex justify-between items-center">
              <li className="px-4 mx-[5px]">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="px-4 mx-[5px] active:text-red-500">
                <NavLink to="/admin">Admin</NavLink>
              </li>
              <li className="px-4 mx-[5px]">
                <NavLink to="/admin/products">Admin Product</NavLink>
              </li>

              {!isLoggedIn && (
                <>
                  <li className="px-4 mx-[5px] btn btn-primary">
                    <NavLink to="/register">Sign Up</NavLink>
                  </li>
                  <li className="px-4 mx-[5px] btn btn-secondary">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}

              {isLoggedIn && (
                <li className="px-4 mx-[5px]">
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
