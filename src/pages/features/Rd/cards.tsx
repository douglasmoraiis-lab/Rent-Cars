import React from "react";
import { Star, Users, Snowflake, CarFront, Settings } from "lucide-react";

const Cards: React.FC = () =>{
    return (
    <div className="bg-white w-80 p-6 rounded-2xl shadow-md">
      <img
        src="../../../../src/assets/img/jaguar.svg"
        alt="Jaguar XE L P250"
        className="rounded-xl mb-4"
      />

      <h3 className="text-lg font-semibold">Jaguar XE L P250</h3>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Star className="text-yellow-500 w-4 h-4 mr-1" />
        <span className="font-semibold text-gray-800 mr-1">4.8</span>
        <span>(2,436 reviews)</span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <Users size={16} />
          <span>4 Passengers</span>
        </div>
        <div className="flex items-center gap-1">
          <Settings size={16} />
          <span>Auto</span>
        </div>
        <div className="flex items-center gap-2">
          <Snowflake size={16} />
          <span>Air Conditioning</span>
        </div>
        <div className="flex items-center gap-3">
          <CarFront size={16} />
          <span>4 Doors</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-xl font-bold">$1,800<span className="text-sm font-normal text-gray-500">/day</span></p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
          Rent Now →
        </button>
      </div>
    </div>
    );
};

export default Cards;

