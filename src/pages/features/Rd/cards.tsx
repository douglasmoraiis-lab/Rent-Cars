// ESPORTIVOS
import React from "react";
import Cards from "../../../components/cards";
import Jaguar from "../../../assets/img/jaguar-esp1.png";
import Jaguar2 from "../../../assets/img/jaguar-esp2.png";
import Jaguar3 from "../../../assets/img/jaguar-esp3.png";
import Jaguar4 from "../../../assets/img/jaguar-esp4.png";
import Audi from "../../../assets/img/audi.png";
import Audi2 from "../../../assets/img/audi2.png";
import Audi3 from "../../../assets/img/audi3.png";
import Audi4 from "../../../assets/img/audi4.png";
import Bmw from "../../../assets/img/Bmw.png";
import Bmw2 from "../../../assets/img/bmw2.png";
import Bmw3 from "../../../assets/img/bmw3.png";
import Bmw4 from "../../../assets/img/bmw4.png";
import Lamborghini from "../../../assets/img/lamborghini.png";
import Lamborghini2 from "../../../assets/img/lamborghini2.png";
import Lamborghini3 from "../../../assets/img/lamborghini3.png";
import Lamborghini4 from "../../../assets/img/lamborghini4.png";

const cars = [
  {
    image: [Jaguar, Jaguar2, Jaguar3, Jaguar4],
    title: "Jaguar XE L P250",
    rating: 4.8,
    reviews: 2436,
    passengers: 4,
    doors: 4,
    price: 1800,
  },
  {
    image: [Audi, Audi2, Audi3, Audi4],
    title: "Audi R8",
    rating: 4.6,
    reviews: 1936,
    passengers: 2,
    doors: 2,
    price: 2100,
  },
  {
    image: [Bmw,Bmw2, Bmw3, Bmw4],
    title: "BMW M3",
    rating: 4.5,
    reviews: 2036,
    passengers: 4,
    doors: 4,
    price: 1600,
  },
  {
    image: [Lamborghini, Lamborghini4, Lamborghini2, Lamborghini3],
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
    <div className="flex flex-wrap justify-center gap-6 mb-52">
      {cars.map((car, index) => (
        <Cards key={index} {...car} />
      ))}
    </div>
  );
};

export default CardsGrid;