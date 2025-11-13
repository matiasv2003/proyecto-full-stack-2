import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Home from "./pages/home.jsx";
import Productos from "./pages/productos.jsx";
import Register from "./pages/Register.jsx";  // <-- IMPORTANTE

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/register" element={<Register />} />  {/* <-- RUTA AGREGADA */}
      </Routes>
    </Router>
  );
}
