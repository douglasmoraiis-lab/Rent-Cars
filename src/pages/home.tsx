import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import eas from "../assets/img/risco.svg";
import googlePlay from "../assets/img/googleP.svg";
import homeImage from "../assets/img/home.svg";

import { 
  CalendarDots, 
  MapPin, 
  Star, 
  Shield, 
  Lightning, 
  ArrowRight,
  Globe,
  CreditCard
} from "@phosphor-icons/react";

// Dados para as features
const features = [
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Todos os veículos passam por inspeção rigorosa",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Lightning,
    title: "Reserva Instantânea",
    description: "Confirme sua reserva em segundos",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: CreditCard,
    title: "Sem Taxas Ocultas",
    description: "Preços transparentes e justos",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Globe,
    title: "Disponível 24/7",
    description: "Suporte e atendimento a qualquer hora",
    color: "from-orange-500 to-red-600"
  }
];

// Estatísticas da empresa
const stats = [
  { number: "50K+", label: "Clientes Felizes" },
  { number: "1000+", label: "Carros Disponíveis" },
  { number: "4.9", label: "Avaliação Média" },
  { number: "24/7", label: "Suporte" }
];

// Depoimentos de clientes
const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    rating: 5,
    comment: "Serviço excepcional! Carros sempre limpos e em perfeito estado. Recomendo!",
    avatar: "MS"
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro, RJ", 
    rating: 5,
    comment: "Processo super fácil e rápido. Consegui alugar um carro em minutos!",
    avatar: "JS"
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    rating: 5,
    comment: "Preços justos e atendimento impecável. Já sou cliente há 2 anos!",
    avatar: "AC"
  }
];

const HomeSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 pt-28 lg:pt-40">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <div className="max-w-xl text-center lg:text-left lg:flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Find, book and{" "}
            <span className="block">
              rent a car{" "}
              <span className="text-blue-600 relative inline-block">
                Easily
                <img
                  src={eas}
                  alt="Underline"
                  className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-5 left-0 w-full h-auto"
                  aria-hidden="true"
                />
              </span>
            </span>
          </h1>

          <p className="text-gray-500 text-base sm:text-lg lg:text-xl mt-6 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
            Get a car wherever and whenever you need it with your iOS and
            Android device.
          </p>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 flex-wrap">
            <a href="#" aria-label="Get it on Google Play" className="hover:scale-105 transition-transform duration-200">
              <img
                src={googlePlay}
                alt="Google Play"
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </a>
            <a href="#" aria-label="App Store" className="hover:scale-105 transition-transform duration-200">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl lg:flex-1">
          <img
            src={homeImage}
            alt="Car rental illustration"
            className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};


const SearchSection: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-16 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 p-4 md:p-6 lg:p-8 shadow-2xl rounded-2xl lg:rounded-3xl border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row w-full justify-between items-stretch gap-4 lg:gap-6 text-lg font-medium text-gray-800 dark:text-white">
          
          {/* Location */}
          <div className="flex flex-1 min-w-0 items-center space-x-3 p-3 lg:p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
            <MapPin size={24} className="text-blue-500 flex-shrink-0" />
            <div className="flex flex-col text-left min-w-0 flex-1">
              <span className="font-semibold text-gray-900 dark:text-white">Localização</span>
              <select 
                className="text-sm text-gray-500 dark:text-gray-300 bg-transparent border-none outline-none w-full"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">Selecione a cidade</option>
                <option value="sao-paulo">São Paulo</option>
                <option value="rio-janeiro">Rio de Janeiro</option>
                <option value="belo-horizonte">Belo Horizonte</option>
                <option value="brasilia">Brasília</option>
              </select>
            </div>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-1 min-w-0 items-center space-x-3 p-3 lg:p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
            <CalendarDots size={24} className="text-blue-500 flex-shrink-0" />
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-semibold text-gray-900 dark:text-white">Data de Retirada</span>
              <input
                type="datetime-local"
                className="text-sm text-gray-500 dark:text-gray-300 bg-transparent border-none outline-none w-full"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
              />
            </div>
          </div>

          {/* Return Date */}
          <div className="flex flex-1 min-w-0 items-center space-x-3 p-3 lg:p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
            <CalendarDots size={24} className="text-blue-500 flex-shrink-0" />
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-semibold text-gray-900 dark:text-white">Data de Devolução</span>
              <input
                type="datetime-local"
                className="text-sm text-gray-500 dark:text-gray-300 bg-transparent border-none outline-none w-full"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-center justify-center w-full lg:w-auto lg:min-w-fit">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full lg:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Buscar Carros
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Por que escolher a RentCars?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Oferecemos a melhor experiência em aluguel de carros com tecnologia de ponta e atendimento premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Números que impressionam
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-6xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.location}
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para sua próxima viagem?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Milhares de carros disponíveis. Reserve agora e tenha a liberdade de ir onde quiser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rd">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Ver Carros Disponíveis
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Baixar App
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <main className="pt-24">
        <HomeSection />
        <SearchSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
};

export default Home;
