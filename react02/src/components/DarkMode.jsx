import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("mp-dark");
    } else {
      document.documentElement.classList.remove("mp-dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      className="bg-gray-800 text-white px-4 py-2 rounded transition-all dark:bg-gray-100 dark:text-gray-800"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? "Chuyển sang Light Mode" : "Chuyển sang Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
