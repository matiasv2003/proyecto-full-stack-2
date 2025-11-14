import { useState } from "react";
import "./register.css";
import { validarNombre, validarEmail, validarPassword } from "../validaciones";

export default function Registro() {
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

    // ---- VALIDACIONES ----
    const errorNombre = validarNombre(form.nombre);
    if (errorNombre) {
      setMensaje(errorNombre);
      return;
    }

    const errorEmail = validarEmail(form.email);
    if (errorEmail) {
      setMensaje(errorEmail);
      return;
    }

    const errorPassword = validarPassword(form.password);
    if (errorPassword) {
      setMensaje(errorPassword);
      return;
    }

    // ---- FETCH AL BACKEND ----
    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          password: form.password,
        }),
      });

      // Si Spring devuelve error (400, 500, etc)
      if (!response.ok) {
        let errMsg = "Error al registrar.";
        
        try {
          const errorData = await response.json();
          if (errorData?.message) {
            errMsg = errorData.message;
          }
        } catch (e) {}

        setMensaje(errMsg);
        return;
      }

      const data = await response.json();
      console.log("Usuario registrado:", data);

      setMensaje("¡Registro exitoso! 🎉");

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
