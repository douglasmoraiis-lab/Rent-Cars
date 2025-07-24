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
    <nav className="max-w-full w-full fixed top-0 left-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg z-50 transition-all duration-300">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img src={simb} alt="Logo" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
            RentCar
          </span>
        </Link>

        {/* Botão mobile */}
        <button
          className="md:hidden p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-6">
            <div className={`absolute inset-0 transform transition-all duration-300 ${menuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
              <List size={24} />
            </div>
            <div className={`absolute inset-0 transform transition-all duration-300 ${menuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
              <X size={24} />
            </div>
          </div>
        </button>

        <div className="hidden md:flex gap-8 items-center text-lg">
          <div className="flex items-center space-x-8">
            <Link to="/" className="relative text-gray-700 dark:text-gray-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/rd" className="relative text-gray-700 dark:text-gray-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
              Rental deals
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/aptitude-test" className="relative text-gray-700 dark:text-gray-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
              Apditude Test
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/wcu" className="relative text-gray-700 dark:text-gray-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
              Why choose us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <button className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group">
              <span>Search</span>
              <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                <MagnifyingGlass size={20} />
              </div>
            </button>

            {/* Botão de carrinho */}
            <button 
              onClick={onCartClick} 
              className="relative group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <ShoppingCart size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden lg:block font-semibold">Carrinho</span>
              </div>
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce shadow-lg border-2 border-white">
                  {cartQuantity}
                </span>
              )}
            </button>

            <button
              onClick={toggleDarkMode}
              className="group p-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="relative w-5 h-5">
                <div className={`absolute inset-0 transform transition-all duration-500 ${darkMode ? 'rotate-180 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}`}>
                  <Moon className="w-5 h-5" />
                </div>
                <div className={`absolute inset-0 transform transition-all duration-500 ${darkMode ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-0'}`}>
                  <Sun className="w-5 h-5" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-700/20 px-6 py-6 space-y-4">
          <div className="space-y-3">
            <Link to="/" className="block text-gray-800 dark:text-white text-base font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Home
            </Link>
            <Link to="/rd" className="block text-gray-800 dark:text-white text-base font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Rental deals
            </Link>
            <Link to="/aptitude-test" className="block text-gray-800 dark:text-white text-base font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Teste de Aptidão
            </Link>
            <Link to="/wcu" className="block text-gray-800 dark:text-white text-base font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Why choose us
            </Link>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
            <button className="flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group">
              <span>Search</span>
              <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                <MagnifyingGlass size={20} />
              </div>
            </button>

            {/* Botão carrinho mobile */}
            <button 
              onClick={onCartClick} 
              className="relative group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full transform hover:scale-105"
            >
              <div className="flex items-center justify-center space-x-2">
                <ShoppingCart size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">Ver Carrinho</span>
                {cartQuantity > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce border-2 border-white">
                    {cartQuantity}
                  </span>
                )}
              </div>
            </button>

            <button
              onClick={toggleDarkMode}
              className="group w-full p-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center justify-center space-x-2">
                <div className="relative w-5 h-5">
                  <div className={`absolute inset-0 transform transition-all duration-500 ${darkMode ? 'rotate-180 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}`}>
                    <Moon className="w-5 h-5" />
                  </div>
                  <div className={`absolute inset-0 transform transition-all duration-500 ${darkMode ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-0'}`}>
                    <Sun className="w-5 h-5" />
                  </div>
                </div>
                <span className="font-medium">
                  {darkMode ? 'Modo Claro' : 'Modo Escuro'}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
