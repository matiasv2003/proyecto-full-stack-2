import { useState } from "react";
import "./login.css"; 
import { validarEmail, validarPassword } from "../validaciones";

export default function Login() {
  const [form, setForm] = useState({
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

    // ---- FETCH LOGIN ----
    try {
        const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      if (!response.ok) {
        let errMsg = "Error al iniciar sesión.";

        try {
          const errorData = await response.json();
          if (errorData?.message) errMsg = errorData.message;
        } catch {}

        setMensaje(errMsg);
        return;
      }

      const data = await response.json();
      console.log("Login exitoso:", data);

      setMensaje("¡Inicio de sesión exitoso! 🎉");

      // Guardar token si existe
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

    } catch (error) {
      console.error("Error fetch:", error);
      setMensaje("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="registro-container">
      <h2 className="registro-title">Iniciar Sesión</h2>

      <div className="registro-card">
        <form onSubmit={handleSubmit} className="registro-form">
          
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
            Entrar
          </button>

          {mensaje && <p className="registro-message">{mensaje}</p>}
        </form>
      </div>
    </div>
  );
}
