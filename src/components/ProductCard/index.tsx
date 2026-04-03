import "./styles.scss";

interface ProductProps {
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  image: string;
  onBuy: () => void;
}

export function ProductCard({
  name,
  price,
  oldPrice,
  image,
  onBuy,
}: ProductProps) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <p className="description">{name}</p>

        <p className="old-price">
          R$ {oldPrice.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
        </p>

        <p className="current-price">
          R$ {price.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
        </p>

        <p className="installments">
          ou 2x de R$ {(price / 2).toFixed(2)} sem juros
        </p>
        <p className="shipping">Frete grátis</p>
        <button className="btn-buy" onClick={onBuy}>
          COMPRAR
        </button>
      </div>
    </div>
  );
}
