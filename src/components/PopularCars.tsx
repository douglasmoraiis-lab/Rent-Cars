import React from "react";
import { Star, Users, Car as CarIcon, Heart } from "lucide-react";
import { popularCars, Car } from "../data/classicCars";
import { useCart } from "../context/CartContext";

const PopularCars: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (car: Car) => {
    const cartItem = {
      id: car.id,
      nome: car.name,
      preco: car.price,
      quantidade: 1,
      imagem: car.image[0]
    };
    addToCart(cartItem);
  };

  return (
    <section className="py-16 lg:py-20 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Carros <span className="text-blue-600">Populares</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          Descubra nossa seleção de carros mais procurados pelos nossos clientes
        </p>
        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {popularCars.map((car) => (
          <div
            key={car.id}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-4 sm:p-6">
              <img
                src={car.image[0]}
                alt={car.name}
                className="w-full h-40 sm:h-48 object-contain transform group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Favorite Button */}
              <button className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 group">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-200" />
              </button>

              {/* Popular Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                Popular
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              {/* Car Info */}
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {car.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Ano {car.year}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${
                        i < Math.floor(car.rating) ? 'fill-current' : 'stroke-current fill-transparent'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {car.rating} ({car.reviews} avaliações)
                </span>
              </div>

              {/* Features */}
              <div className="flex items-center gap-4 mb-6 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{car.passengers} pessoas</span>
                </div>
                <div className="flex items-center gap-1">
                  <CarIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{car.doors} portas</span>
                </div>
              </div>

              {/* Price and Action */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
                    R$ {car.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    /dia
                  </span>
                </div>
                
                <button
                  onClick={() => handleAddToCart(car)}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  Alugar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Explore mais opções de veículos abaixo
        </p>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default PopularCars;
