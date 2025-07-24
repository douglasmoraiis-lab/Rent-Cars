import React from "react";
import { motion } from "framer-motion";
import CategoryLayout from "../../../../components/CategoryLayout";
import CarCard from "../../../../components/CarCard";
import { onlyClassicCars } from "../../../../data/classicCars";

const ClassicCars: React.FC = () => {
  return (
    <CategoryLayout
      categoryTitle="Carros Clássicos"
      categoryDescription="Descubra nossa coleção exclusiva de carros clássicos e vintage. Cada veículo é uma peça única da história automobilística."
    >
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Cars Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {onlyClassicCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </motion.div>

          {/* No cars found message */}
          {onlyClassicCars.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
                Nenhum carro clássico disponível no momento
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Estamos trabalhando para trazer mais opções para você!
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </CategoryLayout>
  );
};

export default ClassicCars;
