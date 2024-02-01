// src/components/Sobremi.js
import React, { useEffect, useState } from 'react';
import '../styles/Sobremi.css';
import foto from '../imagenes/foto.jpeg';

const Sobremi = () => {
  const birthDate = new Date('1999-12-16');
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const currentDate = new Date();
    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      setAge(yearsDiff - 1);
    } else {
      setAge(yearsDiff);
    }
  };

  useEffect(() => {
    calculateAge();
  }, []);

  return (
    <div id="sobremi" className="sobremi-container">
      <div className="header">
        <div className="img-container">
          <img src={foto} alt="Jahir Castillo" />
        </div>
        <div className="header-text">
          <h1>Jahir Castillo</h1>
          <p>Estudiante de Ingeniería en Sistemas y Computación</p>
          <p>Edad: {age}</p>
        </div>
      </div>

      <div className="details">
        <h2>Sobre Mí</h2>
        <p>
          ¡Hola! Soy Jahir, un apasionado estudiante de Ingeniería en Sistemas y Computación en la Universidad Tecnológica de Panamá. Mi enfoque se centra en el diseño web y la robótica. Me encanta aprender, evolucionar y aplicar mis habilidades de manera significativa.
        </p>
        <p>
          Estoy en busca de oportunidades profesionales desafiantes que me permitan contribuir con mi experiencia en diseño web y desarrollo. Agradezco la consideración y estoy disponible para discutir cualquier oportunidad de colaboración.
        </p>
      </div>

      <div className="personal-info">
        <h2>Información Personal</h2>
        <ul>
          <li><strong>Nacimiento:</strong> 16 diciembre de 1999</li>
          <li><strong>Instagram:</strong> <a href="https://www.instagram.com/jahir.cast24/" target="_blank" rel="noopener noreferrer">jahir.cast24</a></li>
          <li><strong>Teléfono:</strong> +507 6689-25??</li>
          <li><strong>Dirección:</strong> Panamá</li>
          <li><strong>Educación:</strong> Estudiante Universitario 4to año</li>
          <li><strong>Correo Electrónico:</strong> jahir.castillo2@utp.ac.pa</li>
          <li><strong>Ocupación:</strong> Estudiante</li>
        </ul>
      </div>
    </div>
  );
};

export default Sobremi;
