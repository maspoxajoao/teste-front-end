import "./styles.scss";
import logoEconverse from "../../assets/images/Logo.png";
import iconInstagram from "../../assets/icons/instagram.svg";
import iconFacebook from "../../assets/icons/facebook.svg";
import iconLinkedin from "../../assets/icons/linkedin.svg";

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter assinada!");
  };
  return (
    <footer className="main-footer">
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-text">
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <div className="inputs-group">
              <input type="text" placeholder="Digite seu nome" required />
              <input type="email" placeholder="Digite seu e-mail" required />
              <button type="submit">INSCREVER</button>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Aceito os termos e condições</label>
            </div>
          </form>
        </div>
      </section>
      <section className="info-section">
        <div className="container">
          <div className="company-info">
            <img
              src={logoEconverse}
              alt="Logo Econverse"
              className="footer-logo"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={iconInstagram} alt="Instagram" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={iconFacebook} alt="Facebook" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img src={iconLinkedin} alt="Linkedin" />
              </a>
            </div>
          </div>

          <div className="vertical-divider"></div>

          <div className="footer-links">
            <div className="link-column">
              <h4>Institucional</h4>
              <a href="#">Sobre Nós</a>
              <a href="#">Movimento</a>
              <a href="#">Trabalhe conosco</a>
            </div>
            <div className="link-column">
              <h4>Ajuda</h4>
              <a href="#">Suporte</a>
              <a href="#">Fale Conosco</a>
              <a href="#">Perguntas Frequentes</a>
            </div>
            <div className="link-column">
              <h4>Termos</h4>
              <a href="#">Termos e Condições</a>
              <a href="#">Política de Privacidade</a>
              <a href="#">Troca e Devolução</a>
            </div>
          </div>
        </div>
      </section>

      <section className="copyright-section">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
    </footer>
  );
}
