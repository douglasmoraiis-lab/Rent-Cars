import { useState } from "react";
import CartDrawer from "./components/CartDrawer";

// Subpáginas de Rental Deals
import Classic from "./pages/features/Rd/Classicos/classicos";
import Sport from "./pages/features/Rd/Esportivo.tsx/esportivo";
import Family from "./pages/features/Rd/Familia.tsx/familia";
import Eletric from "./pages/features/Rd/Eletrico/eletrico";
import Imported from "./pages/features/Rd/Importado.tsx/importado";
import Footer from "./components/footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/home";
import Hiw from "./pages/hiw";
import Wcu from "./pages/wcu";
import RentalDeals from "./pages/RentalDeals";
import AptitudeTest from "./pages/AptitudeTest";

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
            <Route path="/rd" element={<RentalDeals />} />
            <Route path="/aptitude-test" element={<AptitudeTest />} />
            <Route path="/rd/classicos" element={<Classic />} />
            <Route path="/rd/esportivo" element={<Sport />} />
            <Route path="/rd/familia" element={<Family />} />
            <Route path="/rd/eletrico" element={<Eletric />} />
            <Route path="/rd/importado" element={<Imported />} />
          </Routes>

          {/* ✅ Footer sempre visível */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
