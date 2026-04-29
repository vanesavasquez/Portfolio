import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__info">
            <div className="footer__brand">Vanesa L. Vasquez</div>
            <p className="footer__tagline">
              UX Designer · UX Research · Front-end · Product Designer · Web Development
            </p>
          </div>

          <nav className="footer__nav">
            <div className="footer__nav-group">
              <h4>Navegación</h4>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/experiencia">Experiencia</Link></li>
                <li><Link to="/sobre-mi">Sobre Mí</Link></li>
                <li><Link to="/resumen">CV</Link></li>
              </ul>
            </div>

            <div className="footer__nav-group">
              <h4>Contacto</h4>
              <ul>
                <li><a href="mailto:contacto@vanesavasquez.com">Email</a></li>
                <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/vanesavasquez" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © {year} Vanesa A. Ledesma Vasquez. Todos los derechos reservados.
          </span>

          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com/vanesavasquez"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              href="mailto:contacto@vanesavasquez.com"
              className="footer__social-link"
              aria-label="Email"
            >
              ✉
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
