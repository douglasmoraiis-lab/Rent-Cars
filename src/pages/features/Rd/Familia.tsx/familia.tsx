import React from "react";
import { motion } from "framer-motion";
import CategoryLayout from "../../../../components/CategoryLayout";
import CarCard from "../../../../components/CarCard";

// Importando imagens de carros familiares
import Gol from "../../../../assets/img/gol1.png";
import Fiat from "../../../../assets/img/uno1.png";
import Santana from "../../../../assets/img/santana1.png";
import Fusca from "../../../../assets/img/fusca1.png";
import Monza from "../../../../assets/img/monza1.png";

const familyCars = [
  {
    id: 201,
    name: "Volkswagen Gol",
    year: 2023,
    image: [Gol],
    price: 120,
    description: "Economia e conforto para toda família",
    rating: 4.5,
    reviews: 3240,
    passengers: 5,
    doors: 4,
    category: 'family' as const
  },
  {
    id: 202,
    name: "Fiat Uno",
    year: 2023,
    image: [Fiat],
    price: 110,
    description: "Compacto e eficiente para o dia a dia",
    rating: 4.3,
    reviews: 2850,
    passengers: 5,
    doors: 4,
    category: 'family' as const
  },
  {
    id: 203,
    name: "VW Santana",
    year: 2023,
    image: [Santana],
    price: 150,
    description: "Sedã espaçoso e confortável",
    rating: 4.4,
    reviews: 1920,
    passengers: 5,
    doors: 4,
    category: 'family' as const
  },
  {
    id: 204,
    name: "Volkswagen Fusca",
    year: 1970,
    image: [Fusca],
    price: 200,
    description: "Clássico retrô para experiências únicas",
    rating: 4.8,
    reviews: 1560,
    passengers: 4,
    doors: 2,
    category: 'family' as const
  },
  {
    id: 205,
    name: "Chevrolet Monza",
    year: 1990,
    image: [Monza],
    price: 130,
    description: "Sedã clássico brasileiro confortável",
    rating: 4.6,
    reviews: 2100,
    passengers: 5,
    doors: 4,
    category: 'family' as const
  },
  {
    id: 206,
    name: "Volkswagen Gol GTI",
    year: 2023,
    image: [Gol],
    price: 140,
    description: "Versão esportiva do popular brasileiro",
    rating: 4.2,
    reviews: 1780,
    passengers: 5,
    doors: 4,
    category: 'family' as const
  }
];

const FamilyCars: React.FC = () => {
  return (
    <CategoryLayout
      categoryTitle="Carros Familiares"
      categoryDescription="Conforto, segurança e economia para toda a família. Veículos práticos e espaçosos para suas viagens e rotina diária."
    >
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Family Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
              <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5</h3>
              <p className="text-gray-600 dark:text-gray-300">Lugares Confortáveis</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</h3>
              <p className="text-gray-600 dark:text-gray-300">Km/L Economia</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
              <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5★</h3>
              <p className="text-gray-600 dark:text-gray-300">Segurança Familiar</p>
            </div>
          </motion.div>

          {/* Cars Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {familyCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </CategoryLayout>
  );
};

export default FamilyCars;


