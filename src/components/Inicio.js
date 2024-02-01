// En el componente Inicio.js

import React, { useEffect, useRef } from 'react';
import '../styles/Inicio.css';

const Inicio = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const text1 = "Estudiante de Ing. en Sistemas y Computación";
    const text2 = "Apasionado por el desarrollo web y la robótica";
    const text3 = "Bienvenido a mi Portafolio";

    const typeAndErase = async (text, index, ref) => {
      if (index < text.length) {
        ref.current.innerHTML += text.charAt(index);
        index++;
        await new Promise(resolve => setTimeout(resolve, 80)); // Ajusta el tiempo entre letras según tus preferencias
        await typeAndErase(text, index, ref);
      } else {
        // Espera un tiempo antes de borrar el texto
        await new Promise(resolve => setTimeout(resolve, 500));

        // Inicia el proceso de borrado
        await eraseText(ref, text.length);

        // Después de borrar, inicia el typing del siguiente texto
        const nextText = getNextText(text, text1, text2, text3);
        await typeAndErase(nextText, 0, ref);
      }
    };

    const eraseText = async (ref, length) => {
      while (ref.current.innerHTML.length > 0) {
        ref.current.innerHTML = ref.current.innerHTML.slice(0, -1);
        await new Promise(resolve => setTimeout(resolve, 50)); // Mantén la misma velocidad de borrado
      }
    };

    const getNextText = (currentText, text1, text2, text3) => {
      switch (currentText) {
        case text1:
          return text2;
        case text2:
          return text3;
        case text3:
          return text1;
        default:
          return text1;
      }
    };

    // Inicia el bucle con el primer texto
    typeAndErase(text1, 0, paragraphRef);
  }, []);

  return (
    <div id="inicio" className="inicio">
      <h1>Jahir Castillo</h1>
      <p ref={paragraphRef}></p>
    </div>
  );
};

export default Inicio;
