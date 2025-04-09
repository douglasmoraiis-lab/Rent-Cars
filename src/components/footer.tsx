import React from "react";
import Icon from "../assets/img/simbRC.svg";
import { Envelope, FacebookLogo, InstagramLogo, MapPin, Phone, YoutubeLogo } from "phosphor-react";

const Footer: React.FC = () => {
return (
    <div className="h-[400px] bg-[#051C34] p-6 shadow-lg mt-auto">
    <div className="max-w-6xl mx-auto grid grid-cols-5 gap-6">
        <div>
        <h2 className="font-bold text-lg h-10 -ml-60 mt-12 flex items-center space-x-4 text-white">
            <img src={Icon} alt="Rentcars Logo" className="h-6" />
            <span className="font-poppins mb-2 text-[18px]">RENTCARS</span>
        </h2>
        <div className="flex items-center space-x-3 flex-grow px-2">
            <ul className="text-sm text-gray-500 space-y-2 -ml-64 mt-5">
            <li className="flex items-center space-x-3 flex-grow px-2 text-1xl">
                <MapPin size={35} />
                <span className="font-semibold">
                25566 Hc 1, Glenallen, <br /> Alaska, 99588, USA
                </span>
            </li>
            <li className="flex items-center space-x-3 flex-grow px-2 text-1xl">
                <Phone size={35} />
                <span className="font-semibold">+603 4784 273 12</span>
            </li>
            <li className="flex items-center space-x-3 flex-grow px-2 text-1xl">
                <Envelope size={35} />
                <span className="font-semibold">rentcars@gmail.com</span>
            </li>
            </ul>
        </div>
        </div>

        <div className="col-span-4 bg-[#011b35] text-white px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div className="space-y-4">
            <h1 className="font-poppins font-semibold text-[18px]">Our Product</h1>
            <ul className="space-y-1 text-sm text-gray-300 font-poppins">
                <li>Career</li>
                <li>Car</li>
                <li>Packages</li>
                <li>Features</li>
                <li>Priceline</li>
            </ul>
            </div>

            <div className="space-y-4">
            <h1 className="font-poppins font-semibold text-[18px]">Resources</h1>
            <ul className="space-y-1 text-sm text-gray-300 font-poppins">
                <li>Download</li>
                <li>Help Centre</li>
                <li>Guides</li>
                <li>Partner Network</li>
                <li>Cruises</li>
                <li>Developer</li>
            </ul>
            </div>

            <div className="space-y-4">
            <h1 className="font-poppins font-semibold text-[18px] whitespace-nowrap">
                About Rentcars
            </h1>
            <ul className="space-y-1 text-sm text-gray-300 font-poppins">
                <li>Why choose us</li>
                <li>Our Story</li>
                <li>Investor Relations</li>
                <li>Press Center</li>
                <li>Advertise</li>
            </ul>
            </div>

            <div className="space-y-4">
            <h1 className="font-poppins font-semibold text-[18px]">Follow Us</h1>
            <div className="flex space-x-4 text-xl text-white">
                    <FacebookLogo size={24}></FacebookLogo>            
                    <InstagramLogo size={24}></InstagramLogo>
                    <YoutubeLogo size={24}></YoutubeLogo>
            </div>
            </div>
            
            </div>

        </div>
        </div>
    </div>
);
};

export default Footer;
