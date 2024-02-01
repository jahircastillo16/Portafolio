import React from 'react';
import '../styles/contacto.css';

const Contacto = () => {
  return (
    <div id="contacto" className="contacto-container">
      <h1>Contacto</h1>
      <p>Estoy disponible para cualquier consulta. ¡No dudes en contactarme!</p>
      <div className="contacto-info">
        <div className="info-item">
          <span>Email:</span>
          <p>jahir.castillo2@utp.ac.pa</p>
        </div>
        <div className="info-item">
          <span>Teléfono:</span>
          <p>+507 6689-25??</p>
        </div>
        <div className="info-item">
          <span>Dirección:</span>
          <p>Panamá</p>
        </div>
        <div className="info-item">
          <span>Redes Sociales:</span>
          <p>
            <a href="https://www.linkedin.com/in/jahir-castillo-630564124/">LinkedIn</a>,{' '}
            <a href="https://github.com/rahajcas">GitHub</a>,{' '}
            <a href="https://scholar.google.com/citations?user=ImZQf6MAAAAJ&hl=es">Google Scholar</a>,{' '}
            <a href="https://www.instagram.com/jahir.cast24/">Instagram</a>
          </p>
        </div>
      </div>

      {/* Agrega un formulario aquí si lo deseas */}
      <form>
        {/* Campos del formulario */}
      </form>
    </div>
  );
};

export default Contacto;
