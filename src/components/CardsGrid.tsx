import React from "react";
import Cards from "./cards";

const CardsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export default CardsGrid;
