import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface CategoryLayoutProps {
  children: React.ReactNode;
  categoryTitle: string;
  categoryDescription: string;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = ({ 
  children, 
  categoryTitle, 
  categoryDescription 
}) => {
  const location = useLocation();
  
  const categories = [
    { nome: "Clássicos", path: "/rd/classicos" },
    { nome: "Esportivos", path: "/rd/esportivo" },
    { nome: "Família", path: "/rd/familia" },
    { nome: "Elétricos", path: "/rd/eletrico" },
    { nome: "Importados", path: "/rd/importado" },
  ];

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Rental Deals", path: "/rd" },
    { label: categoryTitle, path: location.pathname }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <main className="pt-24">
        {/* Breadcrumb Navigation */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-6 px-4 bg-gray-50 dark:bg-gray-800/50"
        >
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.path} className="flex items-center space-x-2">
                  {index === 0 && <Home className="w-4 h-4 text-gray-500" />}
                  {index < breadcrumbs.length - 1 ? (
                    <Link 
                      to={crumb.path}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-300 font-medium">
                      {crumb.label}
                    </span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </motion.section>

        {/* Category Header */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-16 px-4 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {categoryTitle}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {categoryDescription}
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </motion.section>

        {/* Category Navigation */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-8 px-4 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const isActive = location.pathname === category.path;
                return (
                  <Link 
                    key={category.path} 
                    to={category.path}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.nome}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Back to All Categories */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="py-4 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/rd"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
            >
              ← Voltar para todas as categorias
            </Link>
          </div>
        </motion.section>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default CategoryLayout;
