import { useState } from "react";
import CartDrawer from "./components/CartDrawer";

// Subpáginas de Rental Deals
import Classic from "./pages/features/Rd/Classicos.tsx/classicos";
import Sport from "./pages/features/Rd/Esportivo.tsx/esportivo";
import Family from "./pages/features/Rd/Familia.tsx/familia";
import Eletric from "./pages/features/Rd/Eletrico.tsx/eletrico";
import Imported from "./pages/features/Rd/Importado.tsx/importado";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/home";
import Hiw from "./pages/hiw";
import Wcu from "./pages/wcu";
import Rd from "./pages/Rd";

// IMPORTAR CartProvider
import { CartProvider } from "./context/CartContext";

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    // ✅ ENVOLVER COM CartProvider
    <CartProvider>
      <Router>
        {/* Container principal que muda cores com dark mode */}
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
          
          {/* ✅ Passar onCartClick para a Navbar */}
          <Navbar onCartClick={() => setIsCartOpen(true)} />

          {/* Carrinho lateral */}
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

          {/* Rotas principais */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hiw" element={<Hiw />} />
            <Route path="/wcu" element={<Wcu />} />
            <Route path="/rd" element={<Rd />} />
            <Route path="/rd/classicos" element={<Classic />} />
            <Route path="/rd/esportivo" element={<Sport />} />
            <Route path="/rd/familia" element={<Family />} />
            <Route path="/rd/eletrico" element={<Eletric />} />
            <Route path="/rd/importado" element={<Imported />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
