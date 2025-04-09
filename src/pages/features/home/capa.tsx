import React from "react";
import home from "../../../assets/img/home.svg";

const Capa: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex justify-end items-center">
    <img src={home} alt="RentCar Home" className="w-[98vh] h-[75vh] object-contain -mr-40" />
    </div>
  );
};

export default Capa;
