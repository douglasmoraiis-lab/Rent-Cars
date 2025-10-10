import React from "react";
import { Link } from "react-router-dom";
import { Car, Zap, Users, Star, Globe } from "lucide-react";

const CategoryFilter: React.FC = () => {
  const categories = [
    { 
      nome: "Clássicos", 
      path: "classicos", 
      icon: <Star className="w-5 h-5" />,
      description: "Carros vintage e clássicos",
      color: "from-amber-500 to-orange-500"
    },
    { 
      nome: "Esportivos", 
      path: "esportivo", 
      icon: <Car className="w-5 h-5" />,
      description: "Potência e velocidade",
      color: "from-red-500 to-pink-500"
    },
    { 
      nome: "Família", 
      path: "familia", 
      icon: <Users className="w-5 h-5" />,
      description: "Conforto para todos",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      nome: "Elétricos", 
      path: "eletrico", 
      icon: <Zap className="w-5 h-5" />,
      description: "Sustentabilidade e tecnologia",
      color: "from-green-500 to-emerald-500"
    },
    { 
      nome: "Importados", 
      path: "importado", 
      icon: <Globe className="w-5 h-5" />,
      description: "Luxo internacional",
      color: "from-purple-500 to-violet-500"
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Explore por <span className="text-blue-600">Categoria</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Encontre o carro perfeito para cada ocasião
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.path} 
            to={`/rd/${category.path}`}
            className="group"
          >
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-transparent dark:hover:border-transparent transform hover:scale-105">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-6 text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {category.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category.nome}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                
                {/* Call to Action */}
                <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                  Ver carros
                  <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryFilter;
