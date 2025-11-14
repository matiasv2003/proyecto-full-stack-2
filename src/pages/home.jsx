import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="neon-bg"></div>

      <div className="intro">
        <h1 className="title">Level-Up Gamer</h1>
        <p className="subtitle">
          Tu tienda definitiva para periféricos, setups y todo lo que un gamer necesita ⚡
        </p>

        <a href="/productos" className="btn-primary">
          Ver productos
        </a>
      </div>

      <section className="map-section">
        <h2 className="map-title">📍 Encuéntranos Aquí</h2>

        <div className="map-box">
          <iframe
            title="mapa"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.9712158827817!2d-70.64826802368391!3d-33.43693399731111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a5757d5c09%3A0x2b5c4fa3b2e497bb!2sSantiago%20Centro!5e0!3m2!1ses-419!2scl!4v1700000000000"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
