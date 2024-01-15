// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Sobremi from './components/Sobremi';
import Proyectos from './components/proyectos';
import Distinciones from './components/distinciones';
import Contacto from './components/contacto';
import Footer from './components/footer';
import Cv from './components/cv';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Sobremi />
      <Cv />
      <Proyectos />
      <Distinciones />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
