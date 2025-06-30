import React, { useEffect, useState } from "react";
import simb from "../assets/img/simb.svg";
import { Link } from "react-router-dom";
import { Moon, Sun } from "phosphor-react";

const Nav: React.FC = () => {
  // Estado para dark mode local no Nav (ideal é controlar no App, mas ok aqui)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved === "true";
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full p-5 px-10 flex justify-between items-center bg-white dark:bg-[#051C34] shadow z-50 transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={simb} alt="RentCar Logo" className="w-8 h-8" />
        <span className="text-2xl font-bold text-black dark:text-white">RentCar</span>
      </div>

      {/* Menu de navegação */}
      <ul className="flex space-x-10 text-lg font-bold text-black dark:text-white">
        <li>
          <Link to="/" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
            Become a renter
          </Link>
        </li>
        <li>
          <Link to="/rd" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
            Rental deals
          </Link>
        </li>
        <li>
          <Link to="/hiw" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
            How it works
          </Link>
        </li>
        <li>
          <Link to="/wcu" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
            Why choose us
          </Link>
        </li>
      </ul>

      {/* Botão de busca e alternar tema */}
      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
          Search
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-3 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
