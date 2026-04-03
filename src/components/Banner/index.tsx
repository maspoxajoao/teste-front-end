import "./style.scss";

export function Banner() {
  return (
    <section className="hero-banner">
      <div className="banner-overlay">
        <div className="banner-content">
          <h1>Venha conhecer nossas promoções</h1>
          <h2>
            <span>50% Off</span> nos produtos
          </h2>
          <button className="btn-primary">Ver produto</button>
        </div>
      </div>
    </section>
  );
}
