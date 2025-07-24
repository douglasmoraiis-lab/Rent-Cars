import React from "react";
import { motion } from "framer-motion";
import CategoryLayout from "../../../../components/CategoryLayout";
import CarCard from "../../../../components/CarCard";

// Importando imagens de carros elétricos
import Audi from "../../../../assets/img/audi3.png";
import Bmw from "../../../../assets/img/bmw3.png";
import Charger from "../../../../assets/img/charger1.png";

const electricCars = [
  {
    id: 301,
    name: "Audi e-tron GT",
    year: 2024,
    image: [Audi],
    price: 280,
    description: "Luxo elétrico de alta performance",
    rating: 4.8,
    reviews: 1240,
    passengers: 4,
    doors: 4,
    category: 'electric' as const
  },
  {
    id: 302,
    name: "BMW iX",
    year: 2024,
    image: [Bmw],
    price: 320,
    description: "SUV elétrico premium com tecnologia avançada",
    rating: 4.7,
    reviews: 980,
    passengers: 5,
    doors: 4,
    category: 'electric' as const
  },
  {
    id: 303,
    name: "Tesla Model S",
    year: 2024,
    image: [Charger],
    price: 250,
    description: "Sedã elétrico revolucionário",
    rating: 4.6,
    reviews: 1560,
    passengers: 5,
    doors: 4,
    category: 'electric' as const
  },
  {
    id: 304,
    name: "BMW i4",
    year: 2024,
    image: [Bmw],
    price: 290,
    description: "Sedã elétrico esportivo",
    rating: 4.5,
    reviews: 1120,
    passengers: 5,
    doors: 4,
    category: 'electric' as const
  },
  {
    id: 305,
    name: "Audi e-tron",
    year: 2024,
    image: [Audi],
    price: 350,
    description: "SUV elétrico de luxo com máxima autonomia",
    rating: 4.9,
    reviews: 840,
    passengers: 5,
    doors: 4,
    category: 'electric' as const
  },
  {
    id: 306,
    name: "Tesla Model 3",
    year: 2024,
    image: [Charger],
    price: 270,
    description: "Compacto elétrico com eficiência premium",
    rating: 4.4,
    reviews: 920,
    passengers: 5,
    doors: 4,
    category: 'electric' as const
  }
];

const ElectricCars: React.FC = () => {
  return (
    <CategoryLayout
      categoryTitle="Carros Elétricos"
      categoryDescription="O futuro da mobilidade sustentável. Carros 100% elétricos com tecnologia de ponta, zero emissões e máxima eficiência energética."
    >
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Electric Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
              <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">0%</h3>
              <p className="text-gray-600 dark:text-gray-300">Emissões de CO²</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</h3>
              <p className="text-gray-600 dark:text-gray-300">Km de Autonomia</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
              <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">30min</h3>
              <p className="text-gray-600 dark:text-gray-300">Carregamento Rápido</p>
            </div>
          </motion.div>

          {/* Cars Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {electricCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </CategoryLayout>
  );
};

export default ElectricCars;


