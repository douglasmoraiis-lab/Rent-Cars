import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Shield,
  Award,
  CreditCard
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">RentCars</h3>
              <p className="text-gray-300 leading-relaxed">
                A melhor plataforma de aluguel de carros do Brasil, oferecendo as melhores condições e preços para sua viagem.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield size={16} className="text-green-600" />
                </div>
                <span className="text-sm text-gray-300">100% Seguro e Confiável</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award size={16} className="text-blue-600" />
                </div>
                <span className="text-sm text-gray-300">Mais de 10 anos no mercado</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CreditCard size={16} className="text-purple-600" />
                </div>
                <span className="text-sm text-gray-300">Pagamento 100% seguro</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rd" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Carros Disponíveis
                </Link>
              </li>
              <li>
                <Link to="/aptitude-test" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Teste de Aptidão
                </Link>
              </li>
              <li>
                <Link to="/wcu" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Por que nos escolher
                </Link>
              </li>
              <li>
                <Link to="/hiw" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Como funciona
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Categorias</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/rd/classicos" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Carros Clássicos
                </Link>
              </li>
              <li>
                <Link to="/rd/esportivo" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Carros Esportivos
                </Link>
              </li>
              <li>
                <Link to="/rd/familia" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Carros de Família
                </Link>
              </li>
              <li>
                <Link to="/rd/eletrico" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Carros Elétricos
                </Link>
              </li>
              <li>
                <Link to="/rd/importado" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Carros Importados
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-300">(11) 3000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300">contato@rentcars.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-300">São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Siga-nos</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors duration-200">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors duration-200">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 RentCars. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookies
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
