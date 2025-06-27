import React from "react";
import Nav from "./components/nav";
import Home from "./pages/home";
import Footer from "./components/footer";
import Hiw from "./pages/hiw";
import Wcu from "./pages/wcu";
import Rd from "./pages/Rd";

// Subpáginas de Rental Deals
import Classicos from "./pages/features/Rd/Classicos.tsx/classicos";
import Esportivo from "./pages/features/Rd/Esportivo.tsx/esportivo";
import Familia from "./pages/features/Rd/Familia.tsx/familia";
import Eletrico from "./pages/features/Rd/Eletrico.tsx/eletrico";
import Importado from "./pages/features/Rd/Importado.tsx/importado";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/hiw" element={<Hiw />} />
        <Route path="/wcu" element={<Wcu />} />

        {/* Página principal de Rental Deals */}
        <Route path="/rd" element={<Rd />} />

        {/* Subpáginas de Rental Deals */}
        <Route path="/rd/classicos" element={<Classicos />} />
        <Route path="/rd/esportivo" element={<Esportivo />} />
        <Route path="/rd/familia" element={<Familia />} />
        <Route path="/rd/eletrico" element={<Eletrico />} />
        <Route path="/rd/importado" element={<Importado />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
