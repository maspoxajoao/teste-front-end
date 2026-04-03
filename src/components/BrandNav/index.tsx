import "./styles.scss";
import logoEconverse from "../../assets/images/Logo.png";

export function BrandNav() {
  const brands = Array(5).fill({ logo: logoEconverse });

  return (
    <section className="brand-nav-container">
      <h2>Navegue por marcas</h2>

      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-circle">
            <img src={brand.logo} alt="Logo Econverse" />
          </div>
        ))}
      </div>
    </section>
  );
}
