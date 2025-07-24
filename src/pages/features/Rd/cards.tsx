// CAMINHO: src/pages/features/Rd/Classicos.tsx

import React from "react";
import Cards from "../../../components/cards";
import { classicCars } from "../../../classicCars"; // Supondo que você já fez isso
// Verifique se o arquivo classicCars.ts existe em src/data/classicCars.ts e exporta classicCars corretamente.
// Exemplo de exportação esperada:
// export const classicCars = [ /* array de carros */ ];

const CardsGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* ... seu código de botões e filtro ... */}
      <h1
        className="text-4xl font-bold flex justify-center mb-10"
        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
      >
        CAR CLASSIC
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {/* ✅ CORREÇÃO C: Removemos o ", index" daqui, pois ele não estava sendo usado. */}
        {classicCars.map((car) => (
          // Esta linha já está correta, passando a key e todas as props do carro.
          <Cards key={car.id} {...car} image={car.image[0]} />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;