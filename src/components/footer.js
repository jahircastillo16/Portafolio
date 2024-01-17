import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Jahir Castillo</h1>
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
