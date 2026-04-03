import { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard";
import ProductModal from "../ProductModal";
import "./styles.scss";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ShelfProps {
  title: string;
  showFilter?: boolean;
}

export function ProductShelf({ title, showFilter = false }: ShelfProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    fetch(
      "/api-econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json",
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) setProducts(data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleNext = () => {
    const maxIndex = Math.max(0, products.length - itemsPerPage);
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handlePrev = () => {
    const maxIndex = Math.max(0, products.length - itemsPerPage);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <section className="product-shelf">
      <div className="shelf-header">
        <h2>{title}</h2>
        {showFilter ? (
          <nav className="shelf-filters">
            <a href="#" className="active">
              Celular
            </a>
            <a href="#">Acessórios</a>
            <a href="#">Tablets</a>
            <a href="#">Notebooks</a>
            <a href="#">TVs</a>
            <a href="#">Ver Todos</a>
          </nav>
        ) : (
          <a href="#" className="view-all">
            Ver todos
          </a>
        )}
      </div>

      <div className="shelf-content">
        <button className="arrow prev" onClick={handlePrev}>
          ❮
        </button>

        <div className="products-grid-container">
          <div
            className="products-grid"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {products.map((product, index) => (
              <div className="product-item" key={index}>
                <ProductCard
                  name={product.productName}
                  description={product.descriptionShort}
                  price={product.price}
                  oldPrice={product.price * 1.1}
                  image={product.photo}
                  onBuy={() => setSelectedProduct(product)}
                />
              </div>
            ))}
          </div>
        </div>

        <button className="arrow next" onClick={handleNext}>
          ❯
        </button>
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
