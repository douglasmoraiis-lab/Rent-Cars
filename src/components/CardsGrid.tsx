import React from "react";
import Cards from "./cards";

const CardsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-6 p-6 p-">
      <Cards
  image="../assets/img/audi.png"
  title="Toyota Corolla"
  rating={4.5}
  reviews={120}
  passengers={5}
  doors={4}
  price={180}
/>
      <Cards
  image="../assets/img/audi.png"
  title="Toyota Corolla"
  rating={4.5}
  reviews={120}
  passengers={5}
  doors={4}
  price={180}
/>
      <Cards
  image="../assets/img/audi.png"
  title="Toyota Corolla"
  rating={4.5}
  reviews={120}
  passengers={5}
  doors={4}
  price={180}
/>
      <Cards
  image="../assets/img/audi.png"
  title="Toyota Corolla"
  rating={4.5}
  reviews={120}
  passengers={5}
  doors={4}
  price={180}
/>

      
    </div>
  );
};

export default CardsGrid;
