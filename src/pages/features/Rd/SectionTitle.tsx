import React from "react";

const SectionTitle: React.FC = () => {
  return (
    <section className="text-center py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm px-6 py-2 rounded-full shadow-lg">
            OFERTAS POPULARES DE ALUGUEL
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Aluguel de Carros –{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Confira as Ofertas Atuais
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Descubra nossa seleção premium de veículos para todas as suas necessidades. 
          Desde carros clássicos até os mais modernos elétricos.
        </p>

        {/* Decorative line */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionTitle;
