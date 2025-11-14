import { useState } from "react";
import "./register.css";
import { validarNombre, validarEmail, validarPassword } from "../validaciones";
import { useNavigate } from "react-router-dom";

export default function Registro() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDACIONES
    const errorNombre = validarNombre(form.nombre);
    if (errorNombre) return setMensaje(errorNombre);

    const errorEmail = validarEmail(form.email);
    if (errorEmail) return setMensaje(errorEmail);

    const errorPassword = validarPassword(form.password);
    if (errorPassword) return setMensaje(errorPassword);

    try {
      const response = await fetch("http://localhost:8081/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        let errMsg = "Error al registrar.";
        try {
          const err = await response.json();
          if (err?.message) errMsg = err.message;
        } catch {}
        return setMensaje(errMsg);
      }

      const data = await response.json();
      console.log("Usuario registrado:", data);

      setMensaje("¡Registro exitoso! 🎉 Redirigiendo...");

      // 🔥 REDIRIGE AL LOGIN AUTOMÁTICAMENTE
      setTimeout(() => navigate("/login"), 1500);

    } catch (error) {
      console.error("Error fetch:", error);
      setMensaje("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="registro-container">
      <h2 className="registro-title">Crear Cuenta</h2>

      <div className="registro-card">
        <form onSubmit={handleSubmit} className="registro-form">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="registro-input"
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            className="registro-input"
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            className="registro-input"
          />

          <button type="submit" className="registro-button">
            Registrarse
          </button>

          {mensaje && <p className="registro-message">{mensaje}</p>}
        </form>
      </div>
    </div>
  );
}
