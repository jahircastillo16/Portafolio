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
          <p>jahir.castillo2@utp.ac.pa o jahir.5656@gmail.com</p>
        </div>
        <div className="info-item">
          <span>Teléfono:</span>
          <p>+507 6689-25??</p>
        </div>
        <div className="info-item">
          <span>Dirección:</span>
          <p>Cuba</p>
        </div>
        <div className="info-item">
          <span>Redes Sociales:</span>
          <p>
            <a href="https://www.linkedin.com/in/jahir-castillo/">LinkedIn</a>,{' '}
            <a href="https://github.com/jahir175">GitHub</a>,{' '}
            <a href="https://twitter.com/jahir_5656">Twitter</a>
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
