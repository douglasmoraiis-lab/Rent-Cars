import React from "react";
import home from "../../../assets/img/home.svg";

const Capa: React.FC = () => {
  return (
    <div className="relative w-full -mt-96 h-screen flex justify-end items-center">
    <img src={home} alt="RentCar Home" className="w-[98vh] h-[75vh] relative object-contain -mr-8 bottom-[4px]" />
    </div>
  );
};

export default Capa;
