import React from "react";

// Importando componentes
import Cards from "../../../../components/cards";
import Filter from "../../../features/Rd/filter";
import Button2 from "../../../../components/button1";

// Importando dados do arquivo separado
import { classicCars } from "../../../../src/data/classicCars";

const CardsGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Button2
        label="POPULAR RENTAL DEALS"
        className="inline-block mb-2 bg-gray-400 text-white font-semibold text-xs px-4 py-1 rounded-md hover:bg-blue-150 transition duration-200"
      />
      <Filter />

      <h1
        className="text-4xl font-bold flex justify-center mb-10"
        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
      >
        CAR CLASSIC
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {classicCars.map((car) => (
          <Cards
            key={car.id}
            image={car.image[0]} 
            title={car.name}
            rating={5}
            reviews={0}
            passengers={4}
            doors={4}
            price={car.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
