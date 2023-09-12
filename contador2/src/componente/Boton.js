import React from "react";
import 

function Boton({ texto, esBoton, clickeado }) {
  return (
    <button className={esBoton ? "Sumar" : "Reiniciar"} onClick={clickeado}>
      {texto}
    </button>
  );
}
export default Boton;
