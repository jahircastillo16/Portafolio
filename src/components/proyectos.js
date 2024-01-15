
import React, { useState } from 'react';
import '../styles/proyectos.css';
import ac from '../imagenes/acproyecto.webp';
import asist from '../imagenes/asistenciaproyecto.webp';
import mask from '../imagenes/maksproyecto.webp';

const proyectosData = [
    {
      id: 1,
      title: 'Sistema de Automatizacion de AC usando arduino',
      category: 'Proyectos',
      url: 'https://acontroles.000webhostapp.com/index.html',
      imagen:  ac, // Agrega la ruta de la imagen
    },
    {
      id: 2,
      title: 'Facemask detection using face recognition',
      category: 'Publicaciones',
      url: 'https://repositoriotec.tec.ac.cr/handle/2238/14788',
      imagen: mask, // Agrega la ruta de la imagen
    },
    {
      id: 3,
      title: 'System for the automation of the attendance record in the classrooms',
      category: 'Publicaciones',
      url: 'https://repositoriotec.tec.ac.cr/handle/2238/14790',
      imagen: asist, // Agrega la ruta de la imagen
    },
    // Agrega más proyectos según sea necesario
  ];

const Proyectos = () => {
  const [filtro, setFiltro] = useState('Todos');

  const proyectosFiltrados = filtro === 'Todos'
    ? proyectosData
    : proyectosData.filter(proyecto => proyecto.category === filtro);

  const cambiarFiltro = nuevoFiltro => {
    setFiltro(nuevoFiltro);
  };

  return (
    <div id="proyectos" className="proyectos-container">
      <h1>Mis Proyectos y Publicaciones</h1>
      <div className="filter-options">
        <div className="filter-container">
          <button
            className={`filter-button ${filtro === 'Todos' ? 'active' : ''}`}
            onClick={() => cambiarFiltro('Todos')}
          >
            Todos
          </button>
          <button
            className={`filter-button ${filtro === 'Publicaciones' ? 'active' : ''}`}
            onClick={() => cambiarFiltro('Publicaciones')}
          >
            Publicaciones
          </button>
          <button
            className={`filter-button ${filtro === 'Proyectos' ? 'active' : ''}`}
            onClick={() => cambiarFiltro('Proyectos')}
          >
            Proyectos
          </button>
        </div>
      </div>
      <div className="proyectos-grid">
        {proyectosFiltrados.map((proyecto) => (
          <div key={proyecto.id} className="proyecto-card">
            <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
              <img className="proyecto-imagen" src={proyecto.imagen} alt={proyecto.title} />
              <h2 className="titulo_card" style={{ fontSize: '16px', fontWeight: 'bold' }}>{proyecto.title}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
