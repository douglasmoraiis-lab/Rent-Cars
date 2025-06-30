import React from "react";
import Cards from "../../../../components/cards";
import Filter from "../../../features/Rd/filter";
import Button2 from "../../../../components/button1";
<link rel="preconnect" href="https://fonts.googleapis.com" />



import Opala1 from "../../../../assets/img/opala1.png";
import Opala2 from "../../../../assets/img/opala2.png";
import Opala3 from "../../../../assets/img/opala3.png";
import Opala4 from "../../../../assets/img/opala4.png";
//
import Charger1 from "../../../../assets/img/charger1.png";
import Charger2 from "../../../../assets/img/charger2.png";
import Charger3 from "../../../../assets/img/charger3.png";
import Charger4 from "../../../../assets/img/charger4.png";

import Gol1 from "../../../../assets/img/gol1.png"
import Gol2 from "../../../../assets/img/gol2.png"
import Gol3 from "../../../../assets/img/gol3.png"
import Gol4 from "../../../../assets/img/gol4.png"
import Gol5 from "../../../../assets/img/gol5.png"

import Chevette1 from "../../../../assets/img/chavette1.png"
import Chevette2 from "../../../../assets/img/chavette2.png"
import Chevette3 from "../../../../assets/img/chavette3.png"
import Chevette4 from "../../../../assets/img/chavette4.png"

import Puma1 from "../../../../assets/img/puma1.png"
import Puma2 from "../../../../assets/img/puma2.png"
import Puma3 from "../../../../assets/img/puma3.png"
import Puma4 from "../../../../assets/img/puma4.png"
import Puma5 from "../../../../assets/img/puma5.png"

import Maverick1 from "../../../../assets/img/maverick1.png"
import Maverick2 from "../../../../assets/img/maverick2.png"
import Maverick3 from "../../../../assets/img/maverick3.png"
import Maverick4 from "../../../../assets/img/maverick4.png"
import Maverick5 from "../../../../assets/img/maverick5.png"
import Maverick6 from "../../../../assets/img/maverick6.png"

import Fusca1 from "../../../../assets/img/fusca1.png"
import Fusca2 from "../../../../assets/img/fusca2.png"
import Fusca3 from "../../../../assets/img/fusca3.png"
import Fusca4 from "../../../../assets/img/fusca4.png"

import OpalaSS1 from "../../../../assets/img/opalaSS1.png"
import OpalaSS2 from "../../../../assets/img/opalaSS2.png"
import OpalaSS3 from "../../../../assets/img/opalaSS3.png"
import OpalaSS4 from "../../../../assets/img/opalaSS4.png"
import OpalaSS5 from "../../../../assets/img/opalaSS5.png"

import Monza1 from "../../../../assets/img/monza1.png"
import Monza2 from "../../../../assets/img/monza2.png"
import Monza3 from "../../../../assets/img/monza3.png"
import Monza4 from "../../../../assets/img/monza4.png"

import Picape1 from "../../../../assets/img/picape1.png"
import Picape2 from "../../../../assets/img/picape2.png"
import Picape3 from "../../../../assets/img/picape3.png"
import Picape4 from "../../../../assets/img/picape4.png"
import Picape5 from "../../../../assets/img/picape5.png"

import Rey1 from "../../../../assets/img/rey1.png"
import Rey2 from "../../../../assets/img/rey2.png"
import Rey3 from "../../../../assets/img/rey3.png"
import Rey4 from "../../../../assets/img/rey4.png"

import Santana1 from "../../../../assets/img/santana1.png"
import Santana2 from "../../../../assets/img/santana2.png"
import Santana3 from "../../../../assets/img/santana3.png"
import Santana4 from "../../../../assets/img/santana4.png"
import Santana5 from "../../../../assets/img/santana5.png"

import Uno1 from "../../../../assets/img/uno1.png"
import Uno2 from "../../../../assets/img/uno2.png"
import Uno3 from "../../../../assets/img/uno3.png"
import Uno4 from "../../../../assets/img/uno4.png"
import Uno5 from "../../../../assets/img/uno5.png"
import Uno6 from "../../../../assets/img/uno6.png"

