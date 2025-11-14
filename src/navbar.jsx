import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("usuario");
    if (userData) {
      setUsuario(JSON.parse(userData));
    }
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    window.location.href = "/"; 
  };

  return (
    <header>
      <h1>Level-Up Gamer</h1>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productos">Productos</Link></li>

          {!usuario && (
            <>
              <li><Link to="/register">Registro</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}

          {usuario && (
            <>
              <li className="usuario-box">
                <span className="user-icon">👤</span>
                {usuario.nombre || usuario.email}
              </li>


              <li className="logout-btn" onClick={cerrarSesion}>
                Cerrar sesión
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
