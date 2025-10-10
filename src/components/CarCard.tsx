import React from "react";
import { motion } from "framer-motion";
import { Star, Users, Car as CarIcon, Heart, Fuel, Gauge } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Car } from "../data/classicCars";

interface CarCardProps {
  car: Car;
  index: number;
}

const CarCard: React.FC<CarCardProps> = ({ car, index }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -10 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-6">
        <motion.img
          src={car.image[0]}
          alt={car.name}
          className="w-full h-48 object-contain"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Favorite Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 group"
        >
          <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-200" />
        </motion.button>

        {/* Year Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {car.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Car Info */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {car.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {car.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(car.rating) ? 'fill-current' : 'stroke-current fill-transparent'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
            {car.rating} ({car.reviews} avaliações)
          </span>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            <span>{car.passengers} pessoas</span>
          </div>
          <div className="flex items-center gap-2">
            <CarIcon className="w-4 h-4 text-blue-500" />
            <span>{car.doors} portas</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-blue-500" />
            <span>Gasolina</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-blue-500" />
            <span>Manual</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              R$ {car.price}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              /dia
            </span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Alugar
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
