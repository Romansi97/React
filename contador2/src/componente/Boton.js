import React from "react";
import "../estilo/Boton.css";

function Boton({ texto, esBoton, clickeado }) {
  return (
    <button
      className={esBoton ? "boton-sumar" : "boton-reiniciar"}
      onClick={clickeado}
    >
      {texto}
    </button>
  );
}
export default Boton;
