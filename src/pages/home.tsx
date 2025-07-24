import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar,
  MapPin,
  Search,
  Star,
  Shield,
  CreditCard,
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Smartphone
} from "lucide-react";

// Dados das principais vantagens da RentCars
const mainAdvantages = [
  {
    icon: TrendingUp,
    title: "Melhores preços e descontos",
    description: "Tenha acesso às melhores ofertas de locadoras em todo o mundo, aproveite descontos e receba cupons exclusivos."
  },
  {
    icon: CreditCard,
    title: "Reservas com cashback",
    description: "Receba até 10% de cashback em sua carteira digital para o próximo aluguel."
  },
  {
    icon: Globe,
    title: "Alugue carro no mundo todo",
    description: "Compare as melhores opções em mais de 300 locadoras de veículos, 7.000 cidades e 40.000 pontos de atendimento."
  },
  {
    icon: Shield,
    title: "Excelência no atendimento ao cliente",
    description: "Suporte especializado 7 dias por semana. Atendimento em português em reservas no Brasil e no mundo."
  }
];

// Locadoras parceiras
const carRentalCompanies = [
  { name: "Movida", logo: "/src/assets/img/movida-logo.png" },
  { name: "Localiza", logo: "/src/assets/img/localiza-logo.png" },
  { name: "Foco", logo: "/src/assets/img/foco-logo.png" },
  { name: "Unidas", logo: "/src/assets/img/unidas-logo.png" },
  { name: "Hertz", logo: "/src/assets/img/hertz-logo.png" },
  { name: "Alamo", logo: "/src/assets/img/alamo-logo.png" },
  { name: "Enterprise", logo: "/src/assets/img/enterprise-logo.png" },
  { name: "Avis", logo: "/src/assets/img/avis-logo.png" }
];

// Destinos populares
const popularDestinations = {
  brasil: [
    "São Paulo", "Rio de Janeiro", "Brasília", "Recife", 
    "Belo Horizonte", "Curitiba", "Goiânia", "Manaus"
  ],
  eua: [
    "Miami", "Orlando", "Tampa", "Fort Lauderdale",
    "Los Angeles", "São Francisco", "Las Vegas", "Nova York"
  ],
  europa: [
    "Lisboa", "Porto", "Madrid", "Paris",
    "Zurique", "Frankfurt", "Munique", "Roma"
  ],
  americas: [
    "Santiago", "Puerto Montt", "Buenos Aires", "Mendoza",
    "Montevidéu", "Lima", "Bogotá", "Cidade do México"
  ]
};

// FAQ items
const faqItems = [
  {
    question: "Quais documentos são necessários para alugar um carro?",
    answer: "No Brasil, você precisa ter 21 anos, CNH válida há mais de 2 anos e cartão de crédito. No exterior, também é necessário passaporte e PID em alguns países."
  },
  {
    question: "Como funciona o caução no aluguel de carros?",
    answer: "O caução é um bloqueio temporário no cartão de crédito como garantia. O valor varia conforme o veículo e é liberado após a devolução."
  },
  {
    question: "O que está incluso na diária de aluguel de um carro?",
    answer: "A diária inclui o uso do veículo, quilometragem livre ou limitada conforme especificado, e assistência 24h da locadora."
  }
];

const HeroSection: React.FC = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnDifferentLocation, setReturnDifferentLocation] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("10:00");

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Aluguel de carros fácil<br />
            <span className="text-yellow-400">e do seu jeito.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Viva as melhores experiências de aluguel de carro ao redor do mundo
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Pickup Location */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin size={18} className="inline mr-2" />
                Retirada
              </label>
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder="Cidade, aeroporto ou endereço"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
              <div className="mt-2">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={returnDifferentLocation}
                    onChange={(e) => setReturnDifferentLocation(e.target.checked)}
                    className="mr-2 rounded"
                  />
                  Devolver em outra cidade
                </label>
              </div>
            </div>

            {/* Pickup Date & Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar size={18} className="inline mr-2" />
                Data de retirada
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 mb-2"
              />
              <select
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              >
                {Array.from({ length: 24 }, (_, i) => {
                  const hour = i.toString().padStart(2, '0');
                  return (
                    <option key={hour} value={`${hour}:00`}>
                      {hour}:00
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Return Date & Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar size={18} className="inline mr-2" />
                Devolução
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 mb-2"
              />
              <select
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              >
                {Array.from({ length: 24 }, (_, i) => {
                  const hour = i.toString().padStart(2, '0');
                  return (
                    <option key={hour} value={`${hour}:00`}>
                      {hour}:00
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Search size={20} />
            Pesquisar
          </motion.button>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-center text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Compare preços em mais de 300 locadoras
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Melhor preço garantido
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Cashback para o seu próximo aluguel
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Confiança para explorar o mundo do seu jeito
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Milhares de pessoas confiam na Rentcars para viajar pelo mundo.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-bold text-gray-900">4.5</span>
              <span className="text-gray-600">151.080 Avaliações • Excelente</span>
            </div>
            <div className="bg-green-100 px-4 py-2 rounded-lg">
              <span className="text-green-800 font-bold">RA1000 Reputação máxima</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CarRentalCompaniesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mais de 300 locadoras de veículos em todo o mundo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Compare os melhores preços e escolha o carro perfeito para alugar, não importa onde você for
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {carRentalCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-gray-700 font-medium text-sm">{company.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdvantagesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Vantagens de alugar um carro com a Rentcars
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <advantage.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DestinationsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Aluguel de carros em todo o mundo
          </h2>
          <p className="text-lg text-gray-600">
            Reserve um carro nos destinos mais populares do Brasil e do mundo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(popularDestinations).map(([region, cities], index) => (
            <motion.div
              key={region}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">
                  {region === 'eua' ? 'Estados Unidos e Canadá' : 
                   region === 'americas' ? 'Américas' : 
                   region === 'europa' ? 'Europa' : 'Brasil'}
                </h3>
                <div className="space-y-2">
                  {cities.slice(0, 6).map((city) => (
                    <button
                      key={city}
                      className="block text-left text-blue-600 hover:text-blue-800 hover:underline text-sm"
                    >
                      {city}
                    </button>
                  ))}
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-2">
                  Ver todos os destinos
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Perguntas frequentes sobre o aluguel de carros
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
                <ArrowRight 
                  size={20} 
                  className={`text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            Ver todas as perguntas
          </button>
        </div>
      </div>
    </section>
  );
};

const AppDownloadSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Baixe agora o app
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Compare preços e alugue um veículo aonde você estiver. É rápido e fácil!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors">
              <Smartphone size={24} />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </button>
            <button className="bg-black text-white px-8 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors">
              <Smartphone size={24} />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email cadastrado:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Receba ofertas exclusivas
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Cadastre seu e-mail para receber promoções exclusivas da Rentcars!
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors duration-200"
              >
                Cadastrar
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <CarRentalCompaniesSection />
      <AdvantagesSection />
      <DestinationsSection />
      <FAQSection />
      <AppDownloadSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;
