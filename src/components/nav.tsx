import React, { useEffect, useState } from "react";
import { List, X, MagnifyingGlass, Moon, Sun, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import simb from "../assets/img/simb.svg";

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();
  const cartQuantity = cart.reduce((sum, item) => sum + item.quantidade, 0);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) {
      setDarkMode(JSON.parse(saved));
      document.documentElement.classList.toggle("dark", JSON.parse(saved));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="max-w-full w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <img src={simb} alt="Logo" className="h-10" />
          <span className="text-2xl font-bold text-black dark:text-white">
            RentCar
          </span>
        </Link>

        {/* Botão mobile */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <List size={28} />}
        </button>

        <div className="hidden md:flex gap-6 items-center text-lg">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-200 font-bold">
              Home
            </Link>
            <Link to="/rd" className="text-gray-700 dark:text-gray-200 font-bold">
              Rental deals
            </Link>
            <Link to="/hiw" className="text-gray-700 dark:text-gray-200 font-bold">
              Become a renter
            </Link>
            <Link to="/wcu" className="text-gray-700 dark:text-gray-200 font-bold">
              Why choose us
            </Link>
            <button className="flex w-full md:w-auto bg-blue-600 text-white px-6 rounded-lg text-lg font-bold hover:bg-blue-700 transition items-center justify-center">
              Search
              <div className="py-2 pl-2">
                <MagnifyingGlass className="font-bold" />
              </div>
            </button>

            {/* Botão de carrinho */}
            <button onClick={onCartClick} className="relative text-gray-700 dark:text-white hover:text-blue-600 transition">
              <ShoppingCart size={28} />
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartQuantity}
                </span>
              )}
            </button>

            <button
              onClick={toggleDarkMode}
              className="group text-xs px-3 py-3 rounded-md border dark:border-white text-gray-800 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-300"
            >
              {darkMode ? (
                <Sun className="transform transition-transform duration-300 group-hover:rotate-45" />
              ) : (
                <Moon className="transform transition-transform duration-300 group-hover:rotate-45" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="flex flex-col md:hidden px-6 pb-4 gap-3 bg-white dark:bg-gray-900 shadow-md">
          <Link to="/" className="text-gray-800 dark:text-white text-sm font-medium">
            Home
          </Link>
          <Link to="/rd" className="text-gray-800 dark:text-white text-sm font-medium">
            Rental deals
          </Link>
          <Link to="/hiw" className="text-gray-800 dark:text-white text-sm font-medium">
            Become a renter
          </Link>
          <button className="flex w-full md:w-auto bg-blue-600 text-white px-6 rounded-lg text-lg font-bold hover:bg-blue-700 transition items-center justify-center">
            Search
            <div className="py-2 pl-2">
              <MagnifyingGlass className="font-bold" />
            </div>
          </button>

          {/* Botão carrinho mobile */}
          <button onClick={onCartClick} className="relative text-gray-700 dark:text-white hover:text-blue-600 transition self-start">
            <ShoppingCart size={28} />
            {cartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartQuantity}
              </span>
            )}
          </button>

          <button
            onClick={toggleDarkMode}
            className="group text-xs px-3 py-3 rounded-md border dark:border-white text-gray-800 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-300"
          >
            {darkMode ? (
              <Sun className="transform transition-transform duration-300 group-hover:rotate-45" />
            ) : (
              <Moon className="transform transition-transform duration-300 group-hover:rotate-45" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
