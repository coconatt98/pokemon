import { Link } from "react-router-dom";
import React from "react";
import { useTheme } from "../components/theme-context";

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-blue-500 text-white p-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Pokemon App</Link>
        </h1>
        <nav className="flex items-center">
          <Link to="/" className="px-4">
            Home
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-4 px-4 py-2 border rounded bg-white text-black dark:bg-black dark:text-white"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
