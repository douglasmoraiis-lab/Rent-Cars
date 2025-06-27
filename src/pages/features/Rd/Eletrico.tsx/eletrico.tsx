import React from "react";
import Cards from "../../../../components/cards"; // ou o caminho relativo correto
import Carro1Img1 from "../../../../assets/img/jaguar-esp1.png";
import Carro1Img2 from "../../../../assets/img/jaguar-esp2.png";
import Carro2Img from "../../../../assets/img//Bmw.png";
import Carro3Img from "../../../../assets/img/lamborghini.png";

const eletrico : React.FC = () => {
  const carros = [
    {
      image: [Carro1Img1, Carro1Img2],
      title: "Jaguar E-Type",
      rating: 4.9,
      reviews: 112,
      passengers: 2,
      doors: 2,
      price: 780,
    },
    {
      image: Carro2Img,
      title: "Porsche 911",
      rating: 4.8,
      reviews: 97,
      passengers: 2,
      doors: 2,
      price: 920,
    },
    {
      image: Carro3Img,
      title: "Ford Mustang 1969",
      rating: 4.7,
      reviews: 85,
      passengers: 4,
      doors: 2,
      price: 670,
    },
  ];

  return (
    <div className="py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">Carros Clássicos</h2>

      {/* Grid de 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {carros.map((carro, index) => (
          <Cards key={index} {...carro} />
        ))}
      </div>
    </div>
  );
};

export default eletrico;
