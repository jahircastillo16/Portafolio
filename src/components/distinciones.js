// Distinciones.js
import React, { useState } from 'react';
import '../styles/distinciones.css'; // Asegúrate de tener un archivo distinciones.css para los estilos
import aires from '../imagenes/certificados/acjic2023.jpg';
import alarma from '../imagenes/certificados/alarmajic2023.jpg';
import mask from '../imagenes/certificados/mascarillajic2022.jpg';
import aws from '../imagenes/certificados/aws2023.jpeg';
import amitic2021 from '../imagenes/certificados/amitic2021.jpg';
import amitic2022 from '../imagenes/certificados/amitic2022.jpeg';
import utp from '../imagenes/distinciones/utp.jpg';
import awsi from '../imagenes/distinciones/aws.jpg';

const distincionesData = [
  {
    id: 1,
    year: 2021,
    title: 'AmITIC 2021',
    image: utp,
    certificate: amitic2021,
  },
  {
    id: 2,
    year: 2022,
    title: 'Detección de uso de mascarillas médicas mediante reconocimiento facial',
    image: utp,
    certificate: mask,
  },
  {
    id: 3,
    year: 2022,
    title: 'AmITIC 2022',
    image: utp,
    certificate: amitic2022,
  },
  {
    id: 4,
    year: 2023,
    title: 'AWS Academy Cloud Foundations',
    image: awsi,
    certificate: aws,
  },
  {
    id: 5,
    year: 2023,
    title: 'Sistema de alarma inteligente para motocicletas',
    image: utp,
    certificate: alarma,
  },
  {
    id: 6,
    year: 2023,
    title: 'Reducción del consumo eléctrico en instituciones públicas mediante un prototipo y una plataforma para la gestión inteligente de aires acondicionados.',
    image: utp,
    certificate: aires,
  },
  // Agrega más distinciones según sea necesario
];

const Distinciones = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDistincion, setSelectedDistincion] = useState(null);
  const [filterConfig, setFilterConfig] = useState({
    sortBy: 'asc', // Opciones: 'asc' para ascendente, 'desc' para descendente
  });

  const openModal = (distincion) => {
    setSelectedDistincion(distincion);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedDistincion(null);
    setModalVisible(false);
  };

  const handleFilterChange = (newSortBy) => {
    setFilterConfig({ sortBy: newSortBy });
  };

  // Función para ordenar las distinciones según el filtro
  const getSortedDistinciones = () => {
    return distincionesData.slice().sort((a, b) => {
      if (filterConfig.sortBy === 'asc') {
        return a.year - b.year;
      } else {
        return b.year - a.year;
      }
    });
  };

  return (
    <div id="distinciones" className="distinciones-container">
      <h1>Mis Distinciones</h1>
      <div className="filter-options-dis">
        <label>
          Ordenar por año:
          <select value={filterConfig.sortBy} onChange={(e) => handleFilterChange(e.target.value)}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </label>
      </div>
      <div className="distinciones-grid">
        {getSortedDistinciones().map((distincion) => (
          <div key={distincion.id} className="distincion-card" onClick={() => openModal(distincion)}>
            <img src={distincion.image} alt={`Imagen de ${distincion.title}`} />
            <div className="card-info">
              <h2>{distincion.title}</h2>
              <p>Año: {distincion.year}</p>
            </div>
          </div>
        ))}
      </div>
      {modalVisible && selectedDistincion && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedDistincion.certificate} alt="Certificado" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Distinciones;
