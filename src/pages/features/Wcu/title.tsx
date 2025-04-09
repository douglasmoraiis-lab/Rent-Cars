import React from "react";
import Button1 from "../../../components/button1";
import { CurrencyDollarSimple, User, Clock, Headset } from "@phosphor-icons/react";

const Title: React.FC = () => {
return (
    <div className="flex items-center justify-between px-24 py-16 bg-white">
            <div className="flex-1">
                <img src="/path/to/your/car/image.png" alt="Car" className="w-full max-w-[600px]" />
            </div>

        <div className="flex-1 ml-12">
            <Button1 label="WHY CHOOSE US" />
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
