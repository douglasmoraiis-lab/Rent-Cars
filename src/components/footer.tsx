import React from "react";
import Icon from "../assets/img/simbRC.svg";
import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  YoutubeLogo,
} from "phosphor-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051C34] text-white pt-12 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Logo e Contato */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <img src={Icon} alt="Rentcars Logo" className="h-6" />
            <h2 className="text-xl font-semibold font-poppins">RENTCARS</h2>
          </div>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start space-x-3">
              <MapPin size={22} />
              <span>
                25566 Hc 1, Glenallen,<br /> Alaska, 99588, USA
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={22} />
              <span>+603 4784 273 12</span>
            </li>
            <li className="flex items-center space-x-3">
              <Envelope size={22} />
              <span>rentcars@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Our Product */}
        <div>
          <h3 className="text-lg font-semibold font-poppins mb-4">Our Product</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Career</li>
            <li>Car</li>
            <li>Packages</li>
            <li>Features</li>
            <li>Priceline</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold font-poppins mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Download</li>
            <li>Help Centre</li>
            <li>Guides</li>
            <li>Partner Network</li>
            <li>Cruises</li>
            <li>Developer</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold font-poppins mb-4">About Rentcars</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Why choose us</li>
            <li>Our Story</li>
            <li>Investor Relations</li>
            <li>Press Center</li>
            <li>Advertise</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold font-poppins mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <FacebookLogo size={24} />
            <InstagramLogo size={24} />
            <YoutubeLogo size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
