import React from 'react';
import '../styles/footer.css';
import instagramIcon from '../iconos/instagram.png';
import linkedinIcon from '../iconos/linkedin.png';
import githubIcon from '../iconos/github.png';
import scholarIco from '../iconos/google.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Jahir Castillo</h1>
          <div className="social-icons">
            {/* Agrega el enlace alrededor de cada imagen del icono */}
            <a href="https://www.instagram.com/jahir.cast24/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/jahir-castillo-630564124/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/rahajcas" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://scholar.google.com/citations?user=ImZQf6MAAAAJ&hl=es" target="_blank" rel="noopener noreferrer">
              <img src={scholarIco} alt="Google Scholar" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h2>Enlaces</h2>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobremi">Sobre Mí</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#distinciones">Distinciones</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contacto</h2>
          <p>Email: jahir5656@gmail.com</p>
          <p>Teléfono: +507 6689-25??</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Jahir Castillo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
