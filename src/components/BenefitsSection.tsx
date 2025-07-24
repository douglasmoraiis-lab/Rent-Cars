import React from "react";
import { Shield, Clock, Award, Users } from "lucide-react";

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Seguro",
      description: "Todos os carros passam por rigorosa inspeção",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Suporte",
      description: "Atendimento disponível a qualquer hora",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Melhor Preço",
      description: "Garantimos o melhor preço do mercado",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "+10k Clientes",
      description: "Mais de 10 mil clientes satisfeitos",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Por que escolher a <span className="text-blue-600">RentCar</span>?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Oferecemos a melhor experiência de aluguel de carros com qualidade garantida
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-transparent dark:hover:border-transparent transform hover:scale-105"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
