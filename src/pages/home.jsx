import "./Home.css";

export default function Home() {
  const productos = [
    {
      nombre: "Teclado Mecánico RGB",
      precio: "$89.990",
    },
    {
      nombre: "Auriculares Pro X",
      precio: "$79.990",
    },
    {
      nombre: "Mouse Gamer 16000 DPI",
      precio: "$59.990",
    },
  ];

  return (
    <div className="home-container">
      <div className="neon-bg"></div>

      <div className="intro">
        <h1 className="title">Level-Up Gamer</h1>
        <p className="subtitle">
          Tu tienda definitiva para periféricos, setups y todo lo que un gamer necesita ⚡
        </p>
        <a href="#productos" className="btn-primary">
          Ver productos
        </a>
      </div>

      <section id="productos" className="productos">
        {productos.map((p, i) => (
          <div className="producto-card" key={i}>
            <div className="info">
              <h3>{p.nombre}</h3>
              <p>{p.precio}</p>
              <button>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
