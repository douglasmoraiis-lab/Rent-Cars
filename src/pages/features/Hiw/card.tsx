import { Calendar } from "@phosphor-icons/react";
import { Car, MapPin } from "phosphor-react";
import React from "react";

const Card: React.FC = () => {
return (
        <div className="flex-1 flex justify-center px-64 mb-96">
            <div className="flex justify-center gap-6 px-6 py-12">

                <div className="bg-white w-80 p-6 rounded-2xl shadow-md text-center">
                <div className="ml-[5.5rem]  bg-[#ECF5FF] w-20 h-20 flex items-center justify-center mb-2 ">
                        <MapPin size={40} className="text-[#1572D3] "/>
                </div>
                    <h3 className="text-xl font-semibold font-poppins mb-2">Choose location</h3>
                        
                            <p className="text-gray-600 text-sm">
                                Choose your and find
                                    your best car    
                            </p>
                </div>

                <div className="bg-white w-80 p-6 rounded-2xl shadow-md text-center">
                <div className="ml-[5.5rem]  bg-[#ECF5FF] w-20 h-20 flex items-center justify-center mb-2 ">
                        <Calendar size={40} className="text-[#1572D3]"/>
                </div>
                    <h3 className="text-xl font-semibold font-poppins mb-2">Pick-up date</h3>
                        <p className="text-gray-600 text-sm">
                            Select your pick up date and
                                time to book your car
                        </p>
                </div>

                <div className="bg-white w-80 p-6 rounded-2xl shadow-md text-center">
                <div className="ml-[5.5rem]  bg-[#ECF5FF] w-20 h-20 flex items-center justify-center mb-2">
                        <Car size={40} className="text-[#1572D3]" />
                </div>
                    <h3 className="text-xl font-semibold font-poppins mb-2">Book your car</h3>
                        <p className="text-gray-600 text-sm">
                            Book your car and we will deliver
                                it directly to you
                        </p>
                </div>
            </div>

        </div>
);
};
export default Card;

