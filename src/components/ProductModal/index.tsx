import React, { useState } from "react";
import "./styles.scss";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <div className="modal-content">
          <div className="modal-image">
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className="modal-details">
            <h3 className="product-title">{product.productName}</h3>

            <p className="product-price">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <p className="product-description">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text.
            </p>

            <a href="#" className="view-details">
              Veja mais detalhes do produto &gt;
            </a>

            <div className="purchase-actions">
              <div className="quantity-control">
                <button onClick={handleDecrement} aria-label="Remover item">
                  -
                </button>
                <span>{quantity.toString().padStart(2, "0")}</span>
                <button onClick={handleIncrement} aria-label="Adicionar item">
                  +
                </button>
              </div>

              <button className="confirm-purchase">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
