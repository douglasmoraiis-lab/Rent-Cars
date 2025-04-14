import React from "react";
import Nav from "./components/nav";
import Home from "./pages/home";
import Footer  from "./components/footer";
import Hiw from "./pages/hiw"
import Wcu from "./pages/wcu";
/*import Prd from "./pages/Prd" FALTA FAZER E ORGANIZAR */
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const App: React.FC = () => {
  return (

    <Router>
      <Nav />
      <Routes>
        <Route  path="/Home" element={<Home />}/>
        <Route  path="/Hiw" element={<Hiw />}/>
        <Route  path="/Wcu" element={<Wcu />}/>
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;
