import "./styles.scss";

import monitorIcon from "../../assets/icons/monitor.svg";
import supermarketIcon from "../../assets/icons/supermarket.svg";
import whiskeyIcon from "../../assets/icons/whiskey.svg";
import toolsIcon from "../../assets/icons/tools.svg";
import healthIcon from "../../assets/icons/health.svg";
import fitnessIcon from "../../assets/icons/fitness.svg";
import fashionIcon from "../../assets/icons/fashion.svg";

const categories = [
  { id: 1, name: "Tecnologia", icon: monitorIcon, active: true },
  { id: 2, name: "Supermercado", icon: supermarketIcon },
  { id: 3, name: "Bebidas", icon: whiskeyIcon },
  { id: 4, name: "Ferramentas", icon: toolsIcon },
  { id: 5, name: "Saúde", icon: healthIcon },
  { id: 6, name: "Esportes e Fitness", icon: fitnessIcon },
  { id: 7, name: "Moda", icon: fashionIcon },
];

export function Categories() {
  return (
    <section className="categories-container">
      <div className="categories-content">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-item ${category.active ? "active" : ""}`}
          >
            <div className="icon-wrapper">
              <img src={category.icon} alt={category.name} />
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
