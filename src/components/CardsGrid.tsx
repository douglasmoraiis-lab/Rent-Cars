import React from "react";
import Cards from "./cards";
import audi from "../assets/img/audi.png";

const cars = [
  {
    image: audi,
    title: "Toyota Corolla",
    rating: 4.5,
    reviews: 120,
    passengers: 5,
    doors: 4,
    price: 180,
  },
  {
    image: audi,
    title: "Toyota Corolla",
    rating: 4.5,
    reviews: 120,
    passengers: 5,
    doors: 4,
    price: 180,
  },
  {
    image: audi,
    title: "Toyota Corolla",
    rating: 4.5,
    reviews: 120,
    passengers: 5,
    doors: 4,
    price: 180,
  },
  {
    image: audi,
    title: "Toyota Corolla",
    rating: 4.5,
    reviews: 120,
    passengers: 5,
    doors: 4,
    price: 180,
  },
];

const CardsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cars.map((car, index) => (
        <Cards key={index} {...car} />
      ))}
    </div>
  );
};

export default CardsGrid;
