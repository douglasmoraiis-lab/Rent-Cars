import React from "react";
import simb from "../assets/img/simb.svg";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
return (
    <nav className="fixed top-0 left-0 w-full p-5 flex justify-between items-center px-10 z-50">
    <div className="flex items-center space-x-2">
        <img src={simb} alt="RentCar Logo" className="w-8 h-8" />
        <span className="text-2xl font-bold text-black">RentCar</span>
    </div>

    <div className="flex-1 flex justify-center">
        <ul className="flex space-x-10 text-lg text-black font-bold text-shadow-md">
        <Link to="Home">
        <li className="cursor-pointer hover:text-gray-300">Become a renter</li>
        </Link>
        <li className="cursor-pointer hover:text-gray-300">Rental deals</li>
        <Link to="Hiw">
        <li className="cursor-pointer hover:text-gray-300">How it works</li>
        </Link>
        <Link to="Wcu">
        <li className="cursor-pointer hover:text-gray-300">Why choose us</li>
        </Link>
        </ul>
    </div>
    <div className="flex items-center space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition">
        Search
        </button>
    </div>
    </nav>
);
};

export default Nav;
