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

  const handleSubmit = (e) => {
  e.preventDefault();

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

  setMensaje("¡Registro exitoso! 🎉");
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
