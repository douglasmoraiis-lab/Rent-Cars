import React from "react";

import eas from "../assets/img/risco.svg";
import googlePlay from "../assets/img/googleP.svg";
import homeImage from "../assets/img/home.svg";

import { CalendarDots, MapPin } from "@phosphor-icons/react";
import Navbar from "../components/nav";

const HomeSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 pt-28 lg:pt-40">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Find, book and{" "}
            <span className="block">
              rent a car{" "}
              <span className="text-blue-600 relative inline-block">
                Easily
                <img
                  src={eas}
                  alt="Underline"
                  className="absolute -bottom-5 left-0 w-full h-auto"
                  aria-hidden="true"
                />
              </span>
            </span>
          </h1>

          <p className="text-gray-500 text-lg lg:text-xl mt-6 dark:text-gray-300">
            Get a car wherever and whenever you need it with your iOS and
            Android device.
          </p>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
            <a href="#" aria-label="Get it on Google Play">
              <img
                src={googlePlay}
                alt="Google Play"
                className="h-12 lg:h-14 w-auto"
              />
            </a>
            <a href="#" aria-label="App Store">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12 lg:h-14 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="w-full max-w-md  ">
          <img
            src={homeImage}
            alt="Car rental illustration"
            className="w-full h-auto ml-12"
          />
        </div>
      </div>
    </section>
  );
};

const Location: React.FC = () => {
  return (
    <section className="mt-16 px-4 md:px-8 max-w-7xl mx-auto">
      <ul className="flex flex-wrap md:flex-nowrap w-full justify-between items-stretch text-lg font-medium text-gray-800 bg-white dark:bg-gray-800 dark:text-white p-4 md:p-6 shadow-xl rounded-3xl gap-4">
        <li className="flex flex-1 min-w-[250px] items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-xl">
          <MapPin size={24} className="text-gray-500" />
          <div className="flex flex-col text-left">
            <span className="font-semibold">Location</span>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Search your location
            </p>
          </div>
        </li>

        <li className="flex flex-1 min-w-[250px] items-center space-x-3 p-3 border-t md:border-t-0 md:border-l border-gray-300/70 rounded-xl">
          <CalendarDots size={24} className="text-gray-500" />
          <div className="flex flex-col">
            <span className="font-semibold">Pickup date</span>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Tue 15 Feb, 09:00
            </p>
          </div>
        </li>

        <li className="flex flex-1 min-w-[250px] items-center space-x-3 p-3 border-t md:border-t-0 md:border-l border-gray-300/70 rounded-xl">
          <CalendarDots size={24} className="text-gray-500" />
          <div className="flex flex-col">
            <span className="font-semibold">Return date</span>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Thu 16 Feb, 11:00
            </p>
          </div>
        </li>

        <li className="flex items-center justify-center w-full md:w-auto px-2">
          <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition">
            Search
          </button>
        </li>
      </ul>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <HomeSection />
        <Location />
      </main>
    </>
  );
};

export default Home;