import Gurgel1 from "../../../../assets/img/gurgel1.png"
import Gurgel2 from "../../../../assets/img/gurgel2.png"
import Gurgel3 from "../../../../assets/img/gurgel3.png"
import Gurgel4 from "../../../../assets/img/gurgel4.png"



import Fiat1 from "../../../../assets/img/fiat1.png"
import Fiat2 from "../../../../assets/img/fiat2.png"
import Fiat3 from "../../../../assets/img/fiat3.png"
import Fiat4 from "../../../../assets/img/fiat4.png"





const cars = [
  {
    image: [Opala1, Opala2, Opala3, Opala4],
    title: "Chevrolet Opala",
    rating: 4.8,
    reviews: 2436,
    passengers: 4,
    doors: 2,
    price: 1800,
  },
  {
    image: [Charger1, Charger2, Charger3, Charger4 ],
    title: "Dodge Charger R/T",
    rating: 4.6,
    reviews: 1936,
    passengers: 2,
    doors: 2,
    price: 2100,
  },
  {
    image: [Gol1, Gol2, Gol3, Gol4, Gol5],
    title: "Volkswagen Gol Gti (1989)",
    rating: 4.5,
    reviews: 2036,
    passengers: 4,
    doors: 2,
    price: 1600,
  },
  {
    image: [Chevette1, Chevette2, Chevette3, Chevette4],
    title: "Chevrolet Chevette",
    rating: 4.3,
    reviews: 2236,
    passengers: 4,
    doors: 2,
    price: 2300,
  },
  {
    image: [Puma1, Puma2, Puma3, Puma4, Puma5],
    title: "Puma GTS",
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    doors: 2,
    price: 2300,
  },
//##############################################################################################################
// 5 CARDS

    {
    image: [Maverick1, Maverick2, Maverick3, Maverick4, Maverick5, Maverick6],
    title: "Ford Maverick GT",
    rating: 4.8,
    reviews: 2436,
    passengers: 4,
    doors: 4,
    price: 1800,
  },
  {
    image: [Fusca1, Fusca2, Fusca3, Fusca4],
    title: "Volkswagen Fusca",
    rating: 4.6,
    reviews: 1936,
    passengers: 2,
    doors: 2,
    price: 2100,
  },
  {
    image: [OpalaSS1, OpalaSS2, OpalaSS3, OpalaSS4, OpalaSS5],
    title: "Chevrolet Opala SS",
    rating: 4.5,
    reviews: 2036,
    passengers: 4,
    doors: 2,
    price: 1600,
  },
  {
    image: [Gurgel1, Gurgel2, Gurgel3, Gurgel4],
    title: "Gurgel BR-800",
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    doors: 2,
    price: 2300,
  },
  {
    image: [Santana1, Santana2, Santana3, Santana4, Santana5],
    title: "Volkswagen Santana",
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    doors: 2,
    price: 2300,
  },
//##############################################################################################################
// 10 CARDS
    {
    image: [Monza1, Monza2, Monza3, Monza4],
    title: "Jaguar XE L P250",
    rating: 4.8,
    reviews: 2436,
    passengers: 4,
    doors: 4,
    price: 1800,
  },
  {
    image: [Picape1, Picape2, Picape3, Picape4, Picape5],
    title: "Chevrolet D-20",
    rating: 4.6,
    reviews: 1936,
    passengers: 2,
    doors: 2,
    price: 2100,
  },
  {
    image: [Rey1, Rey2, Rey3, Rey4],
    title: "Ford Del Rey",
    rating: 4.5,
    reviews: 2036,
    passengers: 4,
    doors: 4,
    price: 1600,
  },
  {
    image: [Fiat1, Fiat2, Fiat3, Fiat4],
    title: "Fiat 147",
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    doors: 2,
    price: 2300,
  },
  {
    image: [Uno1, Uno2, Uno3, Uno4, Uno5, Uno6],
    title: "Fiat Uno Mille",
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
    <h1
      className="text-4xl font-bold flex justify-center mb-10"
      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
    >
      CAR CLASSIC
    </h1>

    <div className="flex flex-wrap justify-center gap-6  mb-10">
    
      {cars.map((car, index) => (
        <Cards key={index} {...car} />
      ))}
    </div>
    </div>
  );
};

export default CardsGrid;