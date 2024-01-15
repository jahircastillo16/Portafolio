// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  
  // Estado para controlar si la barra de navegación está desplazada
  const [scrolled, setScrolled] = useState(false);

  // Función para alternar entre abrir y cerrar el menú
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el menú
  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Función para manejar el evento de desplazamiento
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Si el desplazamiento es mayor que 100, la barra está desplazada
    if (scrollPosition > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Efecto secundario para agregar un event listener al desplazamiento cuando el componente se monta
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Renderiza el componente Navbar
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        <div className={`menu-btn-burger ${isOpen ? 'line1' : ''}`}></div>
        <div className={`menu-btn-burger ${isOpen ? 'line2' : ''}`}></div>
      </div>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li><a href="/" onClick={closeNavbar}>Inicio</a></li>
        <li><a href="#sobremi" onClick={closeNavbar}>Sobre Mí</a></li>
        <li><a href="#cv" onClick={closeNavbar}>CV</a></li>
        <li><a href="#proyectos" onClick={closeNavbar}>Proyectos</a></li>
        <li><a href="#distinciones" onClick={closeNavbar}>Distinciones</a></li>
        <li><a href="#contacto" onClick={closeNavbar}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
