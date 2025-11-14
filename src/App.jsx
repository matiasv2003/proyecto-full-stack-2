import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Home from "./pages/home.jsx";
import Productos from "./pages/productos.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx"; 
import Perfil from "./pages/Perfil";


export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

