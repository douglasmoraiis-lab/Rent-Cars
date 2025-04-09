import React from "react";
import eas from "../../../assets/img/risco.svg";
import gp from "../../../assets/img/googleP.svg"

const bar: React.FC = () => {
return (
    <div className="relative mt-72 ml-40 max-w-2xl mx-auto -mr-96">
    <h1 className="text-6xl font-bold text-gray-900">
        Find, book and{" "}
        <div className=" block font-bold">
        rent a car{" "}
        <span className="text-blue-600 relative">
            Easily
            <img src={eas} alt="RentCar home" className="w-36 h-36 ml-72 -mt-16" />

        </span>
        </div>{" "}
    </h1>

    <p className="text-gray-500  text-2xl  -mt-12">
        Get a car wherever and whenever you{" "}
        <div className=" block font-bold"></div> need it with your iOS and
        Android device.
    </p>
        <img src={gp} alt="icone" className="mt-10 w-auto h-16"/>

    </div>
);
};

export default bar;
