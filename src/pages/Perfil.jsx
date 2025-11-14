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
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Perfil del Usuario</h1>

      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Email:</strong> {usuario.email}</p>

      <p style={{opacity: 0.7}}>
        (Aquí puedes agregar avatar, historial, configuración, etc.)
      </p>
    </div>
  );
}
