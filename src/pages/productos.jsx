import "./productos.css";

export default function Productos() {
  const productos = [
    {
      nombre: "Teclado Mecánico RGB",
      precio: "$89.990",
    },
    {
      nombre: "Mouse Gamer 16000 DPI",
      precio: "$59.990",
    },
    {
      nombre: "Auriculares Pro X",
      precio: "$79.990",
    },
    {
      nombre: "Silla Gamer RGB",
      precio: "$199.990",
    },
  ];

  return (
    <div className="productos-container">
      <h2 className="productos-title">Catálogo de Productos</h2>
      <div className="productos-grid">
        {productos.map((p, i) => (
          <div className="producto-item" key={i}>
            <h3>{p.nombre}</h3>
            <p>{p.precio}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}
