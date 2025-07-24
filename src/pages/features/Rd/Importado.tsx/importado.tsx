import React from "react";
import { motion } from "framer-motion";
import CategoryLayout from "../../../../components/CategoryLayout";
import CarCard from "../../../../components/CarCard";

// Importando imagens de carros importados premium
import Jaguar from "../../../../assets/img/jaguar-esp3.png";
import Jaguar2 from "../../../../assets/img/jaguar-esp4.png";
import Audi from "../../../../assets/img/audi4.png";
import Audi2 from "../../../../assets/img/audi3.png";
import Bmw from "../../../../assets/img/bmw3.png";
import Lamborghini from "../../../../assets/img/lamborghini4.png";

const importedCars = [
  {
    id: 401,
    name: "Jaguar XE L P250",
    year: 2024,
    image: [Jaguar],
    price: 380,
    description: "Sedã premium britânico com elegância refinada",
    rating: 4.8,
    reviews: 2436,
    passengers: 4,
    doors: 4,
    category: 'imported' as const
  },
  {
    id: 402,
    name: "Audi R8 V10",
    year: 2024,
    image: [Audi],
    price: 450,
    description: "Supercar alemão de performance excepcional",
    rating: 4.9,
    reviews: 1936,
    passengers: 2,
    doors: 2,
    category: 'imported' as const
  },
  {
    id: 403,
    name: "BMW M5 Competition",
    year: 2024,
    image: [Bmw],
    price: 420,
    description: "Sedã esportivo bávaro de alta performance",
    rating: 4.7,
    reviews: 2036,
    passengers: 4,
    doors: 4,
    category: 'imported' as const
  },
  {
    id: 404,
    name: "Lamborghini Huracán",
    year: 2024,
    image: [Lamborghini],
    price: 500,
    description: "Supercarro italiano puro sangue",
    rating: 4.9,
    reviews: 2236,
    passengers: 2,
    doors: 2,
    category: 'imported' as const
  },
  {
    id: 405,
    name: "Audi A8 L",
    year: 2024,
    image: [Audi2],
    price: 650,
    description: "Luxo alemão em sua forma mais refinada",
    rating: 5.0,
    reviews: 1680,
    passengers: 4,
    doors: 4,
    category: 'imported' as const
  },
  {
    id: 406,
    name: "Jaguar F-Type R",
    year: 2024,
    image: [Jaguar2],
    price: 390,
    description: "Roadster britânico com soul esportivo",
    rating: 4.6,
    reviews: 1520,
    passengers: 2,
    doors: 2,
    category: 'imported' as const
  }
];

const ImportedCars: React.FC = () => {
  return (
    <CategoryLayout
      categoryTitle="Carros Importados"
      categoryDescription="Luxo e exclusividade internacional. Marcas premium globais com design sofisticado, tecnologia avançada e performance superior."
    >
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Luxury Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl">
              <h3 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">100%</h3>
              <p className="text-gray-600 dark:text-gray-300">Luxo Premium</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
              <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">500+</h3>
              <p className="text-gray-600 dark:text-gray-300">HP Performance</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl">
              <h3 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">5★</h3>
              <p className="text-gray-600 dark:text-gray-300">Qualidade Mundial</p>
            </div>
          </motion.div>

          {/* Cars Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {importedCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </CategoryLayout>
  );
};

export default ImportedCars;
