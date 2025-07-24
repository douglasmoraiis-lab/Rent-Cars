import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  CurrencyDollarSimple, 
  User, 
  Clock, 
  Headset, 
  Shield, 
  Star,
  CheckCircle,
  ArrowRight,
  Car,
  Heart,
  Lightning,
  Globe,
  Medal,
  Users,
  TrendUp,
  Sparkle,
  Phone,
  ChatCircle,
  VideoCamera
} from "@phosphor-icons/react";

// Dados das vantagens principais
const mainFeatures = [
  {
    icon: CurrencyDollarSimple,
    title: "Melhor Preço Garantido",
    description: "Encontrou um preço menor? Reembolsamos 100% da diferença.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: User,
    title: "Motoristas Experientes",
    description: "Não tem motorista? Temos profissionais experientes disponíveis para você.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Clock,
    title: "Entrega 24 Horas",
    description: "Reserve seu carro a qualquer hora e entregamos diretamente para você.",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Headset,
    title: "Suporte 24/7",
    description: "Tem alguma dúvida? Entre em contato com nosso suporte a qualquer momento.",
    color: "from-orange-500 to-red-600"
  }
];

// Features adicionais
const additionalFeatures = [
  {
    icon: Shield,
    title: "Seguro Completo",
    description: "Todos os veículos possuem seguro completo contra acidentes e roubos",
    stats: "100% Cobertura"
  },
  {
    icon: Lightning,
    title: "Reserva Instantânea",
    description: "Confirme sua reserva em segundos através do nosso app",
    stats: "< 30 segundos"
  },
  {
    icon: Globe,
    title: "Disponível Globalmente",
    description: "Serviços disponíveis em mais de 50 cidades brasileiras",
    stats: "50+ Cidades"
  },
  {
    icon: Medal,
    title: "Qualidade Premium",
    description: "Carros revisados e higienizados antes de cada locação",
    stats: "Nota 4.9/5"
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Mais de 100.000 usuários satisfeitos em todo o Brasil",
    stats: "100K+ Usuários"
  },
  {
    icon: TrendUp,
    title: "Tecnologia Avançada",
    description: "App com GPS integrado e recursos de última geração",
    stats: "IA Integrada"
  }
];

// Estatísticas da empresa
const companyStats = [
  { number: "100K+", label: "Clientes Satisfeitos", icon: Users },
  { number: "50+", label: "Cidades Atendidas", icon: Globe },
  { number: "4.9/5", label: "Avaliação Média", icon: Star },
  { number: "24/7", label: "Suporte Disponível", icon: Headset },
  { number: "1000+", label: "Carros Disponíveis", icon: Car },
  { number: "99%", label: "Taxa de Satisfação", icon: Heart }
];

// Depoimentos de clientes
const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    rating: 5,
    comment: "Serviço impecável! Nunca tive problemas e sempre encontro o carro perfeito para minhas necessidades.",
    avatar: "MS",
    verified: true
  },
  {
    name: "João Santos", 
    location: "Rio de Janeiro, RJ",
    rating: 5,
    comment: "O melhor custo-benefício do mercado. App muito fácil de usar e atendimento excepcional!",
    avatar: "JS",
    verified: true
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte, MG", 
    rating: 5,
    comment: "Já uso há 2 anos e só tenho elogios. Carros sempre limpos e em perfeito estado.",
    avatar: "AC",
    verified: true
  },
  {
    name: "Carlos Oliveira",
    location: "Brasília, DF",
    rating: 5,
    comment: "Suporte 24h realmente funciona! Me ajudaram até de madrugada quando precisei.",
    avatar: "CO",
    verified: true
  }
];

// Canais de suporte
const supportChannels = [
  {
    icon: Phone,
    title: "Telefone",
    description: "Ligue para nosso atendimento",
    contact: "0800 123 4567",
    available: "24/7"
  },
  {
    icon: ChatCircle,
    title: "Chat Online",
    description: "Converse conosco em tempo real",
    contact: "Chat ao vivo",
    available: "24/7"
  },
  {
    icon: VideoCamera,
    title: "Videochamada",
    description: "Atendimento por vídeo",
    contact: "Agendar chamada",
    available: "8h-22h"
  }
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden pt-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
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
              <Sparkle size={16} className="mr-2" />
              Por que nos escolher?
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              A melhor experiência em{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                aluguel de carros
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Oferecemos serviços premium com tecnologia de ponta, suporte 24/7 e os melhores 
              preços do mercado. Sua satisfação é nossa prioridade.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {mainFeatures.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                  <feature.icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hero Image/Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {companyStats.slice(0, 4).map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
                >
                  <stat.icon size={32} className="text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 right-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Online Agora</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Vantagens Exclusivas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubra todos os benefícios que tornam nossa plataforma única no mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <feature.icon size={24} className="text-white" />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {feature.stats}
                  </div>
                </div>
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
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Números que Impressionam
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Nossa trajetória de sucesso refletida em números
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <stat.icon size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100 text-sm">
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
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Depoimentos reais de quem já experimentou nossos serviços
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.location}
                  </div>
                </div>
                {testimonial.verified && (
                  <CheckCircle size={16} className="text-blue-500 ml-auto" />
                )}
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SupportSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Suporte Sempre Disponível
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Múltiplos canais de atendimento para garantir que você tenha ajuda quando precisar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <channel.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {channel.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {channel.description}
              </p>
              
              <div className="space-y-2">
                <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {channel.contact}
                </div>
                <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  {channel.available}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email cadastrado:", email);
    setEmail("");
    // Aqui você pode implementar a lógica de cadastro
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Cadastre-se agora e receba ofertas exclusivas e descontos especiais diretamente no seu email
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none text-gray-900"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
              >
                Cadastrar
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </form>

          <p className="text-sm text-blue-100 mt-4">
            Ao se cadastrar, você concorda com nossos termos de uso e política de privacidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Wcu: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <SupportSection />
      <CTASection />
    </div>
  );
};

export default Wcu;
