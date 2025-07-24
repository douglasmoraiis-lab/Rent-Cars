import React from "react";

import eas from "../assets/img/risco.svg";
import googlePlay from "../assets/img/googleP.svg";
import homeImage from "../assets/img/home.svg";

import { CalendarDots, MapPin } from "@phosphor-icons/react";

const HomeSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 pt-28 lg:pt-40">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <div className="max-w-xl text-center lg:text-left lg:flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Find, book and{" "}
            <span className="block">
              rent a car{" "}
              <span className="text-blue-600 relative inline-block">
                Easily
                <img
                  src={eas}
                  alt="Underline"
                  className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-5 left-0 w-full h-auto"
                  aria-hidden="true"
                />
              </span>
            </span>
          </h1>

          <p className="text-gray-500 text-base sm:text-lg lg:text-xl mt-6 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
            Get a car wherever and whenever you need it with your iOS and
            Android device.
          </p>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 flex-wrap">
            <a href="#" aria-label="Get it on Google Play" className="hover:scale-105 transition-transform duration-200">
              <img
                src={googlePlay}
                alt="Google Play"
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </a>
            <a href="#" aria-label="App Store" className="hover:scale-105 transition-transform duration-200">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl lg:flex-1">
          <img
            src={homeImage}
            alt="Car rental illustration"
            className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

const Location: React.FC = () => {
  return (
    <section className="mt-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-white dark:bg-gray-800 p-4 md:p-6 lg:p-8 shadow-2xl rounded-2xl lg:rounded-3xl border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row w-full justify-between items-stretch gap-4 lg:gap-6 text-lg font-medium text-gray-800 dark:text-white">
          
          {/* Location */}
          <div className="flex flex-1 min-w-0 items-center space-x-3 p-3 lg:p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
            <MapPin size={24} className="text-blue-500 flex-shrink-0" />
            <div className="flex flex-col text-left min-w-0">
              <span className="font-semibold text-gray-900 dark:text-white">Location</span>
              <p className="text-sm text-gray-500 dark:text-gray-300 truncate">
                Search your location
              </p>
            </div>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-1 min-w-0 items-center space-x-3 p-3 lg:p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
            <CalendarDots size={24} className="text-blue-500 flex-shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-gray-900 dark:text-white">Pickup date</span>
              <p className="text-sm text-gray-500 dark:text-gray-300 truncate">
                Tue 15 Feb, 09:00
              </p>
            </div>
          </div>

          {/* Return Date */}
          <div className="flex flex-1 min-w-0 items-center space-x-3 p-3 lg:p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
            <CalendarDots size={24} className="text-blue-500 flex-shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-gray-900 dark:text-white">Return date</span>
              <p className="text-sm text-gray-500 dark:text-gray-300 truncate">
                Thu 16 Feb, 11:00
              </p>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-center justify-center w-full lg:w-auto lg:min-w-fit">
            <button className="w-full lg:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <main className="pt-24">
        <HomeSection />
        <Location />
      </main>
    </>
  );
};

export default Home;
