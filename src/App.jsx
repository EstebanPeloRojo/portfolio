import { Routes, Route } from "react-router-dom";
import "./App.css";
import Proyectos from "./Proyectos/proyectos.jsx";
import Inicio from "./Inicio/inicio.jsx";
import SobreMi from "./SobreMi/sobremi.jsx";
import Menu from "./Menu/menu.jsx";
function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/Portafolio-React" element={<Inicio />} />
        <Route path="/Portafolio-React/Proyectos" element={<Proyectos />} />
        <Route path="/Portafolio-React/SobreMi" element={<SobreMi />} />
      </Routes>
    </div>
  );
}

export default App;
