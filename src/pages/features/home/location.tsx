import React from "react";
import { CalendarDots, MapPin } from "@phosphor-icons/react";

const location: React.FC = () => {
    return (
    <div className="flex-1 relative -mt-44 justify-center px-64">
        <ul className="flex w-full justify-between items-center text-lg font-medium text-gray-800 bg-white p-6 shadow-xl rounded-3xl mb-20">
        <li className="flex items-center ml-8 mr-10 space-x-3 flex-grow px-3">
            <MapPin size={24} className="text-gray-500" />
            <div className="flex flex-col">
            <span className="font-semibold">Location</span>
            <p className="text-sm text-gray-500">Search your location</p>
            </div>
        </li>

        <li className="flex items-center space-x-3 flex-grow px-2 border-l border-gray-300">
            <CalendarDots size={24} className="text-gray-500" />
            <div className="flex flex-col">
            <span className="font-semibold">Pickup date</span>
            <p className="text-sm text-gray-500">Tue 15 Feb, 09:00</p>
            </div>
        </li>

        <li className="flex items-center space-x-3 flex-grow px-2 border-l border-gray-300">
            <CalendarDots size={24} className="text-gray-500" />
            <div className="flex flex-col">
            <span className="font-semibold">Return date</span>
            <p className="text-sm text-gray-500">Thu 16 Feb, 11:00</p>
            </div>
        </li>

        <li className="px-6">
            <button className="bg-blue-600 text-white px-12 py-2 rounded-lg text-3xl hover:bg-blue-900 transition">
            Search
            </button>
        </li>
        </ul>
    </div>
    );
};

export default location;
