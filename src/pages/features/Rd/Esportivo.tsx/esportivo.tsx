import React from "react";
import { motion } from "framer-motion";
import CategoryLayout from "../../../../components/CategoryLayout";
import CarCard from "../../../../components/CarCard";

// Importando imagens de carros esportivos
import Jaguar from "../../../../assets/img/jaguar-esp1.png";
import Jaguar2 from "../../../../assets/img/jaguar-esp2.png";
import Audi from "../../../../assets/img/audi2.png";
import Bmw from "../../../../assets/img/bmw2.png";
import Lamborghini from "../../../../assets/img/lamborghini2.png";
import Lamborghini2 from "../../../../assets/img/lamborghini3.png";

const sportCars = [
  {
    id: 101,
    name: "Jaguar XE L P250",
    year: 2023,
    image: [Jaguar],
    price: 1800,
    description: "Luxo e performance em perfeita harmonia",
    rating: 4.8,
    reviews: 2436,
    passengers: 4,
    doors: 4,
    category: 'sport' as const
  },
  {
    id: 102,
    name: "Audi R8",
    year: 2023,
    image: [Audi],
    price: 2100,
    description: "Supercar alemão de alta performance",
    rating: 4.6,
    reviews: 1936,
    passengers: 2,
    doors: 2,
    category: 'sport' as const
  },
  {
    id: 103,
    name: "BMW M3",
    year: 2023,
    image: [Bmw],
    price: 1600,
    description: "O sedã esportivo mais icônico",
    rating: 4.5,
    reviews: 2036,
    passengers: 4,
    doors: 4,
    category: 'sport' as const
  },
  {
    id: 104,
    name: "Lamborghini Huracán",
    year: 2023,
    image: [Lamborghini],
    price: 2300,
    description: "Pura adrenalina italiana",
    rating: 4.9,
    reviews: 2236,
    passengers: 2,
    doors: 2,
    category: 'sport' as const
  },
  {
    id: 105,
    name: "Lamborghini Aventador",
    year: 2023,
    image: [Lamborghini2],
    price: 2800,
    description: "O ápice da engenharia esportiva",
    rating: 4.9,
    reviews: 1836,
    passengers: 2,
    doors: 2,
    category: 'sport' as const
  },
  {
    id: 106,
    name: "Jaguar F-Type R",
    year: 2023,
    image: [Jaguar2],
    price: 1900,
    description: "Roadster britânico de alta performance",
    rating: 4.7,
    reviews: 1456,
    passengers: 2,
    doors: 2,
    category: 'sport' as const
  }
];

const SportCars: React.FC = () => {
  return (
    <CategoryLayout
      categoryTitle="Carros Esportivos"
      categoryDescription="Sinta a adrenalina com nossa seleção premium de carros esportivos. Potência, velocidade e design excepcional para uma experiência única."
    >
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Performance Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl">
              <h3 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">300+</h3>
              <p className="text-gray-600 dark:text-gray-300">Cavalos de Potência</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">0-100</h3>
              <p className="text-gray-600 dark:text-gray-300">Em 4 segundos</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
              <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">250+</h3>
              <p className="text-gray-600 dark:text-gray-300">Km/h Velocidade Máx</p>
            </div>
          </motion.div>

          {/* Cars Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sportCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </CategoryLayout>
  );
};

export default SportCars;

