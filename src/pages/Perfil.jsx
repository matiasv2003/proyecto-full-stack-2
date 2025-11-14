import "./Perfil.css";
import { useEffect, useState } from "react";

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("usuario"));
    console.log("Usuario cargado:", userData);
    setUsuario(userData);
  }, []);

  if (!usuario) return <h2>No estás logeado.</h2>;

  return (
    <div className="perfil-container">
      <h1>Perfil del Usuario</h1>

      <div className="perfil-card">

        <div className="avatar-box">
          Foto<br />(140×140)
        </div>

        <div className="info-box">
          <p><b>Nombre:</b> {usuario.nombre}</p>
          <p><b>Email:</b> {usuario.email}</p>
        </div>

      </div>

      <p className="descripcion">
        (Aquí puedes agregar avatar, historial, configuración, etc.)
      </p>
    </div>
  );
}
