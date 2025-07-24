import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Car,
  CheckCircle,
  Shield,
  Star,
  ArrowRight,
  Phone,
  Eye,
  Brain,
  Heart,
  FileText
} from "@phosphor-icons/react";

// Dados dos critérios de aptidão
const aptitudeCriteria = [
  {
    icon: Eye,
    title: "Visão Adequada",
    description: "Acuidade visual mínima de 20/40 com ou sem correção",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Brain,
    title: "Capacidade Cognitiva",
    description: "Reflexos rápidos e capacidade de tomada de decisão",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Heart,
    title: "Condição Física",
    description: "Condições de saúde que permitam dirigir com segurança",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Shield,
    title: "Conhecimento das Leis",
    description: "Conhecimento atualizado das leis de trânsito",
    color: "from-orange-500 to-red-600"
  }
];

// Requisitos obrigatórios
const requirements = [
  "Carteira de habilitação válida e dentro do prazo",
  "Idade mínima de 18 anos",
  "Não ter restrições médicas para dirigir",
  "Não estar cumprindo suspensão da CNH",
  "Ter conhecimento das leis de trânsito atualizadas",
  "Condições físicas e mentais adequadas"
];

// Estatísticas de segurança
const safetyStats = [
  { number: "98%", label: "Taxa de Aprovação" },
  { number: "24h", label: "Tempo de Verificação" },
  { number: "100%", label: "Segurança Garantida" },
  { number: "0", label: "Acidentes Evitados" }
];

// Depoimentos dos motoristas aprovados
const testimonials = [
  {
    name: "Maria Santos",
    location: "São Paulo, SP",
    rating: 5,
    result: "Aprovada",
    comment: "Processo rápido e confiável! Me sinto mais segura sabendo que estou apta a dirigir.",
    avatar: "MS",
    testDate: "Janeiro 2024"
  },
  {
    name: "João Silva",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    result: "Aprovado",
    comment: "Excelente avaliação! Descobri pontos que preciso melhorar na minha direção.",
    avatar: "JS",
    testDate: "Dezembro 2023"
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    rating: 5,
    result: "Aprovada",
    comment: "Muito útil para verificar se estou em condições de dirigir com segurança!",
    avatar: "AC",
    testDate: "Fevereiro 2024"
  }
];

// Etapas do processo de verificação
const verificationSteps = [
  {
    number: "01",
    title: "Questionário Inicial",
    description: "Responda perguntas sobre sua saúde e experiência de direção",
    icon: FileText
  },
  {
    number: "02",
    title: "Teste de Visão",
    description: "Avaliação online da sua acuidade visual",
    icon: Eye
  },
  {
    number: "03",
    title: "Teste Cognitivo",
    description: "Avalie seus reflexos e capacidade de reação",
    icon: Brain
  },
  {
    number: "04",
    title: "Resultado Final",
    description: "Receba seu certificado de aptidão para dirigir",
    icon: CheckCircle
  }
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden pt-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Verificação de Aptidão para Dirigir
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Você está{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                apto a dirigir
              </span>
              {" "}com segurança?
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Faça nossa avaliação completa e descubra se você possui todas as 
              condições necessárias para dirigir com segurança.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center"
            >
              Iniciar Avaliação
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <Phone size={20} />
              Falar com Especialista
            </motion.button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {safetyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-3xl p-8">
            <Car size={300} className="w-full h-auto max-w-lg mx-auto text-blue-600" />
          </div>
          
          {/* Floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-20 right-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Segurança</span>
            </div>
          </motion.div>
          
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-20 left-10 bg-blue-600 text-white p-4 rounded-xl shadow-lg"
          >
            <div className="text-sm font-medium">Avaliação</div>
            <div className="text-xl font-bold">Completa</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const AptitudeSection: React.FC = () => {
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
            Critérios de Aptidão para Dirigir
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Avaliamos aspectos fundamentais para garantir que você esteja preparado para dirigir com segurança
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aptitudeCriteria.map((criteria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${criteria.color} flex items-center justify-center mb-4`}>
                <criteria.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {criteria.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {criteria.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VerificationProcessSection: React.FC = () => {
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
            Como funciona a avaliação?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Processo simples e rápido para verificar sua aptidão para dirigir
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {verificationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < verificationSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-green-500 z-0" 
                     style={{ width: 'calc(100% - 2rem)' }} />
              )}
              
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 z-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon size={28} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RequirementsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Requisitos necessários
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Verifique se você atende aos critérios para se tornar um motorista parceiro
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{requirement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
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
            Depoimentos de motoristas avaliados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Veja o que nossos usuários falam sobre nossa avaliação de aptidão
          </p>
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-600 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.location}
                  </div>
                  <div className="text-sm text-blue-600 font-semibold">
                    {testimonial.testDate}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-lg font-bold text-green-600">
                  {testimonial.result}
                </div>
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    licenseNumber: "",
    city: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário de avaliação enviado:", formData);
    // Aqui você pode integrar com sua API de avaliação
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Pronto para descobrir se você está apto?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Faça nossa avaliação completa e tenha a certeza de que está preparado para dirigir!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-300" />
                <span>Avaliação 100% gratuita</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-300" />
                <span>Resultado em até 24 horas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-300" />
                <span>Certificado de aptidão</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Iniciar Avaliação de Aptidão
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="number"
                  name="age"
                  placeholder="Sua idade"
                  value={formData.age}
                  onChange={handleInputChange}
                  min="18"
                  max="100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="licenseNumber"
                  placeholder="Número da CNH"
                  value={formData.licenseNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Selecione sua cidade</option>
                  <option value="sao-paulo">São Paulo</option>
                  <option value="rio-janeiro">Rio de Janeiro</option>
                  <option value="belo-horizonte">Belo Horizonte</option>
                  <option value="brasilia">Brasília</option>
                  <option value="curitiba">Curitiba</option>
                  <option value="salvador">Salvador</option>
                </select>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Iniciar Avaliação
                <ArrowRight size={20} />
              </motion.button>
            </form>
            
            <p className="text-sm text-gray-600 text-center mt-4">
              Ao continuar, você concorda com nossos{" "}
              <a href="#" className="text-blue-600 hover:underline">Termos de Uso</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AptitudeTest: React.FC = () => {
  return (
    <>
      <main>
        <HeroSection />
        <AptitudeSection />
        <VerificationProcessSection />
        <RequirementsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
};

export default AptitudeTest;
