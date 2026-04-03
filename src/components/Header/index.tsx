import { FormEvent } from "react";
import "./styles.scss";

import shieldIcon from "../../assets/icons/ShieldCheck.svg";
import truckIcon from "../../assets/icons/Truck.svg";
import creditCardIcon from "../../assets/icons/CreditCard.svg";
import logoImg from "../../assets/icons/Logo.svg";
import useIcon from "../../assets/icons/UserCircle.svg";
import searchIcon from "../../assets/icons/MagnifyingGlass.svg";
import heartIcon from "../../assets/icons/Heart.svg";
import cartIcon from "../../assets/icons/ShoppingCart.svg";
import BoxIcon from "../../assets/icons/Box.svg";
import crownIcon from "../../assets/icons/CrownSimple.svg";

export function Header() {
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log("Buscando produto...");
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-item">
            <img src={shieldIcon} alt="Escudo de segurança" />
            <p>
              Compra <span>100% segura</span>
            </p>
          </div>

          <div className="top-bar-item">
            <img src={truckIcon} alt="Caminhão de frete" />
            <p>
              <span>Frete grátis</span> acima de R$ 200
            </p>
          </div>

          <div className="top-bar-item">
            <img src={creditCardIcon} alt="Cartão de crédito" />
            <p>
              <span>Parcele</span> suas compras
            </p>
          </div>
        </div>
      </div>

      <div className="middle-bar">
        <div className="middle-bar-content">
          <img src={logoImg} alt="Logo Econverse" className="logo" />

          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="O que você está buscando?"
              aria-label="Buscar produtos"
            />
            <button type="submit" aria-label="Buscar">
              <img src={searchIcon} alt="Busca" />
            </button>
          </form>

          <div className="actions-container">
            <button aria-label="Meus Pedidos">
              <img src={BoxIcon} alt="Pedidos" />
            </button>
            <button aria-label="Meus Favoritos">
              <img src={heartIcon} alt="Favoritos" />
            </button>
            <button aria-label="Minha Conta">
              <img src={useIcon} alt="Minha Conta" />
            </button>
            <button aria-label="Meu Carrinho">
              <img src={cartIcon} alt="Carrinho" />
            </button>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <nav className="nav-bar-content">
          <a href="#">Todas Categorias</a>
          <a href="#">Supermercado</a>
          <a href="#">Livros</a>
          <a href="#">Moda</a>
          <a href="#">Lançamentos</a>
          <a href="#" className="highlight">
            Ofertas do dia
          </a>
          <a href="#" className="subscription">
            <img src={crownIcon} alt="Coroa" />
            Assinatura
          </a>
        </nav>
      </div>
    </header>
  );
}
