// src/components/Cv.js
import React from 'react';
import '../styles/cv.css';

const Cv = () => {
  return (
    <div id="cv" className="cv-container">
      <h1>Curriculum Vitae</h1>
      <div className="timeline-section">
        <h2 className="section-title">Experiencias Laborales</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Abril 2023 - Julio 2023</div>
            <div className="timeline-content">
              <p className="experience-title"><strong>Desarrollador de la página web de Grupo de Investigación en Tecnologías Computacionales Emergentes (GITCE)</strong></p>
              <ul>
                <li>Creación de Mockups de la página web.</li>
                <li>Creación de la página web utilizando WordPress.</li>
              </ul>
              <div className="experience-link">
                <a href="https://gitce.utp.ac.pa" target="_blank" rel="noopener noreferrer">Visitar el sitio</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-section">
        <h2 className="section-title">Educación</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Enero 2019 - Cursando 4to año actualmente</div>
            <div className="timeline-content">
              <p className="education-title"><strong>LIC. EN INGENIERÍA DE SISTEMAS Y COMPUTACIÓN</strong></p>
              <p>Universidad Tecnológica de Panamá,Centro Regional de Chiriquí, Panamá.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="language-section">
        <h2 className="section-title">Idiomas</h2>
        <div className="language-items">
          <div className="language-item">
            <p><strong>Español: Nativo</strong></p>
            <div className="language-bar">
              <div className="bar-fill"></div>
            </div>
          </div>
          <div className="language-item">
            <p><strong>Inglés: Intermedio (B2)</strong></p>
            <div className="language-bar">
              <div className="bar-fill" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <h2>Habilidades</h2>
      <ul className="skills-list">
        <li>React</li>
        <li>HTML</li>
        <li>WordPress</li>
        <li>CSS</li>
        <li>JavaScript (JS)</li>
        <li>MySQL</li>
        <li>Java</li>
        <li>PHP</li>
        <li>Docker</li>
      </ul>
    </div>
  );
};

export default Cv;
