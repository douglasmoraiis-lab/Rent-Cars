import React from "react";
import Button1 from "../../../components/button1";
import { CurrencyDollarSimple, User, Clock, Headset } from "@phosphor-icons/react";
import Wcu from "../../../assets/img/wcu.svg";
import Details from "../../../assets/img/details.svg";


const Title: React.FC = () => {
return (
    <div className="flex items-center justify-between py-16 bg-white mt-20">
            <div className="flex-1 relative">
    {/* Imagem principal (na frente) */}
        <img
            src={Wcu}
            alt="Car"
            className="relative z-10 w-full mt-64 max-w-[800px]"
    />

    {/* Imagem de fundo */}
        <img
            src={Details}
            alt="Details"
            className="absolute top-0 -left-10 w-full max-w-[800px] z-0"
    />
    </div>

        <div className="flex-1 ml-72">
            <div className="flex mr-96">
            <Button1 label="WHY CHOOSE US ml" /></div>
            <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-8 leading-snug">
                We offer the best experience <br />
                with our rental deals
            </h1>
            
        <div className="space-y-6">
            <div className="flex items-start gap-4">
                    <div className="bg-[#ECF5FF] w-12 h-12 flex items-center justify-center rounded-md">
                    <CurrencyDollarSimple size={24} className="text-[#1572D3]" />
                    </div>
                <div>
                <h3 className="font-semibold text-lg">Best price guaranteed</h3>
                    <p className="text-gray-600 text-sm">
                        Find a lower price? We’ll refund you 100% of the difference.
                    </p>
                </div>
            </div>

          {/* Item 2 */}
        <div className="flex items-start gap-4">
            <div className="bg-[#ECF5FF] w-12 h-12 flex items-center justify-center rounded-md">
            <User size={24} className="text-[#1572D3]" />
            </div>
            <div>
            <h3 className="font-semibold text-lg">Experience driver</h3>
            <p className="text-gray-600 text-sm">
                Don’t have driver? Don’t worry, we have many experienced driver for you.
            </p>
            </div>
        </div>

          {/* Item 3 */}
        <div className="flex items-start gap-4">
            <div className="bg-[#ECF5FF] w-12 h-12 flex items-center justify-center rounded-md">
            <Clock size={24} className="text-[#1572D3]" />
            </div>
            <div>
            <h3 className="font-semibold text-lg">24 hour car delivery</h3>
            <p className="text-gray-600 text-sm">
                Book your car anytime and we will deliver it directly to you.
            </p>
            </div>
        </div>

          {/* Item 4 */}
        <div className="flex items-start gap-4">
            <div className="bg-[#ECF5FF] w-12 h-12 flex items-center justify-center rounded-md">
            <Headset size={24} className="text-[#1572D3]" />
            </div>
            <div>
            <h3 className="font-semibold text-lg">24/7 technical support</h3>
            <p className="text-gray-600 text-sm">
                            Have a question? Contact Rentcars support any time when you have problem.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Title;
