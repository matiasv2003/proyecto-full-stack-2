import { useEffect, useState } from "react";
import "./productos.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  return (
    <div className="productos-container">
      <h2 className="productos-title">Catálogo de Productos</h2>

      <div className="productos-grid">
        {productos.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          productos.map((p) => (
            <div className="producto-item" key={p.id}>
              <h3>{p.nombre}</h3>
              <p>${p.precio.toLocaleString()}</p>
              <button>Agregar al carrito</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
