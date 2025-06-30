import React from "react";
import Cards from "../../../../components/cards";
import Jaguar from "../../..//..//assets/img/jaguar-esp1.png";
import Audi from "../../..//..//assets/img/audi.png";
import Bmw from "../../..//..//assets/img/bmw2.png";
import Lamborghini from "../../..//..//assets/img/lamborghini.png";
import Filter from "../../../features/Rd/filter";
import Button2 from "../../../../components/button1";



const cars = [
  {
    image: Jaguar,
    title: "Jaguar XE L P250",
    rating: 4.8,
    reviews: 2436,
    passengers: 4,
    doors: 4,
    price: 1800,
  },
  {
    image: [Audi],
    title: "Audi R8",
    rating: 4.6,
    reviews: 1936,
    passengers: 2,
    doors: 2,
    price: 2100,
  },
  {
    image: [Bmw],
    title: "BMW M3",
    rating: 4.5,
    reviews: 2036,
    passengers: 4,
    doors: 4,
    price: 1600,
  },
  {
    image: [Lamborghini],
    title: "Lamborghini Huracan",
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    doors: 2,
    price: 2300,
  },
  {
    image: [Lamborghini],
    title: "Lamborghini Huracan",
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    doors: 2,
    price: 2300,
  },
//##############################################################################################################
// 10 CARDS

    {
    image: Jaguar,
    title: "Jaguar XE L P250",
    rating: 4.8,
    reviews: 2436,
    passengers: 4,
    doors: 4,
    price: 1800,
  },
  {
    image: [Audi],
    title: "Audi R8",
    rating: 4.6,
    reviews: 1936,
    passengers: 2,
    doors: 2,
    price: 2100,
  },
  {
    image: [Bmw],
    title: "BMW M3",
    rating: 4.5,
    reviews: 2036,
    passengers: 4,
    doors: 4,
    price: 1600,
  },
  {
    image: [Lamborghini],
    title: "Lamborghini Huracan",
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    doors: 2,
    price: 2300,
  },
  {
    image: [Lamborghini],
    title: "Lamborghini Huracan",
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    doors: 2,
    price: 2300,
  },
//##############################################################################################################
// 10 CARDS
    {
    image: Jaguar,
    title: "Jaguar XE L P250",
    rating: 4.8,
    reviews: 2436,
    passengers: 4,
    doors: 4,
    price: 1800,
  },
  {
    image: [Audi],
    title: "Audi R8",
    rating: 4.6,
    reviews: 1936,
    passengers: 2,
    doors: 2,
    price: 2100,
  },
  {
    image: [Bmw],
    title: "BMW M3",
    rating: 4.5,
    reviews: 2036,
    passengers: 4,
    doors: 4,
    price: 1600,
  },
  {
    image: [Lamborghini],
    title: "Lamborghini Huracan",
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    doors: 2,
    price: 2300,
  },
  {
    image: [Lamborghini],
    title: "Lamborghini Huracan",
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    doors: 2,
    price: 2300,
  },
];

const CardsGrid: React.FC = () => {
  return (
    <div className="############### ">
      <Button2
        label="POPULAR RENTAL DEALS"
        className="inline-block mb-2 bg-gray-400 text-white font-semibold text-xs px-4 py-1 rounded-md hover:bg-blue-150 transition duration-200"
      />
      <Filter/>
    <h1 className="text-4xl font-bold flex justify-center mb-10">IMPORTED CAR </h1>      

    <div className="flex flex-wrap justify-center gap-6  mt-">
    
      {cars.map((car, index) => (
        <Cards key={index} {...car} />
      ))}
    </div>
    </div>
  );
};

export default CardsGrid;